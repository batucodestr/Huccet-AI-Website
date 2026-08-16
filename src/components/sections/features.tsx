"use client";

import { motion } from "framer-motion";
import {
  MessageCircleQuestion,
  Info,
  Lock,
  Scale,
  UserX,
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
    icon: MessageCircleQuestion,
    title: "Genel Bilgi Asistanı",
    description:
      "Sorularınız yapay zekânın genel bilgisiyle yanıtlanır; doğrulanmış bir kaynak sistemine karşı kontrol edilmez.",
  },
  {
    icon: Info,
    title: "Fetva Makamı Değil",
    description:
      "Huccet AI bir din alimi veya resmi otorite değildir. Bağlayıcı konularda mutlaka bir uzmana danışın.",
  },
  {
    icon: Scale,
    title: "Mezhep Karşılaştırması",
    description:
      "Bir konudaki farklı mezhep görüşlerini dengeli bir şekilde özetleyerek daha geniş bir bakış açısı sunar.",
  },
  {
    icon: Sparkles,
    title: "Yapay Zeka Destekli",
    description:
      "Sorunuza hızlı ve akıcı bir sohbet deneyimiyle yanıt üretir.",
  },
  {
    icon: UserX,
    title: "Hesap Gerektirmez",
    description:
      "Uygulamayı kullanmak için kayıt olmanıza gerek yoktur; cihazınızda anonim bir kimlik kullanılır.",
  },
  {
    icon: Lock,
    title: "Gizlilik Odaklı Deneyim",
    description:
      "Sorularınız kimliğinizle ilişkilendirilmeden işlenir; gizlilik önceliğimizdir.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Araştırmanıza eşlik eden özellikler
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Huccet AI, İslami konularda dürüst ve şeffaf bir sohbet
            deneyimi sunmak için tasarlandı.
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
