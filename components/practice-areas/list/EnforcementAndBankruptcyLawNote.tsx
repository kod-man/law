import { Card } from "@/components/blog/Card";
import Layout from "@/components/blog/Layout";
import { Section } from "@/components/blog/Section";

export default function EnforcementAndBankruptcyLawNote() {
  return (
    <Layout title="Faaliyet Alanı: İcra ve İflas Hukuku" icon="IIH">
      <Section id="giris" title="Giriş">
        <p>
          İcra ve iflas hukuku, alacakların tahsili ve borçluların mali
          yükümlülüklerini yerine getirememesi durumunda uygulanan hukuki
          süreçleri düzenleyen hukuk dalıdır. Bu alan, alacaklı ve borçlu
          arasındaki ilişkileri adil bir şekilde çözmeyi amaçlar.
        </p>
      </Section>

      <Section id="kapsam" title="Kapsam ve Önemi">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="text-xl font-semibold mb-2">İcra Takibi</h3>
            <p>
              Alacakların tahsili için borçluya karşı başlatılan yasal süreçtir.
              İlamlı ve ilamsız icra takipleri, alacaklıların haklarını korumak
              için kullanılır.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">İflas Süreci</h3>
            <p>
              Borçlunun mali yükümlülüklerini yerine getirememesi durumunda,
              varlıklarının tasfiye edilerek alacaklılara dağıtılmasını sağlayan
              süreçtir.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="uyusmazliklar" title="Yaygın Uyuşmazlıklar">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="text-xl font-semibold mb-2">
              İtiraz ve İtirazın İptali
            </h3>
            <p>
              Borçlunun icra takibine itiraz etmesi ve bu itirazın mahkeme
              yoluyla kaldırılması davaları.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Haciz İşlemleri</h3>
            <p>
              Borçlunun malvarlığına el konulması ve satışıyla ilgili
              uyuşmazlıklar.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">İflas Davaları</h3>
            <p>
              Borçlunun iflasının talep edilmesi veya iflas erteleme süreçleri.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">
              Menfi Tespit Davaları
            </h3>
            <p>Borçlunun borcu olmadığını ispat etmek için açtığı davalar.</p>
          </Card>
        </div>
      </Section>

      <Section id="surec" title="İcra ve İflas Hukuku Süreci">
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <span className="font-medium">Takip Başlatma:</span> Alacaklı, icra
            dairesine başvurarak icra takibi başlatır.
          </li>
          <li>
            <span className="font-medium">Haciz ve Satış:</span> Borçlunun
            malvarlığına haciz uygulanır ve gerekirse satış yapılır.
          </li>
          <li>
            <span className="font-medium">Yargı Yolu:</span> İtiraz, şikayet
            veya iflas gibi durumlarda mahkemeye başvurulur.
          </li>
        </ol>
      </Section>

      <Section id="sonuc" title="Sonuç">
        <p>
          İcra ve iflas hukuku, alacaklıların haklarını korurken borçlulara
          karşı adil bir süreç yürütülmesini sağlar. Doğru hukuki adımlar, hem
          alacaklı hem de borçlu açısından hak kayıplarını önler.
        </p>
        <p className="text-sm text-slate-600">
          Bu not, genel bilgilendirme amacıyla hazırlanmıştır.
        </p>
      </Section>
    </Layout>
  );
}
