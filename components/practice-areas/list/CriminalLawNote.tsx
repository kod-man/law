import { Card } from "@/components/blog/Card";
import Layout from "@/components/blog/Layout";
import { Section } from "@/components/blog/Section";

export default function CriminalLawNote() {
  return (
    <Layout title="Faaliyet Alanı: Ceza Hukuku" icon="CH">
      <Section id="giris" title="Giriş">
        <p>
          Ceza hukuku, bireylerin ve toplumun güvenliğini sağlamak amacıyla suç
          teşkil eden davranışları ve bu davranışlara uygulanacak yaptırımları
          düzenleyen hukuk dalıdır. Ceza hukuku, kamu düzenini koruma ve suç
          işlenmesini önleme hedefini taşır.
        </p>
      </Section>

      <Section id="kapsam" title="Kapsam ve Önemi">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="text-xl font-semibold mb-2">Suç ve Ceza</h3>
            <p>
              Ceza hukuku, hangi fiillerin suç sayılacağını ve bu suçlara
              uygulanacak cezaları tanımlar. Türk Ceza Kanunu (TCK) bu konuda
              temel düzenleyici kaynaktır.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Hak ve Özgürlükler</h3>
            <p>
              Bireylerin temel hak ve özgürlüklerini korurken, suç işleyenlerin
              adil bir şekilde yargılanmasını sağlar. Masumiyet karinesi temel
              bir ilkedir.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="dava-turleri" title="Yaygın Ceza Davaları">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="text-xl font-semibold mb-2">
              Kişilere Karşı Suçlar
            </h3>
            <p>
              Öldürme, yaralama, tehdit ve hakaret gibi bireylerin güvenliğine
              yönelik suçlar.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">
              Malvarlığına Karşı Suçlar
            </h3>
            <p>
              Hırsızlık, dolandırıcılık, gasp ve mala zarar verme gibi suçlar.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Topluma Karşı Suçlar</h3>
            <p>
              Uyuşturucu ticareti, çevreye zarar verme ve kamu düzenini bozma
              suçları.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Bilişim Suçları</h3>
            <p>
              Veri hırsızlığı, hacking ve internet üzerinden işlenen diğer
              suçlar.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="adimlar" title="Ceza Hukuku Süreci">
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <span className="font-medium">Soruşturma:</span> Suç iddiasının
            araştırılması, delil toplanması ve şüphelilerin belirlenmesi.
          </li>
          <li>
            <span className="font-medium">Kovuşturma:</span> Savcılık tarafından
            iddianame hazırlanarak dava açılır ve yargılama başlar.
          </li>
          <li>
            <span className="font-medium">Yargılama:</span> Mahkemede deliller
            değerlendirilir, savunma alınır ve karar verilir.
          </li>
        </ol>
      </Section>

      <Section id="sonuc" title="Sonuç">
        <p>
          Ceza hukuku, toplum düzenini korurken bireylerin hak ve özgürlüklerini
          de gözetir. Adil bir yargılama süreci, suçun önlenmesi ve
          cezalandırılmasında temel bir unsurdur.
        </p>
        <p className="text-sm text-slate-600">
          Bu not, genel bilgilendirme amacıyla hazırlanmıştır.
        </p>
      </Section>
    </Layout>
  );
}
