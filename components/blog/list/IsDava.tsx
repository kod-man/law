import { Card } from "../Card";
import { FAQItem } from "../FAQItem";
import Layout from "../Layout";
import { Section } from "../Section";

export default function EmploymentLawsuitNote() {
  return (
    <Layout title="İş Davaları Hakkında Bilgilendirme" icon="İŞ">
      <Section id="giris" title="Giriş">
        <p>
          İş davaları, işçi ve işveren arasındaki iş ilişkisinden doğan
          uyuşmazlıkların yargıya taşındığı davalardır. İş sözleşmesi, ücret,
          fazla mesai, tazminatlar ve iş güvencesi gibi konuları kapsar.
        </p>
      </Section>

      <Section id="temel-kavramlar" title="Temel Kavramlar">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-medium">İş Sözleşmesi:</span> İşçi ve işveren
            arasındaki temel hukuki ilişkiyi belirleyen sözleşme.
          </li>
          <li>
            <span className="font-medium">Kıdem Tazminatı:</span> İşçinin
            belirli şartlarla hak kazandığı uzun süreli çalışma karşılığı
            ödenek.
          </li>
          <li>
            <span className="font-medium">İhbar Tazminatı:</span> İş
            sözleşmesinin bildirim sürelerine uyulmadan feshi hâlinde ödenen
            tazminat.
          </li>
          <li>
            <span className="font-medium">Fazla Mesai Ücreti:</span> Yasal
            çalışma saatlerinin üzerindeki çalışmalar için ödenmesi gereken
            ücret.
          </li>
        </ul>
      </Section>

      <Section id="turler" title="Dava Türleri">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="text-xl font-semibold mb-2">İşe İade Davası</h3>
            <p>
              Haksız feshe uğrayan işçinin, işe dönme talebiyle açtığı dava
              türü.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Alacak Davaları</h3>
            <p>
              Ücret, fazla mesai, ikramiye gibi ödenmeyen alacakların talep
              edilmesi.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Tazminat Davaları</h3>
            <p>Kıdem, ihbar ve diğer işçi hakları için açılan davalar.</p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">
              Hizmet Tespiti Davası
            </h3>
            <p>
              Sosyal güvenlik yönünden çalışmanın tespitine ilişkin davalar.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="adimlar" title="Süreç ve Adımlar">
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <span className="font-medium">Arabuluculuk:</span> İş davalarında
            dava açmadan önce zorunlu aşama.
          </li>
          <li>
            <span className="font-medium">Dava Açılması:</span> Arabuluculukta
            uzlaşma sağlanamazsa iş mahkemesinde dava açılır.
          </li>
          <li>
            <span className="font-medium">Yargılama:</span> Tanık, belge,
            bilirkişi incelemesi gibi yöntemlerle uyuşmazlığın çözümü.
          </li>
          <li>
            <span className="font-medium">Karar ve İcra:</span> Mahkeme
            kararının kesinleşmesi ve uygulanması.
          </li>
        </ol>
      </Section>

      <Section id="belgeler" title="Gerekli Belgeler (Örnek)">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <ul className="list-disc pl-6 space-y-2">
              <li>İş sözleşmesi ve fesih bildirimi</li>
              <li>Bordro, ücret makbuzu, banka kayıtları</li>
              <li>Fazla mesaiye ilişkin belgeler</li>
              <li>SGK hizmet dökümü</li>
              <li>Tanık listesi</li>
            </ul>
          </Card>
          <Card>
            <p className="text-sm text-slate-600">
              <span className="font-medium">Not:</span> Belgelerin eksiksiz
              sunulması, dava sürecinde hak kaybını önler.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="hatalar" title="Yaygın Hatalar">
        <div className="grid md:grid-cols-3 gap-5">
          <Card>
            <h3 className="font-semibold mb-2">Belge Eksikliği</h3>
            <p>
              İş sözleşmesi veya ücret bordrosu gibi belgelerin sunulmaması.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold mb-2">Arabuluculuğu Atlamak</h3>
            <p>Zorunlu aşamayı tamamlamadan dava açmak.</p>
          </Card>
          <Card>
            <h3 className="font-semibold mb-2">Yanlış Talepler</h3>
            <p>Hak edilmemiş alacaklar için dava açmak, davayı zayıflatır.</p>
          </Card>
        </div>
      </Section>

      <Section id="sss" title="SSS (Kısa)">
        <FAQItem
          question="Arabuluculuk zorunlu mu?"
          answer="Evet, iş davalarında dava açmadan önce arabuluculuğa başvurmak zorunludur."
        />
        <FAQItem
          question="Kıdem tazminatı için süre var mı?"
          answer="Evet, işçi alacakları için zamanaşımı süreleri vardır. Bu süreler içinde dava açmak gerekir."
        />
      </Section>

      <Section id="sonuc" title="Sonuç">
        <p>
          İş davaları, işçi haklarının korunması ve işverenin yükümlülüklerinin
          yerine getirilmesi açısından önemlidir. Sürecin doğru yönetilmesi, hak
          kaybını önler.
        </p>
        <p className="text-sm text-slate-600">
          Bu metin genel bilgilendirme amaçlıdır; somut olaylarda profesyonel
          hukuki destek almanız önerilir.
        </p>
      </Section>
    </Layout>
  );
}
