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
    title: "Kanıt Tabanlı Cevaplar",
    description:
      "Her cevap; ayet, hadis veya güvenilir alim görüşü gibi somut delillerle desteklenir.",
  },
  {
    icon: BookMarked,
    title: "Güvenilir Kaynaklar",
    description:
      "Yalnızca alanında tanınan, doğrulanabilir İslami kaynaklardan araştırma yapılır.",
  },
  {
    icon: Eye,
    title: "Şeffaf Kaynak Gösterimi",
    description:
      "Cevabın hangi kaynaktan geldiğini her zaman açıkça görebilir, kaynağa kendiniz ulaşabilirsiniz.",
  },
  {
    icon: Scale,
    title: "Mezhep Görüşlerini Karşılaştırma",
    description:
      "Farklı mezheplerin konuya yaklaşımını yan yana karşılaştırarak daha geniş bir bakış açısı edinin.",
  },
  {
    icon: Sparkles,
    title: "Yapay Zekâ Destekli Araştırma",
    description:
      "Gelişmiş yapay zekâ, geniş kaynak havuzunda sizin için hızlı ve derinlemesine araştırma yapar.",
  },
  {
    icon: Lock,
    title: "Gizlilik Odaklı Deneyim",
    description:
      "Sorularınız kimliğinizle ilişkilendirilmeden, gizliliğinizi önceleyen bir yapıda işlenir.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Araştırmanızı güçlendiren özellikler
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Hüccet AI, İslami konularda güvenilir ve şeffaf bir araştırma
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
