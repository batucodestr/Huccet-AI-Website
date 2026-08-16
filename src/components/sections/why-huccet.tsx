"use client";

import { motion } from "framer-motion";
import { GraduationCap, Info, MessagesSquare } from "lucide-react";

export function WhyHuccet() {
  return (
    <section id="why" className="relative overflow-hidden bg-brand-950 py-20 text-white sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium uppercase tracking-wider text-brand-300">
              Neden Huccet?
            </span>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              &ldquo;Huccet&rdquo;, İslami gelenekte delil veya kanıt anlamına gelir.
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
              İsmimizi bilinçli seçtik: merak ettiğiniz konularda net ve
              anlaşılır bir başlangıç noktası sunmayı amaçlıyoruz. Ancak Huccet
              AI&apos;nin verdiği cevaplar yapay zekânın genel bilgisine dayanır ve
              doğrulanmış bir kaynak sistemine karşı kontrol edilmez; bu yüzden
              hatalı veya eksik olabilir.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-5"
          >
            <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <GraduationCap className="h-6 w-6 shrink-0 text-brand-300" />
              <div>
                <h3 className="font-semibold text-white">
                  Din alimlerinin yerini tutmaz
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                  Huccet AI, din alimlerinin yerini tutmaz veya dini hüküm
                  (fetva) vermez. Bağlayıcı kararlar için mutlaka yetkin bir
                  alime danışın.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <MessagesSquare className="h-6 w-6 shrink-0 text-brand-300" />
              <div>
                <h3 className="font-semibold text-white">
                  Akıcı bir sohbet deneyimi
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                  Amacımız, İslami konularda merak ettiklerinize hızlı ve
                  anlaşılır bir başlangıç noktası sunmak.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <Info className="h-6 w-6 shrink-0 text-brand-300" />
              <div>
                <h3 className="font-semibold text-white">
                  Dürüst bir konumlandırma
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                  Cevaplar, doğrulanmış bir kaynağa karşı kontrol edilmeden
                  yapay zekânın genel bilgisinden üretilir. Bunu açıkça
                  belirtiyoruz.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
