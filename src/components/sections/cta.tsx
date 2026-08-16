"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { StoreBadges } from "@/components/store-badges";

export function CTA() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-brand-950 px-6 py-14 text-center sm:px-14 sm:py-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_60%_at_50%_0%,color-mix(in_oklch,var(--brand-500)_25%,transparent),transparent)]"
          />
          <div className="relative">
            <Image
              src="/images/logo-192.png"
              alt=""
              width={56}
              height={56}
              className="mx-auto rounded-2xl"
            />
            <h2 className="mx-auto mt-6 max-w-xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Merak ettiklerinize hemen başlayın.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-pretty text-white/70">
              Huccet AI&apos;yi ücretsiz indirin ve İslami konularda yapay
              zeka destekli sohbet deneyimini keşfedin.
            </p>
            <div className="mt-8 flex justify-center">
              <StoreBadges />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
