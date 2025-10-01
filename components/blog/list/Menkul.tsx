import { Card } from "../Card";
import { FAQItem } from "../FAQItem";
import Layout from "../Layout";
import { Section } from "../Section";

export default function RealEstateLawNote() {
  return (
    <Layout title="Gayrimenkul Hukuku Hakkında Bilgilendirme" icon="GH">
      <Section id="giris" title="Giriş">
        <p>
          Gayrimenkul hukuku; taşınmaz malların mülkiyeti, kiralanması, alım
          satımı, intifa ve ipotek gibi konuları düzenler. Uyuşmazlıkların
          çözümü için hem özel hukuk hem de kamu hukuku boyutları vardır.
        </p>
      </Section>

      <Section id="temel-kavramlar" title="Temel Kavramlar">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-medium">Tapu Sicili:</span> Taşınmazların
            mülkiyet ve ayni haklarının resmi kaydı.
          </li>
          <li>
            <span className="font-medium">Kat Mülkiyeti:</span> Bir binada
            bağımsız bölümlerin mülkiyetini düzenleyen sistem.
          </li>
          <li>
            <span className="font-medium">Kira Sözleşmesi:</span> Taşınmazın
            kullanımını düzenleyen sözleşme.
          </li>
          <li>
            <span className="font-medium">İpotek:</span> Bir alacağın teminatı
            olarak taşınmaz üzerinde kurulan sınırlı ayni hak.
          </li>
        </ul>
      </Section>

      <Section id="turler" title="Başlıca Dava Türleri">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="text-xl font-semibold mb-2">
              Tapu İptal ve Tescil Davası
            </h3>
            <p>
              Hatalı veya hukuka aykırı tapu kayıtlarının düzeltilmesi için
              açılır.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">
              Ortaklığın Giderilmesi Davası
            </h3>
            <p>Paylı mülkiyette taşınmazın satışı veya taksimi için açılır.</p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Kira Uyuşmazlıkları</h3>
            <p>Kira bedeli, tahliye, aidat ve yan giderlerle ilgili davalar.</p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold mb-2">Ecrimisil Davası</h3>
            <p>Taşınmazın izinsiz kullanımı nedeniyle tazminat talebi.</p>
          </Card>
        </div>
      </Section>

      <Section id="adimlar" title="Süreç ve Adımlar">
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <span className="font-medium">Ön İnceleme:</span> Tapu kayıtları,
            sözleşmeler ve belgelerin incelenmesi.
          </li>
          <li>
            <span className="font-medium">Arabuluculuk:</span> Bazı
            uyuşmazlıklarda dava öncesi başvurulması gereken aşama.
          </li>
          <li>
            <span className="font-medium">Dava Açılması:</span> Görevli ve
            yetkili mahkemede dava açılması.
          </li>
          <li>
            <span className="font-medium">Yargılama:</span> Bilirkişi
            incelemeleri, keşif ve tanık beyanları ile çözüm aranır.
          </li>
          <li>
            <span className="font-medium">Karar ve Tapu İşlemleri:</span>{" "}
            Mahkeme kararının tapuya işlenmesi.
          </li>
        </ol>
      </Section>

      <Section id="belgeler" title="Gerekli Belgeler (Örnek)">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tapu kayıt örneği</li>
              <li>Kira sözleşmesi</li>
              <li>Satış vaadi veya alım-satım sözleşmesi</li>
              <li>Kat mülkiyetiyle ilgili belgeler</li>
              <li>Fotoğraf, keşif ve bilirkişi raporları</li>
            </ul>
          </Card>
          <Card>
            <p className="text-sm text-slate-600">
              <span className="font-medium">Not:</span> Belgelerin eksiksiz
              sunulması ve sürelere uyulması hak kaybını önler.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="hatalar" title="Yaygın Hatalar">
        <div className="grid md:grid-cols-3 gap-5">
          <Card>
            <h3 className="font-semibold mb-2">
              Tapu Kayıtlarını Kontrol Etmemek
            </h3>
            <p>Satın alma veya dava öncesi kayıtların incelenmemesi.</p>
          </Card>
          <Card>
            <h3 className="font-semibold mb-2">Sözleşmesiz İşlem Yapmak</h3>
            <p>Gayri resmi kira veya satış işlemleri, ispat güçlüğü doğurur.</p>
          </Card>
          <Card>
            <h3 className="font-semibold mb-2">Süreleri Kaçırmak</h3>
            <p>
              Hak düşürücü süreler ve zamanaşımı sürelerinin göz ardı edilmesi.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="sss" title="SSS (Kısa)">
        <FAQItem
          question="Kira sözleşmesini noter onaylı yapmak zorunlu mu?"
          answer="Hayır, yazılı yapılması yeterlidir; noter onayı ispat kolaylığı sağlar."
        />
        <FAQItem
          question="Tapuda devri yapılmamış satış geçerli mi?"
          answer="Hayır, taşınmaz mülkiyetinin kazanılması için tapuda resmi devir şarttır."
        />
      </Section>

      <Section id="sonuc" title="Sonuç">
        <p>
          Gayrimenkul hukuku, taşınmazların güvenli şekilde el değiştirmesi ve
          kullanımının düzenlenmesi için büyük önem taşır. Doğru belgelerle ve
          uzman desteğiyle sürecin yönetilmesi hak kayıplarını önler.
        </p>
        <p className="text-sm text-slate-600">
          Bu metin genel bilgilendirme amaçlıdır; somut olaylarda profesyonel
          hukuki destek almanız önerilir.
        </p>
      </Section>
    </Layout>
  );
}
