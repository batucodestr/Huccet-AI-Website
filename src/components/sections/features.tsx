"use client";

import { motion } from "framer-motion";
import {
  BookMarked,
  Eye,
  Lock,
  Scale,
  ScrollText,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: ScrollText,
    title: "Evidence-Based Answers",
    description:
      "Every answer is supported by concrete evidence, such as Quranic verses, hadith, or trusted scholarly opinions.",
  },
  {
    icon: BookMarked,
    title: "Trusted Sources",
    description:
      "Research draws only on recognized, verifiable Islamic sources.",
  },
  {
    icon: Eye,
    title: "Transparent Citations",
    description:
      "Always see where an answer comes from and consult the source yourself.",
  },
  {
    icon: Scale,
    title: "Compare Madhhab Perspectives",
    description:
      "Compare how different madhhabs approach a topic side by side for a broader perspective.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Research",
    description:
      "Advanced AI researches a wide source collection quickly and deeply on your behalf.",
  },
  {
    icon: Lock,
    title: "Privacy-Focused Experience",
    description:
      "Your questions are handled without being linked to your identity, with privacy as a priority.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Features that strengthen your research
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Huccet AI is designed to offer a trusted, transparent research
            experience for Islamic topics.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Card className="h-full border-border/60 transition-shadow hover:shadow-lg hover:shadow-brand-950/5">
                <CardHeader>
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                    <feature.icon className="h-5.5 w-5.5" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[15px] leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
