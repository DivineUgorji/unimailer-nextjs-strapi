// // ScrollingContext.tsx
// "use client";

// import { createContext, useContext, useEffect, useRef, useState } from "react";

// interface RowEntry {
//   posRef: React.MutableRefObject<number>;
//   singleWidthRef: React.MutableRefObject<number>;
//   direction: "left" | "right";
//   speed: number;
//   elRef: React.MutableRefObject<HTMLDivElement | null>;
//   pausedRef: React.MutableRefObject<boolean>;
// }

// const ScrollingContext = createContext<{
//   register: (entry: RowEntry) => () => void;
// } | null>(null);

// export function ScrollingProvider({ children }: { children: React.ReactNode }) {
//   const rowsRef = useRef<Set<RowEntry>>(new Set());
//   const animFrameRef = useRef<number | null>(null);
//   const lastTimeRef = useRef<number | null>(null);

//   useEffect(() => {
//     const tick = (timestamp: number) => {
//       if (lastTimeRef.current === null) lastTimeRef.current = timestamp;
//       const delta = Math.min(timestamp - lastTimeRef.current, 32); // cap at ~2 frames
//       lastTimeRef.current = timestamp;

//       rowsRef.current.forEach((row) => {
//         if (row.pausedRef.current || row.singleWidthRef.current === 0) return;

//         const pxPerMs = row.singleWidthRef.current / (row.speed * 1000);
//         const step = pxPerMs * delta;
//         const half = row.singleWidthRef.current;

//         if (row.direction === "left") {
//           row.posRef.current -= step;
//           if (row.posRef.current <= -half) row.posRef.current += half;
//         } else {
//           row.posRef.current += step;
//           if (row.posRef.current >= 0) row.posRef.current -= half;
//         }

//         if (row.elRef.current) {
//           row.elRef.current.style.transform = `translateX(${row.posRef.current}px)`;
//         }
//       });

//       animFrameRef.current = requestAnimationFrame(tick);
//     };

//     animFrameRef.current = requestAnimationFrame(tick);
//     return () => {
//       if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
//       lastTimeRef.current = null;
//     };
//   }, []);

//   const register = (entry: RowEntry) => {
//     rowsRef.current.add(entry);
//     return () => rowsRef.current.delete(entry);
//   };

//   return (
//     <ScrollingContext.Provider value={{ register }}>
//       {children}
//     </ScrollingContext.Provider>
//   );
// }

// export function useScrollingContext() {
//   const ctx = useContext(ScrollingContext);
//   if (!ctx)
//     throw new Error(
//       "useScrollingContext must be used within ScrollingProvider",
//     );
//   return ctx;
// }

"use client";

import { createContext, useContext, useEffect, useRef } from "react";

interface RowEntry {
  posRef: React.MutableRefObject<number>;
  loopDistanceRef: React.MutableRefObject<number>;
  direction: "left" | "right";
  speed: number;
  elRef: React.MutableRefObject<HTMLDivElement | null>;
  pausedRef: React.MutableRefObject<boolean>;
}

const ScrollingContext = createContext<{
  register: (entry: RowEntry) => () => void;
} | null>(null);

export function ScrollingProvider({ children }: { children: React.ReactNode }) {
  const rowsRef = useRef<Set<RowEntry>>(new Set());
  const animFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const tick = (timestamp: number) => {
      if (lastTimeRef.current === null) lastTimeRef.current = timestamp;
      const delta = Math.min(timestamp - lastTimeRef.current, 32);
      lastTimeRef.current = timestamp;

      rowsRef.current.forEach((row) => {
        const loopDistance = row.loopDistanceRef.current;
        if (row.pausedRef.current || loopDistance === 0) return;

        const pxPerMs = loopDistance / (row.speed * 1000);
        const step = pxPerMs * delta;

        if (row.direction === "left") {
          row.posRef.current -= step;
          if (row.posRef.current <= -loopDistance)
            row.posRef.current += loopDistance;
        } else {
          row.posRef.current += step;
          if (row.posRef.current >= 0) row.posRef.current -= loopDistance;
        }

        if (row.elRef.current) {
          row.elRef.current.style.transform = `translateX(${row.posRef.current}px)`;
        }
      });

      animFrameRef.current = requestAnimationFrame(tick);
    };

    animFrameRef.current = requestAnimationFrame(tick);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      lastTimeRef.current = null;
    };
  }, []);

  const register = (entry: RowEntry) => {
    rowsRef.current.add(entry);
    return () => rowsRef.current.delete(entry);
  };

  return (
    <ScrollingContext.Provider value={{ register }}>
      {children}
    </ScrollingContext.Provider>
  );
}

export function useScrollingContext() {
  const ctx = useContext(ScrollingContext);
  if (!ctx)
    throw new Error(
      "useScrollingContext must be used within ScrollingProvider",
    );
  return ctx;
}
