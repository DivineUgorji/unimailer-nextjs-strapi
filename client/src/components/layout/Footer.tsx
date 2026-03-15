"use client";

import { FooterProps } from "@/types";
import { StrapiImage } from "../Strapi-image";
import { getThemeClasses } from "@/utils/theme";
import Link from "next/link";
import { motion, Variants } from "motion/react";

export function Footer({ data }: Readonly<FooterProps>) {
  const {
    theme,
    footerLogo,
    description,
    socialLinks,
    footerColumns,
    copyright,
  } = data;
  const themeClasses = getThemeClasses(theme?.variant);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <footer className={`${themeClasses.background}`}>
      <div className="container px-4 md:px-8 lg:px-12 pb-14 md:pb-18">
        <div className="border-t border-neutral-400/15 pt-12"></div>

        <motion.div
          className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Brand column */}
          <motion.div
            variants={item}
            className="space-y-6 max-w-sm lg:max-w-md"
          >
            <StrapiImage
              src={footerLogo.image.url}
              height={33}
              width={150}
              alt={footerLogo.image.alternativeText || "Logo"}
            />

            <p className="max-w-90 text-neutral-300/80 text-sm">
              {description}
            </p>

            <ul className="flex gap-4">
              {socialLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 opacity-70 hover:opacity-100 transition"
                  >
                    <StrapiImage
                      src={link.image.url}
                      width={24}
                      height={24}
                      alt=""
                    />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Footer columns */}
          <div className="flex flex-wrap gap-10 lg:gap-14">
            {footerColumns.map((column) => (
              <motion.div
                key={column.id}
                variants={item}
                className="space-y-4 min-w-35"
              >
                <h6 className="text-neutral-400/90">{column.title}</h6>

                <ul className="space-y-3">
                  {column.footerLinks.map((link) => (
                    <li key={link.id}>
                      <Link
                        href={link.href}
                        target={link.isExternal ? "_blank" : undefined}
                        rel={
                          link.isExternal ? "noopener noreferrer" : undefined
                        }
                        className="text-neutral-300 opacity-70 hover:opacity-100 transition"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 border-t border-neutral-400/15 pt-6 text-center text-sm opacity-70"
        >
          <p className="text-neutral-300/80">{copyright}</p>
        </motion.div>
      </div>
    </footer>
  );
}
