import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description: `${siteConfig.name} kullanım koşulları — uygulamayı kullanırken uymanız gereken şartlar.`,
};

export default function TermsOfServicePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <LegalPage title="Kullanım Koşulları" updatedAt="11 Temmuz 2026">
          <p>
            Bu Kullanım Koşulları (&ldquo;Koşullar&rdquo;), Hüccet AI mobil
            uygulamasının (&ldquo;Uygulama&rdquo;) kullanımını
            düzenlemektedir. Uygulamayı indirerek veya kullanarak bu
            Koşulları kabul etmiş sayılırsınız. Koşulları kabul
            etmiyorsanız lütfen Uygulamayı kullanmayınız.
          </p>

          <h2>1. Hizmetin Tanımı</h2>
          <p>
            Hüccet AI, güvenilir İslami kaynakları araştıran ve
            kullanıcılara delilleriyle birlikte bilgi sunan, yapay zekâ
            destekli bir araştırma asistanıdır. Uygulama, kullanıcıların
            İslami konularda kaynaklara dayalı, şeffaf bir şekilde bilgi
            edinmesine yardımcı olmayı amaçlar.
          </p>

          <h2>2. Önemli Uyarı: Fetva Makamı Değildir</h2>
          <p>
            <strong>
              Hüccet AI, resmi bir dini otorite, fetva makamı veya din
              görevlisi değildir ve bu şekilde değerlendirilmemelidir.
            </strong>{" "}
            Uygulama tarafından sunulan içerikler; yapay zekâ destekli bir
            araştırma aracının, kamuya açık ve güvenilir kabul edilen
            kaynaklardan derlediği bilgilerden ibarettir. Bu içerikler:
          </p>
          <ul>
            <li>Bağlayıcı bir dini hüküm (fetva) teşkil etmez,</li>
            <li>
              Yetkin din alimlerinin veya müftülüklerin görüşünün yerine
              geçmez,
            </li>
            <li>
              Kişisel, hukuki veya dini kararlarınız için tek başına
              dayanak olarak kullanılmamalıdır.
            </li>
          </ul>
          <p>
            Bağlayıcı, kişiye özel veya hassas dini konularda mutlaka
            yetkin ve güvenilir bir alime danışmanızı önemle tavsiye
            ederiz.
          </p>

          <h2>3. Kullanım Şartları</h2>
          <p>Uygulamayı kullanırken aşağıdaki kurallara uymayı kabul edersiniz:</p>
          <ul>
            <li>Uygulamayı yasa dışı veya yetkisiz amaçlarla kullanmamak,</li>
            <li>
              Uygulamanın işleyişini bozacak veya aşırı yük bindirecek
              faaliyetlerde bulunmamak,
            </li>
            <li>
              Elde edilen içerikleri yanlış bir şekilde resmi fetva veya
              dini otorite kararı olarak sunmamak,
            </li>
            <li>
              Uygulamayı, başkalarının haklarını ihlal edecek şekilde
              kullanmamak.
            </li>
          </ul>

          <h2>4. Fikri Mülkiyet</h2>
          <p>
            Uygulama içerisindeki tasarım, logo, marka ve yazılıma ilişkin
            tüm fikri mülkiyet hakları Hüccet AI&apos;ye veya lisans
            verenlerine aittir. Önceden yazılı izin alınmaksızın bu
            unsurlar çoğaltılamaz veya dağıtılamaz.
          </p>

          <h2>5. Hizmetin Sınırlamaları ve Değişiklikler</h2>
          <p>
            Hizmetin kesintisiz, hatasız veya her zaman erişilebilir
            olacağını garanti etmiyoruz. Uygulamanın özelliklerini,
            içeriğini veya kullanılabilirliğini önceden bildirimde
            bulunmaksızın değiştirme, askıya alma veya sonlandırma hakkını
            saklı tutarız.
          </p>

          <h2>6. Sorumluluğun Sınırlandırılması</h2>
          <p>
            Hüccet AI, uygulama üzerinden sunulan içeriklerin kullanımından
            doğabilecek doğrudan veya dolaylı zararlardan, yasaların izin
            verdiği azami ölçüde sorumlu tutulamaz. Uygulama içeriği
            &ldquo;olduğu gibi&rdquo; sunulmaktadır ve mutlak doğruluk veya
            eksiksizlik garantisi verilmemektedir.
          </p>

          <h2>7. Üçüncü Taraf Bağlantıları ve Kaynaklar</h2>
          <p>
            Uygulama, üçüncü taraf kaynaklara referans verebilir. Bu
            kaynakların içeriğinden Hüccet AI sorumlu değildir; her kaynak
            kendi orijinal bağlamında değerlendirilmelidir.
          </p>

          <h2>8. Koşullarda Değişiklik</h2>
          <p>
            Bu Kullanım Koşullarını zaman zaman güncelleyebiliriz.
            Güncellenmiş koşullar bu sayfada yayınlandığı andan itibaren
            geçerli olur. Uygulamayı kullanmaya devam etmeniz, güncellenmiş
            koşulları kabul ettiğiniz anlamına gelir.
          </p>

          <h2>9. Uygulanacak Hukuk</h2>
          <p>
            Bu Koşullar, ilgili yerel mevzuata tabi olup buna göre
            yorumlanır. Bu Koşullardan doğabilecek uyuşmazlıklarda yetkili
            mahkemeler ve merciler esas alınır.
          </p>

          <h2>10. İletişim</h2>
          <p>
            Kullanım Koşulları hakkında sorularınız için bize uygulama
            içindeki iletişim kanallarından ulaşabilirsiniz.
          </p>
        </LegalPage>
      </main>
      <SiteFooter />
    </>
  );
}
