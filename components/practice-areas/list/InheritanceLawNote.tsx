import { Card } from "@/components/blog/Card";
import Layout from "@/components/blog/Layout";
import { Section } from "@/components/blog/Section";

export default function InheritanceLawNote() {
  return (
    <Layout title="Faaliyet Alanı: Miras Hukuku" icon="MH">
      <Section id="giris" title="Giriş">
        <p>
          Miras hukuku, bir kişinin vefatından sonra malvarlığının ve haklarının
          mirasçılara geçişini düzenleyen hukuk dalıdır. Bu alan, miras
          paylaşımı, vasiyetnameler ve mirasçıların haklarını koruma gibi
          konuları kapsar.
        </p>
      </Section>

      <Section id="kapsam" title="Kapsam ve Önemi">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="text-xl font-semibold mb-2">Mirasçıların Hakları</h3>
            <p>
              Yasal mirasçılar ve atanmış mirasçılar, miras bırakanın
              malvarlığından pay alma hakkına sahiptir. Bu haklar, Türk Medeni
              Kanunu ile düzenlenir.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">
              Vasiyetname ve Miras Sözleşmeleri
            </h3>
            <p>
              Miras bırakan, malvarlığının paylaşımını vasiyetname veya miras
              sözleşmesi ile belirleyebilir, ancak saklı paylara riayet
              edilmelidir.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="uyusmazliklar" title="Yaygın Uyuşmazlıklar">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="text-xl font-semibold mb-2">Miras Paylaşımı</h3>
            <p>
              Mirasçıların pay oranları veya malvarlığı paylaşımı konusunda
              çıkan anlaşmazlıklar.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">
              Vasiyetnamenin İptali
            </h3>
            <p>
              Vasiyetnamenin geçerliliğine itiraz veya iptali için açılan
              davalar.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Saklı Pay Davaları</h3>
            <p>
              Yasal mirasçıların saklı paylarının ihlal edilmesi durumunda
              açılan davalar.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Mirasın Reddİ</h3>
            <p>
              Mirasçıların mirası reddetmesi veya mirasın borçlar nedeniyle
              reddiyle ilgili uyuşmazlıklar.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="surec" title="Miras Hukuku Süreci">
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <span className="font-medium">Mirasın Açılması:</span> Miras
            bırakanın vefatıyla miras süreci başlar ve mirasçılar belirlenir.
          </li>
          <li>
            <span className="font-medium">Başvuru:</span> Miras paylaşımı veya
            vasiyetname ile ilgili talepler için noter veya mahkemeye
            başvurulur.
          </li>
          <li>
            <span className="font-medium">Yargı Yolu:</span> Uyuşmazlık
            durumunda miras davaları sulh hukuk mahkemelerinde görülür.
          </li>
        </ol>
      </Section>

      <Section id="sonuc" title="Sonuç">
        <p>
          Miras hukuku, malvarlığının adil ve yasal bir şekilde mirasçılara
          aktarılmasını sağlarken, bireylerin miras haklarını korur. Doğru
          hukuki süreçlerle, miras uyuşmazlıkları çözüme kavuşabilir.
        </p>
        <p className="text-sm text-slate-600">
          Bu not, genel bilgilendirme amacıyla hazırlanmıştır.
        </p>
      </Section>
    </Layout>
  );
}
