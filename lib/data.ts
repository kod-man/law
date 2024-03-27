import { IconProp } from "@fortawesome/fontawesome-svg-core";
import homeblog1 from "@/public/assets/home-blog-1.jpg";
import homeblog2 from "@/public/assets/home-blog-2.jpg";
import homeblog3 from "@/public/assets/home-blog-3.jpg";
import homeblog4 from "@/public/assets/home-blog-4.jpg";
import homeblog5 from "@/public/assets/home-blog-5.jpg";
import homeblog6 from "@/public/assets/home-blog-6.jpg";
import { StaticImageData } from "next/image";

export const BannerImages = [
  {
    caption: "Your Consultant for every legal Issue",
    link: "#",
    image: {
      node: {
        uri: "/homepage/banner1/",
        altText: "",
        mediaItemUrl:
          "http://localhost/lawyero/wp-content/uploads/2024/03/banner1.jpg",
      },
    },
    linkText: "Find out More",
  },
  {
    caption: "Your Consultant for every legal Issue",
    link: "#",
    image: {
      node: {
        uri: "/homepage/banner2/",
        altText: "",
        mediaItemUrl:
          "http://localhost/lawyero/wp-content/uploads/2024/03/banner2.jpg",
      },
    },
    linkText: "Find out More",
  },
  {
    caption: "Your Consultant for every legal Issue",
    link: "#",
    image: {
      node: {
        uri: "/homepage/banner3/",
        altText: "",
        mediaItemUrl:
          "http://localhost/lawyero/wp-content/uploads/2024/03/banner3.jpg",
      },
    },
    linkText: "Find out More",
  },
];

interface BannerIconBoxesProps {
  id: number;
  headline: string;
  content: string;
  iconName: IconProp;
  type: string;
}

export const BannerIconBoxes: BannerIconBoxesProps[] = [
  {
    id: 1,
    headline: "20+ Years Of Experience",
    content:
      "We are in the law industry for more than 20 years with more than 98% of client satisfaction",
    iconName: "user",
    type: "bg-grey",
  },
  {
    id: 2,
    headline: "Qualified And Experienced Attorneys",
    content:
      "Our team is the best in the business. We are team of attorneys which are passionate about their jobs.",
    iconName: "shopping-bag",
    type: "bg-lightgrey",
  },
  {
    id: 3,
    headline: "Awards And Achievements",
    content:
      "We at lawyero earned the best law firm award in 2017 with a success ratio of 99%.",
    iconName: "trophy",
    type: "bg-grey",
  },
];

interface StatsWithIconProps {
  id: number;
  amountPreText: string;
  amount: string;
  amountPostText: string;
  text: string;
  iconName: IconProp;
}

export const StatsWithIcon: StatsWithIconProps[] = [
  {
    id: 1,
    amountPreText: "",
    amount: "150",
    amountPostText: "+",
    text: "Customers",
    iconName: "handshake",
  },
  {
    id: 2,
    amountPreText: "$",
    amount: "20000000",
    amountPostText: "",
    text: "Recovered",
    iconName: "dollar",
  },
  {
    id: 3,
    amountPreText: "",
    amount: "98",
    amountPostText: "%",
    text: "Success Rato",
    iconName: "thumbs-up",
  },
];

interface HomepageFeaturesProps {
  id: number;
  headline: string;
  content: string;
  iconName: IconProp;
}

export const HomepageFeatures: HomepageFeaturesProps[] = [
  {
    id: 1,
    headline: "PERSONAL SERVICE",
    content:
      "Our attorneys are committed to you and will work vigorously to obtain the best possible recovery in your case.",
    iconName: "link",
  },
  {
    id: 2,
    headline: "SCREENING FREE",
    content:
      "At the our law Firm, you do not have to go through a call screen. You will get to speak to an attorney directly, preferably the one who will be handling your case.",
    iconName: "phone",
  },
  {
    id: 3,
    headline: "ALWAYS RESPONSIVE",
    content:
      "Your attorney will address any problems quickly and respect your time by promptly replying to your inquiries.",
    iconName: "mug-hot",
  },
  {
    id: 4,
    headline: "CASE EXPERIENCE",
    content:
      "Our attorneys are experienced and can handle any type of injury case for you.",
    iconName: "suitcase",
  },
];

interface HomepagePAsProps {
  id: number;
  link: string;
  PA: string;
  iconName: IconProp;
}

export const HomepagePAs: HomepagePAsProps[] = [
  {
    id: 1,
    link: "#",
    PA: "Family Law",
    iconName: "scale-balanced",
  },
  {
    id: 2,
    link: "#",
    PA: "Child Custody",
    iconName: "child",
  },
  {
    id: 3,
    link: "#",
    PA: "Auto Accidents",
    iconName: "car",
  },
  {
    id: 4,
    link: "#",
    PA: "Business Law",
    iconName: "sterling-sign",
  },
  {
    id: 5,
    link: "#",
    PA: "Internet Fraud",
    iconName: "print",
  },
  {
    id: 6,
    link: "#",
    PA: "Sports Injury",
    iconName: "futbol",
  },
  {
    id: 7,
    link: "#",
    PA: "Emergency Law",
    iconName: "truck-medical",
  },
  {
    id: 8,
    link: "#",
    PA: "Drowning Law",
    iconName: "futbol",
  },
];

interface blogPostsProps {
  id: number;
  featuredImage: {
    node: {
      mediaItem: StaticImageData;
    };
  };
  title: string;
  linkHref: string;
  date: string;
}

// WP returned type
// featuredImage: {
//   node: {
//     mediaItemUrl:
//       "http://localhost/lawyero/wp-content/uploads/2024/03/banner2.jpg",
//     mediaDetails: {
//       height: 1080,
//       width: 1920,
//     },
//   },
// },

export const blogPosts: blogPostsProps[] = [
  {
    id: 1,
    featuredImage: {
      node: {
        mediaItem: homeblog1,
      },
    },
    linkHref: "#",
    title: "When to seek legal help? Important to know when",
    date: "2024-03-19T12:24:34",
  },
  {
    id: 2,
    featuredImage: {
      node: {
        mediaItem: homeblog2,
      },
    },
    linkHref: "#",
    title: "Seek immediate legal advice when most needed",
    date: "2024-03-19T12:24:34",
  },
  {
    id: 3,
    featuredImage: {
      node: {
        mediaItem: homeblog3,
      },
    },
    linkHref: "#",
    title: "What it takes to be a lawyer (the untold story)",
    date: "2024-03-19T12:24:34",
  },
  {
    id: 4,
    featuredImage: {
      node: {
        mediaItem: homeblog4,
      },
    },
    linkHref: "#",
    title: "When to seek legal help? Important to know when",
    date: "2024-03-19T12:24:34",
  },
  {
    id: 5,
    featuredImage: {
      node: {
        mediaItem: homeblog5,
      },
    },
    linkHref: "#",
    title: "Seek immediate legal advice when most needed",
    date: "2024-03-19T12:24:34",
  },
  {
    id: 6,
    featuredImage: {
      node: {
        mediaItem: homeblog6,
      },
    },
    linkHref: "#",
    title: "When to seek legal help? Important to know when",
    date: "2024-03-19T12:24:34",
  },
];

interface FAQsProps {
  id: number;
  question: string;
  answer: string;
}

export const FAQData: FAQsProps[] = [
  {
    id: 1,
    question: "Do I Have A Case?",
    answer:
      "The answer of this question depends upon situation to situation. The best answer can only be achieved once you contact one of attorney who will guide you.",
  },
  {
    id: 2,
    question: "Do Hiring You Guarantee Results?",
    answer:
      "The short answer to this question is No. Every case is different and prior results although show very high success rate but it still doesnt guarantee the same outcome.",
  },
  {
    id: 3,
    question: "What Is Your Consultation Fees?",
    answer:
      "The consultation is absolutely free. Yes you have read it right absolutely free. Once you hire us for your case we only charge then.",
  },
  {
    id: 4,
    question: "Which Areas Do You Cover?",
    answer:
      "We cover multiple areas mainly involving Family Law, Child Law, Emergency Law and Business Law. The complete list of all the practice areas can be found on this website.",
  },
  {
    id: 5,
    question: "What Is Attorney Customer Relationship?",
    answer:
      "The initial consultation doesnt include Attorney Customer relationship. Only once you hire us then the attorney customer relationship is built.",
  },
  {
    id: 6,
    question: "Do You Screen All The Information You Get?",
    answer:
      "At lawyero we treat privacy very strictly. All the information that you provide is confidential and wont be leaked under any circumstances.",
  },
];
