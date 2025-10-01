import { Card } from "@/components/blog/Card";
import Layout from "@/components/blog/Layout";
import { Section } from "@/components/blog/Section";

export default function RealEstateLawNote() {
  return (
    <Layout title="Faaliyet Alanı: Gayrimenkul Hukuku" icon="GH">
      <Section id="giris" title="Giriş">
        <p>
          Gayrimenkul hukuku, taşınmaz mallar (arsa, ev, apartman, iş yeri vb.)
          ile ilgili hukuki ilişkileri düzenleyen hukuk dalıdır. Tapu işlemleri,
          mülkiyet hakları, kira sözleşmeleri ve taşınmazlarla ilgili
          uyuşmazlıklar bu alanda değerlendirilir.
        </p>
      </Section>

      <Section id="kapsam" title="Kapsam ve Önemi">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="text-xl font-semibold mb-2">Mülkiyet Hakları</h3>
            <p>
              Taşınmazların mülkiyet devri, tapu işlemleri, miras yoluyla
              intikal ve ortak mülkiyet gibi konular gayrimenkul hukukunun
              temelini oluşturur.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Kira Hukuku</h3>
            <p>
              Kira sözleşmeleri, kiracı ve ev sahibi hakları, kira artışı ve
              tahliye süreçleri bu alanda önemli yer tutar.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="dava-turleri" title="Yaygın Uyuşmazlıklar">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="text-xl font-semibold mb-2">Tapu İptal ve Tescil</h3>
            <p>
              Hatalı tapu kayıtlarının düzeltilmesi veya mülkiyetin tescili için
              açılan davalar.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Kira Uyuşmazlıkları</h3>
            <p>
              Kira bedelinin belirlenmesi, tahliye talepleri ve sözleşme
              ihtilafları.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Kamulaştırma</h3>
            <p>
              Devletin taşınmazları kamu yararı için edinmesi ve bedel tespiti
              davaları.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">
              Ortaklığın Giderilmesi
            </h3>
            <p>
              Paylı mülkiyette ortakların paylarını ayırmak için açılan izale-i
              şuyu davaları.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="adimlar" title="Gayrimenkul Hukuku Süreci">
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <span className="font-medium">Değerlendirme:</span> Taşınmazla
            ilgili belgeler ve hak iddiaları incelenir.
          </li>
          <li>
            <span className="font-medium">Başvuru:</span> Tapu müdürlüğü veya
            ilgili kurumlara gerekli başvurular yapılır.
          </li>
          <li>
            <span className="font-medium">Yargı Yolu:</span> Uyuşmazlık halinde
            mahkemeye başvurulur; dava süreci takip edilir.
          </li>
        </ol>
      </Section>

      <Section id="sonuc" title="Sonuç">
        <p>
          Gayrimenkul hukuku, bireylerin ve kurumların taşınmazlarla ilgili
          haklarını koruma altına alır. Doğru hukuki süreçlerin takip edilmesi,
          hem mülkiyet haklarının güvenceye alınması hem de uyuşmazlıkların
          çözümü açısından kritik öneme sahiptir.
        </p>
        <p className="text-sm text-slate-600">
          Bu not, genel bilgilendirme amacıyla hazırlanmıştır.
        </p>
      </Section>
    </Layout>
  );
}
