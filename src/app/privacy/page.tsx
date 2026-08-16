import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: `${siteConfig.name} uygulamasının verilerinizi nasıl işlediğini öğrenin.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <LegalPage title="Gizlilik Politikası" updatedAt="16 Ağustos 2026">
          <p>
            Bu Gizlilik Politikası, Huccet AI mobil uygulamasını (&ldquo;Uygulama&rdquo;,
            &ldquo;Huccet AI&rdquo; veya &ldquo;biz&rdquo;) kullandığınızda kişisel verilerinizin nasıl
            işlendiğini açıklar. Uygulamayı kullanarak bu politikada açıklanan
            uygulamaları kabul etmiş olursunuz.
          </p>
          <h2>1. Uygulamanın Çalışma Şekli</h2>
          <p>
            Huccet AI&apos;nin kendi sunucusu, kaynak veritabanı veya doğrulama
            katmanı yoktur. Uygulamaya yazdığınız soru, cevap üretilmek üzere
            cihazınızdan doğrudan OpenRouter&apos;a (ABD merkezli bağımsız bir yapay
            zeka servis sağlayıcısı, openrouter.ai) gönderilir. Aldığınız cevap,
            yapay zeka modelinin kendi genel bilgisine dayanır; herhangi bir
            kaynak veritabanına karşı doğrulanmaz veya kontrol edilmez.
          </p>
          <p>
            Sorunuz OpenRouter&apos;a yalnızca o anki isteğe cevap üretmek amacıyla
            gönderilir; adınız, e-posta adresiniz veya bir hesapla
            ilişkilendirilmez. OpenRouter&apos;ın verileri nasıl işlediği hakkında
            bilgi için{" "}
            <a
              href="https://openrouter.ai/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              openrouter.ai/privacy
            </a>{" "}
            adresini inceleyebilirsiniz.
          </p>
          <h2>2. Hesap ve Kimlik</h2>
          <p>
            Huccet AI kullanmak için hesap oluşturmanız gerekmez. Uygulama,
            cihazınızda rastgele oluşturulan anonim bir kimlik kullanır; bu
            kimlik adınızı, e-posta adresinizi veya başka bir kişisel bilginizi
            içermez ve sizi doğrudan tanımlamaz.
          </p>
          <h2>3. Sohbet Geçmişi</h2>
          <p>
            Sohbet geçmişiniz varsayılan olarak yalnızca cihazınızda saklanır ve
            bizim sunucularımıza aktarılmaz.
          </p>
          <h2>4. Firebase ve Analitik</h2>
          <p>
            Uygulama içinde Firebase Analytics, Firebase Crashlytics ve Firebase
            Authentication için altyapı bulunsa da bunlar şu anda aktif olarak
            kullanılmamaktadır; ilgili yapılandırma alanları boştur ve hiçbir
            veri toplanmamaktadır. Bu hizmetler ileride etkinleştirilirse, bu
            politika güncellenerek bilgilendirme yapılacaktır.
          </p>
          <h2>5. Reklam ve İzleme</h2>
          <p>
            Uygulama reklam veya reklam amaçlı izleme (ör. IDFA) kullanmaz.
            Verileriniz pazarlama amacıyla üçüncü taraflara satılmaz veya
            kiralanmaz.
          </p>
          <h2>6. Çerezler</h2>
          <p>
            Web sitemiz, temel işlevsellik için sınırlı sayıda çerez veya benzeri
            yerel depolama teknolojisi kullanabilir. Bu teknolojiler sizi
            kişisel olarak tanımlamak için kullanılmaz. Çerezleri tarayıcı
            ayarlarınızdan yönetebilir veya devre dışı bırakabilirsiniz.
          </p>
          <h2>7. Dini İçerik Hakkında Önemli Not</h2>
          <p>
            Huccet AI, sorularınızı doğrulanmış bir kaynak sistemine karşı
            kontrol etmez; cevaplar yapay zekânın genel bilgisine dayanır ve
            hatalı veya eksik olabilir. Uygulama bir fetva makamı değildir.
            Bağlayıcı, kişisel veya hassas dini konularda mutlaka yetkin bir
            din alimine danışın.
          </p>
          <h2>8. Çocukların Gizliliği</h2>
          <p>
            Uygulamamız 13 yaşın altındaki çocuklardan bilerek kişisel veri
            toplamaz. Böyle bir durumdan haberdar olursak, ilgili verileri
            derhal sileriz.
          </p>
          <h2>9. Haklarınız</h2>
          <p>
            Geçerli veri koruma mevzuatına tabi olarak, verilerinize erişim,
            düzeltme veya silme talebinde bulunma hakkınız olabilir. Bu tür
            talepler için Uygulama içindeki iletişim kanalları üzerinden bize
            ulaşabilirsiniz.
          </p>
          <h2>10. Bu Politikadaki Değişiklikler</h2>
          <p>
            Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz.
            Değişiklikler bu sayfada yayınlandığında yürürlüğe girer. Önemli
            değişiklikleri uygulama içi bir bildirimle duyurabiliriz.
          </p>
          <h2>11. İletişim</h2>
          <p>
            Bu Gizlilik Politikası ile ilgili sorularınız için Uygulama
            içindeki iletişim kanalları üzerinden bize ulaşabilirsiniz.
          </p>
        </LegalPage>
      </main>
      <SiteFooter />
    </>
  );
}
