import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Destek",
  description: `${siteConfig.name} uygulamasıyla ilgili destek ve sıkça sorulan sorular.`,
};

export default function SupportPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <LegalPage title="Destek" updatedAt="16 Ağustos 2026">
          <p>
            Huccet AI ile ilgili bir sorunuz, geri bildiriminiz veya karşılaştığınız
            bir sorun mu var? Aşağıdaki bilgiler size yardımcı olabilir.
          </p>
          <h2>1. Uygulama Nasıl Çalışır?</h2>
          <p>
            Huccet AI, sorduğunuz İslami konulardaki soruları yapay zekânın genel
            bilgisine dayanarak yanıtlayan bir araştırma yardımcısıdır. Uygulama
            bir fetva makamı değildir; bağlayıcı, kişisel veya hassas dini
            konularda mutlaka yetkin bir din alimine danışın. Daha fazla bilgi
            için{" "}
            <a href="/terms" className="underline underline-offset-2">
              Kullanım Şartları
            </a>{" "}
            sayfamıza bakabilirsiniz.
          </p>
          <h2>2. Hesap Gerektirmez</h2>
          <p>
            Uygulamayı kullanmak için hesap oluşturmanıza gerek yoktur. Herhangi
            bir giriş sorunu yaşamamalısınız; sorun devam ederse aşağıdaki
            kanallardan bize ulaşabilirsiniz.
          </p>
          <h2>3. Sık Karşılaşılan Sorunlar</h2>
          <ul>
            <li>
              <strong>Uygulama yanıt vermiyor veya yavaş:</strong> İnternet
              bağlantınızı kontrol edin ve uygulamayı yeniden başlatmayı deneyin.
            </li>
            <li>
              <strong>Cevap yanlış veya eksik görünüyor:</strong> Cevaplar yapay
              zekânın genel bilgisine dayanır ve doğrulanmış bir kaynağa karşı
              kontrol edilmez; bu nedenle hatalı olabilir. Bağlayıcı konularda
              mutlaka bir din alimine danışın.
            </li>
            <li>
              <strong>Sohbet geçmişim kayboldu:</strong> Sohbet geçmişi
              varsayılan olarak yalnızca cihazınızda saklanır; uygulamayı silmek
              veya cihaz değiştirmek geçmişinizin silinmesine yol açabilir.
            </li>
          </ul>
          <h2>4. Gizlilik</h2>
          <p>
            Verilerinizin nasıl işlendiği hakkında bilgi için{" "}
            <a href="/privacy" className="underline underline-offset-2">
              Gizlilik Politikası
            </a>{" "}
            sayfamızı inceleyebilirsiniz.
          </p>
          <h2>5. Bize Ulaşın</h2>
          <p>
            Başka bir sorunuz, geri bildiriminiz veya karşılaştığınız bir sorun
            varsa{" "}
            <a
              href="mailto:info@batucodes.com"
              className="underline underline-offset-2"
            >
              info@batucodes.com
            </a>{" "}
            adresinden bize ulaşabilirsiniz.
          </p>
        </LegalPage>
      </main>
      <SiteFooter />
    </>
  );
}
