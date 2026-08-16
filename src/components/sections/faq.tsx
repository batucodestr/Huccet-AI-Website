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
    question: "Huccet AI fetva veriyor mu?",
    answer:
      "Hayır. Huccet AI bir dini otorite değildir ve dini hüküm (fetva) vermez. Sorularınızı yapay zekânın genel bilgisine dayanarak yanıtlar; bu yanıtlar bağlayıcı bir fetva değildir. Bağlayıcı konularda mutlaka yetkin bir din alimine danışın.",
  },
  {
    question: "Cevaplar hangi kaynaklara dayanıyor?",
    answer:
      "Huccet AI'nin ayrı bir kaynak veritabanı veya doğrulama sistemi yoktur. Sorunuz doğrudan yapay zeka modeline (OpenRouter üzerinden) iletilir ve cevap, modelin eğitim sırasında edindiği genel bilgiden üretilir; belirli bir kaynağa karşı doğrulanmaz.",
  },
  {
    question: "Hesap oluşturmam gerekiyor mu?",
    answer:
      "Hayır. Uygulamayı kullanmak için hesap oluşturmanız gerekmez. Deneyiminiz cihazınızda oluşturulan anonim bir kimlikle sürdürülür ve kişisel bilgi istenmez.",
  },
  {
    question: "Uygulama ücretsiz mi?",
    answer:
      "Huccet AI'nin temel özellikleri ücretsiz olarak sunulacaktır. İleride eklenebilecek ek özelliklerle ilgili güncellemeler uygulama içinde paylaşılacaktır.",
  },
  {
    question: "Cevaplarda hangi mezhepler karşılaştırılıyor?",
    answer:
      "Konuya bağlı olarak uygulama, başlıca İslami mezheplerin görüşlerini dengeli bir şekilde yan yana özetler. Bu, farklı yaklaşımları bir arada görmenizi ve daha geniş bir perspektif kazanmanızı sağlar.",
  },
  {
    question: "Verilerim nasıl korunuyor?",
    answer:
      "Gizliliğiniz önceliğimizdir. Sorularınız kimliğinizle ilişkilendirilmeden, cevap üretmek amacıyla doğrudan OpenRouter'a iletilir. Hesap gerekmez ve sohbet geçmişiniz varsayılan olarak yalnızca cihazınızda saklanır. Daha fazla bilgi için Gizlilik Politikamıza bakın.",
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
            Huccet AI hakkında sık sorulan soruların yanıtlarını bulun.
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
