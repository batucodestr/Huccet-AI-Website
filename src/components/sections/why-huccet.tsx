"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Search } from "lucide-react";

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
              Why Huccet?
            </span>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              &ldquo;Huccet&rdquo; means proof or evidence in the Islamic tradition.
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
              We chose our name deliberately: every claim should have a basis,
              and every answer should have evidence. Huccet AI does exactly
              that by clearly showing the sources and evidence behind its answers.
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
                  Does not replace scholars
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                  Huccet AI does not replace religious scholars or issue religious
                  rulings (fatwas). Always consult qualified scholars for final decisions.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <Search className="h-6 w-6 shrink-0 text-brand-300" />
              <div>
                <h3 className="font-semibold text-white">
                  Offers transparent research
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                  Our goal is to help people access trusted Islamic sources easily
                  and transparently.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <BookOpen className="h-6 w-6 shrink-0 text-brand-300" />
              <div>
                <h3 className="font-semibold text-white">
                  A source-based perspective
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                  Each response includes relevant sources, so you can explore the
                  topic more deeply yourself.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
