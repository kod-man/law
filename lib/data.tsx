/* eslint-disable react/no-unescaped-entities */
import banner3 from "@/public/assets/banner/banner3.jpg";
import banner4 from "@/public/assets/banner/banner4.jpg";
import banner5 from "@/public/assets/banner/banner5.jpg";
import homeblog1 from "@/public/assets/home-blog-1.jpg";
import homeblog2 from "@/public/assets/home-blog-2.jpg";
import homeblog3 from "@/public/assets/home-blog-3.jpg";
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
    content: "Yenilikçi ve Özgün Çözümler",
    linkText: "Bize Ulaşın",
    image: banner4,
    linkHref: "/contact",
  },
  {
    id: 2,
    content: "Güvenilir ve Etkin Hukuki Destek",
    linkText: "Bize Ulaşın",
    image: banner5,
    linkHref: "/contact",
  },
  {
    id: 3,
    content: "Deneyim ve Bilgiyle Çözümler Sunuyoruz",
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
  },
  {
    id: 3,
    featuredImage: {
      node: {
        mediaItem: homeblog3,
      },
    },
    linkHref: "/blog/3",
    title: "Gayrimenkul Hukuku Hakkında Bilgilendirme",
    excerpt:
      "Gayrimenkul hukuku; taşınmaz malların mülkiyeti, kiralanması, alım satımı, intifa ve ipotek gibi konuları düzenler. Uyuşmazlıkların çözümü için hem özel hukuk hem de kamu hukuku boyutları vardır.",
    date: "2025-07-19T12:24:34",
    author: "İlhan Mesut Çeltikci",
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
    image: teammember4,
    name: "Adil Küçük",
    designation: "Avukat ve Arabulucu",
    slug: "adil-kucuk",
    info: "İstanbul Barosu’na kayıtlı olan Av.Mustafa Koyuncu, Okan Üniversitesi Hukuk Fakültesi’nden mezun olmuştur. Kariyerine kurumsal hukuk bürolarında başlayan Koyuncu, özellikle ticaret hukuku, iş hukuku ve sözleşmeler hukuku alanlarında uzmanlaşmıştır.Mesleki deneyimi boyunca yerli ve yabancı birçok şirkete hukuki danışmanlık hizmeti vermiş, ayrıca bireysel müvekkillerine işçi-işveren uyuşmazlıkları, tazminat davaları ve aile hukuku konularında etkin destek sağlamıştır. Av. Koyuncu, müvekkillerine şeffaf, güvenilir ve etkin çözümler sunmayı ilke edinmiş; her dosyada en iyi sonuca ulaşmak için titizlikle çalışmaktadır.",
    facebookLink: "https://www.facebook.com/mertcanyalcin.com/",
    linkedinLink: "",
  },
  {
    id: 2,
    image: teammember2,
    name: "Mustafa Koyuncu",
    designation: "Avukat ve Arabulucu",
    slug: "mustafa-koyuncu",
    info: "İstanbul Barosu’na kayıtlı olan Av.Mustafa Koyuncu, Okan Üniversitesi Hukuk Fakültesi’nden mezun olmuştur. Kariyerine kurumsal hukuk bürolarında başlayan Koyuncu, özellikle ticaret hukuku, iş hukuku ve sözleşmeler hukuku alanlarında uzmanlaşmıştır.Mesleki deneyimi boyunca yerli ve yabancı birçok şirkete hukuki danışmanlık hizmeti vermiş, ayrıca bireysel müvekkillerine işçi-işveren uyuşmazlıkları, tazminat davaları ve aile hukuku konularında etkin destek sağlamıştır. Av. Koyuncu, müvekkillerine şeffaf, güvenilir ve etkin çözümler sunmayı ilke edinmiş; her dosyada en iyi sonuca ulaşmak için titizlikle çalışmaktadır.",
    facebookLink: "https://www.facebook.com/mertcanyalcin.com/",
    linkedinLink: "https://www.linkedin.com/in/mertcany",
  },
  {
    id: 3,
    image: teammember3,
    name: "İlhan Mesut Çeltikci",
    designation: "Avukat",
    slug: "ilhan-mesut-celtikci",
    info: "İstanbul Barosu’na kayıtlı olan Av.Mustafa Koyuncu, Okan Üniversitesi Hukuk Fakültesi’nden mezun olmuştur. Kariyerine kurumsal hukuk bürolarında başlayan Koyuncu, özellikle ticaret hukuku, iş hukuku ve sözleşmeler hukuku alanlarında uzmanlaşmıştır.Mesleki deneyimi boyunca yerli ve yabancı birçok şirkete hukuki danışmanlık hizmeti vermiş, ayrıca bireysel müvekkillerine işçi-işveren uyuşmazlıkları, tazminat davaları ve aile hukuku konularında etkin destek sağlamıştır. Av. Koyuncu, müvekkillerine şeffaf, güvenilir ve etkin çözümler sunmayı ilke edinmiş; her dosyada en iyi sonuca ulaşmak için titizlikle çalışmaktadır.",
    facebookLink: "https://www.facebook.com/mertcanyalcin.com/",
    linkedinLink: "https://www.linkedin.com/in/mertcany",
  },

  {
    id: 4,
    image: teammember1,
    name: "Mert Can Yalçın",
    designation: "Avukat",
    slug: "mert-can-yalcin",
    info: "İstanbul Barosu’na kayıtlı olan Av.Mustafa Koyuncu, Okan Üniversitesi Hukuk Fakültesi’nden mezun olmuştur. Kariyerine kurumsal hukuk bürolarında başlayan Koyuncu, özellikle ticaret hukuku, iş hukuku ve sözleşmeler hukuku alanlarında uzmanlaşmıştır.Mesleki deneyimi boyunca yerli ve yabancı birçok şirkete hukuki danışmanlık hizmeti vermiş, ayrıca bireysel müvekkillerine işçi-işveren uyuşmazlıkları, tazminat davaları ve aile hukuku konularında etkin destek sağlamıştır. Av. Koyuncu, müvekkillerine şeffaf, güvenilir ve etkin çözümler sunmayı ilke edinmiş; her dosyada en iyi sonuca ulaşmak için titizlikle çalışmaktadır.",
    facebookLink: "https://www.facebook.com/mertcanyalcin.com/",
    linkedinLink: "https://www.linkedin.com/in/mertcany",
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
    image: paimage1,
  },
  {
    id: 2,
    href: "/faaliyet-alanlarimiz/basin-hukuku",
    title: "Basın Hukuku",
    text: "Basın yoluyla yapılan yayınların hukuki sınırlarını belirleyen temel kurallar bu alanda yer alır.",

    image: paimage2,
  },
  {
    id: 3,
    href: "/faaliyet-alanlarimiz/gayrimenkul-hukuku",
    title: "Gayrimenkul Hukuku",
    text: "Taşınmaz mallar üzerindeki hakları, alım-satım işlemlerini ve uyuşmazlıkları düzenleyen hukuk dalıdır.",

    image: paimage3,
  },
  {
    id: 4,
    href: "/faaliyet-alanlarimiz/sosyal-medya-hukuku",
    title: "Sosyal Medya Hukuku",
    text: "Sosyal medyada ifade özgürlüğü ile kişilik hakları arasındaki dengeyi sağlayan yeni nesil hukuk dalı.",

    image: paimage4,
  },
  {
    id: 5,
    href: "/faaliyet-alanlarimiz/trafik-ve-sigorta-hukuku",
    title: "Trafik ve Sigorta Hukuku",
    text: "Karayolu trafik düzenlemeleri, maddi ve manevi tazminatlar ile sigorta yükümlülüklerini kapsayan hukuk dalıdır.",

    image: paimage5,
  },
  {
    id: 6,
    href: "/faaliyet-alanlarimiz/sozlesmeler-hukuku",
    title: "Sözleşmeler Hukuku",
    text: "Sözleşmelerin kurulması, geçerliliği, ihlali ve sona erdirilmesi gibi konuları düzenleyen özel hukuk alanıdır.",

    image: paimage6,
  },
  {
    id: 7,
    href: "/faaliyet-alanlarimiz/tuketici-hukuku",
    title: "Tüketici Hukuku",
    text: "Mal ve hizmet satın alan tüketicilerin haklarını güvence altına alan özel hukuk dalıdır.",

    image: paimage7,
  },
  {
    id: 8,
    href: "/faaliyet-alanlarimiz/icra-ve-iflas-hukuku",
    title: "İcra ve İflas Hukuku",
    text: "Borçlunun mal varlığına yönelik takip, haciz ve iflas süreçlerini düzenleyen kamu hukukudur.",

    image: paimage8,
  },
  {
    id: 9,
    href: "/faaliyet-alanlarimiz/fikri-mulkiyet-hukuku",
    text: "Marka, patent, telif… Tüm yaratıcı hakların korunması fikri mülkiyet hukukunun konusudur.",
    title: "Fikri Mülkiyet Hukuku",

    image: paimage9,
  },
  {
    id: 10,
    href: "/faaliyet-alanlarimiz/is-hukuku",
    title: "İş Hukuku",
    text: "Çalışan ve işveren arasındaki ilişkileri düzenleyen, hak ve sorumlulukları belirleyen hukuk dalıdır.",

    image: paimage10,
  },
  {
    id: 11,
    href: "/faaliyet-alanlarimiz/aile-hukuku",
    title: "Aile Hukuku",
    text: "Evlilik, boşanma, velayet ve miras gibi aile içi hukuki ilişkileri düzenleyen hukuk dalıdır.",
    image: paimage11,
  },
  {
    id: 12,
    href: "/faaliyet-alanlarimiz/miras-hukuku",
    title: "Miras Hukuku",
    text: "Miras bırakanın mal varlığının, hak sahipleri arasında paylaşımını düzenleyen hukuk dalıdır.",
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
