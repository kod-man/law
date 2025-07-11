import homeblog1 from "@/public/assets/home-blog-1.png";

import homeblog3 from "@/public/assets/home-blog-3.png";

import teammember2 from "@/public/assets/team-member-2.jpeg";
import teammember3 from "@/public/assets/team-member-3.jpeg";
import teammember4 from "@/public/assets/team-member-4.jpeg";

import paimage1 from "@/public/assets/pa-img-1.jpg";
import paimage2 from "@/public/assets/pa-img-2.jpeg";
import paimage3 from "@/public/assets/pa-img-3.jpeg";
import paimage4 from "@/public/assets/pa-img-4.jpeg";
import paimage5 from "@/public/assets/pa-img-5.jpeg";
import paimage6 from "@/public/assets/pa-img-6.jpeg";
import paimage7 from "@/public/assets/pa-img-7.jpeg";
import paimage8 from "@/public/assets/pa-img-8.jpeg";
import paimage9 from "@/public/assets/pa-img-9.jpeg";
import paimage10 from "@/public/assets/pa-img-10.jpeg";
import paimage11 from "@/public/assets/pa-img-11.jpeg";
import paimage12 from "@/public/assets/pa-img-12.jpeg";
import homepageTypewriter from "@/public/assets/lawyer-ticker-min.jpg";
import banner4 from "@/public/assets/banner/banner4.jpg";
import banner5 from "@/public/assets/banner/banner5.jpg";
import banner3 from "@/public/assets/banner/banner3.jpg";
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
    id: 2,
    image: teammember2,
    href: "#",
    name: "Mustafa Koyuncu",
    designation: "Avukat ve Arabulucu",
  },
  {
    id: 3,
    image: teammember3,
    href: "#",
    name: "İlhan Mesut Çeltikci",
    designation: "Avukat ve Arabulucu",
  },
  {
    id: 4,
    image: teammember4,
    href: "#",
    name: "Adil Küçük",
    designation: "Avukat ve Arabulucu",
  },
];

// Data for Testimonials

// Data for Faaliyet Alanlarımız
export const PAData: PADataProps[] = [
  {
    id: 1,
    href: "/single-practice-area",
    title: "Ceza Hukuku",
    text: "Ceza hukuku; bireylerin hak ve özgürlüklerini korumayı amaçlayan, toplum düzenini sağlayan en önemli hukuk dallarından biridir.",
    image: paimage1,
  },
  {
    id: 2,
    href: "/single-practice-area",
    title: "Basın Hukuku",
    text: "Basın yoluyla yapılan yayınların hukuki sınırlarını belirleyen temel kurallar bu alanda yer alır.",
    image: paimage2,
  },
  {
    id: 3,
    href: "/single-practice-area",
    title: "Gayrimenkul Hukuku",
    text: "Taşınmaz mallar üzerindeki hakları, alım-satım işlemlerini ve uyuşmazlıkları düzenleyen hukuk dalıdır.",
    image: paimage3,
  },
  {
    id: 4,
    href: "/single-practice-area",
    title: "Sosyal Medya Hukuku",
    text: "Sosyal medyada ifade özgürlüğü ile kişilik hakları arasındaki dengeyi sağlayan yeni nesil hukuk dalı.",
    image: paimage4,
  },
  {
    id: 5,
    href: "/single-practice-area",
    title: "Trafik ve Sigorta Hukuku",
    text: "Karayolu trafik düzenlemeleri, maddi ve manevi tazminatlar ile sigorta yükümlülüklerini kapsayan hukuk dalıdır.",
    image: paimage5,
  },
  {
    id: 6,
    href: "/single-practice-area",
    title: "Sözleşmeler Hukuku",
    text: "Sözleşmelerin kurulması, geçerliliği, ihlali ve sona erdirilmesi gibi konuları düzenleyen özel hukuk alanıdır.",
    image: paimage6,
  },
  {
    id: 7,
    href: "/single-practice-area",
    title: "Tüketici Hukuku",
    text: "Mal ve hizmet satın alan tüketicilerin haklarını güvence altına alan özel hukuk dalıdır.",
    image: paimage7,
  },
  {
    id: 8,
    href: "/single-practice-area",
    title: "İcra ve İflas Hukuku",
    text: "Borçlunun mal varlığına yönelik takip, haciz ve iflas süreçlerini düzenleyen kamu hukukudur.",
    image: paimage8,
  },
  {
    id: 9,
    href: "/single-practice-area",
    title: "Fikri Mülkiyet Hukuku",
    text: "Marka, patent, telif… Tüm yaratıcı hakların korunması fikri mülkiyet hukukunun konusudur.",
    image: paimage9,
  },
  {
    id: 10,
    href: "/single-practice-area",
    title: "İş Hukuku",
    text: "Çalışan ve işveren arasındaki ilişkileri düzenleyen, hak ve sorumlulukları belirleyen hukuk dalıdır.",
    image: paimage10,
  },
  {
    id: 11,
    href: "/single-practice-area",
    title: "Aile Hukuku",
    text: "Evlilik, boşanma, velayet ve miras gibi aile içi hukuki ilişkileri düzenleyen hukuk dalıdır.",
    image: paimage11,
  },
  {
    id: 12,
    href: "/single-practice-area",
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
