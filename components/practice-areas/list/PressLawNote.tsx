import { Card } from "@/components/blog/Card";
import Layout from "@/components/blog/Layout";
import { Section } from "@/components/blog/Section";

export default function PressLawNote() {
  return (
    <Layout title="Faaliyet Alanı: Basın Hukuku" icon="BH">
      <Section id="giris" title="Giriş">
        <p>
          Basın hukuku, ifade özgürlüğü ile kişilik hakları arasındaki dengeyi
          düzenleyen, basın yayın faaliyetlerinin sınırlarını belirleyen hukuk
          dalıdır. Gazete, dergi, televizyon, internet haberciliği gibi
          mecralarda yapılan yayınlar, hem kamu yararı hem de bireylerin özel
          hayatının korunması açısından önem taşır.
        </p>
      </Section>

      <Section id="kapsam" title="Kapsam ve Önemi">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="text-xl font-semibold mb-2">İfade Özgürlüğü</h3>
            <p>
              Demokratik toplumların temel değerlerinden biridir. Basın
              özgürlüğü, haber alma ve haber verme hakkını da içerir. Ancak
              sınırsız değildir; kişilik haklarına müdahale halinde
              sınırlandırılabilir.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Kişilik Hakları</h3>
            <p>
              Şeref, haysiyet, özel hayat ve ticari itibarın korunması, basın
              yayın faaliyetlerinde gözetilmesi gereken temel haklardandır.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="dava-turleri" title="Yaygın Uyuşmazlıklar">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="text-xl font-semibold mb-2">Hakaret ve İftira</h3>
            <p>
              Basın yoluyla kişilik haklarına saldırı iddiasıyla açılan davalar.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Yanıltıcı Yayın</h3>
            <p>
              Gerçeğe aykırı veya çarpıtılmış haberler nedeniyle açılan tazminat
              davaları.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">
              Cevap ve Düzeltme Hakkı
            </h3>
            <p>
              Yanıltıcı veya eksik bilgilendirme halinde kişilerin açıklama
              yapma hakkı.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">İnternet Yayınları</h3>
            <p>
              5651 sayılı yasa kapsamında erişim engeli, içerik kaldırma ve
              sorumluluk.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="adimlar" title="Basın Hukuku Süreci">
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <span className="font-medium">İnceleme:</span> Yayının içeriği ve
            etkileri değerlendirilir.
          </li>
          <li>
            <span className="font-medium">Başvuru:</span> İlgili yayın organına
            cevap/düzeltme talebi yapılabilir.
          </li>
          <li>
            <span className="font-medium">Yargı Yolu:</span> Manevi tazminat
            veya erişim engeli gibi talepler için mahkemeye başvurulur.
          </li>
        </ol>
      </Section>

      <Section id="sonuc" title="Sonuç">
        <p>
          Basın hukuku, demokratik toplum düzeninin korunması ile birey
          haklarının gözetilmesi arasında hassas bir denge kurar. Basın
          özgürlüğü, sorumluluk bilinciyle kullanıldığında hem toplumsal faydayı
          hem de kişisel hakları güvence altına alır.
        </p>
        <p className="text-sm text-slate-600">
          Bu not, genel bilgilendirme amacıyla hazırlanmıştır.
        </p>
      </Section>
    </Layout>
  );
}
