"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Does Huccet AI issue fatwas?",
    answer:
      "No. Huccet AI is not a religious authority and does not issue religious rulings. It researches trusted sources and presents information with evidence; it is not a binding fatwa. Consult a qualified scholar for binding matters.",
  },
  {
    question: "Which sources does it use?",
    answer:
      "Huccet AI researches trusted, verifiable Islamic sources, including the Quran, authentic hadith collections, and works by recognized scholars. Each answer clearly identifies the relevant sources.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No. You do not need an account to use the app. Your experience is maintained through an anonymous visitor ID, and no personal information is required.",
  },
  {
    question: "Will it be free?",
    answer:
      "Huccet AI's core features will be available free of charge. Updates about any future additional features will be shared in the app.",
  },
  {
    question: "Which madhhabs are compared in the answers?",
    answer:
      "Depending on the topic, the app presents the views of the major Islamic madhhabs comparatively. This lets you see different approaches together and gain a broader perspective.",
  },
  {
    question: "How is my data protected?",
    answer:
      "Your privacy is a priority. Your questions are processed without being linked to your identity. See our Privacy Policy for more information.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Find answers to common questions about Huccet AI.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <Accordion className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
