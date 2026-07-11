"use client";

import { motion } from "framer-motion";
import { BookOpenCheck, Scale, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";

export function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative mx-auto w-[280px] sm:w-[320px]"
    >
      {/* Glow */}
      <div className="absolute inset-x-6 top-10 -z-10 h-[420px] rounded-full bg-brand-500/30 blur-[80px]" />

      {/* Phone frame */}
      <div className="relative rounded-[2.75rem] border-[6px] border-neutral-900 bg-neutral-900 shadow-2xl shadow-brand-950/40">
        <div className="absolute left-1/2 top-0 z-20 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-900" />
        <div className="overflow-hidden rounded-[2.25rem] bg-brand-950">
          <div className="flex h-[580px] w-full flex-col">
            {/* Status bar */}
            <div className="flex items-center justify-between px-6 pb-1 pt-3 text-[11px] font-medium text-white/70">
              <span>9:41</span>
              <span className="flex items-center gap-1">
                <Sparkles className="h-3 w-3" />
                Hüccet AI
              </span>
            </div>

            {/* App header */}
            <div className="flex items-center gap-2 px-5 pb-3 pt-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full ring-1 ring-white/20">
                <Image
                  src="/images/logo-192.png"
                  alt="Hüccet AI"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Hüccet AI</p>
                <p className="text-[10px] text-white/50">
                  Araştırma Asistanı
                </p>
              </div>
            </div>

            {/* Chat content */}
            <div className="flex-1 space-y-3 overflow-hidden px-4 pb-4">
              {/* user bubble */}
              <div className="flex justify-end">
                <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-white/10 px-3.5 py-2.5 text-[12px] leading-relaxed text-white">
                  Abdestte mesh yapmanın hükmü nedir?
                </div>
              </div>

              {/* AI answer card */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-2xl rounded-tl-sm border border-white/10 bg-white/[0.06] p-3.5 backdrop-blur"
              >
                <div className="mb-2 flex items-center gap-1.5 text-[10px] font-medium text-brand-300">
                  <BookOpenCheck className="h-3.5 w-3.5" />
                  Kanıt Tabanlı Cevap
                </div>
                <p className="text-[12px] leading-relaxed text-white/85">
                  Mesh, sünnetle sabit bir ruhsattır. Aşağıda kaynaklar ve
                  mezhep görüşleri karşılaştırmalı olarak sunulmuştur.
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="rounded-full bg-brand-500/15 px-2 py-1 text-[9px] font-medium text-brand-200 ring-1 ring-brand-400/20">
                    Sahih Hadis
                  </span>
                  <span className="rounded-full bg-brand-500/15 px-2 py-1 text-[9px] font-medium text-brand-200 ring-1 ring-brand-400/20">
                    Hanefi
                  </span>
                  <span className="rounded-full bg-brand-500/15 px-2 py-1 text-[9px] font-medium text-brand-200 ring-1 ring-brand-400/20">
                    Şafii
                  </span>
                </div>
              </motion.div>

              {/* comparison mini card */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-3"
              >
                <Scale className="h-4 w-4 shrink-0 text-brand-300" />
                <p className="text-[10.5px] leading-snug text-white/70">
                  4 mezhebe göre karşılaştırmalı görünüm mevcut
                </p>
              </motion.div>

              <div className="flex items-center gap-2 rounded-2xl border border-brand-400/20 bg-brand-500/10 p-3">
                <ShieldCheck className="h-4 w-4 shrink-0 text-brand-300" />
                <p className="text-[10.5px] leading-snug text-white/70">
                  Kaynaklar şeffaf şekilde gösterilir
                </p>
              </div>
            </div>

            {/* Input bar */}
            <div className="mx-4 mb-4 flex items-center justify-between rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5">
              <span className="text-[11px] text-white/40">Soru sorun…</span>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-500">
                <Sparkles className="h-3 w-3 text-brand-950" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
