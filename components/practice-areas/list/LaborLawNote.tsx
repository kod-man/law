import { Card } from "@/components/blog/Card";
import Layout from "@/components/blog/Layout";
import { Section } from "@/components/blog/Section";

export default function LaborLawNote() {
  return (
    <Layout title="Faaliyet Alanı: İş Hukuku" icon="IH">
      <Section id="giris" title="Giriş">
        <p>
          İş hukuku, işçi ve işveren arasındaki ilişkileri düzenleyen, çalışma
          koşullarını ve hakları koruyan hukuk dalıdır. Bu alan, iş
          sözleşmeleri, ücret, çalışma süreleri ve işten çıkarma gibi konuları
          kapsar.
        </p>
      </Section>

      <Section id="kapsam" title="Kapsam ve Önemi">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="text-xl font-semibold mb-2">İşçi Hakları</h3>
            <p>
              İşçilerin ücret, izin, güvenli çalışma ortamı ve sosyal güvenlik
              gibi temel hakları, 4857 sayılı İş Kanunu ile korunur.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">
              İşveren Yükümlülükleri
            </h3>
            <p>
              İşverenler, işçilere adil ücret ödeme, güvenli çalışma koşulları
              sağlama ve yasal düzenlemelere uyma yükümlülüğündedir.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="uyusmazliklar" title="Yaygın Uyuşmazlıklar">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="text-xl font-semibold mb-2">Haksız Fesih</h3>
            <p>
              İş sözleşmesinin usulsüz veya haksız şekilde sona erdirilmesiyle
              ilgili davalar.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Ücret Alacakları</h3>
            <p>
              Ödenmeyen maaş, fazla mesai veya diğer ücret talepleriyle ilgili
              uyuşmazlıklar.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">İş Kazaları</h3>
            <p>
              İş yerinde meydana gelen kazalar sonucu maddi ve manevi tazminat
              davaları.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">
              Kıdem ve İhbar Tazminatı
            </h3>
            <p>
              İşten ayrılma durumunda işçinin hak ettiği tazminatlarla ilgili
              ihtilaflar.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="surec" title="İş Hukuku Süreci">
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <span className="font-medium">Uzlaşma ve Arabuluculuk:</span>{" "}
            Uyuşmazlıkların çözümü için öncelikle arabulucuya başvurulur.
          </li>
          <li>
            <span className="font-medium">Başvuru:</span> İşçi veya işveren,
            haklarını talep etmek için ilgili kurumlara veya mahkemelere
            başvurur.
          </li>
          <li>
            <span className="font-medium">Yargı Yolu:</span> Anlaşmazlığın
            çözülememesi durumunda iş mahkemesinde dava açılır.
          </li>
        </ol>
      </Section>

      <Section id="sonuc" title="Sonuç">
        <p>
          İş hukuku, işçi ve işveren arasındaki ilişkilerde adaleti ve dengeyi
          sağlamayı amaçlar. Yasal hakların bilinmesi ve doğru uygulanması,
          çalışma hayatında huzur ve güven ortamı yaratır.
        </p>
        <p className="text-sm text-slate-600">
          Bu not, genel bilgilendirme amacıyla hazırlanmıştır.
        </p>
      </Section>
    </Layout>
  );
}
