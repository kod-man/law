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
    linkHref: "#",
  },
  {
    id: 2,
    content: "Pusula Hukuk Yenilikçi ve Özgün Çözümler",
    linkText: "Bize Ulaşın",
    image: banner5,
    linkHref: "#",
  },
  {
    id: 3,
    content: "Pusula Hukuk Yenilikçi ve Özgün Çözümler",
    linkText: "Bize Ulaşın",
    image: banner3,
    linkHref: "#",
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
      "The answer of this question depends upon situation to situation. The best answer can only be achieved once you contact one of attorney who will guide you.",
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

// Data for Faaliyet Alanlarımız
export const PAData: PADataProps[] = [
  {
    id: 1,
    href: "/faaliyet-alanlarimiz/ceza-hukuku",
    title: "Ceza Hukuku",
    text: "Ceza hukuku; bireylerin hak ve özgürlüklerini korumayı amaçlayan, toplum düzenini sağlayan en önemli hukuk dallarından biridir.",
    info: () => {
      return (
        <>
          <p className="mb-5 text-base text-[#333]">
            <p>Ceza Hukuku Nedir?</p> Ceza hukuku; bireylerin, toplumun ya da
            kamu düzeninin zararına olan davranışları suç olarak tanımlayan ve
            bu davranışlara uygulanacak yaptırımları belirleyen kamu hukuku
            dalıdır. Diğer hukuk dallarından farklı olarak ceza hukukunda
            yaptırım, doğrudan devletin cezalandırma gücüyle uygulanır. Toplum
            düzenini ve birey haklarını korumak amacıyla, ceza hukukunun en
            temel işlevi; hangi davranışların suç sayıldığını belirlemek, suç
            işlendiğinde ise adil bir şekilde failin sorumluluğunu ortaya
            koymaktır.
          </p>
          <p className="mb-5 text-base text-[#333]">
            <p>Ceza Hukukunun Temel İlkeleri</p> Ceza hukuku, hem birey
            haklarını hem de kamu güvenliğini gözeten temel ilkeler üzerine inşa
            edilmiştir:{" "}
            <p>
              1. Kanunsuz Suç ve Ceza Olmaz (nullum crimen, nulla poena sine
              lege): Hiç kimse, yürürlükteki kanunlar tarafından açıkça suç
              sayılmayan bir fiilden dolayı cezalandırılamaz. Aynı şekilde,
              kanunen öngörülmemiş bir ceza da uygulanamaz.
            </p>{" "}
            <p>
              2. Suçta ve Cezada Şahsilik: Ceza, yalnızca suçu işleyen kişiye
              uygulanır. Kimse başkasının fiilinden dolayı sorumlu tutulamaz.
            </p>{" "}
            <p>
              3. Masumiyet Karinesi: Bir kişi, suçu sabit olana kadar suçsuz
              kabul edilir. Bu ilke, adil yargılanma hakkının temel taşıdır.
            </p>{" "}
            <p>
              4. İnsan Onuruna Saygı: Ceza hukukunun uygulanmasında kişi
              haklarına ve insan onuruna zarar verilmemesi esastır. İşkence,
              kötü muamele gibi uygulamalar mutlak olarak yasaktır.
            </p>
          </p>
          <p>
            <p>Ceza Hukukunun Dalları</p> Ceza hukuku, iki ana başlık altında
            incelenir:{" "}
            <p>
              1. Genel Ceza Hukuku: Ceza hukukunun temel prensiplerini, suçun ve
              cezanın genel esaslarını düzenler. Suçun unsurları (maddi –
              manevi), kast – taksir, teşebbüs, suça iştirak gibi kavramları
              kapsar.
            </p>{" "}
            <p>
              2. Özel Ceza Hukuku: Hangi fiillerin suç olduğunu ve her bir suç
              için uygulanacak cezaları belirler. Türk Ceza Kanunu’nda yer alan
              suç tipleri bu kapsamda düzenlenmiştir. Örnekler:
            </p>{" "}
            Kasten öldürme, yaralama Hırsızlık, dolandırıcılık Cinsel
            dokunulmazlığa karşı suçlar Görevi kötüye kullanma Terörle mücadele
            kapsamındaki suçlar <p>Ceza Yargılaması Süreci</p> Ceza yargılaması,
            bir kişinin suç işlediği iddiasının araştırılması ve bu kişinin
            suçlu olup olmadığının tespiti amacıyla yürütülen hukuki süreçtir.
            Bu süreç şu aşamalardan oluşur:{" "}
            <p>
              Soruşturma: Suç şüphesiyle savcılık tarafından yürütülen ilk
              aşamadır. Deliller toplanır, şüpheli ifadesi alınır, gerekiyorsa
              tutuklama talep edilir.
            </p>{" "}
            <p>
              Kovuşturma: Suç şüphesinin güçlü olduğu durumlarda iddianame
              düzenlenerek dava açılır ve mahkeme süreci başlar.
            </p>{" "}
            <p>
              Yargılama: Mahkeme, delilleri değerlendirerek sanığın suçlu olup
              olmadığına karar verir.
            </p>{" "}
            <p>
              Hüküm: Suç sabit görülürse ceza verilir; aksi durumda beraat
              kararı verilir.
            </p>
          </p>
          <p>
            <h1> Ceza Avukatı Nedir? Ne Yapar?</h1> Ceza avukatı; şüpheli, sanık
            veya mağdurun ceza yargılamasındaki haklarını koruyan, savunma veya
            müdahillik görevini üstlenen uzman avukattır.{" "}
            <h1>Ceza avukatının görevleri:</h1>{" "}
            <p>Gözaltı ve ifade alma sürecinde müvekkilin yanında olmak,</p>{" "}
            <p>Tutuklama taleplerine karşı savunma yapmak,</p>{" "}
            <p>
              Delil toplanmasını ve hukuka uygun yargılama yapılmasını sağlamak,
            </p>{" "}
            <p>Temyiz ve istinaf başvurularını yürütmek,</p>{" "}
            <p>Suç mağdurlarını ceza davasında temsil etmek.</p> Ceza davaları
            ciddi sonuçlar doğurabileceği için, erken aşamada uzman bir ceza
            avukatına başvurulması büyük önem taşır.{" "}
            <h1>2. 🔍 Soruşturma ve Kovuşturma Süreci Nasıl İşler?</h1> Ceza
            yargılaması iki temel aşamadan oluşur:{" "}
            <p>
              1. Soruşturma Aşaması: Savcılık tarafından yürütülür. Suç ihbarı,
              şikayet ya da kolluk tutanağı ile başlar. Şüphelinin ifadesi
              alınır. Gözaltı, tutuklama, arama, el koyma gibi tedbirler
              uygulanabilir.
            </p>{" "}
            <p>
              2. Kovuşturma Aşaması: Savcılığın dava açmasıyla başlar. İddianame
              hazırlanır ve mahkeme süreci başlar. Mahkeme delilleri
              değerlendirir, tanıkları dinler. Suç sabit görülürse ceza verilir;
              değilse beraat edilir. Ceza avukatının en kritik görevleri bu
              aşamalarda ortaya çıkar.
            </p>{" "}
            <p>
              3. ⚖️ Sık Görülen Ceza Davaları Ceza mahkemelerinde sıkça
              karşılaşılan suç türlerinden bazıları şunlardır: Şahsa Karşı
              Suçlar: Kasten öldürme, taksirle öldürme Yaralama (basit,
              nitelikli) Tehdit, hakaret Mal Varlığına Karşı Suçlar: Hırsızlık,
              dolandırıcılık Güveni kötüye kullanma Yağma (gasp) Topluma Karşı
              Suçlar: Uyuşturucu ticareti veya kullanımı Genel güvenliğin
              tehlikeye sokulması Çevreye zarar verme suçları Kamu Düzenine
              Karşı Suçlar: Görevli memura mukavemet Rüşvet, zimmet Terörle
              Mücadele Kanunu kapsamındaki suçlar Her bir suç tipi farklı ceza
              yaptırımları ve usuller gerektirebilir.
            </p>
            <p>
              {" "}
              4. 🛡️ Ceza Davasında Haklarınız Ceza yargılamasında taraf olan
              herkesin hukuki güvence altına alınmış hakları vardır: Susma
              hakkı: İfade vermemek en temel haktır. Savunma hakkı: Dilediği
              avukattan yardım alma hakkı. Adil yargılanma hakkı: Bağımsız
              mahkeme önünde yargılanma. Tercüman hakkı: Anadili Türkçe olmayan
              kişilere tercüman sağlanması. İtiraz ve temyiz hakkı: Kararlara
              karşı üst mahkemeye başvuru. Bu hakların ihlali, yargılamanın
              adilliğini zedeler ve kararların bozulmasına neden olabilir.
            </p>{" "}
            <h1>Ceza Hukuku Danışmanlığı Hizmetimiz</h1> Hukuki sürecin
            karmaşıklığı göz önüne alındığında, hem şüpheli hem de mağdur
            açısından erken aşamada profesyonel destek alınması çok önemlidir.
            Ofisimiz; Soruşturma dosyalarının takibi Gözaltı ve tutuklamalarda
            7/24 müdahale Mahkeme süreçlerinde aktif savunma Karar sonrası
            istinaf ve temyiz başvuruları alanlarında ceza hukuku konusunda
            deneyimli avukatlarıyla hizmet vermektedir.
          </p>
        </>
      );
    },
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
          <p className="mb-5 text-base text-[#333]">
            Family law involves a range of matters that are usually very
            personal, unique and emotionally challenging. Decisions involving
            your children and your financial well-being can be complex and
            nuanced and the results can last a lifetime. In these situations,
            you need more than just an attorney who has experience and knowledge
            of the law. You need someone who will provide you with guidance,
            creative thinking, and who understands the big picture and the
            impact your decisions will have on you.
          </p>
          <p className="mb-5 text-base text-[#333]">
            The family law attorneys at lawyero are committed to providing our
            clients with the skill and expertise necessary to meet the client’s
            objectives and goals while providing a trusted source of
            representation. We are responsive to our clients’ needs and we pride
            ourselves on our attentiveness and availability to handle client
            matters with care, respect and sensitivity.
          </p>
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
          <p className="mb-5 text-base text-[#333]">
            Family law involves a range of matters that are usually very
            personal, unique and emotionally challenging. Decisions involving
            your children and your financial well-being can be complex and
            nuanced and the results can last a lifetime. In these situations,
            you need more than just an attorney who has experience and knowledge
            of the law. You need someone who will provide you with guidance,
            creative thinking, and who understands the big picture and the
            impact your decisions will have on you.
          </p>
          <p className="mb-5 text-base text-[#333]">
            The family law attorneys at lawyero are committed to providing our
            clients with the skill and expertise necessary to meet the client’s
            objectives and goals while providing a trusted source of
            representation. We are responsive to our clients’ needs and we pride
            ourselves on our attentiveness and availability to handle client
            matters with care, respect and sensitivity.
          </p>
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
          <p className="mb-5 text-base text-[#333]">
            Family law involves a range of matters that are usually very
            personal, unique and emotionally challenging. Decisions involving
            your children and your financial well-being can be complex and
            nuanced and the results can last a lifetime. In these situations,
            you need more than just an attorney who has experience and knowledge
            of the law. You need someone who will provide you with guidance,
            creative thinking, and who understands the big picture and the
            impact your decisions will have on you.
          </p>
          <p className="mb-5 text-base text-[#333]">
            The family law attorneys at lawyero are committed to providing our
            clients with the skill and expertise necessary to meet the client’s
            objectives and goals while providing a trusted source of
            representation. We are responsive to our clients’ needs and we pride
            ourselves on our attentiveness and availability to handle client
            matters with care, respect and sensitivity.
          </p>
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
          <p className="mb-5 text-base text-[#333]">
            Family law involves a range of matters that are usually very
            personal, unique and emotionally challenging. Decisions involving
            your children and your financial well-being can be complex and
            nuanced and the results can last a lifetime. In these situations,
            you need more than just an attorney who has experience and knowledge
            of the law. You need someone who will provide you with guidance,
            creative thinking, and who understands the big picture and the
            impact your decisions will have on you.
          </p>
          <p className="mb-5 text-base text-[#333]">
            The family law attorneys at lawyero are committed to providing our
            clients with the skill and expertise necessary to meet the client’s
            objectives and goals while providing a trusted source of
            representation. We are responsive to our clients’ needs and we pride
            ourselves on our attentiveness and availability to handle client
            matters with care, respect and sensitivity.
          </p>
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
          <p className="mb-5 text-base text-[#333]">
            Family law involves a range of matters that are usually very
            personal, unique and emotionally challenging. Decisions involving
            your children and your financial well-being can be complex and
            nuanced and the results can last a lifetime. In these situations,
            you need more than just an attorney who has experience and knowledge
            of the law. You need someone who will provide you with guidance,
            creative thinking, and who understands the big picture and the
            impact your decisions will have on you.
          </p>
          <p className="mb-5 text-base text-[#333]">
            The family law attorneys at lawyero are committed to providing our
            clients with the skill and expertise necessary to meet the client’s
            objectives and goals while providing a trusted source of
            representation. We are responsive to our clients’ needs and we pride
            ourselves on our attentiveness and availability to handle client
            matters with care, respect and sensitivity.
          </p>
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
          <p className="mb-5 text-base text-[#333]">
            Family law involves a range of matters that are usually very
            personal, unique and emotionally challenging. Decisions involving
            your children and your financial well-being can be complex and
            nuanced and the results can last a lifetime. In these situations,
            you need more than just an attorney who has experience and knowledge
            of the law. You need someone who will provide you with guidance,
            creative thinking, and who understands the big picture and the
            impact your decisions will have on you.
          </p>
          <p className="mb-5 text-base text-[#333]">
            The family law attorneys at lawyero are committed to providing our
            clients with the skill and expertise necessary to meet the client’s
            objectives and goals while providing a trusted source of
            representation. We are responsive to our clients’ needs and we pride
            ourselves on our attentiveness and availability to handle client
            matters with care, respect and sensitivity.
          </p>
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
          <p className="mb-5 text-base text-[#333]">
            Family law involves a range of matters that are usually very
            personal, unique and emotionally challenging. Decisions involving
            your children and your financial well-being can be complex and
            nuanced and the results can last a lifetime. In these situations,
            you need more than just an attorney who has experience and knowledge
            of the law. You need someone who will provide you with guidance,
            creative thinking, and who understands the big picture and the
            impact your decisions will have on you.
          </p>
          <p className="mb-5 text-base text-[#333]">
            The family law attorneys at lawyero are committed to providing our
            clients with the skill and expertise necessary to meet the client’s
            objectives and goals while providing a trusted source of
            representation. We are responsive to our clients’ needs and we pride
            ourselves on our attentiveness and availability to handle client
            matters with care, respect and sensitivity.
          </p>
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
          <p className="mb-5 text-base text-[#333]">
            Family law involves a range of matters that are usually very
            personal, unique and emotionally challenging. Decisions involving
            your children and your financial well-being can be complex and
            nuanced and the results can last a lifetime. In these situations,
            you need more than just an attorney who has experience and knowledge
            of the law. You need someone who will provide you with guidance,
            creative thinking, and who understands the big picture and the
            impact your decisions will have on you.
          </p>
          <p className="mb-5 text-base text-[#333]">
            The family law attorneys at lawyero are committed to providing our
            clients with the skill and expertise necessary to meet the client’s
            objectives and goals while providing a trusted source of
            representation. We are responsive to our clients’ needs and we pride
            ourselves on our attentiveness and availability to handle client
            matters with care, respect and sensitivity.
          </p>
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
          <p className="mb-5 text-base text-[#333]">
            Family law involves a range of matters that are usually very
            personal, unique and emotionally challenging. Decisions involving
            your children and your financial well-being can be complex and
            nuanced and the results can last a lifetime. In these situations,
            you need more than just an attorney who has experience and knowledge
            of the law. You need someone who will provide you with guidance,
            creative thinking, and who understands the big picture and the
            impact your decisions will have on you.
          </p>
          <p className="mb-5 text-base text-[#333]">
            The family law attorneys at lawyero are committed to providing our
            clients with the skill and expertise necessary to meet the client’s
            objectives and goals while providing a trusted source of
            representation. We are responsive to our clients’ needs and we pride
            ourselves on our attentiveness and availability to handle client
            matters with care, respect and sensitivity.
          </p>
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
          <p className="mb-5 text-base text-[#333]">
            Family law involves a range of matters that are usually very
            personal, unique and emotionally challenging. Decisions involving
            your children and your financial well-being can be complex and
            nuanced and the results can last a lifetime. In these situations,
            you need more than just an attorney who has experience and knowledge
            of the law. You need someone who will provide you with guidance,
            creative thinking, and who understands the big picture and the
            impact your decisions will have on you.
          </p>
          <p className="mb-5 text-base text-[#333]">
            The family law attorneys at lawyero are committed to providing our
            clients with the skill and expertise necessary to meet the client’s
            objectives and goals while providing a trusted source of
            representation. We are responsive to our clients’ needs and we pride
            ourselves on our attentiveness and availability to handle client
            matters with care, respect and sensitivity.
          </p>
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
          <p className="mb-5 text-base text-[#333]">
            Family law involves a range of matters that are usually very
            personal, unique and emotionally challenging. Decisions involving
            your children and your financial well-being can be complex and
            nuanced and the results can last a lifetime. In these situations,
            you need more than just an attorney who has experience and knowledge
            of the law. You need someone who will provide you with guidance,
            creative thinking, and who understands the big picture and the
            impact your decisions will have on you.
          </p>
          <p className="mb-5 text-base text-[#333]">
            The family law attorneys at lawyero are committed to providing our
            clients with the skill and expertise necessary to meet the client’s
            objectives and goals while providing a trusted source of
            representation. We are responsive to our clients’ needs and we pride
            ourselves on our attentiveness and availability to handle client
            matters with care, respect and sensitivity.
          </p>
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
