// import { TestimonialsSectionProps } from "@/types";
// import { getThemeClasses } from "@/utils/theme";
// import { StrapiImage } from "@/components/Strapi-image";
// import { Button } from "../ui/Button";

// export function TestimonialSection({
//   heading,
//   image,
//   theme,
//   testimonial,
//   name,
//   role,
//   TestimonialCta,
//   floatingIcon,
// }: Readonly<TestimonialsSectionProps>) {
//   const themeClasses = getThemeClasses(theme?.variant);

//   return (
//     <section className={`${themeClasses.background} relative`}>
//       <div className="container px-4 md:px-8 lg:px-33 pb-12 sm:pb-18">
//         <div className="mb-18 h-px w-full bg-neutral-400/15" />
//         <div className="absolute z-10 top-10 left-0 pointer-events-none">
//           {floatingIcon?.showIcon && floatingIcon.image && (
//             <StrapiImage
//               src={floatingIcon.image.url}
//               alt={floatingIcon.image.alternativeText || "Floating Icon"}
//               width={96}
//               height={96}
//               className="opacity-20 object-contain"
//             />
//           )}
//         </div>
//         <h2 className="text-neutral-400 text-center mb-12">{heading}</h2>
//         <div className="flex flex-col sm:flex-row sm:justify-between sm:flex-1 gap-8">
//           <div className="flex-2">
//             <div className="relative">
//               {/* <span className="absolute -top-8 -left-6 text-[160px] opacity-10 font-serif leading-none select-none pointer-events-none">
//                 “
//               </span> */}
//               <span className="absolute -top-4 left-0 text-[80px] md:text-[160px] md:-top-8 md:-left-6 opacity-10 font-serif leading-none select-none pointer-events-none">
//                 “
//               </span>
//               <blockquote className="relative text-neutral-300/80 text-base md:text-lg leading-relaxed">
//                 {/* Opening quote */}

//                 {testimonial}

//                 {/* Closing quote */}
//               </blockquote>
//               {/* <span className="absolute -bottom-30 right-32 text-[160px] opacity-10 font-serif leading-none select-none pointer-events-none">
//                 ”
//               </span> */}
//               <span className="absolute -bottom-14 right-33 text-[80px] md:text-[160px] md:-bottom-30 md:right-32 opacity-10 font-serif leading-none select-none pointer-events-none">
//                 ”
//               </span>
//             </div>
//             <h4 className="text-neutral-400/90 mt-8">{name}</h4>
//             <p className="text-neutral-300/80 mt-2 mb-8">{role}</p>
//             <Button {...TestimonialCta} className="mt-auto" />
//           </div>

//           <div className="flex-1 flex flex-col items-center sm:items-end">
//             {image && (
//               <StrapiImage
//                 src={image.url}
//                 width={300}
//                 height={346}
//                 alt={image.alternativeText || "No alternative text"}
//                 className="border-4 border-neutral-400 rounded md:ml-auto"
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { TestimonialsSectionProps } from "@/types";
import { getThemeClasses } from "@/utils/theme";
import { StrapiImage } from "@/components/Strapi-image";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export function TestimonialSection({
  heading,
  image,
  theme,
  testimonial,
  name,
  role,
  TestimonialCta,
  floatingIcon,
}: Readonly<TestimonialsSectionProps>) {
  const themeClasses = getThemeClasses(theme?.variant);

  // Derive initials from name for avatar fallback
  const initials = name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <section className={`relative overflow-hidden ${themeClasses.background}`}>
      {/* Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-24 -right-16 w-105 h-105 rounded-full bg-orange-500/9 blur-[110px]" />
        <div className="absolute -bottom-20 -left-10 w-85 h-85 rounded-full bg-orange-500/6 blur-[90px]" />
      </div>

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
        }}
      />

      {/* Ghost watermark */}
      <div className="absolute inset-0 flex items-end justify-end overflow-hidden pointer-events-none -z-10">
        <span className="font-mono font-bold uppercase leading-none tracking-[0.25em] text-[clamp(4rem,12vw,10rem)] text-white/[0.012] whitespace-nowrap pr-2 pb-1">
          Testimonial
        </span>
      </div>

      {/* Corner brackets */}
      {[
        "absolute top-4 left-4 border-t-2 border-l-2",
        "absolute top-4 right-4 border-t-2 border-r-2",
        "absolute bottom-4 left-4 border-b-2 border-l-2",
        "absolute bottom-4 right-4 border-b-2 border-r-2",
      ].map((cls, i) => (
        <motion.div
          key={i}
          className={`${cls} w-5 h-5 border-orange-500/35 pointer-events-none`}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
        />
      ))}

      {/* Floating icon — rays SVG replaces Strapi asset */}
      {floatingIcon?.showIcon && (
        <div className="absolute top-6 left-6 pointer-events-none w-20 h-20 opacity-[0.18] z-10">
          <svg viewBox="0 0 180 180" fill="none" className="w-full h-full">
            <line
              x1="90"
              y1="90"
              x2="90"
              y2="8"
              stroke="#ee6034"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.45"
            />
            <line
              x1="90"
              y1="90"
              x2="90"
              y2="172"
              stroke="#ee6034"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.35"
            />
            <line
              x1="90"
              y1="90"
              x2="8"
              y2="90"
              stroke="#ee6034"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.45"
            />
            <line
              x1="90"
              y1="90"
              x2="172"
              y2="90"
              stroke="#ee6034"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.35"
            />
            <line
              x1="90"
              y1="90"
              x2="33"
              y2="33"
              stroke="#ee6034"
              strokeWidth="0.75"
              strokeLinecap="round"
              opacity="0.3"
            />
            <line
              x1="90"
              y1="90"
              x2="147"
              y2="147"
              stroke="#ee6034"
              strokeWidth="0.75"
              strokeLinecap="round"
              opacity="0.2"
            />
            <line
              x1="90"
              y1="90"
              x2="147"
              y2="33"
              stroke="#ee6034"
              strokeWidth="0.75"
              strokeLinecap="round"
              opacity="0.3"
            />
            <line
              x1="90"
              y1="90"
              x2="33"
              y2="147"
              stroke="#ee6034"
              strokeWidth="0.75"
              strokeLinecap="round"
              opacity="0.2"
            />
            <circle
              cx="90"
              cy="90"
              r="72"
              stroke="#ee6034"
              strokeWidth="0.75"
              strokeDasharray="4 6"
              opacity="0.22"
            />
            <circle
              cx="90"
              cy="90"
              r="48"
              stroke="#ee6034"
              strokeWidth="0.75"
              opacity="0.18"
            />
            <circle
              cx="90"
              cy="90"
              r="20"
              stroke="#ee6034"
              strokeWidth="1"
              opacity="0.3"
            />
            <circle
              cx="90"
              cy="90"
              r="7"
              fill="rgba(238,96,52,0.15)"
              stroke="#ee6034"
              strokeWidth="1"
              opacity="0.9"
            />
            <circle cx="90" cy="90" r="3" fill="#ee6034" opacity="0.9" />
            <circle cx="90" cy="90" r="1.5" fill="#fff" opacity="0.95" />
          </svg>
        </div>
      )}

      <div className="container px-4 md:px-8 lg:px-33 pb-12 sm:pb-18">
        {/* Top divider */}
        <motion.div
          className="mb-14 h-px w-full bg-white/8 origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={container}
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <motion.span
              className="block h-px bg-orange-500 origin-right"
              initial={{ width: 0 }}
              whileInView={{ width: 22 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            />
            <span className="font-mono text-[0.62rem] font-medium tracking-[0.2em] uppercase text-orange-500">
              What clients say
            </span>
            <motion.span
              className="block h-px bg-orange-500 origin-left"
              initial={{ width: 0 }}
              whileInView={{ width: 22 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-neutral-400"
          >
            {heading}
          </motion.h2>
        </motion.div>

        {/* Body */}
        <motion.div
          className="flex flex-col sm:flex-row gap-10 sm:gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={container}
        >
          {/* Quote side */}
          <motion.div
            className="flex-2"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-3.5 h-3.5 text-orange-500"
                  viewBox="0 0 24 24"
                  fill="#ee6034"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            {/* Quote block */}
            <div className="relative pl-5">
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-0.75 bg-orange-500/70 rounded-full" />

              {/* Opening quote mark */}
              <span className="absolute -top-4 -left-2 text-[80px] md:text-[120px] leading-none text-orange-500/18 font-serif pointer-events-none select-none">
                &quot;
              </span>

              <blockquote className="relative text-neutral-300/80 text-base md:text-lg leading-relaxed">
                {testimonial}
              </blockquote>

              {/* Closing quote mark */}
              <span className="absolute -bottom-10 right-8 md:right-16 text-[80px] md:text-[120px] leading-none text-orange-500/18 font-serif pointer-events-none select-none">
                &quot;
              </span>
            </div>

            {/* Person */}
            <div className="flex items-center gap-4 mt-10">
              <div className="w-11 h-11 rounded-full bg-orange-500/15 border border-orange-500/40 flex items-center justify-center shrink-0 font-mono text-sm font-bold text-orange-500">
                {initials}
              </div>
              <div>
                <h4 className="text-neutral-400/90 font-semibold text-[15px]">
                  {name}
                </h4>
                <p className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-orange-500/70 mt-0.5">
                  {role}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Button {...TestimonialCta} className="mt-auto" />
            </div>
          </motion.div>

          {/* Image side */}
          <motion.div
            className="flex-1 flex flex-col items-center sm:items-end relative w-full"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Image corner brackets */}
            <motion.div
              className="absolute -top-1.5 -left-1.5 w-5 h-5 border-t-2 border-l-2 border-orange-500/50 pointer-events-none"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
            />
            <motion.div
              className="absolute -bottom-1.5 -right-1.5 w-5 h-5 border-b-2 border-r-2 border-orange-500/50 pointer-events-none"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
            />

            {image && (
              <div className="rounded-xl overflow-hidden border border-white/8 w-full">
                <StrapiImage
                  src={image.url}
                  width={300}
                  height={346}
                  alt={image.alternativeText || "Testimonial image"}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Floating rating badge */}
            <div className="absolute -bottom-4 -left-5 bg-neutral-800/90 backdrop-blur-sm border border-orange-500/25 rounded-lg px-4 py-3 flex items-center gap-3">
              <div>
                <p className="font-mono text-[1.1rem] font-bold text-white leading-none">
                  4.9
                </p>
                <p className="font-mono text-[0.55rem] tracking-[0.12em] uppercase text-white/35 mt-0.5">
                  Avg. rating
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="9"
                      height="9"
                      viewBox="0 0 24 24"
                      fill="#ee6034"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="font-mono text-[0.55rem] tracking-widest text-white/30">
                  200+ reviews
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer row */}
        <div className="flex items-center justify-between mt-12 pt-7 border-t border-white/6">
          <div className="flex items-center gap-1">
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="block rounded-sm bg-white"
                style={{
                  width: i === 0 ? "20px" : "6px",
                  height: "3px",
                  opacity: i === 0 ? 0.25 : 0.1,
                  borderRadius: "2px",
                }}
              />
            ))}
          </div>
          <span className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-white/20">
            Unimailer © 2025
          </span>
        </div>
      </div>
    </section>
  );
}
