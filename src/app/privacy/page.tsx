import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: `${siteConfig.name} gizlilik politikası — verilerinizin nasıl işlendiği ve korunduğu hakkında bilgi edinin.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <LegalPage title="Gizlilik Politikası" updatedAt="11 Temmuz 2026">
          <p>
            Bu Gizlilik Politikası, Hüccet AI mobil uygulamasını
            (&ldquo;Uygulama&rdquo;, &ldquo;Hüccet AI&rdquo;, &ldquo;biz&rdquo;)
            kullanırken kişisel verilerinizin nasıl toplandığını,
            kullanıldığını ve korunduğunu açıklamaktadır. Uygulamayı
            kullanarak bu politikada belirtilen uygulamaları kabul etmiş
            olursunuz.
          </p>

          <h2>1. Topladığımız Bilgiler</h2>
          <p>
            Hüccet AI, kullanıcı hesabı oluşturmanızı gerektirmez. Buna
            rağmen uygulamanın çalışması ve geliştirilmesi için aşağıdaki
            sınırlı veriler toplanabilir:
          </p>
          <ul>
            <li>
              <strong>Anonim Ziyaretçi Kimliği:</strong> Cihazınıza özgü,
              kimliğinizi doğrudan ifşa etmeyen anonim bir tanımlayıcı
              (visitor ID) oluşturulur. Bu kimlik, oturumlar arasında
              tutarlı bir deneyim sağlamak ve kötüye kullanımı önlemek
              amacıyla kullanılır.
            </li>
            <li>
              <strong>Kullanım Verileri:</strong> Uygulama içinde sorulan
              sorular, görüntülenen ekranlar ve etkileşim istatistikleri
              gibi anonimleştirilmiş kullanım verileri toplanabilir.
            </li>
            <li>
              <strong>Cihaz ve Teknik Bilgiler:</strong> İşletim sistemi
              sürümü, uygulama sürümü, cihaz modeli ve çökme (crash)
              raporları gibi teknik veriler, hizmet kalitesini artırmak
              için toplanabilir.
            </li>
            <li>
              <strong>Analitik Veriler:</strong> Uygulamanın nasıl
              kullanıldığını anlamak amacıyla toplu ve anonim analitik
              veriler işlenir.
            </li>
          </ul>

          <h2>2. Firebase ve Üçüncü Taraf Hizmetler</h2>
          <p>
            Uygulamamız, Google tarafından sağlanan Firebase altyapısını
            (ör. Firebase Analytics, Firebase Crashlytics, Firebase
            Authentication altyapısı) kullanabilir. Firebase, yukarıda
            belirtilen anonim kullanım ve teknik verilerin toplanmasına ve
            işlenmesine yardımcı olur. Firebase&apos;in veri işleme
            uygulamaları hakkında daha fazla bilgi için Google&apos;ın kendi
            gizlilik politikasını inceleyebilirsiniz.
          </p>

          <h2>3. Çerezler ve Benzeri Teknolojiler</h2>
          <p>
            Web sitemiz, temel işlevsellik ve anonim ziyaretçi analitiği
            için sınırlı sayıda çerez veya benzeri yerel depolama
            teknolojileri kullanabilir. Bu teknolojiler kişisel
            kimliğinizi belirlemek amacıyla kullanılmaz. Tarayıcı
            ayarlarınızdan çerezleri yönetebilir veya devre dışı
            bırakabilirsiniz.
          </p>

          <h2>4. Verilerin Kullanım Amacı</h2>
          <p>Topladığımız veriler yalnızca aşağıdaki amaçlarla kullanılır:</p>
          <ul>
            <li>Uygulamanın işlevselliğini sağlamak ve sürdürmek</li>
            <li>Hizmet kalitesini analiz etmek ve geliştirmek</li>
            <li>Teknik hataları tespit etmek ve gidermek</li>
            <li>Kötüye kullanımı ve güvenlik ihlallerini önlemek</li>
          </ul>
          <p>
            Verileriniz hiçbir şekilde üçüncü taraflara pazarlama
            amacıyla satılmaz veya kiralanmaz.
          </p>

          <h2>5. Verilerin Saklanması ve Güvenliği</h2>
          <p>
            Verileriniz, yetkisiz erişime, kayba veya kötüye kullanıma
            karşı makul teknik ve idari önlemlerle korunur. Veriler,
            yasal olarak gerekli olmadığı sürece, işlevsel amaç için
            gerekli olduğu kadar saklanır.
          </p>

          <h2>6. Dini İçerik ve Sorular Hakkında Bir Not</h2>
          <p>
            Uygulamaya girdiğiniz sorular, size daha iyi ve kanıt temelli
            cevaplar sunabilmek amacıyla işlenebilir. Bu sorular kimliğinizle
            ilişkilendirilmeden, anonim ziyaretçi kimliği üzerinden
            değerlendirilir.
          </p>

          <h2>7. Çocukların Gizliliği</h2>
          <p>
            Uygulamamız, 13 yaşın altındaki çocuklardan bilerek kişisel
            veri toplamamaktadır. Böyle bir durumun farkına varmamız
            halinde ilgili verileri derhal sileriz.
          </p>

          <h2>8. Haklarınız</h2>
          <p>
            Yürürlükteki veri koruma mevzuatına bağlı olarak, verilerinize
            erişme, düzeltme veya silinmesini talep etme hakkına sahip
            olabilirsiniz. Bu tür talepler için bizimle iletişime
            geçebilirsiniz.
          </p>

          <h2>9. Politika Değişiklikleri</h2>
          <p>
            Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz.
            Değişiklikler bu sayfada yayınlandığı anda yürürlüğe girer.
            Önemli değişikliklerde uygulama içi bildirim yoluyla sizi
            bilgilendirebiliriz.
          </p>

          <h2>10. İletişim</h2>
          <p>
            Gizlilik politikamız hakkında sorularınız için bize uygulama
            içindeki iletişim kanallarından ulaşabilirsiniz.
          </p>
        </LegalPage>
      </main>
      <SiteFooter />
    </>
  );
}
