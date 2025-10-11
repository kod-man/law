import { Card } from "@/components/blog/Card";
import Layout from "@/components/blog/Layout";
import { Section } from "@/components/blog/Section";

export default function IntellectualPropertyLawNote() {
  return (
    <Layout title="Faaliyet Alanı: Fikri Mülkiyet Hukuku" icon="FMH">
      <Section id="giris" title="Giriş">
        <p>
          Fikri mülkiyet hukuku, yaratıcı eserler, buluşlar, markalar ve
          tasarımlar gibi zihinsel ürünlerin korunmasını düzenleyen hukuk
          dalıdır. Bu alan, yaratıcıların ve yenilikçilerin haklarını güvence
          altına alarak inovasyonu teşvik etmeyi amaçlar.
        </p>
      </Section>

      <Section id="kapsam" title="Kapsam ve Önemi">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="text-xl font-semibold mb-2">Fikri Haklar</h3>
            <p>
              Telif hakları, patentler, markalar ve endüstriyel tasarımlar gibi
              fikri mülkiyet unsurları, yaratıcıların eserlerini koruma altına
              alır.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Ticari Değer</h3>
            <p>
              Fikri mülkiyet, işletmelerin marka değerini ve rekabet gücünü
              artırır, aynı zamanda ekonomik büyümeye katkıda bulunur.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="uyusmazliklar" title="Yaygın Uyuşmazlıklar">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="text-xl font-semibold mb-2">
              Telif Hakkı İhlalleri
            </h3>
            <p>
              Eserlerin izinsiz kullanımı, kopyalanması veya dağıtılmasıyla
              ilgili davalar.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Marka İhlalleri</h3>
            <p>
              Markaların taklit edilmesi veya izinsiz kullanımıyla ilgili
              uyuşmazlıklar.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Patent Davaları</h3>
            <p>
              Buluşların izinsiz kullanımı veya patent haklarına tecavüz
              davaları.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Tasarım İhlalleri</h3>
            <p>
              Endüstriyel tasarımların kopyalanması veya haksız kullanımıyla
              ilgili ihtilaflar.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="surec" title="Fikri Mülkiyet Hukuku Süreci">
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <span className="font-medium">Tescil:</span> Marka, patent veya
            tasarımın ilgili kurumlara kaydedilmesi.
          </li>
          <li>
            <span className="font-medium">İhlal Tespiti:</span> Fikri mülkiyet
            haklarına yönelik ihlallerin belirlenmesi ve delillendirilmesi.
          </li>
          <li>
            <span className="font-medium">Yargı Yolu:</span> İhlallerin
            önlenmesi, tazminat veya diğer talepler için mahkemeye başvurulması.
          </li>
        </ol>
      </Section>

      <Section id="sonuc" title="Sonuç">
        <p>
          Fikri mülkiyet hukuku, yaratıcı eserlerin ve yeniliklerin korunmasını
          sağlayarak hem bireysel hem de ticari hakları güvence altına alır.
          Doğru hukuki koruma, inovasyon ve yaratıcılığı destekler.
        </p>
        <p className="text-sm text-slate-600">
          Bu not, genel bilgilendirme amacıyla hazırlanmıştır.
        </p>
      </Section>
    </Layout>
  );
}
