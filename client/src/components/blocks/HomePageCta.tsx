"use client";

import { HomepageCtaProps } from "@/types";
import { Button } from "../ui/Button";
import { getThemeClasses } from "@/utils/theme";
import { StrapiImage } from "../Strapi-image";
import { motion } from "motion/react";

export function HomepageCta({
  theme,
  text,
  homeCtaButton,
  floatingIcon,
}: Readonly<HomepageCtaProps>) {
  const themeClasses = getThemeClasses(theme?.variant);

  return (
    <section className={`${themeClasses.background}`}>
      <div className="container px-4 md:px-8 lg:px-12 py-14 md:py-18">
        <motion.div
          className="relative overflow-hidden rounded-lg bg-accent-400 p-6 md:p-10 lg:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Content */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="max-w-xl text-neutral-400/90 leading-tight">
              {text}
            </h2>

            {homeCtaButton && (
              <Button {...homeCtaButton} className="self-start lg:self-auto">
                {homeCtaButton.text}
              </Button>
            )}
          </div>

          {/* Top Right Floating Icon */}
          {floatingIcon && (
            <motion.div
              className="absolute -top-5 -left-3 opacity-80 pointer-events-none"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.9, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <StrapiImage
                src={floatingIcon.image.url}
                height={60}
                width={60}
                alt=""
                className="object-contain"
              />
            </motion.div>
          )}

          {/* Bottom Right Floating Icon */}
          {floatingIcon && (
            <motion.div
              className="absolute -right-6 -bottom-6 opacity-70 pointer-events-none"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 0.7, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <StrapiImage
                src={floatingIcon.image.url}
                height={120}
                width={120}
                alt=""
                className="object-contain"
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
