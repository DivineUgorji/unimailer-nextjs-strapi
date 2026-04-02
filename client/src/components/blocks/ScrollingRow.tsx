"use client";

import { StrapiImage } from "@/components/Strapi-image";
import type { ImageProps } from "@/types";
import { useRef, useEffect, useState, useCallback } from "react";
import { useScrollingContext } from "@/components/providers/ScrollingContext";

interface ScrollingRowProps {
  images: ImageProps[];
  direction?: "left" | "right";
  speed?: number;
}

export function ScrollingRow({
  images,
  direction = "left",
  speed = 30,
}: Readonly<ScrollingRowProps>) {
  const { register } = useScrollingContext();
  const trackRef = useRef<HTMLDivElement>(null);
  const originalRef = useRef<HTMLUListElement>(null);
  const posRef = useRef(0);
  const loopDistanceRef = useRef(0);
  const pausedRef = useRef(false);
  const [ready, setReady] = useState(false);

  const measure = useCallback(() => {
    const original = originalRef.current;
    const track = trackRef.current;
    if (!original || !track) return;

    // scrollWidth of the original list = total width of all cards + inner gaps.
    // getComputedStyle on the track gives us the gap between the two lists.
    // Together they are the exact loop distance, independent of scroll/transforms.
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const loopDistance = original.scrollWidth + gap;

    if (loopDistance > 0) {
      loopDistanceRef.current = loopDistance;
      posRef.current = direction === "right" ? -loopDistance : 0;
      setReady(true);
    }
  }, [direction]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const imgs = track.querySelectorAll("img");
    let loaded = 0;
    const total = imgs.length;

    const tryMeasure = () => {
      // Double rAF ensures browser has fully painted before reading rects
      requestAnimationFrame(() => requestAnimationFrame(measure));
    };

    const onLoad = () => {
      if (++loaded >= total) tryMeasure();
    };

    if (total === 0) {
      tryMeasure();
    } else {
      imgs.forEach((img) => {
        if (img.complete) loaded++;
        else {
          img.addEventListener("load", onLoad);
          img.addEventListener("error", onLoad);
        }
      });
      if (loaded >= total) tryMeasure();
    }

    const ro = new ResizeObserver(tryMeasure);
    ro.observe(track);

    return () => {
      ro.disconnect();
      imgs.forEach((img) => {
        img.removeEventListener("load", onLoad);
        img.removeEventListener("error", onLoad);
      });
    };
  }, [images, measure]);

  useEffect(() => {
    if (!ready) return;
    return register({
      posRef,
      loopDistanceRef,
      direction,
      speed,
      elRef: trackRef,
      pausedRef,
    });
  }, [ready, direction, speed, register]);

  return (
    <div
      className="w-full overflow-hidden"
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
    >
      <div
        ref={trackRef}
        className="flex gap-6 w-max"
        style={{
          visibility: ready ? "visible" : "hidden",
          willChange: "transform",
        }}
      >
        {/* ref on each list so we can measure the exact gap between them */}
        <ul ref={originalRef} className="flex gap-6 shrink-0">
          {images.map((image, index) => (
            <li key={`a-${image.id}-${index}`} className="shrink-0">
              <StrapiImage
                src={image.url}
                alt={image.alternativeText || "Showcase image"}
                width={300}
                height={140}
                className="h-auto w-55 sm:w-65 lg:w-75"
              />
            </li>
          ))}
        </ul>

        <ul className="flex gap-6 shrink-0" aria-hidden="true">
          {images.map((image, index) => (
            <li key={`b-${image.id}-${index}`} className="shrink-0">
              <StrapiImage
                src={image.url}
                alt={image.alternativeText || "Showcase image"}
                width={300}
                height={140}
                className="h-auto w-55 sm:w-65 lg:w-75"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
