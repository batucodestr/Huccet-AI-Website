import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kullanım Şartları",
  description: `${siteConfig.name} kullanım şartları ve Uygulamayı kullanım koşulları.`,
};

export default function TermsOfServicePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <LegalPage title="Kullanım Şartları" updatedAt="16 Ağustos 2026">
          <p>
            Bu Kullanım Şartları (&ldquo;Şartlar&rdquo;), Huccet AI mobil uygulamasının
            (&ldquo;Uygulama&rdquo;) kullanımını düzenler. Uygulamayı indirerek veya
            kullanarak bu Şartları kabul etmiş olursunuz. Kabul etmiyorsanız
            lütfen Uygulamayı kullanmayın.
          </p>
          <h2>1. Hizmetin Tanımı</h2>
          <p>
            Huccet AI, İslami konularda sorduğunuz sorulara yapay zekânın genel
            bilgisine dayanarak yanıt üreten bir araştırma yardımcısıdır.
            Uygulama, sorularınızı doğrudan üçüncü taraf bir yapay zeka
            servisine (OpenRouter) iletir; cevaplar herhangi bir kaynak
            veritabanına karşı doğrulanmaz.
          </p>
          <h2>2. Önemli Uyarı: Fetva Makamı Değildir</h2>
          <p>
            <strong>
              Huccet AI resmi bir dini otorite, fetva makamı veya din alimi
              değildir ve öyle kabul edilmemelidir.
            </strong>{" "}
            Uygulama tarafından sağlanan içerik, bir yapay zeka modelinin genel
            bilgisinden üretilir ve doğrulanmış bir kaynak sistemine karşı
            kontrol edilmez. Bu içerik:
          </p>
          <ul>
            <li>Bağlayıcı bir dini hüküm (fetva) niteliği taşımaz,</li>
            <li>
              Yetkin din alimlerinin veya resmi dini kurumların görüşlerinin
              yerini tutmaz ve
            </li>
            <li>
              Kişisel, hukuki veya dini kararların tek dayanağı olarak
              kullanılmamalıdır.
            </li>
          </ul>
          <p>
            Bağlayıcı, kişisel veya hassas dini konularda mutlaka yetkin ve
            güvenilir bir din alimine danışmanızı öneririz.
          </p>
          <h2>3. Kabul Edilebilir Kullanım</h2>
          <p>Uygulamayı kullanırken şunları kabul edersiniz:</p>
          <ul>
            <li>Uygulamayı yasa dışı veya yetkisiz amaçlarla kullanmamayı;</li>
            <li>
              Uygulamayı aksatacak veya üzerine aşırı yük bindirecek
              faaliyetlerde bulunmamayı;
            </li>
            <li>
              Uygulama aracılığıyla elde edilen içeriği resmi bir fetva veya
              dini otorite kararı olarak sunmamayı; ve
            </li>
            <li>
              Uygulamayı başkalarının haklarını ihlal edecek şekilde
              kullanmamayı.
            </li>
          </ul>
          <h2>4. Fikri Mülkiyet</h2>
          <p>
            Uygulamanın tasarımı, logosu, markası ve yazılımına ilişkin tüm
            fikri mülkiyet hakları Huccet AI&apos;ye veya lisans verenlerine
            aittir. Bu unsurlar önceden yazılı izin alınmadan çoğaltılamaz veya
            dağıtılamaz.
          </p>
          <h2>5. Hizmet Sınırlamaları ve Değişiklikleri</h2>
          <p>
            Hizmetin kesintisiz, hatasız veya her zaman erişilebilir olacağını
            garanti etmiyoruz. Özellikleri, içeriği veya erişilebilirliği önceden
            bildirimde bulunmaksızın değiştirme, askıya alma veya sonlandırma
            hakkını saklı tutarız.
          </p>
          <h2>6. Sorumluluğun Sınırlandırılması</h2>
          <p>
            Yasaların izin verdiği azami ölçüde, Huccet AI, Uygulama
            aracılığıyla sunulan içeriğin kullanımından kaynaklanan doğrudan
            veya dolaylı zararlardan sorumlu değildir. Uygulama içeriği,
            mutlak doğruluk veya eksiksizlik garantisi olmaksızın &ldquo;olduğu
            gibi&rdquo; sunulur.
          </p>
          <h2>7. Üçüncü Taraf Bağlantıları ve Kaynaklar</h2>
          <p>
            Uygulama, üçüncü taraf kaynaklara atıfta bulunabilir. Huccet AI bu
            kaynakların içeriğinden sorumlu değildir; her kaynak kendi bağlamı
            içinde değerlendirilmelidir.
          </p>
          <h2>8. Bu Şartlardaki Değişiklikler</h2>
          <p>
            Bu Şartları zaman zaman güncelleyebiliriz. Güncellenmiş Şartlar bu
            sayfada yayınlandığında yürürlüğe girer. Uygulamayı kullanmaya
            devam etmeniz, güncellenmiş Şartları kabul ettiğiniz anlamına gelir.
          </p>
          <h2>9. Uygulanacak Hukuk</h2>
          <p>
            Bu Şartlar yürürlükteki yerel hukuka tabidir ve buna uygun şekilde
            yorumlanır. Bu Şartlardan doğabilecek uyuşmazlıklarda yetkili
            mahkemeler ve makamlar geçerlidir.
          </p>
          <h2>10. İletişim</h2>
          <p>
            Bu Kullanım Şartları ile ilgili sorularınız için{" "}
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
