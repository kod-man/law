import homeblog1 from "@/public/assets/home-blog-1.jpg";
import homeblog2 from "@/public/assets/home-blog-2.jpg";
import homeblog3 from "@/public/assets/home-blog-3.jpg";
import homeblog4 from "@/public/assets/home-blog-4.jpg";
import homeblog5 from "@/public/assets/home-blog-5.jpg";
import homeblog6 from "@/public/assets/home-blog-6.jpg";
import teammember1 from "@/public/assets/team-member-1.jpg";
import teammember2 from "@/public/assets/team-member-2.jpg";
import teammember3 from "@/public/assets/team-member-3.jpg";
import teammember4 from "@/public/assets/team-member-4.jpg";

import paimage1 from "@/public/assets/pa-img-1.jpg";
import paimage2 from "@/public/assets/pa-img-2.jpg";
import paimage3 from "@/public/assets/pa-img-3.jpg";
import paimage4 from "@/public/assets/pa-img-4.jpg";
import paimage5 from "@/public/assets/pa-img-5.jpg";
import paimage6 from "@/public/assets/pa-img-6.jpg";
import paimage7 from "@/public/assets/pa-img-7.jpg";
import paimage8 from "@/public/assets/pa-img-8.jpg";
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
    title: "Kıdem Tazminatı Dava Süreçleri",
    excerpt:
      "Many people are not aware of their legal rights and dont pay attention to the helping hand they can get from legal advise. Therefore it is very important to know that you are aware of...",
    date: "2024-03-19T12:24:34",
    author: "Lawyero",
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
    title: "Emeklilikte Kıdem Tazminatı Hakkı",
    excerpt:
      "Every person have suffered from violence at work, home, school or any other place at least once in their life time. Most people dont share their experiences as they think this will be inappropriate to...",
    date: "2024-03-19T12:24:34",
    author: "Lawyero",
    comments: 0,
  },
  {
    id: 3,
    featuredImage: {
      node: {
        mediaItem: homeblog3,
      },
    },
    linkHref: "/blog/3",
    title: "İstanbul İş Mhkemesi Avukatı Nedir ve Neden Önemlidir ?",
    excerpt:
      "Emergency can be caused anywhere and can happen to anybody. People in the US have Emergency coverage provided by the government but it involves filling your case with great attention and need to be persuaded...",
    date: "2024-03-19T12:24:34",
    author: "Lawyero",
    comments: 0,
  },
  {
    id: 4,
    featuredImage: {
      node: {
        mediaItem: homeblog4,
      },
    },
    linkHref: "/blog/4",
    title: "Kıdem Tazminatı Dava Süreçleri",
    excerpt:
      "Whenever you are involved in an accident always avoid giving any statement before contacting you attorney. Legal advise is really important in these matters and your initial reaction can be make or break for your...",
    date: "2024-03-19T12:24:34",
    author: "Lawyero",
    comments: 0,
  },
  {
    id: 5,
    featuredImage: {
      node: {
        mediaItem: homeblog5,
      },
    },
    linkHref: "/blog/5",
    title: "Emeklilikte Kıdem Tazminatı Hakkı",
    excerpt:
      "Many people are not aware of their legal rights and dont pay attention to the helping hand they can get from legal advise. Therefore it is very important to know that you are aware of...",
    date: "2024-03-19T12:24:34",
    author: "Lawyero",
    comments: 0,
  },
  {
    id: 6,
    featuredImage: {
      node: {
        mediaItem: homeblog6,
      },
    },
    linkHref: "/blog/6",
    title: "Kıdem Tazminatı Dava Süreçleri",
    excerpt:
      "Many people are not aware of their legal rights and dont pay attention to the helping hand they can get from legal advise. Therefore it is very important to know that you are aware of...",
    date: "2024-03-19T12:24:34",
    author: "Lawyero",
    comments: 2,
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
    href: "#",
    name: "Seyfullah Koyuncu",
    designation: "Kurucu ve CEO",
  },
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
    name: "Mesut Ayrancı",
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
    title: "Family Law",
    text: "Family law involves a range of matters that are usually very personal, unique and emotionally challenging.",
    image: paimage1,
  },
  {
    id: 2,
    href: "/single-practice-area",
    title: "Child Custody",
    text: "Child custody involves a range of matters that are usually very personal, unique and emotionally challenging.",
    image: paimage2,
  },
  {
    id: 3,
    href: "/single-practice-area",
    title: "Emergency Law",
    text: "Emergency law involves a range of matters that are usually very personal, unique and emotionally challenging.",
    image: paimage3,
  },
  {
    id: 4,
    href: "/single-practice-area",
    title: "Criminal Law",
    text: "Criminal law involves a range of matters that are usually very personal, unique and emotionally challenging.",
    image: paimage4,
  },
  {
    id: 5,
    href: "/single-practice-area",
    title: "Business Law",
    text: "Business law involves a range of matters that are usually very personal, unique and emotionally challenging.",
    image: paimage5,
  },
  {
    id: 6,
    href: "/single-practice-area",
    title: "Real Estate Law",
    text: "Real estate law involves a range of matters that are usually very personal, unique and emotionally challenging.",
    image: paimage6,
  },
  {
    id: 7,
    href: "/single-practice-area",
    title: "Personal Injury",
    text: "Personal injury involves a range of matters that are usually very personal, unique and emotionally challenging.",
    image: paimage7,
  },
  {
    id: 8,
    href: "/single-practice-area",
    title: "Immigration Law",
    text: "Immigration law involves a range of matters that are usually very personal, unique and emotionally challenging.",
    image: paimage8,
  },
  {
    id: 9,
    href: "/single-practice-area",
    title: "Family Law",
    text: "Family law involves a range of matters that are usually very personal, unique and emotionally challenging.",
    image: paimage1,
  },
  {
    id: 10,
    href: "/single-practice-area",
    title: "Child Custody",
    text: "Child custody involves a range of matters that are usually very personal, unique and emotionally challenging.",
    image: paimage2,
  },
  {
    id: 11,
    href: "/single-practice-area",
    title: "Emergency Law",
    text: "Emergency law involves a range of matters that are usually very personal, unique and emotionally challenging.",
    image: paimage3,
  },
  {
    id: 12,
    href: "/single-practice-area",
    title: "Criminal Law",
    text: "Criminal law involves a range of matters that are usually very personal, unique and emotionally challenging.",
    image: paimage4,
  },
];

// Data for Team Member Education
export const attorneyEducaton: attorneyEducatonProps[] = [
  {
    id: 1,
    title: "Attorney of Law",
    details: [
      {
        id: 11,
        text: "Texas Southern University – Thurgood Marshall School of Law, Juris Doctor (J.D.), Houston, TX",
      },
      {
        id: 12,
        text: "Paul Quinn College, Bachelor of Science (B.S.), Dallas, TX",
      },
    ],
  },
  {
    id: 2,
    title: "Admission Bar",
    details: [
      {
        id: 21,
        text: "State Bar of Texas, 2010",
      },
      {
        id: 22,
        text: "U.S. District Court – Northern District of Texas",
      },
    ],
  },
  {
    id: 3,
    title: "Bar Membership",
    details: [
      {
        id: 31,
        text: "Texas Trial Lawyer’s Association",
      },
      {
        id: 32,
        text: "Dallas Association of Young Lawyers",
      },
    ],
  },
];

// Data for Blog Categories
export const blogCategories: blogCategoriesProps[] = [
  {
    id: 1,
    title: "Attorney Law",
  },
  {
    id: 2,
    title: "Family Law",
  },
  {
    id: 3,
    title: "Criminal Law",
  },
  {
    id: 4,
    title: "Real Estate Law",
  },
  {
    id: 5,
    title: "Immigration Law",
  },
];

// Data for Blog Tags
export const blogTags: blogTagsProps[] = [
  {
    id: 1,
    name: "Accident",
  },
  {
    id: 2,
    name: "Law",
  },
  {
    id: 3,
    name: "Attorney",
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
