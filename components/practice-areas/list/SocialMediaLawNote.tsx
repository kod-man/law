import { Card } from "@/components/blog/Card";
import Layout from "@/components/blog/Layout";
import { Section } from "@/components/blog/Section";

export default function SocialMediaLawNote() {
  return (
    <Layout title="Faaliyet Alanı: Sosyal Medya Hukuku" icon="SMH">
      <Section id="giris" title="Giriş">
        <p>
          Sosyal medya hukuku, sosyal medya platformlarında gerçekleşen
          faaliyetlerin hukuki boyutlarını düzenleyen bir hukuk dalıdır. Bu
          alan, ifade özgürlüğü, kişisel verilerin korunması, fikri mülkiyet
          hakları ve dijital platformlardaki sorumluluklar gibi konuları kapsar.
        </p>
      </Section>

      <Section id="kapsam" title="Kapsam ve Önemi">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="text-xl font-semibold mb-2">İfade Özgürlüğü</h3>
            <p>
              Sosyal medya, bireylerin fikirlerini özgürce paylaşabildiği bir
              alan olsa da, bu özgürlük hakaret, iftira veya nefret söylemi gibi
              durumlarda sınırlandırılabilir.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">
              Kişisel Verilerin Korunması
            </h3>
            <p>
              Kullanıcı verilerinin toplanması, işlenmesi ve paylaşımı, KVKK
              (Kişisel Verilerin Korunması Kanunu) gibi düzenlemelerle korunur.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="uyusmazliklar" title="Yaygın Uyuşmazlıklar">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="text-xl font-semibold mb-2">Hakaret ve İftira</h3>
            <p>
              Sosyal medya paylaşımlarıyla kişilik haklarına yönelik saldırılar
              nedeniyle açılan davalar.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">
              Fikri Mülkiyet İhlalleri
            </h3>
            <p>
              İzinsiz içerik paylaşımı, telif hakkı ihlalleri ve marka haklarına
              tecavüz.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">
              Erişim Engeli ve İçerik Kaldırma
            </h3>
            <p>
              5651 sayılı Kanun kapsamında sosyal medya içeriklerinin
              kaldırılması veya erişime engellenmesi.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Veri İhlali</h3>
            <p>
              Kişisel verilerin izinsiz paylaşımı veya kötüye kullanımıyla
              ilgili uyuşmazlıklar.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="surec" title="Sosyal Medya Hukuku Süreci">
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <span className="font-medium">Değerlendirme:</span> İlgili
            paylaşımın veya içeriğin hukuki boyutu incelenir.
          </li>
          <li>
            <span className="font-medium">Başvuru:</span> Platforma içerik
            kaldırma veya düzeltme talebi iletilir.
          </li>
          <li>
            <span className="font-medium">Hukuki Süreç:</span> Tazminat, erişim
            engeli veya cezai şikayet için yargı yoluna başvurulur.
          </li>
        </ol>
      </Section>

      <Section id="sonuc" title="Sonuç">
        <p>
          Sosyal medya hukuku, dijital çağda bireylerin haklarını korurken,
          ifade özgürlüğü ve platform sorumlulukları arasında denge kurmayı
          amaçlar. Bilinçli kullanım ve hukuki farkındalık, bu alanda
          yaşanabilecek sorunları minimize eder.
        </p>
        <p className="text-sm text-slate-600">
          Bu not, genel bilgilendirme amacıyla hazırlanmıştır.
        </p>
      </Section>
    </Layout>
  );
}
