import banner3 from "@/public/assets/banner/banner3.jpg";
import banner4 from "@/public/assets/banner/banner4.jpg";
import banner5 from "@/public/assets/banner/banner5.jpg";
import homeblog1 from "@/public/assets/home-blog-1.png";
import homeblog2 from "@/public/assets/home-blog-2.png";
import homeblog3 from "@/public/assets/home-blog-3.png";
import homepageTypewriter from "@/public/assets/lawyer-ticker-min.jpg";
import paimage1 from "@/public/assets/pa-img-1.jpg";
import paimage10 from "@/public/assets/pa-img-10.jpeg";
import paimage11 from "@/public/assets/pa-img-11.jpeg";
import paimage12 from "@/public/assets/pa-img-12.jpeg";
import paimage2 from "@/public/assets/pa-img-2.jpeg";
import paimage3 from "@/public/assets/pa-img-3.jpeg";
import paimage4 from "@/public/assets/pa-img-4.jpeg";
import paimage5 from "@/public/assets/pa-img-5.jpeg";
import paimage6 from "@/public/assets/pa-img-6.jpeg";
import paimage7 from "@/public/assets/pa-img-7.jpeg";
import paimage8 from "@/public/assets/pa-img-8.jpeg";
import paimage9 from "@/public/assets/pa-img-9.jpeg";
import teammember1 from "@/public/assets/team-member-1.jpeg";
import teammember2 from "@/public/assets/team-member-2.jpeg";
import teammember3 from "@/public/assets/team-member-3.jpeg";
import teammember4 from "@/public/assets/team-member-4.jpeg";
import {
  FAQsProps,
  PADataProps,
  TeamMembersProps,
  attorneyEducatonProps,
  bannerItemsType,
  blogCategoriesProps,
  blogPostsProps,
  blogTagsProps,
  homeBannerTypewriterProps,
} from "@/types";

// Data for Homepage Banner
export const bannerItems: bannerItemsType[] = [
  {
    id: 1,
    content: "Pusula Hukuk Yenilikçi ve Özgün Çözümler",
    linkText: "Bize Ulaşın",
    image: banner4,
    linkHref: "/contact",
  },
  {
    id: 2,
    content: "Pusula Hukuk Yenİlikçi ve Özgün Çözümler",
    linkText: "Bize Ulaşın",
    image: banner5,
    linkHref: "/contact",
  },
  {
    id: 3,
    content: "Pusula Hukuk Yenilikçi ve Özgün Çözümler",
    linkText: "Bize Ulaşın",
    image: banner3,
    linkHref: "/contact",
  },
];

// Data for Blog Posts
export const blogPosts: blogPostsProps[] = [
  {
    id: 1,
    featuredImage: {
      node: {
        mediaItem: homeblog1,
      },
    },
    linkHref: "/blog/1",
    title: "Trafik ve Sigorta Hukuku Hakkında Bilgi Notu",
    excerpt:
      "Trafik kazaları sonrası doğan maddi ve manevi zararlar, hem trafik hem de sigorta hukuku kapsamında değerlendirilir. Kazada kusur oranı, sigorta teminatları ve tazminat hakları gibi birçok önemli detay bu süreci doğrudan etkiler.",
    date: "2025-07-15T12:24:34",
    author: "Mustafa Koyuncu",
    comments: 1,
  },
  {
    id: 2,
    featuredImage: {
      node: {
        mediaItem: homeblog2,
      },
    },
    linkHref: "/blog/2",
    title: "İş Davaları Bilgi Notu",
    excerpt:
      "Çalışanlar ile işverenler arasında yaşanan uyuşmazlıklar, iş davalarının temelini oluşturur. Bu bilgi notunda, iş davalarının türlerinden dava süreçlerine kadar birçok önemli konu başlığını ele aldık. Hak kaybı yaşamamak adına dikkat edilmesi gereken noktalar sizler için derlendi.",
    date: "2025-07-15T12:24:34",
    author: "İlhan Mesut Çeltikci",
    comments: 1,
  },
  {
    id: 3,
    featuredImage: {
      node: {
        mediaItem: homeblog3,
      },
    },
    linkHref: "/blog/3",
    title: "Seri Cinayetler Makalesi",
    excerpt:
      "Seri cinayetler, ardışık şekilde işlenen ve genellikle belirli bir kalıba oturan cinayetlerdir. Bu tür suçların ardındaki psikolojik motivasyonlar, fail profilleri ve toplum üzerindeki etkileri, adli bilimlerin en dikkat çeken konuları arasında yer alır. Makalemizde bu karanlık dünyayı detaylıca ele aldık.",
    date: "2025-07-19T12:24:34",
    author: "İlhan Mesut Çeltikci",
    comments: 0,
  },
];

// Data for FAQs
export const FAQData: FAQsProps[] = [
  {
    id: 1,
    question: "Neden Pusula Hukuku Seçmelisiniz?",
    answer:
      "Pusula Hukuk, güçlü uzman kadrosu, çözüm odaklı yaklaşımı ve müvekkillerine sunduğu güvenilir hizmet anlayışıyla öne çıkar. Her müvekkil için özel stratejiler geliştirerek, haklarınızı en etkin şekilde savunur. Şeffaf iletişim, profesyonellik ve deneyim bir araya gelerek sizi doğru sonuca ulaştırır.",
  },
  {
    id: 2,
    question: "İlk Görüşme Ücretli mi?",
    answer:
      "İlk hukuki görüşme sürecimiz, durumunuzun ve ihtiyaçlarınızın değerlendirilmesi için genellikle ücretsizdir. Bu görüşme, nasıl bir hukuki yardıma ihtiyacınız olduğunu belirlememize yardımcı olur.",
  },
  {
    id: 3,
    question: "Bir dava açmak istediğimde süreç nasıl işler?",
    answer:
      "Dava açma kararı verildiğinde, ilk olarak durumunuzun detaylı bir analizini yapar, ardından hukuki stratejinizi belirler ve gerekli tüm hukuki işlemleri yürütürüz.",
  },
  {
    id: 4,
    question:
      "Dava açılırken masraflar ne kadardır? Bu masrafları kim karşılar?",
    answer:
      "Dava açma işlemi sırasında, ilk olarak ‘dava harcı’ adı verilen bir ücret ödenmesi gereklidir. Bu harç miktarı, davanın türüne bağlı olarak farklılık gösterebilir. Dava açılışında gerekli masraflar başlangıçta davacı tarafından karşılanır. Harç miktarları, her yıl yasal düzenlemelere göre güncellenir ve değişebilir. Bunun yanı sıra, tebligat, keşif, bilirkişi ve tanık ücretleri gibi ek masraflar için de bir avans ödemesi yapılması gerekebilir. Davanın sonucunda mahkeme, yargılama giderlerinin kim tarafından karşılanacağına ilişkin bir karar verir.",
  },
  {
    id: 5,
    question: "Hukuki sorunumuzu mahkemeye taşımadan çözebilir miyiz?",
    answer:
      "Evet, anlaşmazlıklarınızı mahkemeye taşımadan çözmeniz mümkündür. Alternatif uyuşmazlık çözüm yolları (arabuluculuk, tahkim, vb.) konusunda sizlere rehberlik edebiliriz.",
  },
  {
    id: 6,
    question: "Dava sürecinde karşılaşabileceğim riskler nelerdir?",
    answer:
      "Her dava, finansal, itibari veya diğer riskler içerebilir. Bu riskleri, ilk görüşme sırasında ve dava sürecinde detaylıca tartışacağız.",
  },
];

// Data for Team Members
export const TeamMembers: TeamMembersProps[] = [
  {
    id: 1,
    image: teammember1,
    name: "Mert Can Yalçın",
    designation: "Avukat",
    slug: "mert-can-yalcin",
    info: "suluovada dogdu ve İstanbul'da doğdu. Avukat",
    facebookLink: "https://www.facebook.com/mertcanyalcin.com/",
    linkedinLink: "https://www.linkedin.com/in/mertcany",
  },
  {
    id: 2,
    image: teammember2,
    name: "Mustafa Koyuncu",
    designation: "Avukat ve Arabulucu",
    slug: "mustafa-koyuncu",
    info: "suluovada dogdu ve İstanbul'da doğdu. Avukat",
    facebookLink: "https://www.facebook.com/mertcanyalcin.com/",
    linkedinLink: "https://www.linkedin.com/in/mertcany",
  },
  {
    id: 3,
    image: teammember3,
    name: "İlhan Mesut Çeltikci",
    designation: "Avukat",
    slug: "ilhan-mesut-celtikci",
    info: "suluovada dogdu ve İstanbul",
    facebookLink: "https://www.facebook.com/mertcanyalcin.com/",
    linkedinLink: "https://www.linkedin.com/in/mertcany",
  },
  {
    id: 4,
    image: teammember4,
    name: "Adil Küçük",
    designation: "Avukat ve Arabulucu",
    slug: "adil-kucuk",
    info: "suluovada dogdu ve İstanbul'da doğdu. Avukat",
    facebookLink: "https://www.facebook.com/mertcanyalcin.com/",
    linkedinLink: "",
  },
];

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/ç/g, "c")
    .replace(/ğ/g, "g")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ş/g, "s")
    .replace(/ü/g, "u")
    .replace(/[^a-z0-9\s-]/g, "") // harf, rakam, boşluk ve - dışındakileri sil
    .trim()
    .replace(/\s+/g, "-"); // boşlukları tire ile değiştir
}

const CriminalLawInfo = () => {
  return (
    <div className="text-base text-[#333] space-y-6">
      <section>
        <h2 className="text-xl font-semibold mb-2">Ceza Hukuku Nedir?</h2>
        <p>
          Ceza hukuku; bireylerin, toplumun ya da kamu düzeninin zararına olan
          davranışları suç olarak tanımlayan ve bu davranışlara uygulanacak
          yaptırımları belirleyen kamu hukuku dalıdır. Diğer hukuk dallarından
          farklı olarak ceza hukukunda yaptırım, doğrudan devletin cezalandırma
          gücüyle uygulanır. Toplum düzenini ve birey haklarını korumak
          amacıyla, ceza hukukunun en temel işlevi; hangi davranışların suç
          sayıldığını belirlemek, suç işlendiğinde ise adil bir şekilde failin
          sorumluluğunu ortaya koymaktır.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          Ceza Hukukunun Temel İlkeleri
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>
              Kanunsuz Suç ve Ceza Olmaz (nullum crimen, nulla poena sine lege):
            </strong>{" "}
            Yürürlükteki kanunlarla açıkça suç sayılmayan bir fiilden dolayı
            kimse cezalandırılamaz.
          </li>
          <li>
            <strong>Suçta ve Cezada Şahsilik:</strong> Ceza yalnızca suçu
            işleyen kişiye uygulanır.
          </li>
          <li>
            <strong>Masumiyet Karinesi:</strong> Bir kişi, suçu sabit olana
            kadar suçsuz kabul edilir.
          </li>
          <li>
            <strong>İnsan Onuruna Saygı:</strong> Ceza uygulamalarında insan
            haklarına zarar verilmemesi esastır.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Ceza Hukukunun Dalları</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Genel Ceza Hukuku:</strong> Suçun unsurları, kast, taksir,
            teşebbüs gibi kavramları kapsar.
          </li>
          <li>
            <strong>Özel Ceza Hukuku:</strong> Hangi fiillerin suç olduğunu ve
            uygulanacak cezaları belirler.
            <ul className="list-disc pl-5 mt-1">
              <li>Kasten öldürme, yaralama</li>
              <li>Hırsızlık, dolandırıcılık</li>
              <li>Cinsel dokunulmazlığa karşı suçlar</li>
              <li>Görevi kötüye kullanma</li>
              <li>Terörle mücadele suçları</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Ceza Yargılaması Süreci</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <strong>Soruşturma:</strong> Savcılık tarafından yürütülür. Deliller
            toplanır, gerekirse tutuklama talep edilir.
          </li>
          <li>
            <strong>Kovuşturma:</strong> Suç şüphesi güçlü ise dava açılır,
            mahkeme süreci başlar.
          </li>
          <li>
            <strong>Yargılama:</strong> Mahkeme delilleri değerlendirerek karar
            verir.
          </li>
          <li>
            <strong>Hüküm:</strong> Suç sabit görülürse ceza verilir; değilse
            beraat edilir.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          Ceza Avukatı Nedir? Ne Yapar?
        </h2>
        <p>
          Ceza avukatı; şüpheli, sanık veya mağdurun ceza yargılamasındaki
          haklarını koruyan, savunma veya müdahillik görevini üstlenen uzmandır.
        </p>
        <h3 className="font-semibold mt-4 mb-2">Ceza avukatının görevleri:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Gözaltı ve ifade alma sürecinde müvekkilin yanında olmak</li>
          <li>Tutuklama taleplerine karşı savunma yapmak</li>
          <li>
            Delil toplanmasını ve hukuka uygun yargılama yapılmasını sağlamak
          </li>
          <li>Temyiz ve istinaf başvurularını yürütmek</li>
          <li>Suç mağdurlarını ceza davasında temsil etmek</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          🔍 Soruşturma ve Kovuşturma Süreci
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Soruşturma:</strong> Savcılık tarafından başlatılır, ifade
            alınır, tedbirler uygulanabilir.
          </li>
          <li>
            <strong>Kovuşturma:</strong> Dava açılır, mahkeme süreci işler. Ceza
            avukatının rolü bu aşamada kritiktir.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          ⚖️ Sık Görülen Ceza Davaları
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Şahsa Karşı Suçlar:</strong> Kasten öldürme, yaralama,
            tehdit, hakaret
          </li>
          <li>
            <strong>Mal Varlığına Karşı Suçlar:</strong> Hırsızlık,
            dolandırıcılık, yağma
          </li>
          <li>
            <strong>Topluma Karşı Suçlar:</strong> Uyuşturucu ticareti, genel
            güvenliği tehlikeye sokma
          </li>
          <li>
            <strong>Kamu Düzenine Karşı Suçlar:</strong> Rüşvet, zimmet, terör
            suçları
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          🛡️ Ceza Davasında Haklarınız
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Susma hakkı</li>
          <li>Avukattan yararlanma hakkı</li>
          <li>Adil yargılanma hakkı</li>
          <li>Tercüman hakkı</li>
          <li>İtiraz ve temyiz hakkı</li>
        </ul>
        <p>
          Bu hakların ihlali, yargılamanın adilliğini zedeler ve kararların
          bozulmasına neden olabilir.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          Ceza Hukuku Danışmanlığı Hizmetimiz
        </h2>
        <p>
          Hukuki sürecin karmaşıklığı göz önüne alındığında, profesyonel destek
          almak büyük önem taşır. Ofisimiz aşağıdaki alanlarda hizmet
          vermektedir:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Soruşturma dosyalarının takibi</li>
          <li>Gözaltı ve tutuklamalarda 7/24 müdahale</li>
          <li>Mahkeme süreçlerinde aktif savunma</li>
          <li>Karar sonrası istinaf ve temyiz başvuruları</li>
        </ul>
      </section>
    </div>
  );
};

export default CriminalLawInfo;

// Data for Faaliyet Alanlarımız
export const PAData: PADataProps[] = [
  {
    id: 1,
    href: "/faaliyet-alanlarimiz/ceza-hukuku",
    title: "Ceza Hukuku",
    text: "Ceza hukuku; bireylerin hak ve özgürlüklerini korumayı amaçlayan, toplum düzenini sağlayan en önemli hukuk dallarından biridir.",
    info: CriminalLawInfo,
    image: paimage1,
  },
  {
    id: 2,
    href: "/faaliyet-alanlarimiz/basin-hukuku",
    title: "Basın Hukuku",
    text: "Basın yoluyla yapılan yayınların hukuki sınırlarını belirleyen temel kurallar bu alanda yer alır.",
    info: () => {
      return (
        <>
          <div className="max-w-4xl mx-auto p-6 text-gray-800">
            <h1 className="text-3xl font-bold mb-6">⚖️ Basın Hukuku</h1>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Basın Hukukunun Temel İlkeleri
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <strong>İfade ve Basın Özgürlüğü:</strong> Anayasa'nın 26. ve
                  28. maddelerine göre herkes, düşünce ve kanaatlerini açıklama
                  ve yayma hakkına sahiptir. Ancak bu özgürlük; kamu güvenliği,
                  milli güvenlik, başkalarının hak ve özgürlükleri gibi
                  sebeplerle sınırlanabilir.
                </li>
                <li>
                  <strong>Özel Hayatın Gizliliği:</strong> Basın yoluyla
                  kişilerin özel hayatına müdahale edilmesi, hukuka aykırı yayın
                  olarak değerlendirilir. Bu durum tazminat ve ceza sorumluluğu
                  doğurabilir.
                </li>
                <li>
                  <strong>Doğru ve Tarafsız Yayın Yapma Yükümlülüğü:</strong>{" "}
                  Basın organları kamuoyunu bilgilendirirken doğru, tarafsız ve
                  denetlenebilir bilgi sunmak zorundadır.
                </li>
                <li>
                  <strong>Cevap ve Düzeltme Hakkı:</strong> Hakkında asılsız
                  veya yanıltıcı haber yapılan kişiler, tekzip talep edebilir.
                </li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Basın Yoluyla İşlenebilecek Suçlar
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Hakaret ve İftira (TCK m.125-127):</strong> Basın
                  yoluyla hakaret, daha ağır ceza ile cezalandırılır.
                </li>
                <li>
                  <strong>Kişisel Verilerin Yayılması (TCK m.136):</strong>{" "}
                  Kişinin izni olmadan özel bilgilerinin yayımlanması suçtur.
                </li>
                <li>
                  <strong>
                    Adil Yargılamayı Etkileme ve Gizliliğin İhlali (TCK
                    m.285-288):
                  </strong>{" "}
                  Devam eden davalara ilişkin gizli bilgilerin yayımlanması
                  suçtur.
                </li>
                <li>
                  <strong>Halkı Kin ve Düşmanlığa Tahrik (TCK m.216):</strong>{" "}
                  Nefret söylemi ve ayrımcılık içeren yayınlar ciddi
                  yaptırımlara tabidir.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Basın Kanunu'na Göre Sorumluluklar
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Süreli yayınlarda sorumlu müdürün belirtilmesi zorunludur.
                </li>
                <li>
                  Haberin kaynağı gösterilmeli ve kişilik haklarına saygı
                  gösterilmelidir.
                </li>
                <li>
                  Yayınlanan yazıların nüshaları 6 ay süreyle saklanmalıdır.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Basın Davaları ve Avukat Desteği
              </h2>
              <p>
                Basın davaları hem ceza hukuku hem de özel hukuk boyutuna sahip
                karmaşık süreçlerdir. Hakaret, kişilik haklarının ihlali, yayın
                kaldırma, erişim engeli ve tekzip davaları bu kapsamdadır.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                📞 Basın Hukuku Danışmanlığı
              </h2>
              <p>
                Ofisimiz gazeteciler, haber portalları ve yayıncı kuruluşlara
                önleyici danışmanlık sunar. Basın suçlarıyla ilgili süreçlerin
                takibi, tazminat davalarının yürütülmesi ve yayın kaldırma
                işlemleri gibi alanlarda hukuki destek verir.
              </p>
            </section>
          </div>
        </>
      );
    },
    image: paimage2,
  },
  {
    id: 3,
    href: "/faaliyet-alanlarimiz/gayrimenkul-hukuku",
    title: "Gayrimenkul Hukuku",
    text: "Taşınmaz mallar üzerindeki hakları, alım-satım işlemlerini ve uyuşmazlıkları düzenleyen hukuk dalıdır.",
    info: () => {
      return (
        <>
          <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">🏛️ Gayrimenkul Hukuku</h1>

            <p className="mb-4">
              Gayrimenkul hukuku; taşınmaz mallara (arsa, arazi, konut, iş yeri
              vb.) ilişkin mülkiyet, tasarruf, devir, kiralama ve kullanım
              haklarını düzenleyen hukuk dalıdır. Bu alan, hem Türk Medeni
              Kanunu hem de ilgili özel kanunlarla ayrıntılı şekilde
              düzenlenmiştir. Gayrimenkul hukuku, bireylerin ve şirketlerin
              taşınmazlar üzerindeki haklarını korumayı, uyuşmazlıkları çözmeyi
              ve hukuki güvenliği sağlamayı amaçlar.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              ⚖️ Gayrimenkul Hukukunun Temel Konuları
            </h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Mülkiyet Hakkı:</strong> Taşınmazın malikine ait en
                geniş kapsamlı ayni hak olup, devri, sınırlandırılması ve
                korunması bu alanın konusudur.
              </li>
              <li>
                <strong>Kira Hukuku:</strong> Konut ve iş yeri kiralamalarında
                tarafların hak ve yükümlülükleri, tahliye süreçleri.
              </li>
              <li>
                <strong>Kat Mülkiyeti:</strong> Apartman ve site yönetiminde
                ortak alan kullanımı, gider paylaşımı, yönetim planı
                uyuşmazlıkları.
              </li>
              <li>
                <strong>İpotek ve Rehin Hakları:</strong> Taşınmaz üzerinde
                alacakların güvence altına alınması amacıyla kurulan sınırlı
                ayni haklar.
              </li>
              <li>
                <strong>Tapu İşlemleri:</strong> Satış, bağış, intikal gibi
                taşınmaz devir işlemleri ve tapu kayıtlarının düzeltilmesi.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">
              🏠 Gayrimenkul Davaları
            </h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Mülkiyetin tespiti ve tapu iptal-tescil davaları</li>
              <li>Kira alacağı ve tahliye davaları</li>
              <li>Kat mülkiyeti ve ortak alan ihtilafları</li>
              <li>İrtifak hakkı kurulması veya kaldırılması davaları</li>
              <li>Kamulaştırma ve kamulaştırmasız el atma davaları</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">
              📚 Hukuki Danışmanlık ve Hizmetlerimiz
            </h2>
            <p className="mb-4">
              Ofisimiz, hem bireylere hem de kurumsal müvekkillere gayrimenkul
              hukuku alanında kapsamlı hizmetler sunmaktadır:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Tapu işlemlerinde hukuki destek</li>
              <li>Kira sözleşmesi hazırlanması ve revizyonu</li>
              <li>Gayrimenkul yatırımlarında hukuki risk analizi</li>
              <li>
                İnşaat sözleşmeleri ve yüklenici-alt yüklenici ilişkilerinin
                düzenlenmesi
              </li>
              <li>Gayrimenkul projelerinde önleyici hukuki danışmanlık</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">📞 İletişim</h2>
            <p>
              Gayrimenkul hukuku ile ilgili tüm sorularınız ve hukuki destek
              talepleriniz için bizimle iletişime geçebilirsiniz. Uzman
              avukatlarımız, taşınmazlarınızla ilgili haklarınızı en iyi şekilde
              korumak için yanınızdadır.
            </p>
          </div>
        </>
      );
    },
    image: paimage3,
  },
  {
    id: 4,
    href: "/faaliyet-alanlarimiz/sosyal-medya-hukuku",
    title: "Sosyal Medya Hukuku",
    text: "Sosyal medyada ifade özgürlüğü ile kişilik hakları arasındaki dengeyi sağlayan yeni nesil hukuk dalı.",
    info: () => {
      return (
        <>
          <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">🌐 Sosyal Medya Hukuku</h1>

            <p className="mb-4">
              Sosyal medya hukuku; dijital ortamda yapılan paylaşımlar, içerik
              üretimi, kişisel veri kullanımı, telif hakları ve çevrimiçi ifade
              özgürlüğü gibi konuları kapsayan, hızla gelişen bir hukuk
              alanıdır. Bu alan, bireylerin ve kurumların sosyal medya
              platformlarında hukuka uygun şekilde faaliyet göstermelerini
              sağlamak amacıyla düzenlenmiştir.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              ⚖️ Sosyal Medya Hukukunun Temel Konuları
            </h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Kişisel Verilerin Korunması:</strong> KVKK ve GDPR
                kapsamında, kullanıcıların kişisel bilgilerinin işlenmesi ve
                saklanması.
              </li>
              <li>
                <strong>Telif Hakları:</strong> Paylaşılan görsel, video, müzik
                ve metinlerin fikri mülkiyet haklarının korunması.
              </li>
              <li>
                <strong>İtibar ve Hakaret Davaları:</strong> Sosyal medya
                üzerinden yapılan hakaret, iftira ve asılsız paylaşımlar
                nedeniyle açılan davalar.
              </li>
              <li>
                <strong>Ticari Reklam ve Sponsorluk:</strong> Influencer ve
                marka iş birliklerinde reklam mevzuatına uyum.
              </li>
              <li>
                <strong>Platform Sözleşmeleri:</strong> Sosyal medya
                platformlarının kullanıcı sözleşmeleri ve içerik politikaları.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">
              📱 Sosyal Medya Kaynaklı Uyuşmazlıklar
            </h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Sahte hesap ve kimlik hırsızlığı</li>
              <li>İzinsiz fotoğraf/video paylaşımı</li>
              <li>Çevrimiçi dolandırıcılık</li>
              <li>Fikri mülkiyet ihlalleri</li>
              <li>Sosyal medya üzerinden sözleşme ihlalleri</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">
              📚 Hukuki Danışmanlık ve Hizmetlerimiz
            </h2>
            <p className="mb-4">
              Sosyal medya hukuku alanında hem bireysel hem kurumsal
              müvekkillere hukuki destek sağlıyoruz:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Sosyal medya içeriklerinin hukuki denetimi</li>
              <li>
                Hakaret, iftira ve itibar zedeleyici paylaşımlara karşı dava
                süreçleri
              </li>
              <li>Kişisel verilerin korunması ve KVKK uyum çalışmaları</li>
              <li>Telif hakları ihlallerine karşı hukuki süreç yönetimi</li>
              <li>Reklam ve sponsorluk sözleşmelerinin hazırlanması</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">📞 İletişim</h2>
            <p>
              Sosyal medya hukuku ile ilgili tüm hukuki ihtiyaçlarınız için
              bizimle iletişime geçebilirsiniz. Dijital dünyada haklarınızı
              korumak için uzman ekibimiz yanınızdadır.
            </p>
          </div>
        </>
      );
    },
    image: paimage4,
  },
  {
    id: 5,
    href: "/faaliyet-alanlarimiz/trafik-ve-sigorta-hukuku",
    title: "Trafik ve Sigorta Hukuku",
    text: "Karayolu trafik düzenlemeleri, maddi ve manevi tazminatlar ile sigorta yükümlülüklerini kapsayan hukuk dalıdır.",
    info: () => {
      return (
        <>
          <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">
              🚗 Trafik ve Sigorta Hukuku
            </h1>

            <p className="mb-4">
              Trafik ve sigorta hukuku; karayolu ulaşımı sırasında meydana gelen
              kazalar, trafik kuralları ihlalleri ve bu olaylardan doğan
              maddi-manevi zararların tazminini düzenleyen hukuk dalıdır. Ayrıca
              motorlu taşıtların sigortalanması, sigorta şirketleri ile araç
              sahipleri arasındaki hukuki ilişkiler de bu alanın kapsamına
              girer.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              ⚖️ Trafik Hukukunun Temel Konuları
            </h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Trafik Kazaları:</strong> Maddi hasarlı ve yaralanmalı
                kazaların hukuki süreçleri.
              </li>
              <li>
                <strong>Trafik Cezaları:</strong> Hız sınırı ihlali, alkollü
                araç kullanma, kırmızı ışık ihlali gibi trafik kuralı ihlalleri.
              </li>
              <li>
                <strong>Ehliyet ve Ruhsat İşlemleri:</strong> Belge iptalleri,
                geri alma ve yenileme süreçleri.
              </li>
              <li>
                <strong>Trafik Davaları:</strong> Kusur oranı tespiti ve ceza
                davaları.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">
              🛡️ Sigorta Hukukunun Temel Konuları
            </h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Zorunlu Trafik Sigortası:</strong> Kazalarda üçüncü
                kişilere verilen zararların karşılanması.
              </li>
              <li>
                <strong>Kasko Sigortası:</strong> Araç sahibinin kendi aracına
                gelen zararların tazmini.
              </li>
              <li>
                <strong>Tazminat Talepleri:</strong> Maddi ve manevi tazminat
                davaları.
              </li>
              <li>
                <strong>Sigorta Şirketleri ile Uyuşmazlıklar:</strong> Ödeme
                reddi, eksik ödeme ve poliçe yorumları.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">
              📚 Hukuki Danışmanlık ve Hizmetlerimiz
            </h2>
            <p className="mb-4">
              Trafik ve sigorta hukuku alanında hem bireysel hem kurumsal
              müvekkillerimize hukuki destek sağlıyoruz:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Trafik kazaları sonrası hukuki süreç yönetimi</li>
              <li>Kusur oranı tespiti ve dava takibi</li>
              <li>Sigorta tazminat taleplerinin hazırlanması</li>
              <li>Sigorta şirketleri ile müzakere ve dava süreçleri</li>
              <li>Ehliyet ve ruhsat işlemlerine yönelik hukuki destek</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">📞 İletişim</h2>
            <p>
              Trafik ve sigorta hukuku ile ilgili tüm hukuki ihtiyaçlarınız için
              bizimle iletişime geçebilirsiniz. Haklarınızı en güçlü şekilde
              savunmak için yanınızdayız.
            </p>
          </div>
        </>
      );
    },
    image: paimage5,
  },
  {
    id: 6,
    href: "/faaliyet-alanlarimiz/sozlesmeler-hukuku",
    title: "Sözleşmeler Hukuku",
    text: "Sözleşmelerin kurulması, geçerliliği, ihlali ve sona erdirilmesi gibi konuları düzenleyen özel hukuk alanıdır.",
    info: () => {
      return (
        <>
          <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">📄 Sözleşmeler Hukuku</h1>

            <p className="mb-4">
              Sözleşmeler hukuku, taraflar arasında yapılan anlaşmaların
              geçerliliğini, uygulanmasını ve ihlal edilmesi durumunda doğacak
              hukuki sonuçları düzenleyen hukuk dalıdır. Hem yazılı hem sözlü
              sözleşmelerin geçerlilik şartları, yorumlanması ve feshi bu alanın
              konusunu oluşturur.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              📌 Sözleşmelerin Temel Unsurları
            </h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Taraflar:</strong> Sözleşmenin taraflarının hukuki
                ehliyete sahip olması gerekir.
              </li>
              <li>
                <strong>Karşılıklı İrade Beyanı:</strong> Tarafların özgür
                iradeleriyle anlaşmaya varması.
              </li>
              <li>
                <strong>Konu:</strong> Sözleşmenin konusu hukuka ve ahlaka uygun
                olmalıdır.
              </li>
              <li>
                <strong>Şekil:</strong> Bazı sözleşmelerin geçerli olabilmesi
                için kanunda öngörülen şekil şartlarına uyulması gerekir.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">⚖️ Sözleşme Türleri</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Satış Sözleşmeleri:</strong> Mal veya hizmet satışına
                ilişkin anlaşmalar.
              </li>
              <li>
                <strong>Kira Sözleşmeleri:</strong> Kiralanan mal veya mülkün
                kullanım şartlarını belirleyen sözleşmeler.
              </li>
              <li>
                <strong>Hizmet Sözleşmeleri:</strong> Belirli bir işin yapılması
                karşılığında ücret ödenmesini içeren sözleşmeler.
              </li>
              <li>
                <strong>Eser Sözleşmeleri:</strong> Ortaya belirli bir eser
                çıkarılması amacıyla yapılan sözleşmeler.
              </li>
              <li>
                <strong>Temsil ve Vekâlet Sözleşmeleri:</strong> Bir kişinin
                başka bir kişi adına işlem yapmasını sağlayan sözleşmeler.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">
              🛡️ Sözleşme İhlali ve Hukuki Sonuçlar
            </h2>
            <p className="mb-4">
              Sözleşmenin ihlali durumunda karşı tarafın uğradığı zararın
              tazmini, sözleşmenin feshi veya cezai şartların uygulanması
              gündeme gelebilir. Tarafların haklarını koruyabilmesi için
              sözleşme maddelerinin açık ve net şekilde düzenlenmesi büyük önem
              taşır.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              📚 Hukuki Danışmanlık ve Hizmetlerimiz
            </h2>
            <p className="mb-4">
              Sözleşmelerin hazırlanması, incelenmesi ve revize edilmesi
              aşamalarında hukuki danışmanlık sağlıyoruz:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                Satış, kira, hizmet ve diğer sözleşme türlerinin hazırlanması
              </li>
              <li>Mevcut sözleşmelerin hukuka uygunluk kontrolü</li>
              <li>Sözleşme ihlali durumunda dava ve tahkim süreçleri</li>
              <li>Taraflar arasında müzakere ve anlaşma yönetimi</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">📞 İletişim</h2>
            <p>
              Sözleşmeler hukuku alanında profesyonel destek almak ve
              haklarınızı güvence altına almak için bizimle iletişime
              geçebilirsiniz.
            </p>
          </div>
        </>
      );
    },
    image: paimage6,
  },
  {
    id: 7,
    href: "/faaliyet-alanlarimiz/tuketici-hukuku",
    title: "Tüketici Hukuku",
    text: "Mal ve hizmet satın alan tüketicilerin haklarını güvence altına alan özel hukuk dalıdır.",
    info: () => {
      return (
        <>
          <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">🛍️ Tüketici Hukuku</h1>

            <p className="mb-4">
              Tüketici hukuku, mal veya hizmet satın alan kişilerin haklarını
              korumayı ve satıcı, sağlayıcı ile tüketici arasındaki ilişkileri
              düzenlemeyi amaçlayan hukuk dalıdır. Bu alan, haksız uygulamaların
              önlenmesi ve tüketicinin ekonomik çıkarlarının güvence altına
              alınması için önemli yasal düzenlemeler içerir.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              📌 Tüketici Haklarının Temel Unsurları
            </h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Satın Alma Güvencesi:</strong> Tüketicinin, aldığı mal
                veya hizmetin ayıpsız olma hakkı.
              </li>
              <li>
                <strong>Bilgilendirme Hakkı:</strong> Ürün veya hizmetin
                özellikleri, fiyatı ve kullanım koşulları hakkında doğru bilgi
                alma.
              </li>
              <li>
                <strong>Sözleşme Özgürlüğü:</strong> Zorla veya yanıltıcı
                şekilde sözleşme imzalatılmasının engellenmesi.
              </li>
              <li>
                <strong>İade ve Cayma Hakkı:</strong> Belirli süre içinde mal
                veya hizmetten vazgeçebilme imkânı.
              </li>
              <li>
                <strong>Güvenli Ürün Hakkı:</strong> Sağlığa ve güvenliğe zarar
                vermeyecek ürünlerin piyasada bulunması.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">
              ⚖️ Tüketici Uyuşmazlıklarında Başvuru Yolları
            </h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Tüketici Hakem Heyeti:</strong> Belirli parasal sınırlar
                içinde uyuşmazlıkların çözüldüğü merci.
              </li>
              <li>
                <strong>Tüketici Mahkemesi:</strong> Daha yüksek meblağlı veya
                karmaşık davalarda görevli mahkeme.
              </li>
              <li>
                <strong>Arabuluculuk:</strong> Tarafların anlaşmazlıklarını
                mahkeme öncesi çözmeleri için bir alternatif yöntem.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">
              🛡️ Hukuki Danışmanlık ve Hizmetlerimiz
            </h2>
            <p className="mb-4">
              Tüketici haklarınızı korumak ve olası uyuşmazlıklarda hak kaybı
              yaşamamak için aşağıdaki alanlarda profesyonel destek sağlıyoruz:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Ayıplı mal ve hizmet davaları</li>
              <li>Sözleşme iptali ve fesih işlemleri</li>
              <li>İade ve cayma hakkı süreçleri</li>
              <li>Tüketici hakem heyeti ve mahkeme başvuruları</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">📞 İletişim</h2>
            <p>
              Tüketici hukuku alanında haklarınızı öğrenmek ve yasal süreçlerde
              yanınızda olmamız için bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </>
      );
    },
    image: paimage7,
  },
  {
    id: 8,
    href: "/faaliyet-alanlarimiz/icra-ve-iflas-hukuku",
    title: "İcra ve İflas Hukuku",
    text: "Borçlunun mal varlığına yönelik takip, haciz ve iflas süreçlerini düzenleyen kamu hukukudur.",
    info: () => {
      return (
        <>
          <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">⚖️ İcra ve İflas Hukuku</h1>

            <p className="mb-4">
              İcra ve iflas hukuku, alacaklıların alacaklarını devletin yetkili
              organları aracılığıyla cebri icra yoluyla tahsil etmelerini
              düzenleyen hukuk dalıdır. Bu hukuk alanı, borçlunun borcunu yerine
              getirmemesi durumunda uygulanacak yasal prosedürleri ve tarafların
              haklarını belirler.
            </p>

            <h2 className="text-2xl font-semibold mb-4">📌 Temel Kavramlar</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>İcra Takibi:</strong> Alacaklının, borçludan alacağını
                tahsil etmek için icra dairesine başvurması.
              </li>
              <li>
                <strong>Haciz:</strong> Borçlunun malvarlığına devlet gücüyle el
                konulması.
              </li>
              <li>
                <strong>İflas:</strong> Borçlunun tüm malvarlığının alacaklılara
                dağıtılması süreci.
              </li>
              <li>
                <strong>Rehin:</strong> Alacağın teminat altına alınması
                amacıyla mal veya hakkın güvence olarak gösterilmesi.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">
              ⚖️ İcra Takibi Türleri
            </h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Genel Haciz Yolu ile Takip:</strong> En yaygın icra
                yöntemi, hem para hem de teminat alacaklarında kullanılır.
              </li>
              <li>
                <strong>Kambiyo Senetlerine Özgü Takip:</strong> Çek, bono ve
                poliçe gibi kıymetli evraklarda uygulanan özel takip yolu.
              </li>
              <li>
                <strong>İlamsız Takip:</strong> Mahkeme kararı olmadan
                başlatılan icra süreci.
              </li>
              <li>
                <strong>İlamlı Takip:</strong> Mahkeme kararı veya ilam
                niteliğinde belgeye dayanarak yapılan takip.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">🔍 İflas Süreci</h2>
            <p className="mb-4">
              İflas, özellikle tacirler için geçerli olup, borçlunun tüm
              malvarlığının tasfiye edilerek alacaklılara dağıtılmasını içerir.
              İflas süreci, mahkeme kararıyla başlar ve iflas idaresi tarafından
              yürütülür.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              🛡️ Hukuki Danışmanlık ve Hizmetlerimiz
            </h2>
            <p className="mb-4">
              İcra ve iflas süreçlerinde hak kaybı yaşamamak için profesyonel
              hukuki destek oldukça önemlidir. Bu kapsamda sunduğumuz başlıca
              hizmetler şunlardır:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>İcra takibi başlatma ve yürütme</li>
              <li>Haciz ve satış işlemlerinin takibi</li>
              <li>İflas başvurusu ve tasfiye süreci</li>
              <li>Alacak tahsili ve borç yapılandırma</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">📞 İletişim</h2>
            <p>
              İcra ve iflas hukuku alanındaki tüm dava ve takip işlemleriniz
              için bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </>
      );
    },
    image: paimage8,
  },
  {
    id: 9,
    href: "/faaliyet-alanlarimiz/fikri-mulkiyet-hukuku",
    text: "Marka, patent, telif… Tüm yaratıcı hakların korunması fikri mülkiyet hukukunun konusudur.",
    title: "Fikri Mülkiyet Hukuku",
    info: () => {
      return (
        <>
          <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">
              💡 Fikri Mülkiyet Hukuku
            </h1>

            <p className="mb-4">
              Fikri mülkiyet hukuku, bireylerin veya kurumların ortaya koyduğu
              fikir ve eserlerin korunmasını sağlayan hukuk dalıdır. Bu alan,
              telif haklarından marka ve patent haklarına kadar geniş bir
              yelpazede yaratıcı çalışmaların yasal güvence altına alınmasını
              amaçlar.
            </p>

            <h2 className="text-2xl font-semibold mb-4">📌 Kapsam Alanları</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Telif Hakları:</strong> Kitap, müzik, sinema, yazılım
                gibi eserlerin korunması.
              </li>
              <li>
                <strong>Marka Hakları:</strong> Bir işletmenin ürün veya
                hizmetlerini ayırt edici işaretlerin korunması.
              </li>
              <li>
                <strong>Patent Hakları:</strong> Buluşların belirli süre boyunca
                sahibine münhasır hak tanınması.
              </li>
              <li>
                <strong>Endüstriyel Tasarımlar:</strong> Ürünlerin estetik
                görünümünün korunması.
              </li>
              <li>
                <strong>Coğrafi İşaretler:</strong> Belirli bir yöre veya
                bölgeye ait ürünlerin korunması.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">⚖️ Hukukun Amacı</h2>
            <p className="mb-4">
              Fikri mülkiyet hukuku, yaratıcılığı teşvik etmek, eser sahiplerini
              korumak ve haksız rekabetin önüne geçmek için düzenlenmiştir. Bu
              sayede hem bireylerin emeği korunur hem de toplumsal gelişim
              desteklenir.
            </p>

            <h2 className="text-2xl font-semibold mb-4">🛡️ Hizmetlerimiz</h2>
            <p className="mb-4">
              Fikri mülkiyet alanında sunduğumuz hizmetler şunlardır:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Telif hakkı tescil ve ihlal davaları</li>
              <li>Marka başvurusu, tescil ve koruma işlemleri</li>
              <li>Patent başvurusu ve dava süreçleri</li>
              <li>Endüstriyel tasarım tescili</li>
              <li>Coğrafi işaret tescili</li>
              <li>Lisans sözleşmeleri hazırlanması</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">📞 İletişim</h2>
            <p>
              Fikri mülkiyet haklarınızın korunması ve ilgili davalarınızın
              takibi için profesyonel hukuki destek almak üzere bizimle
              iletişime geçebilirsiniz.
            </p>
          </div>
        </>
      );
    },
    image: paimage9,
  },
  {
    id: 10,
    href: "/faaliyet-alanlarimiz/is-hukuku",
    title: "İş Hukuku",
    text: "Çalışan ve işveren arasındaki ilişkileri düzenleyen, hak ve sorumlulukları belirleyen hukuk dalıdır.",
    info: () => {
      return (
        <>
          <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">🏢 İş Hukuku</h1>

            <p className="mb-4">
              İş hukuku, işveren ile işçi arasındaki çalışma ilişkilerini
              düzenleyen hukuk dalıdır. Çalışma koşulları, ücret, izin, iş
              sözleşmesi, iş sağlığı ve güvenliği gibi konular iş hukuku
              kapsamında ele alınır. Amaç, hem işçinin haklarını korumak hem de
              işverenin yükümlülüklerini belirlemektir.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              📌 İş Hukukunun Temel Konuları
            </h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>İş Sözleşmesi:</strong> İşçinin ve işverenin hak ve
                yükümlülüklerini belirleyen sözleşmeler.
              </li>
              <li>
                <strong>Ücret ve Ödemeler:</strong> Maaş, fazla mesai, prim ve
                diğer ödemelerin düzenlenmesi.
              </li>
              <li>
                <strong>İzin ve Tatiller:</strong> Yıllık izin, hastalık izni,
                doğum izni gibi haklar.
              </li>
              <li>
                <strong>İş Sağlığı ve Güvenliği:</strong> İşyerinde güvenli ve
                sağlıklı çalışma koşullarının sağlanması.
              </li>
              <li>
                <strong>Fesih ve İşten Çıkarma:</strong> İş sözleşmesinin sona
                erdirilmesi ve ihbar tazminatları.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">
              ⚖️ İşçi ve İşveren Hakları
            </h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>İşçinin güvenli çalışma ve eşit muamele hakkı</li>
              <li>İşverenin verimli ve düzenli çalışma beklentisi</li>
              <li>Sendika kurma ve toplu iş sözleşmesi hakları</li>
              <li>İş kazaları ve meslek hastalıklarında tazminat hakları</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">
              🛡️ Hukuki Danışmanlık ve Hizmetlerimiz
            </h2>
            <p className="mb-4">
              İş hukuku alanında profesyonel destek sunduğumuz hizmetler
              şunlardır:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>İş sözleşmesi hazırlama ve inceleme</li>
              <li>Fesih, işten çıkarma ve kıdem/ihbar tazminatları</li>
              <li>İşçi alacakları ve ücret uyuşmazlıkları</li>
              <li>İş sağlığı ve güvenliği hukuki danışmanlığı</li>
              <li>Toplu iş sözleşmesi ve sendikal işlemler</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">📞 İletişim</h2>
            <p>
              İş hukuku ile ilgili tüm sorularınız ve hukuki süreçlerinizde
              destek almak için bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </>
      );
    },
    image: paimage10,
  },
  {
    id: 11,
    href: "/faaliyet-alanlarimiz/aile-hukuku",
    title: "Aile Hukuku",
    text: "Evlilik, boşanma, velayet ve miras gibi aile içi hukuki ilişkileri düzenleyen hukuk dalıdır.",
    info: () => {
      return (
        <>
          <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">👪 Aile Hukuku</h1>

            <p className="mb-4">
              Aile hukuku, evlilik, boşanma, velayet, nafaka, mal paylaşımı ve
              diğer aile ilişkilerini düzenleyen hukuk dalıdır. Amaç, aile
              bireylerinin hak ve yükümlülüklerini belirleyerek aile içi
              ilişkilerde adalet ve güvenliği sağlamaktır.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              📌 Aile Hukukunun Temel Konuları
            </h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Evlilik ve Boşanma:</strong> Evlilik birliği, boşanma
                şartları ve boşanma sonrası haklar.
              </li>
              <li>
                <strong>Velayet ve Çocuk Hakları:</strong> Çocuğun bakımı,
                eğitimi ve ebeveyn hakları.
              </li>
              <li>
                <strong>Nafaka ve Mal Paylaşımı:</strong> Boşanma veya ayrılık
                durumunda maddi hakların korunması.
              </li>
              <li>
                <strong>Evlat Edinme ve Soybağı:</strong> Çocuk edinme, soybağı
                kurulması ve iptali süreçleri.
              </li>
              <li>
                <strong>Aile İçi Şiddet ve Koruma Önlemleri:</strong> Şiddet
                mağdurlarına hukuki koruma sağlanması.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">
              ⚖️ Hukuki Danışmanlık ve Hizmetlerimiz
            </h2>
            <p className="mb-4">
              Aile hukuku alanında sunduğumuz başlıca hizmetler şunlardır:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Boşanma davaları ve mal paylaşımı</li>
              <li>Çocuk velayeti ve ziyaret hakları</li>
              <li>Nafaka talepleri ve ödemeleri</li>
              <li>Evlat edinme ve soybağı işlemleri</li>
              <li>Aile içi şiddet durumlarında koruma başvuruları</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">📞 İletişim</h2>
            <p>
              Aile hukuku ile ilgili tüm hukuki süreçlerinizde yanınızda olmak
              ve haklarınızı korumak için bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </>
      );
    },
    image: paimage11,
  },
  {
    id: 12,
    href: "/faaliyet-alanlarimiz/miras-hukuku",
    title: "Miras Hukuku",
    text: "Miras bırakanın mal varlığının, hak sahipleri arasında paylaşımını düzenleyen hukuk dalıdır.",
    info: () => {
      return (
        <>
          <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">🏛️ Miras Hukuku</h1>

            <p className="mb-4">
              Miras hukuku, bir kişinin ölümünden sonra malvarlığının kimlere ve
              hangi oranlarda geçeceğini düzenleyen hukuk dalıdır. Hem miras
              bırakanın haklarını hem de mirasçıların hak ve yükümlülüklerini
              güvence altına alır.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              📌 Miras Hukukunun Temel Konuları
            </h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Mirasçılar ve Sıralama:</strong> Yasal mirasçılar ve
                miras paylaşım sırası.
              </li>
              <li>
                <strong>Mirasın Kabulü ve Reddi:</strong> Mirasçının mirası
                kabul veya reddetme hakkı.
              </li>
              <li>
                <strong>Vasiyetname ve Testament:</strong> Miras bırakanın
                iradesiyle malvarlığının dağılımı.
              </li>
              <li>
                <strong>Mirasın Paylaştırılması:</strong> Mirasın eşit ve adil
                şekilde dağıtılması süreçleri.
              </li>
              <li>
                <strong>Miras Davaları:</strong> Miras paylaşımı, tescil, iptal
                ve tenkis davaları.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">
              ⚖️ Hukuki Danışmanlık ve Hizmetlerimiz
            </h2>
            <p className="mb-4">
              Miras hukuku alanında sunduğumuz hizmetler şunlardır:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Mirasın kabulü ve reddi işlemleri</li>
              <li>Vasiyetname hazırlama ve tescil işlemleri</li>
              <li>Miras paylaşım davaları ve tenkis davaları</li>
              <li>Mirasçılık belgesi ve tescil işlemleri</li>
              <li>Miras davalarında arabuluculuk ve dava takibi</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">📞 İletişim</h2>
            <p>
              Miras hukuku ile ilgili tüm hukuki süreçlerinizde haklarınızı
              korumak ve profesyonel destek almak için bizimle iletişime
              geçebilirsiniz.
            </p>
          </div>
        </>
      );
    },
    image: paimage12,
  },
];

// Data for Team Member Education
export const attorneyEducaton: attorneyEducatonProps[] = [
  {
    id: 1,
    title: "Eğitim Bilgileri",
    details: [
      {
        id: 11,
        text: "Okan Üniversitesi – Hukuk Fakültesi, İstanbul",
      },
      {
        id: 12,
        text: "Amasya Anadolu Öğretmen Lisesi, Amasya",
      },
    ],
  },
  {
    id: 2,
    title: "Baro Bilgileri",
    details: [
      {
        id: 21,
        text: "İstanbul Barosu",
      },
      {
        id: 22,
        text: "Türkiye Barolar Birliği",
      },
    ],
  },
];

// Data for Blog Categories
export const blogCategories: blogCategoriesProps[] = [
  {
    id: 1,
    title: "İş Hukuku",
  },
  {
    id: 2,
    title: "Aile Hukuku",
  },
  {
    id: 3,
    title: "Borçlar Hukuku",
  },
  {
    id: 4,
    title: "Ceza Hukuku",
  },
  {
    id: 5,
    title: "Trafik ve Sigorta Hukuku ",
  },
];

// Data for Blog Tags
export const blogTags: blogTagsProps[] = [
  {
    id: 1,
    name: "#ÇalışanHakları",
  },
  {
    id: 2,
    name: "#TazminatHakları",
  },
  {
    id: 3,
    name: "#İşDavaları",
  },
];

// Data for Home Banner Typewriter
export const homeBannerTypewriter: homeBannerTypewriterProps = {
  image: homepageTypewriter,
  words: [
    "Criminal Law",
    "Divorce Law",
    "Family Law",
    "Immigration Law",
    "Real Estate Law",
  ],
};
