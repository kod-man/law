import { Card } from "@/components/blog/Card";
import Layout from "@/components/blog/Layout";
import { Section } from "@/components/blog/Section";

export default function TrafficAndInsuranceLawNote() {
  return (
    <Layout title="Faaliyet Alanı: Trafik ve Sigorta Hukuku" icon="TSH">
      <Section id="giris" title="Giriş">
        <p>
          Trafik ve sigorta hukuku, trafik kazaları ve sigorta sözleşmelerinden
          kaynaklanan uyuşmazlıkları düzenleyen hukuk dalıdır. Bu alan, maddi ve
          manevi zararların tazmini, sigorta poliçelerinin yorumlanması ve
          trafik kurallarına uyum gibi konuları kapsar.
        </p>
      </Section>

      <Section id="kapsam" title="Kapsam ve Önemi">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="text-xl font-semibold mb-2">Trafik Kazaları</h3>
            <p>
              Trafik kazaları sonucu oluşan maddi hasarlar, yaralanmalar ve
              ölümle sonuçlanan durumlar, bu hukuk dalının temel
              konularındandır.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Sigorta Sözleşmeleri</h3>
            <p>
              Zorunlu trafik sigortası, kasko sigortası ve diğer sigorta
              türleri, tarafların hak ve yükümlülüklerini düzenler.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="uyusmazliklar" title="Yaygın Uyuşmazlıklar">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="text-xl font-semibold mb-2">Maddi Tazminat</h3>
            <p>
              Trafik kazası sonucu araç hasarı, tedavi masrafları veya maluliyet
              nedeniyle talep edilen tazminatlar.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Manevi Tazminat</h3>
            <p>Kazalar sonucu yaşanan duygusal zararlar için açılan davalar.</p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Sigorta İhtilafları</h3>
            <p>
              Sigorta şirketlerinin tazminat ödememe veya eksik ödeme yapma
              durumları.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Sorumluluk Tespiti</h3>
            <p>
              Kazada kusur oranlarının belirlenmesi ve hukuki sorumlulukların
              değerlendirilmesi.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="surec" title="Trafik ve Sigorta Hukuku Süreci">
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <span className="font-medium">Olayın Değerlendirilmesi:</span> Kaza
            raporu, tanık beyanları ve deliller incelenir.
          </li>
          <li>
            <span className="font-medium">Sigorta Başvurusu:</span> Sigorta
            şirketine tazminat talebi iletilir.
          </li>
          <li>
            <span className="font-medium">Yargı Yolu:</span> Anlaşmazlık
            durumunda maddi/manevi tazminat veya sigorta ihtilafları için
            mahkemeye başvurulur.
          </li>
        </ol>
      </Section>

      <Section id="sonuc" title="Sonuç">
        <p>
          Trafik ve sigorta hukuku, bireylerin ve kurumların trafik kazalarından
          kaynaklanan zararlarını telafi etmeyi ve sigorta süreçlerini
          düzenlemeyi amaçlar. Doğru hukuki adımlarla, hak kayıplarının önüne
          geçilebilir.
        </p>
        <p className="text-sm text-slate-600">
          Bu not, genel bilgilendirme amacıyla hazırlanmıştır.
        </p>
      </Section>
    </Layout>
  );
}
