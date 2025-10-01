import { Card } from "../Card";
import { FAQItem } from "../FAQItem";
import Layout from "../Layout";
import { Section } from "../Section";

const TrafficAccidentInfo = () => {
  return (
    <Layout title="Trafik Kazası Sonrası Haklar ve Süreç" icon="TR">
      <Section id="giris" title="Giriş">
        <p>
          Trafik kazaları, hem trafik hem de sigorta hukuku bakımından sonuçlar
          doğurur. Kaza sonrası süreçte kusur oranı, sigorta teminatları ve
          tazminat türleri gibi unsurlar, talep edilebilecek hakların kapsamını
          doğrudan etkiler.
        </p>
      </Section>

      <Section id="temel-kavramlar" title="Temel Kavramlar">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-medium">Kusur Oranı:</span> Kimin hangi oranda
            sorumlu olduğunun belirlenmesi; tazminat hesabına doğrudan yansır.
          </li>
          <li>
            <span className="font-medium">Zorunlu Trafik Sigortası:</span>{" "}
            Üçüncü kişilere verilen zararları poliçe limitleri dâhilinde
            karşılar.
          </li>
          <li>
            <span className="font-medium">Kasko Sigortası:</span> Kendi
            aracınızda oluşan hasarlara yönelik teminat sağlar (poliçe kapsamına
            göre).
          </li>
          <li>
            <span className="font-medium">
              Destekten Yoksun Kalma/Manevi Tazminat:
            </span>{" "}
            Bedensel zarar veya ölüm hâlinde gündeme gelebilir.
          </li>
        </ul>
      </Section>

      <Section id="tazminat-turleri" title="Tazminat Türleri">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="text-xl font-semibold mb-2">Maddi Tazminat</h3>
            <p>
              Araç hasarı, değer kaybı, tedavi giderleri, çalışma gücü kaybı,
              kazanç kaybı vb.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Manevi Tazminat</h3>
            <p>
              Kişilik haklarında meydana gelen sarsıntı nedeniyle talep
              edilebilecek giderim.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="adimlar" title="Başvuru ve İzlenecek Adımlar">
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <span className="font-medium">Olayın Belgelenmesi:</span> Kaza
            tespit tutanağı, alkol raporu, fotoğraflar, tanık bilgileri, sağlık
            raporları.
          </li>
          <li>
            <span className="font-medium">Sigortaya Başvuru:</span> Poliçe
            bilgileriyle birlikte hasar dosyası açılması ve eksiksiz evrak
            sunulması.
          </li>
          <li>
            <span className="font-medium">Hasar Değerlendirmesi:</span> Eksper
            raporu, kusur dağılımı ve teminat limitleri birlikte
            değerlendirilir.
          </li>
          <li>
            <span className="font-medium">Uzlaşma / Tahkim / Dava:</span>{" "}
            Uyuşmazlık hâlinde alternatif çözüm yolları veya yargı yolu gündeme
            gelebilir.
          </li>
        </ol>
      </Section>

      <Section id="belgeler" title="Gerekli Belgeler (Örnek)">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <ul className="list-disc pl-6 space-y-2">
              <li>Kaza tespit tutanağı ve trafik poliçesi</li>
              <li>Fotoğraf ve video kayıtları</li>
              <li>Servis/ekspertiz raporları, fatura ve ödeme belgeleri</li>
              <li>Sağlık raporları, iş gücü kaybı/gelir kaybı evrakları</li>
              <li>Tanınan tüm tarafların iletişim ve tanık bilgileri</li>
            </ul>
          </Card>
          <Card>
            <p className="text-sm text-slate-600">
              <span className="font-medium">Not:</span> Tazminat hesabı; kusur,
              poliçe kapsamı ve somut delillerle şekillenir. Belgelerin eksiksiz
              sunulması ve sürelere dikkat edilmesi hak kaybını önler.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="hatalar" title="Yaygın Hatalar">
        <div className="grid md:grid-cols-3 gap-5">
          <Card>
            <h3 className="font-semibold mb-2">Eksik Evrak</h3>
            <p>
              Fotoğraf, tutanak ve fatura gibi kritik belgelerin sunulmaması.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold mb-2">Yanlış Beyan</h3>
            <p>Olay örgüsünü gerçeğe aykırı aktarmak; talebi zayıflatır.</p>
          </Card>
          <Card>
            <h3 className="font-semibold mb-2">
              Poliçe Kapsamını Yanlış Okumak
            </h3>
            <p>Teminat dışı kalan kalemler için beklentiye girmek.</p>
          </Card>
        </div>
      </Section>

      <Section id="sss" title="SSS (Kısa)">
        <FAQItem
          question="Değer kaybı talep edebilir miyim?"
          answer="Kusur ve hasar ilişkisi uygun ise, aracın ikinci el piyasa değerindeki düşüş için talep gündeme gelebilir."
        />
        <FAQItem
          question="Sağlık giderlerini kim karşılar?"
          answer="Olayın niteliğine, kusura ve poliçe kapsamına göre; zorunlu sigorta, ek teminatlar veya sorumlu taraf."
        />
      </Section>

      <Section id="sonuc" title="Sonuç">
        <p>
          Trafik kazası sonrası süreç, kusur değerlendirmesi ve sigorta
          teminatlarının doğru okunmasıyla sistematik biçimde yönetildiğinde
          daha öngörülebilir ilerler. Somut olayınıza özgü hukuki destek almanız
          haklarınızın etkin takibi için faydalı olacaktır.
        </p>
        <p className="text-sm text-slate-600">
          Bu metin genel bilgilendirme amaçlıdır; somut olaylarda profesyonel
          hukuki görüş alınması önerilir.
        </p>
      </Section>
    </Layout>
  );
};

export default TrafficAccidentInfo;
