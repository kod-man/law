import { Card } from "@/components/blog/Card";
import Layout from "@/components/blog/Layout";
import { Section } from "@/components/blog/Section";

export default function ContractsLawNote() {
  return (
    <Layout title="Faaliyet Alanı: Sözleşmeler Hukuku" icon="SH">
      <Section id="giris" title="Giriş">
        <p>
          Sözleşmeler hukuku, bireyler veya tüzel kişiler arasında yapılan
          anlaşmaların hazırlanması, yorumlanması ve uygulanmasını düzenleyen
          hukuk dalıdır. Bu alan, tarafların hak ve yükümlülüklerini
          belirlerken, hukuki güvenilirlik ve adaletin sağlanmasını amaçlar.
        </p>
      </Section>

      <Section id="kapsam" title="Kapsam ve Önemi">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="text-xl font-semibold mb-2">Sözleşme Özgürlüğü</h3>
            <p>
              Taraflar, kanunlara aykırı olmamak kaydıyla, sözleşme içeriğini ve
              şartlarını özgürce belirleyebilir. Bu özgürlük, ticari ve kişisel
              ilişkilerde esneklik sağlar.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Bağlayıcılık İlkesi</h3>
            <p>
              Sözleşmeler, tarafları bağlayıcı nitelik taşır ve anlaşmaya
              uyulmaması durumunda hukuki yaptırımlar uygulanabilir.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="uyusmazliklar" title="Yaygın Uyuşmazlıklar">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="text-xl font-semibold mb-2">Sözleşmenin İhlali</h3>
            <p>
              Taraflardan birinin sözleşme şartlarına uymaması durumunda açılan
              tazminat davaları.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">
              Sözleşmenin Geçersizliği
            </h3>
            <p>
              Sözleşmenin kanuna aykırılık, irade sakatlığı veya şekil eksikliği
              nedeniyle hükümsüz sayılması.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Yorum Uyuşmazlıkları</h3>
            <p>
              Sözleşme maddelerinin farklı şekillerde yorumlanması nedeniyle
              ortaya çıkan ihtilaflar.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Fesih ve Cayma</h3>
            <p>
              Sözleşmenin sona erdirilmesi veya cayma hakkı kullanımıyla ilgili
              uyuşmazlıklar.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="surec" title="Sözleşmeler Hukuku Süreci">
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <span className="font-medium">Hazırlık:</span> Sözleşmenin
            tarafların ihtiyaçlarına uygun şekilde hazırlanması ve incelenmesi.
          </li>
          <li>
            <span className="font-medium">Müzakere:</span> Taraflar arasında
            şartların görüşülmesi ve anlaşmaya varılması.
          </li>
          <li>
            <span className="font-medium">Yargı Yolu:</span> Uyuşmazlık
            durumunda sözleşmenin yorumlanması veya ihlal için mahkemeye
            başvurulması.
          </li>
        </ol>
      </Section>

      <Section id="sonuc" title="Sonuç">
        <p>
          Sözleşmeler hukuku, ticari ve kişisel ilişkilerde güven ve istikrar
          sağlar. Doğru hazırlanmış bir sözleşme, tarafların haklarını korurken
          olası uyuşmazlıkları en aza indirir.
        </p>
        <p className="text-sm text-slate-600">
          Bu not, genel bilgilendirme amacıyla hazırlanmıştır.
        </p>
      </Section>
    </Layout>
  );
}
