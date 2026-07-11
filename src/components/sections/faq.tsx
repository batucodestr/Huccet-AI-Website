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
    question: "Hüccet AI fetva verir mi?",
    answer:
      "Hayır. Hüccet AI bir din görevlisi veya fetva makamı değildir ve dini hüküm üretmez. Uygulama, güvenilir kaynakları araştırarak size delilleriyle birlikte bilgi sunar; bağlayıcı fetva niteliği taşımaz. Bağlayıcı konular için mutlaka yetkin bir alime danışılmalıdır.",
  },
  {
    question: "Hangi kaynakları kullanıyor?",
    answer:
      "Hüccet AI, Kur'an-ı Kerim, sahih hadis kaynakları ve tanınmış alimlerin eserleri gibi güvenilir ve doğrulanabilir İslami kaynaklardan araştırma yapar. Her cevapta ilgili kaynak açıkça belirtilir.",
  },
  {
    question: "Hesap oluşturmam gerekiyor mu?",
    answer:
      "Hayır, uygulamayı kullanmak için bir hesap oluşturmanıza gerek yoktur. Deneyiminiz anonim bir ziyaretçi kimliği üzerinden sürdürülür ve kişisel bilgi talep edilmez.",
  },
  {
    question: "Ücretsiz olacak mı?",
    answer:
      "Hüccet AI'nin temel özellikleri ücretsiz olarak sunulacaktır. İlerleyen dönemde sunulabilecek ek özellikler hakkında güncellemeler uygulama üzerinden paylaşılacaktır.",
  },
  {
    question: "Cevaplar hangi mezheplere göre karşılaştırılıyor?",
    answer:
      "Uygulama, konuya göre başlıca İslami mezheplerin görüşlerini karşılaştırmalı olarak sunar. Böylece farklı yaklaşımları bir arada görebilir ve daha geniş bir bakış açısı edinebilirsiniz.",
  },
  {
    question: "Verilerim nasıl korunuyor?",
    answer:
      "Gizliliğiniz önceliğimizdir. Sorularınız kimliğinizle ilişkilendirilmeden işlenir. Detaylı bilgi için Gizlilik Politikası sayfamızı inceleyebilirsiniz.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Sıkça sorulan sorular
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Aklınıza takılan başka bir şey varsa bize ulaşmaktan çekinmeyin.
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
