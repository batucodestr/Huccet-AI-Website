"use client";

import { motion } from "framer-motion";
import { MessageCircleQuestion, Sparkles } from "lucide-react";
import { PhoneMockup } from "@/components/phone-mockup";
import { StoreBadges } from "@/components/store-badges";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-brand-950 pb-20 pt-16 sm:pb-28 sm:pt-20"
    >
      {/* Ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklch,var(--brand-500)_25%,transparent),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-brand-600/20 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-brand-400/10 blur-[100px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-400/20 bg-brand-500/10 px-3.5 py-1.5 text-xs font-medium text-brand-200">
            <MessageCircleQuestion className="h-3.5 w-3.5" />
            İslami konularda genel bilgi asistanı
          </div>

          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
            Merak ettiğin soruyu sor, yapay zeka yanıtlasın.
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg lg:mx-0">
            Huccet AI, İslami konulardaki sorularınızı yapay zekânın genel
            bilgisiyle yanıtlayan bir araştırma yardımcısıdır. Bir fetva
            makamı değildir; cevaplar doğrulanmış bir kaynak sistemine karşı
            kontrol edilmez.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <StoreBadges />
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-white/40 lg:justify-start">
            <Sparkles className="h-3.5 w-3.5" />
            Hesap gerektirmez · Gizlilik odaklı
          </div>
        </motion.div>

        <div className="flex justify-center lg:justify-end">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
