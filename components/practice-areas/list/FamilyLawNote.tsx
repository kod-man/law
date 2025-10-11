import { Card } from "@/components/blog/Card";
import Layout from "@/components/blog/Layout";
import { Section } from "@/components/blog/Section";

export default function FamilyLawNote() {
  return (
    <Layout title="Faaliyet Alanı: Aile Hukuku" icon="AH">
      <Section id="giris" title="Giriş">
        <p>
          Aile hukuku, aile bireyleri arasındaki ilişkileri düzenleyen, evlilik,
          boşanma, nafaka, velayet ve mal paylaşımı gibi konuları kapsayan hukuk
          dalıdır. Bu alan, aile birliğinin korunması ve bireylerin haklarının
          güvence altına alınmasını amaçlar.
        </p>
      </Section>

      <Section id="kapsam" title="Kapsam ve Önemi">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="text-xl font-semibold mb-2">
              Aile Birliğinin Korunması
            </h3>
            <p>
              Evlilik sözleşmeleri, aile içi ilişkiler ve çocukların korunması,
              aile hukukunun temel taşlarındandır.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Bireysel Haklar</h3>
            <p>
              Eşlerin ve çocukların maddi ve manevi hakları, aile hukukunda adil
              bir şekilde düzenlenir ve korunur.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="uyusmazliklar" title="Yaygın Uyuşmazlıklar">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="text-xl font-semibold mb-2">Boşanma Davaları</h3>
            <p>
              Evliliğin sona ermesiyle ilgili anlaşmalı veya çekişmeli boşanma
              süreçleri.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Nafaka ve Tazminat</h3>
            <p>
              Boşanma sonrası nafaka talepleri ve maddi/manevi tazminat
              davaları.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Velayet ve Vesayet</h3>
            <p>
              Çocukların velayeti ve korunmaya muhtaç bireyler için vesayet
              davaları.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Mal Paylaşımı</h3>
            <p>
              Evlilik süresince edinilen malların paylaşımıyla ilgili
              uyuşmazlıklar.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="surec" title="Aile Hukuku Süreci">
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <span className="font-medium">Başvuru:</span> Taraflar, uyuşmazlık
            için avukat aracılığıyla veya doğrudan mahkemeye başvurur.
          </li>
          <li>
            <span className="font-medium">Arabuluculuk:</span> Bazı durumlarda,
            anlaşmazlıkların çözümü için arabuluculuk süreci başlatılır.
          </li>
          <li>
            <span className="font-medium">Yargı Yolu:</span> Anlaşmazlığın
            çözülememesi durumunda aile mahkemesinde dava süreci yürütülür.
          </li>
        </ol>
      </Section>

      <Section id="sonuc" title="Sonuç">
        <p>
          Aile hukuku, aile bireylerinin haklarını korurken, aile birliğinin
          sürdürülebilirliğini ve bireylerin refahını sağlamayı hedefler. Doğru
          hukuki süreçlerle, adil ve dengeli çözümler elde edilebilir.
        </p>
        <p className="text-sm text-slate-600">
          Bu not, genel bilgilendirme amacıyla hazırlanmıştır.
        </p>
      </Section>
    </Layout>
  );
}
