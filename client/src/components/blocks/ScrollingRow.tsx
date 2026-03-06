// "use client";

// import { StrapiImage } from "@/components/Strapi-image";
// import type { ImageProps } from "@/types";
// import { motion } from "motion/react";

// interface ScrollingRowProps {
//   images: ImageProps[];
//   direction?: "left" | "right";
//   speed?: number;
// }

// export function ScrollingRow({
//   images,
//   direction = "left",
//   speed,
// }: Readonly<ScrollingRowProps>) {
//   const duplicated = [...images, ...images, ...images, ...images];

//   const animation =
//     direction === "left" ? { x: [0, "-25%"] } : { x: ["-25%", "0%"] };

//   return (
//     <div className="w-full overflow-hidden">
//       <motion.ul
//         className="flex w-max gap-6"
//         animate={animation}
//         transition={{
//           ease: "linear",
//           duration: speed,
//           repeat: Infinity,
//         }}
//         whileHover={{ animationPlayState: "paused" }}
//       >
//         {duplicated.map((image, index) => (
//           <li key={`${image.id}-${index}`} className="shrink-0">
//             <StrapiImage
//               src={image.url}
//               alt={image.alternativeText || "Showcase image"}
//               width={300}
//               height={140}
//               className="h-auto w-55 sm:w-65 lg:w-75"
//             />
//           </li>
//         ))}
//       </motion.ul>
//     </div>
//   );
// }

// "use client";

// import { StrapiImage } from "@/components/Strapi-image";
// import type { ImageProps } from "@/types";

// interface ScrollingRowProps {
//   images: ImageProps[];
//   direction?: "left" | "right";
//   speed?: number;
// }

// export function ScrollingRow({
//   images,
//   direction = "left",
//   speed,
// }: Readonly<ScrollingRowProps>) {
//   const duplicated = [...images, ...images];

//   return (
//     <div className="w-full overflow-hidden">
//       <ul
//         className="flex w-max gap-6"
//         style={{
//           animation: `scroll-${direction} ${speed}s linear infinite`,
//           willChange: "transform",
//         }}
//         onMouseEnter={(e) => {
//           (e.currentTarget as HTMLElement).style.animationPlayState = "paused";
//         }}
//         onMouseLeave={(e) => {
//           (e.currentTarget as HTMLElement).style.animationPlayState = "running";
//         }}
//       >
//         {duplicated.map((image, index) => (
//           <li key={`${image.id}-${index}`} className="shrink-0">
//             <StrapiImage
//               src={image.url}
//               alt={image.alternativeText || "Showcase image"}
//               width={300}
//               height={140}
//               className="h-auto w-55 sm:w-65 lg:w-75"
//             />
//           </li>
//         ))}
//       </ul>

//       <style>{`
//         @keyframes scroll-left {
//           from { transform: translateX(0); }
//           to   { transform: translateX(-50%); }
//         }
//         @keyframes scroll-right {
//           from { transform: translateX(-50%); }
//           to   { transform: translateX(0); }
//         }
//       `}</style>
//     </div>
//   );
// }

// "use client";

// import { StrapiImage } from "@/components/Strapi-image";
// import type { ImageProps } from "@/types";
// import { useRef, useEffect, useState } from "react";

// interface ScrollingRowProps {
//   images: ImageProps[];
//   direction?: "left" | "right";
//   speed?: number;
// }

// export function ScrollingRow({
//   images,
//   direction = "left",
//   speed,
// }: Readonly<ScrollingRowProps>) {
//   const originalRef = useRef<HTMLUListElement>(null);
//   const [singleWidth, setSingleWidth] = useState<number | null>(null);

//   useEffect(() => {
//     const el = originalRef.current;
//     if (!el) return;

//     const measure = () => setSingleWidth(el.scrollWidth);
//     measure();

//     const ro = new ResizeObserver(measure);
//     ro.observe(el);
//     return () => ro.disconnect();
//   }, [images]);

//   return (
//     <div className="w-full overflow-hidden">
//       <div
//         className="flex gap-6"
//         style={
//           singleWidth
//             ? {
//                 width: `${singleWidth * 2}px`,
//                 animation: `scroll-${direction} ${speed}s linear infinite`,
//                 willChange: "transform",
//               }
//             : { visibility: "hidden" }
//         }
//         onMouseEnter={(e) =>
//           ((e.currentTarget as HTMLElement).style.animationPlayState = "paused")
//         }
//         onMouseLeave={(e) =>
//           ((e.currentTarget as HTMLElement).style.animationPlayState =
//             "running")
//         }
//       >
//         {/* Original set — measured */}
//         <ul ref={originalRef} className="flex gap-6 shrink-0">
//           {images.map((image, index) => (
//             <li key={`orig-${image.id}-${index}`} className="shrink-0">
//               <StrapiImage
//                 src={image.url}
//                 alt={image.alternativeText || "Showcase image"}
//                 width={300}
//                 height={140}
//                 className="h-auto w-55 sm:w-65 lg:w-75"
//               />
//             </li>
//           ))}
//         </ul>

//         {/* Cloned set — seamless continuation */}
//         <ul className="flex gap-6 shrink-0" aria-hidden="true">
//           {images.map((image, index) => (
//             <li key={`clone-${image.id}-${index}`} className="shrink-0">
//               <StrapiImage
//                 src={image.url}
//                 alt={image.alternativeText || "Showcase image"}
//                 width={300}
//                 height={140}
//                 className="h-auto w-55 sm:w-65 lg:w-75"
//               />
//             </li>
//           ))}
//         </ul>
//       </div>

//       {singleWidth && (
//         <style>{`
//           @keyframes scroll-left {
//             from { transform: translateX(0); }
//             to   { transform: translateX(-${singleWidth}px); }
//           }
//           @keyframes scroll-right {
//             from { transform: translateX(-${singleWidth}px); }
//             to   { transform: translateX(0); }
//           }
//         `}</style>
//       )}
//     </div>
//   );
// }

// "use client";

// import { StrapiImage } from "@/components/Strapi-image";
// import type { ImageProps } from "@/types";
// import { useRef, useEffect, useState, useCallback } from "react";

// interface ScrollingRowProps {
//   images: ImageProps[];
//   direction?: "left" | "right";
//   speed?: number;
// }

// export function ScrollingRow({
//   images,
//   direction = "left",
//   speed = 30,
// }: Readonly<ScrollingRowProps>) {
//   const trackRef = useRef<HTMLDivElement>(null);
//   const animFrameRef = useRef<number>(null);
//   const posRef = useRef(0);
//   const lastTimeRef = useRef<number | null>(null);
//   const singleWidthRef = useRef(0);
//   const [ready, setReady] = useState(false);
//   const pausedRef = useRef(false);

//   // Measure after all images load
//   const measure = useCallback(() => {
//     const el = trackRef.current;
//     if (!el) return;
//     // singleWidth = width of ONE set (half of total track)
//     const children = el.children;
//     if (children.length < 2) return;
//     const half = (children[0] as HTMLElement).offsetWidth;
//     if (half > 0) {
//       singleWidthRef.current = half;
//       // Start position: 0 for left, -half for right
//       posRef.current = direction === "right" ? -half : 0;
//       setReady(true);
//     }
//   }, [direction]);

//   useEffect(() => {
//     const el = trackRef.current;
//     if (!el) return;

//     // Wait for images to load before measuring
//     const imgs = el.querySelectorAll("img");
//     let loaded = 0;
//     const total = imgs.length;

//     const onLoad = () => {
//       loaded++;
//       if (loaded >= total) measure();
//     };

//     if (total === 0) {
//       measure();
//     } else {
//       imgs.forEach((img) => {
//         if (img.complete) {
//           loaded++;
//         } else {
//           img.addEventListener("load", onLoad);
//           img.addEventListener("error", onLoad);
//         }
//       });
//       if (loaded >= total) measure();
//     }

//     const ro = new ResizeObserver(measure);
//     ro.observe(el);

//     return () => {
//       ro.disconnect();
//       imgs.forEach((img) => {
//         img.removeEventListener("load", onLoad);
//         img.removeEventListener("error", onLoad);
//       });
//     };
//   }, [images, measure]);

//   // rAF loop — pure JS scroll, no CSS animation, no keyframe reset
//   useEffect(() => {
//     if (!ready) return;

//     const pxPerSecond = singleWidthRef.current / speed;

//     const tick = (timestamp: number) => {
//       if (lastTimeRef.current === null) lastTimeRef.current = timestamp;
//       const delta = timestamp - lastTimeRef.current;
//       lastTimeRef.current = timestamp;

//       if (!pausedRef.current) {
//         const step = (pxPerSecond * delta) / 1000;
//         const half = singleWidthRef.current;

//         if (direction === "left") {
//           posRef.current -= step;
//           // When we've scrolled exactly one full set, snap back silently
//           if (posRef.current <= -half) posRef.current += half;
//         } else {
//           posRef.current += step;
//           if (posRef.current >= 0) posRef.current -= half;
//         }

//         if (trackRef.current) {
//           trackRef.current.style.transform = `translateX(${posRef.current}px)`;
//         }
//       }

//       animFrameRef.current = requestAnimationFrame(tick);
//     };

//     animFrameRef.current = requestAnimationFrame(tick);

//     return () => {
//       if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
//       lastTimeRef.current = null;
//     };
//   }, [ready, direction, speed]);

//   // Duplicate images: original + clone
//   const allImages = [...images, ...images];

//   return (
//     <div
//       className="w-full overflow-hidden"
//       onMouseEnter={() => {
//         pausedRef.current = true;
//       }}
//       onMouseLeave={() => {
//         pausedRef.current = false;
//         lastTimeRef.current = null; // reset delta to avoid jump on resume
//       }}
//     >
//       <div
//         ref={trackRef}
//         className="flex gap-6 w-max"
//         style={{
//           visibility: ready ? "visible" : "hidden",
//           willChange: "transform",
//         }}
//       >
//         {/* First set */}
//         <ul className="flex gap-6 shrink-0">
//           {images.map((image, index) => (
//             <li key={`a-${image.id}-${index}`} className="shrink-0">
//               <StrapiImage
//                 src={image.url}
//                 alt={image.alternativeText || "Showcase image"}
//                 width={300}
//                 height={140}
//                 className="h-auto w-55 sm:w-65 lg:w-75"
//               />
//             </li>
//           ))}
//         </ul>

//         {/* Cloned set — seamless wrap-around */}
//         <ul className="flex gap-6 shrink-0" aria-hidden="true">
//           {images.map((image, index) => (
//             <li key={`b-${image.id}-${index}`} className="shrink-0">
//               <StrapiImage
//                 src={image.url}
//                 alt={image.alternativeText || "Showcase image"}
//                 width={300}
//                 height={140}
//                 className="h-auto w-55 sm:w-65 lg:w-75"
//               />
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { StrapiImage } from "@/components/Strapi-image";
// import type { ImageProps } from "@/types";
// import { motion } from "motion/react";

// interface ScrollingRowProps {
//   images: ImageProps[];
//   direction?: "left" | "right";
//   speed?: number;
// }

// export function ScrollingRow({
//   images,
//   direction = "left",
//   speed,
// }: Readonly<ScrollingRowProps>) {
//   const animation =
//     direction === "left"
//       ? { translateX: ["0%", "-33.333%"] }
//       : { translateX: ["-33.333%", "0%"] };

//   return (
//     <div className="w-full overflow-hidden">
//       <motion.div
//         className="flex w-max gap-6 flex-none"
//         animate={animation}
//         transition={{
//           ease: "linear",
//           duration: speed,
//           repeat: Infinity,
//         }}
//         whileHover={{ animationPlayState: "paused" }}
//       >
//         {/* Copy 1 */}
//         <ul className="flex gap-6 flex-none">
//           {images.map((image, index) => (
//             <li key={`a-${image.id}-${index}`} className="shrink-0">
//               <StrapiImage
//                 src={image.url}
//                 alt={image.alternativeText || "Showcase image"}
//                 width={300}
//                 height={140}
//                 className="h-auto w-55 sm:w-65 lg:w-75"
//               />
//             </li>
//           ))}
//         </ul>

//         {/* Copy 2 */}
//         <ul className="flex gap-6 flex-none" aria-hidden="true">
//           {images.map((image, index) => (
//             <li key={`b-${image.id}-${index}`} className="shrink-0">
//               <StrapiImage
//                 src={image.url}
//                 alt={image.alternativeText || "Showcase image"}
//                 width={300}
//                 height={140}
//                 className="h-auto w-55 sm:w-65 lg:w-75"
//               />
//             </li>
//           ))}
//         </ul>

//         {/* Copy 3 */}
//         <ul className="flex gap-6 flex-none" aria-hidden="true">
//           {images.map((image, index) => (
//             <li key={`c-${image.id}-${index}`} className="shrink-0">
//               <StrapiImage
//                 src={image.url}
//                 alt={image.alternativeText || "Showcase image"}
//                 width={300}
//                 height={140}
//                 className="h-auto w-55 sm:w-65 lg:w-75"
//               />
//             </li>
//           ))}
//         </ul>

//         <ul className="flex gap-6 flex-none" aria-hidden="true">
//           {images.map((image, index) => (
//             <li key={`d-${image.id}-${index}`} className="shrink-0">
//               <StrapiImage
//                 src={image.url}
//                 alt={image.alternativeText || "Showcase image"}
//                 width={300}
//                 height={140}
//                 className="h-auto w-55 sm:w-65 lg:w-75"
//               />
//             </li>
//           ))}
//         </ul>
//       </motion.div>
//     </div>
//   );
// }

// ScrollingRow.tsx

// "use client";

// import { StrapiImage } from "@/components/Strapi-image";
// import type { ImageProps } from "@/types";
// import { useRef, useEffect, useState, useCallback } from "react";
// import { useScrollingContext } from "@/components/providers/ScrollingContext";

// interface ScrollingRowProps {
//   images: ImageProps[];
//   direction?: "left" | "right";
//   speed?: number;
// }

// export function ScrollingRow({
//   images,
//   direction = "left",
//   speed = 30,
// }: Readonly<ScrollingRowProps>) {
//   const { register } = useScrollingContext();
//   const trackRef = useRef<HTMLDivElement>(null);
//   const posRef = useRef(0);
//   const loopDistanceRef = useRef(0);
//   // const singleWidthRef = useRef(0);
//   const pausedRef = useRef(false);
//   const [ready, setReady] = useState(false);

//   const measure = useCallback(() => {
//     const el = trackRef.current;
//     if (!el || el.children.length < 2) return;
//     const half = (el.children[0] as HTMLElement).offsetWidth;
//     if (half > 0) {
//       loopDistanceRef.current = half;
//       posRef.current = direction === "right" ? -half : 0;
//       setReady(true);
//     }
//   }, [direction]);

//   useEffect(() => {
//     const el = trackRef.current;
//     if (!el) return;

//     const imgs = el.querySelectorAll("img");
//     let loaded = 0;
//     const total = imgs.length;

//     const onLoad = () => {
//       if (++loaded >= total) measure();
//     };

//     if (total === 0) {
//       measure();
//     } else {
//       imgs.forEach((img) => {
//         if (img.complete) loaded++;
//         else {
//           img.addEventListener("load", onLoad);
//           img.addEventListener("error", onLoad);
//         }
//       });
//       if (loaded >= total) measure();
//     }

//     const ro = new ResizeObserver(measure);
//     ro.observe(el);

//     return () => {
//       ro.disconnect();
//       imgs.forEach((img) => {
//         img.removeEventListener("load", onLoad);
//         img.removeEventListener("error", onLoad);
//       });
//     };
//   }, [images, measure]);

//   useEffect(() => {
//     if (!ready) return;
//     return register({
//       posRef,
//       loopDistanceRef,
//       direction,
//       speed,
//       elRef: trackRef,
//       pausedRef,
//     });
//   }, [ready, direction, speed, register]);

//   return (
//     <div
//       className="w-full overflow-hidden"
//       onMouseEnter={() => {
//         pausedRef.current = true;
//       }}
//       onMouseLeave={() => {
//         pausedRef.current = false;
//       }}
//     >
//       <div
//         ref={trackRef}
//         className="flex gap-6 w-max"
//         style={{
//           visibility: ready ? "visible" : "hidden",
//           willChange: "transform",
//         }}
//       >
//         <ul className="flex gap-6 shrink-0">
//           {images.map((image, index) => (
//             <li key={`a-${image.id}-${index}`} className="shrink-0">
//               <StrapiImage
//                 src={image.url}
//                 alt={image.alternativeText || "Showcase image"}
//                 width={300}
//                 height={140}
//                 className="h-auto w-55 sm:w-65 lg:w-75"
//               />
//             </li>
//           ))}
//         </ul>

//         <ul className="flex gap-6 shrink-0" aria-hidden="true">
//           {images.map((image, index) => (
//             <li key={`b-${image.id}-${index}`} className="shrink-0">
//               <StrapiImage
//                 src={image.url}
//                 alt={image.alternativeText || "Showcase image"}
//                 width={300}
//                 height={140}
//                 className="h-auto w-55 sm:w-65 lg:w-75"
//               />
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { StrapiImage } from "@/components/Strapi-image";
// import type { ImageProps } from "@/types";
// import { useRef, useEffect, useState, useCallback } from "react";
// import { useScrollingContext } from "@/components/providers/ScrollingContext";

// interface ScrollingRowProps {
//   images: ImageProps[];
//   direction?: "left" | "right";
//   speed?: number;
// }

// export function ScrollingRow({
//   images,
//   direction = "left",
//   speed = 30,
// }: Readonly<ScrollingRowProps>) {
//   const { register } = useScrollingContext();
//   const trackRef = useRef<HTMLDivElement>(null);
//   const originalRef = useRef<HTMLUListElement>(null);
//   const cloneRef = useRef<HTMLUListElement>(null);
//   const posRef = useRef(0);
//   const loopDistanceRef = useRef(0);
//   const pausedRef = useRef(false);
//   const [ready, setReady] = useState(false);

//   const measure = useCallback(() => {
//     const original = originalRef.current;
//     const clone = cloneRef.current;
//     if (!original || !clone) return;

//     // The exact distance from the start of set1 to the start of set2.
//     // This is the only measurement that accounts for gap correctly.
//     const loopDistance =
//       clone.getBoundingClientRect().left -
//       original.getBoundingClientRect().left;

//     if (loopDistance > 0) {
//       loopDistanceRef.current = loopDistance;
//       posRef.current = direction === "right" ? -loopDistance : 0;
//       setReady(true);
//     }
//   }, [direction]);

//   useEffect(() => {
//     const track = trackRef.current;
//     if (!track) return;

//     const imgs = track.querySelectorAll("img");
//     let loaded = 0;
//     const total = imgs.length;

//     const tryMeasure = () => {
//       // Double rAF ensures browser has fully painted before reading rects
//       requestAnimationFrame(() => requestAnimationFrame(measure));
//     };

//     const onLoad = () => {
//       if (++loaded >= total) tryMeasure();
//     };

//     if (total === 0) {
//       tryMeasure();
//     } else {
//       imgs.forEach((img) => {
//         if (img.complete) loaded++;
//         else {
//           img.addEventListener("load", onLoad);
//           img.addEventListener("error", onLoad);
//         }
//       });
//       if (loaded >= total) tryMeasure();
//     }

//     const ro = new ResizeObserver(tryMeasure);
//     ro.observe(track);

//     return () => {
//       ro.disconnect();
//       imgs.forEach((img) => {
//         img.removeEventListener("load", onLoad);
//         img.removeEventListener("error", onLoad);
//       });
//     };
//   }, [images, measure]);

//   useEffect(() => {
//     if (!ready) return;
//     return register({
//       posRef,
//       loopDistanceRef,
//       direction,
//       speed,
//       elRef: trackRef,
//       pausedRef,
//     });
//   }, [ready, direction, speed, register]);

//   return (
//     <div
//       className="w-full overflow-hidden"
//       onMouseEnter={() => {
//         pausedRef.current = true;
//       }}
//       onMouseLeave={() => {
//         pausedRef.current = false;
//       }}
//     >
//       <div
//         ref={trackRef}
//         className="flex gap-6 w-max"
//         style={{
//           visibility: ready ? "visible" : "hidden",
//           willChange: "transform",
//         }}
//       >
//         {/* ref on each list so we can measure the exact gap between them */}
//         <ul ref={originalRef} className="flex gap-6 shrink-0">
//           {images.map((image, index) => (
//             <li key={`a-${image.id}-${index}`} className="shrink-0">
//               <StrapiImage
//                 src={image.url}
//                 alt={image.alternativeText || "Showcase image"}
//                 width={300}
//                 height={140}
//                 className="h-auto w-55 sm:w-65 lg:w-75"
//               />
//             </li>
//           ))}
//         </ul>

//         <ul ref={cloneRef} className="flex gap-6 shrink-0" aria-hidden="true">
//           {images.map((image, index) => (
//             <li key={`b-${image.id}-${index}`} className="shrink-0">
//               <StrapiImage
//                 src={image.url}
//                 alt={image.alternativeText || "Showcase image"}
//                 width={300}
//                 height={140}
//                 className="h-auto w-55 sm:w-65 lg:w-75"
//               />
//             </li>
//           ))}
//         </ul>

//         <ul ref={cloneRef} className="flex gap-6 shrink-0" aria-hidden="true">
//           {images.map((image, index) => (
//             <li key={`c-${image.id}-${index}`} className="shrink-0">
//               <StrapiImage
//                 src={image.url}
//                 alt={image.alternativeText || "Showcase image"}
//                 width={300}
//                 height={140}
//                 className="h-auto w-55 sm:w-65 lg:w-75"
//               />
//             </li>
//           ))}
//         </ul>

//         <ul ref={cloneRef} className="flex gap-6 shrink-0" aria-hidden="true">
//           {images.map((image, index) => (
//             <li key={`d-${image.id}-${index}`} className="shrink-0">
//               <StrapiImage
//                 src={image.url}
//                 alt={image.alternativeText || "Showcase image"}
//                 width={300}
//                 height={140}
//                 className="h-auto w-55 sm:w-65 lg:w-75"
//               />
//             </li>
//           ))}
//         </ul>

//         <ul ref={cloneRef} className="flex gap-6 shrink-0" aria-hidden="true">
//           {images.map((image, index) => (
//             <li key={`e-${image.id}-${index}`} className="shrink-0">
//               <StrapiImage
//                 src={image.url}
//                 alt={image.alternativeText || "Showcase image"}
//                 width={300}
//                 height={140}
//                 className="h-auto w-55 sm:w-65 lg:w-75"
//               />
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

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
