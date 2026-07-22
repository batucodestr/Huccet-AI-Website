"use client";

import { motion } from "framer-motion";
import { ArrowDown, MessageCircleQuestion, Scale, ScanSearch, Sparkles } from "lucide-react";

const steps = [
  {
    icon: MessageCircleQuestion,
    title: "Ask your question",
    description: "Ask about the Islamic topic you are curious about, in your own words.",
  },
  {
    icon: ScanSearch,
    title: "Trusted sources are searched",
    description:
      "Huccet AI researches a broad collection of trusted sources.",
  },
  {
    icon: Scale,
    title: "Evidence is compared",
    description:
      "Different sources and madhhab perspectives are considered side by side.",
  },
  {
    icon: Sparkles,
    title: "Get an evidence-based answer",
    description:
      "Receive a transparent answer with its sources and evidence clearly identified.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            How does it work?
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            An evidence-based, transparent research experience in four simple steps.
          </p>
        </div>

        <div className="mt-14 flex flex-col items-center">
          {steps.map((step, i) => (
            <div key={step.title} className="flex w-full max-w-md flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex w-full items-center gap-4 rounded-2xl border border-border/60 bg-card p-5 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400">
                  <step.icon className="h-5.5 w-5.5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
                    Step {i + 1}
                  </p>
                  <h3 className="mt-0.5 font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>

              {i < steps.length - 1 && (
                <ArrowDown className="my-3 h-5 w-5 text-brand-500/40" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
