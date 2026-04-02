"use client";

import { BlockRenderer } from "@/components/BlockRenderer";
import { Block } from "@/types";
import { StrapiImage } from "@/components/Strapi-image";
import {
  servicesSubscribeAction,
  ServicesSubscribeState,
} from "@/data/actions";
import { useActionState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const INITIAL_STATE: ServicesSubscribeState = {
  zodErrors: null,
  strapiErrors: null,
  errorMessage: null,
  successMessage: null,
  formData: null,
};


interface TextInputProps {
  id: string;
  label: string;
  name: string;
  type?: string;
  error?: string | string[];
  defaultValue?: string;
  icon: React.ReactNode;
  placeholder?: string;
}

function TextInput({
  id,
  label,
  name,
  type = "text",
  error,
  defaultValue,
  icon,
  placeholder,
}: Readonly<TextInputProps>) {
  const errorMessage = Array.isArray(error) ? error[0] : error;
  const hasError = !!errorMessage;

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="font-mono text-[0.65rem] tracking-[0.15em]
                   uppercase text-neutral-600 font-medium"
      >
        {label}
      </label>

      {/* Input wrapper */}
      <div className="relative">
        {/* Icon */}
        <div
          className="absolute left-3.5 top-1/2 -translate-y-1/2
                        pointer-events-none"
        >
          <span
            className={`w-3.5 h-3.5 ${
              hasError ? "text-red-400" : "text-neutral-400"
            }`}
          >
            {icon}
          </span>
        </div>

        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className={`w-full pl-9 pr-4 py-3 text-sm font-mono
                      rounded-lg border bg-white outline-none
                      text-neutral-800 placeholder:text-neutral-400
                      transition-all duration-200
                      focus:shadow-[0_0_0_3px_rgba(238,96,52,0.12)]
                      ${
                        hasError
                          ? "border-red-400/60 bg-red-50/30 focus:border-red-400"
                          : "border-neutral-200 focus:border-orange-500/60"
                      }`}
        />
      </div>

      {/* Error message */}
      {hasError && (
        <motion.div
          className="flex items-center gap-1.5"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <AlertCircle
            className="w-3 h-3 text-red-400 shrink-0"
            strokeWidth={2}
          />
          <span className="font-mono text-[0.62rem] text-red-400 tracking-wide">
            {errorMessage}
          </span>
        </motion.div>
      )}
    </div>
  );
}

// ── Submit button ──
function SubmitButton({ text }: { text: string }) {
  return (
    <button
      type="submit"
      className="group w-full flex items-center justify-center gap-2
                 px-6 py-3.5 rounded-lg bg-orange-500 hover:bg-orange-400
                 text-white font-mono text-[0.75rem] font-medium
                 tracking-widest uppercase transition-all duration-200
                 hover:shadow-[0_0_20px_rgba(238,96,52,0.35)]
                 active:scale-[0.98]"
    >
      <span>{text}</span>
      <ArrowRight
        className="w-3.5 h-3.5 shrink-0 transition-transform
                   duration-200 group-hover:translate-x-0.5"
        strokeWidth={2.5}
      />
    </button>
  );
}

// ── Main component ──
export function ServiceSignupForm({
  blocks,
  serviceId,
  price,
  image,
}: {
  blocks: Block[];
  serviceId: string;
  startDate?: string;
  price?: string;
  image?: { url: string; alt: string };
}) {
  // const [formState, formAction] = useActionState(
  //   servicesSubscribeAction,
  //   INITIAL_STATE,
  // );

  const [formState, formAction] = useActionState<
    ServicesSubscribeState,
    FormData
  >(servicesSubscribeAction, INITIAL_STATE);

  const zodErrors = formState?.zodErrors;
  const strapiErrors = formState?.strapiErrors?.message;
  const errorMessage = strapiErrors || formState?.errorMessage;
  const successMessage = formState?.successMessage;

  return (
    <section className="relative w-full bg-neutral-100 overflow-hidden">
      {/* ── Ambient blob ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div
          className="absolute -top-32 -right-32 w-100 h-100
                        rounded-full bg-orange-500/8 blur-[90px]"
        />
        <div
          className="absolute -bottom-20 -left-20 w-64 h-64
                        rounded-full bg-orange-400/6 blur-[72px]"
        />
      </div>

      <div className="container px-4 md:px-8 lg:px-16 py-16 md:py-20">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20
                        items-start"
        >
          {/* ── Left: service info ── */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Image */}
            {image && (
              <div
                className="relative rounded-2xl overflow-hidden
                              aspect-16/10 shadow-[0_8px_32px_rgba(53,50,62,0.1)]"
              >
                <StrapiImage
                  src={image.url}
                  alt={image.alt}
                  height={400}
                  width={600}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 bg-linear-to-t
                                from-neutral-900/30 to-transparent
                                pointer-events-none"
                />
                {/* Corner accents */}
                <div
                  className="absolute top-0 left-0 w-6 h-6
                                border-t-2 border-l-2 border-orange-500/50
                                pointer-events-none"
                />
                <div
                  className="absolute bottom-0 right-0 w-6 h-6
                                border-b-2 border-r-2 border-orange-500/50
                                pointer-events-none"
                />
              </div>
            )}

            {/* Price */}
            {price && (
              <div
                className="inline-flex items-center gap-2 self-start
                              border border-neutral-200 rounded-full
                              px-4 py-1.5 bg-white"
              >
                <span
                  className="font-mono text-[0.6rem] tracking-widest
                                 uppercase text-neutral-500"
                >
                  Price
                </span>
                <span
                  className="font-mono text-sm font-semibold
                                 text-orange-500"
                >
                  {price}
                </span>
              </div>
            )}

            {/* Blocks — service description content */}
            <div
              className="prose prose-neutral prose-sm max-w-none
                            prose-headings:text-neutral-800
                            prose-p:text-neutral-600
                            prose-p:leading-relaxed"
            >
              <BlockRenderer blocks={blocks} />
            </div>
          </motion.div>

          {/* ── Right: signup form ── */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Form card */}
            <div
              className="bg-white rounded-2xl border border-neutral-200
                            shadow-[0_4px_24px_rgba(53,50,62,0.06)] p-6 md:p-8"
            >
              {/* Form header */}
              <div className="flex flex-col gap-3 mb-8">
                <div className="flex items-center gap-2.5">
                  <span className="block w-7 h-px bg-orange-500" />
                  <span
                    className="font-mono text-[0.62rem] font-medium
                                   tracking-[0.2em] uppercase text-orange-500"
                  >
                    Sign Up
                  </span>
                </div>
                <h3 className="m-0 text-neutral-800 text-xl">
                  Book this Service
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed m-0">
                  Fill in your details below and we&apos;ll get back to you
                  shortly.
                </p>
              </div>

              <form action={formAction} className="flex flex-col gap-5">
                {/* Hidden service ID */}
                <input
                  hidden
                  type="text"
                  name="serviceId"
                  defaultValue={serviceId}
                />

                {/* Name row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <TextInput
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    placeholder="Jane"
                    icon={<User className="w-3.5 h-3.5" strokeWidth={2} />}
                    error={zodErrors?.firstName}
                    defaultValue={formState?.formData?.firstName ?? ""}
                  />
                  <TextInput
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    placeholder="Doe"
                    icon={<User className="w-3.5 h-3.5" strokeWidth={2} />}
                    error={zodErrors?.lastName}
                    defaultValue={formState?.formData?.lastName ?? ""}
                  />
                </div>

                {/* Email */}
                <TextInput
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  icon={<Mail className="w-3.5 h-3.5" strokeWidth={2} />}
                  error={zodErrors?.email}
                  defaultValue={formState?.formData?.email ?? ""}
                />

                {/* Phone */}
                <TextInput
                  id="phone"
                  label="Phone Number"
                  name="telephone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  icon={<Phone className="w-3.5 h-3.5" strokeWidth={2} />}
                  error={zodErrors?.telephone}
                  defaultValue={formState?.formData?.telephone ?? ""}
                />

                {/* Submit */}
                <div className="pt-2">
                  <SubmitButton text="Book Service" />
                </div>

                {/* Status messages */}
                <div className="min-h-5">
                  {errorMessage ? (
                    <motion.div
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <AlertCircle
                        className="w-3.5 h-3.5 text-red-400 shrink-0"
                        strokeWidth={2}
                      />
                      <span
                        className="font-mono text-[0.68rem] tracking-wide
                                       text-red-400"
                      >
                        {errorMessage}
                      </span>
                    </motion.div>
                  ) : successMessage ? (
                    <motion.div
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <CheckCircle2
                        className="w-3.5 h-3.5 text-green-500 shrink-0"
                        strokeWidth={2}
                      />
                      <span
                        className="font-mono text-[0.68rem] tracking-wide
                                       text-green-600"
                      >
                        {successMessage}
                      </span>
                    </motion.div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <ShieldCheck
                        className="w-3.5 h-3.5 text-orange-500/60 shrink-0"
                        strokeWidth={2}
                      />
                      <span
                        className="font-mono text-[0.68rem] tracking-wide
                                       text-neutral-400"
                      >
                        Your information is safe with us.
                      </span>
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* Dot trail */}
            <div className="flex items-center gap-1.5 pl-1" aria-hidden="true">
              {[...Array(4)].map((_, i) => (
                <span
                  key={i}
                  className="block rounded-sm bg-neutral-800"
                  style={{
                    width: i === 0 ? "18px" : "6px",
                    height: "3px",
                    opacity: i === 0 ? 0.25 : 0.08,
                    borderRadius: "2px",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
