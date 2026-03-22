"use client";

import { subscribeAction } from "@/data/actions";
import { useActionState } from "react";
import { SubscribeProps } from "@/types";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

const INITIAL_STATE = {
  zodErrors: null,
  strapiErrors: null,
  errorMessage: null,
  successMessage: null,
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.15,
    },
  },
};

export function Subscribe({
  heading,
  description,
  placeholder,
  buttonText,
}: Readonly<SubscribeProps>) {
  const [formState, formAction] = useActionState(
    subscribeAction,
    INITIAL_STATE,
  );

  const zodErrors = formState?.zodErrors?.email;
  const strapiErrors = formState?.strapiErrors?.message;
  const friendlyStrapiError = strapiErrors?.toLowerCase().includes("unique")
    ? "This email is already subscribed."
    : strapiErrors;
  const errorMessage =
    friendlyStrapiError || zodErrors || formState?.errorMessage;
  const successMessage = formState?.successMessage;

  return (
    <section className="relative w-full overflow-hidden isolate bg-neutral-900">
      {/* ── Orb container ── */}
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
        <motion.div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-100 h-100
                     rounded-full bg-orange-500/10 blur-[90px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
      </div>

      {/* ── Subtle grid texture ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      />

      {/* ── Ghost watermark ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center
                   pointer-events-none select-none overflow-hidden"
      >
        <span
          className="font-serif text-[clamp(3rem,10vw,8rem)] font-bold leading-none
                     text-white/2 whitespace-nowrap"
        >
          Subscribe
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-14">
        {/* ── Corner accents ── */}
        <motion.div
          className="absolute top-5 left-5 w-5 h-5 border-t border-l
                     border-orange-500/40 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        />
        <motion.div
          className="absolute top-5 right-5 w-5 h-5 border-t border-r
                     border-orange-500/40 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
        />
        <motion.div
          className="absolute bottom-5 left-5 w-5 h-5 border-b border-l
                     border-orange-500/40 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        />
        <motion.div
          className="absolute bottom-5 right-5 w-5 h-5 border-b border-r
                     border-orange-500/40 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
        />

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left: heading + description */}
          <motion.div
            className="flex flex-col gap-4"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {/* Label */}
            <motion.div
              className="flex items-center gap-2.5"
              variants={fadeUp}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                className="block w-7 h-px bg-orange-500 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
              />
              <span
                className="font-mono text-[0.62rem] font-medium tracking-[0.18em]
                               uppercase text-orange-500"
              >
                Newsletter
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h6
              className="text-2xl md:text-3xl font-normal leading-[1.2]
                         tracking-tight text-neutral-400 m-0"
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {heading}
            </motion.h6>

            {/* Description */}
            <motion.p
              className="text-sm leading-[1.85] text-neutral-300/70 max-w-[38ch] m-0"
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {description}
            </motion.p>

            {/* Dot trail */}
            <motion.div
              className="hidden md:flex items-center gap-1.5"
              variants={fadeUp}
              aria-hidden="true"
            >
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="block rounded-full bg-white"
                  style={{
                    width: i === 2 ? "6px" : "4px",
                    height: i === 2 ? "6px" : "4px",
                    opacity: i === 2 ? 0.2 : 0.07,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Short divider above form on mobile */}
            <div className="block md:hidden w-10 h-px bg-orange-500/30 mb-1" />

            {/* Input + button */}
            <form
              action={formAction}
              className={`flex items-stretch gap-2 p-1.5 rounded-lg border
                          transition-all duration-300
                ${
                  errorMessage
                    ? "bg-red-500/5 border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.08)]"
                    : successMessage
                      ? "bg-green-500/5 border-green-500/40 shadow-[0_0_20px_rgba(34,197,94,0.08)]"
                      : "bg-white/5 border-white/10 focus-within:border-orange-500/50 focus-within:shadow-[0_0_20px_rgba(249,115,22,0.1)]"
                }`}
            >
              {/* Email icon + input */}
              <div className="relative flex-1 flex items-center">
                <Mail
                  className={`absolute left-3 w-3.5 h-3.5 pointer-events-none shrink-0
                    ${
                      errorMessage
                        ? "text-red-400/70"
                        : successMessage
                          ? "text-green-400/70"
                          : "text-white/30"
                    }`}
                  strokeWidth={1.75}
                />
                <input
                  type="text"
                  name="email"
                  placeholder={placeholder}
                  className={`w-full bg-transparent pl-9 pr-3 py-2.5 text-sm
                              text-white tracking-wide outline-none
                    ${
                      errorMessage
                        ? "placeholder:text-red-400/50"
                        : "placeholder:text-white/40"
                    }`}
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="group shrink-0 flex items-center gap-2 px-5 py-2.5
                           rounded-md bg-accent-400 hover:bg-orange-400
                           text-white text-[0.7rem] font-medium
                           tracking-widest  whitespace-nowrap
                           transition-all duration-200
                           hover:shadow-[0_0_16px_rgba(249,115,22,0.4)]
                           active:scale-[0.98]"
              >
                <span>{buttonText}</span>
                <ArrowRight
                  className="w-3.5 h-3.5 shrink-0 transition-transform duration-200
                             group-hover:translate-x-0.5"
                  strokeWidth={2}
                />
              </button>
            </form>

            {/* Status row — no spam / error / success */}
            <div className="flex items-center gap-2 pl-1 min-h-5">
              {errorMessage ? (
                <>
                  <AlertCircle
                    className="w-3 h-3 text-red-400/80 shrink-0"
                    strokeWidth={2}
                  />
                  <span className="text-[0.68rem] tracking-wide text-red-400/80">
                    {errorMessage}
                  </span>
                </>
              ) : successMessage ? (
                <>
                  <CheckCircle2
                    className="w-3 h-3 text-green-400/80 shrink-0"
                    strokeWidth={2}
                  />
                  <span className="text-[0.68rem] tracking-wide text-green-400/80">
                    {successMessage}
                  </span>
                </>
              ) : (
                <>
                  <ShieldCheck
                    className="w-3 h-3 text-orange-500/60 shrink-0"
                    strokeWidth={2}
                  />
                  <span className="text-[0.68rem] tracking-wide text-neutral-300/70">
                    No spam, ever. Unsubscribe at any time.
                  </span>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
