import { Card } from "@/components/blog/Card";
import Layout from "@/components/blog/Layout";
import { Section } from "@/components/blog/Section";

export default function ConsumerLawNote() {
  return (
    <Layout title="Faaliyet Alanı: Tüketici Hukuku" icon="TH">
      <Section id="giris" title="Giriş">
        <p>
          Tüketici hukuku, tüketicilerin mal ve hizmet alımlarında haklarını
          koruyan ve satıcılarla olan ilişkilerini düzenleyen hukuk dalıdır. Bu
          alan, tüketicilerin güvenli, adil ve şeffaf bir şekilde işlem
          yapmasını sağlamayı amaçlar.
        </p>
      </Section>

      <Section id="kapsam" title="Kapsam ve Önemi">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="text-xl font-semibold mb-2">Tüketici Hakları</h3>
            <p>
              Tüketiciler, bilgi alma, seçim özgürlüğü, güvenlik, şikayet hakkı
              ve tazminat gibi temel haklara sahiptir. Bu haklar, 6502 sayılı
              Tüketicinin Korunması Hakkında Kanun ile düzenlenir.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Satıcı Sorumluluğu</h3>
            <p>
              Satıcılar, ürün ve hizmetlerin ayıpsız olmasını, reklamların
              gerçeğe uygunluğunu ve tüketicilere karşı dürüstlük ilkesini
              sağlamakla yükümlüdür.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="uyusmazliklar" title="Yaygın Uyuşmazlıklar">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="text-xl font-semibold mb-2">Ayıplı Mal ve Hizmet</h3>
            <p>
              Satın alınan ürün veya hizmetin beklenen kalite ve standartlara
              uymaması durumunda ortaya çıkan ihtilaflar.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Cayma Hakkı</h3>
            <p>
              İnternet üzerinden veya kapıdan satışlarda tüketicinin sözleşmeden
              cayma hakkı kullanımı.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Tazminat Talepleri</h3>
            <p>
              Tüketicinin uğradığı maddi veya manevi zararlar için satıcıya
              karşı açılan davalar.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">
              Haksız Ticari Uygulamalar
            </h3>
            <p>
              Yanıltıcı reklamlar, aldatıcı kampanyalar veya haksız sözleşme
              şartları ile ilgili uyuşmazlıklar.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="surec" title="Tüketici Hukuku Süreci">
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <span className="font-medium">Şikayet Başvurusu:</span> Tüketici,
            satıcıya veya hizmet sağlayıcıya şikayetini iletir.
          </li>
          <li>
            <span className="font-medium">Tüketici Hakem Heyeti:</span> Belirli
            bir miktar altındaki uyuşmazlıklar için tüketici hakem heyetine
            başvurulur.
          </li>
          <li>
            <span className="font-medium">Yargı Yolu:</span> Anlaşmazlığın
            çözülememesi durumunda tüketici mahkemelerine dava açılır.
          </li>
        </ol>
      </Section>

      <Section id="sonuc" title="Sonuç">
        <p>
          Tüketici hukuku, tüketicilerin ekonomik ve sosyal haklarını korurken,
          piyasada adil bir rekabet ortamı oluşturmayı hedefler. Bilinçli
          tüketiciler ve sorumlu satıcılar, bu alanda dengeli bir ilişki
          kurulmasını sağlar.
        </p>
        <p className="text-sm text-slate-600">
          Bu not, genel bilgilendirme amacıyla hazırlanmıştır.
        </p>
      </Section>
    </Layout>
  );
}
