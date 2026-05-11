// import { Button } from "../ui/Button";
// import { StrapiImage } from "@/components/Strapi-image";
// import type { TeamSectionProps } from "@/types";
// import { getThemeClasses } from "@/utils/theme";

// export function TeamSection({
//   heading,
//   theme,
//   teamCard,
//   teamSectionCta,
// }: Readonly<TeamSectionProps>) {
//   const themeClasses = getThemeClasses(theme?.variant);
//   return (
//     <section className={`${themeClasses.background} `}>
//       <div className="container px-4 md:px-8 lg:px-33 py-12 md:py-14">
//         <div className="flex items-center justify-between mb-12 gap-4">
//           <h2 className="max-w-[26ch]">{heading}</h2>
//           {teamSectionCta && (
//             <Button {...teamSectionCta}>{teamSectionCta.text}</Button>
//           )}
//         </div>
//         <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 rounded">
//           {teamCard?.map((card) => (
//             <li key={card.id} className="relative group overflow-hidden ">
//               {card.image && (
//                 <StrapiImage
//                   src={card.image.url}
//                   alt={card.image.alternativeText || "Team member image"}
//                   width={300}
//                   height={335}
//                   className="w-full h-full object-cover "
//                 />
//               )}

//               <div className="absolute inset-0 bg-neutral-900/30 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="bg-neutral-500 max-w-62.5 p-4 rounded">
//                   <h6 className="text-neutral-900">{card.title}</h6>
//                   <p className="text-neutral-800">{card.description}</p>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }

"use client";

import { Button } from "../ui/Button";
import { StrapiImage } from "@/components/Strapi-image";
import type { TeamSectionProps } from "@/types";
import { getThemeClasses } from "@/utils/theme";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export function TeamSection({
  heading,
  theme,
  teamCard,
  teamSectionCta,
}: Readonly<TeamSectionProps>) {
  const themeClasses = getThemeClasses(theme?.variant);

  return (
    <section className={`relative overflow-hidden ${themeClasses.background}`}>
      {/* Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-24 -right-16 w-[400px] h-[400px] rounded-full bg-orange-500/[0.06] blur-[100px]" />
        <div className="absolute -bottom-20 -left-10 w-[320px] h-[320px] rounded-full bg-orange-500/[0.04] blur-[90px]" />
      </div>

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(53,50,62,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(53,50,62,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
        }}
      />

      {/* Ghost watermark */}
      <div className="absolute inset-0 flex items-end justify-end overflow-hidden pointer-events-none -z-10">
        <span className="font-mono font-bold uppercase leading-none tracking-[0.25em] text-[clamp(4rem,12vw,10rem)] text-neutral-800/[0.022] whitespace-nowrap pr-2 pb-1">
          Team
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
          className={`${cls} w-5 h-5 border-orange-500/30 pointer-events-none`}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
        />
      ))}

      <div className="container px-4 md:px-8 lg:px-33 py-12 md:py-14 relative z-10">
        {/* Header */}
        <motion.div
          className="flex items-center justify-between mb-12 gap-4 flex-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={container}
        >
          <div className="flex flex-col gap-3">
            {/* Mono label */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3"
            >
              <motion.span
                className="block h-px bg-orange-500 origin-left"
                initial={{ width: 0 }}
                whileInView={{ width: 22 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
              />
              <span className="font-mono text-[0.62rem] font-medium tracking-[0.2em] uppercase text-orange-500">
                Meet the experts
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-neutral-900 max-w-[26ch]"
            >
              {heading}
            </motion.h2>
          </div>

          {teamSectionCta && (
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button {...teamSectionCta}>{teamSectionCta.text}</Button>
            </motion.div>
          )}
        </motion.div>

        {/* Team cards grid */}
        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-800/10 border border-neutral-800/10 rounded-xl overflow-hidden"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {teamCard?.map((card, i) => (
            <motion.li
              key={card.id}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative group overflow-hidden bg-neutral-400"
            >
              {/* Index badge */}
              <div className="absolute top-3 left-3 z-10 font-mono text-[0.6rem] font-semibold tracking-[0.15em] text-white/70 bg-neutral-900/40 backdrop-blur-sm px-2 py-1 rounded">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Image */}
              {card.image && (
                <StrapiImage
                  src={card.image.url}
                  alt={card.image.alternativeText || "Team member image"}
                  width={300}
                  height={335}
                  className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
              )}

              {/* Hover overlay — your original effect, preserved */}
              <div className="absolute inset-0 bg-neutral-900/35 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-neutral-500 max-w-62.5 p-4 rounded-lg border-l-2 border-orange-500">
                  <h6 className="text-neutral-900 font-semibold">
                    {card.title}
                  </h6>
                  <p className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-orange-500 mt-0.5">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Orange accent line — grows from left on hover */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-500 group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            </motion.li>
          ))}
        </motion.ul>

        {/* Footer row */}
        <motion.div
          className="w-full h-px bg-neutral-800/08 mt-10 mb-5"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="flex items-center justify-between">
          {/* Dot trail */}
          <div className="flex items-center gap-1">
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="block rounded-sm bg-neutral-800"
                style={{
                  width: i === 0 ? "20px" : "6px",
                  height: "3px",
                  opacity: i === 0 ? 0.35 : 0.1,
                  borderRadius: "2px",
                }}
              />
            ))}
          </div>
          <span className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-neutral-800/30">
            Unimailer © 2025
          </span>
        </div>
      </div>
    </section>
  );
}
