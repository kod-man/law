import { IconProp, text } from "@fortawesome/fontawesome-svg-core";
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
import teammember5 from "@/public/assets/team-member-5.jpg";
import testimonialimg1 from "@/public/assets/home-testimonial-img-1.jpeg";
import testimonialimg2 from "@/public/assets/home-testimonial-img-2.jpeg";
import testimonialimg3 from "@/public/assets/home-testimonial-img-3.jpeg";
import paimage1 from "@/public/assets/pa-img-1.jpg";
import paimage2 from "@/public/assets/pa-img-2.jpg";
import paimage3 from "@/public/assets/pa-img-3.jpg";
import paimage4 from "@/public/assets/pa-img-4.jpg";
import paimage5 from "@/public/assets/pa-img-5.jpg";
import paimage6 from "@/public/assets/pa-img-6.jpg";
import paimage7 from "@/public/assets/pa-img-7.jpg";
import paimage8 from "@/public/assets/pa-img-8.jpg";

import image, { StaticImageData } from "next/image";
import { title } from "process";

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

interface FeaturesProps {
  id: number;
  headline: string;
  content: string;
  iconName: IconProp;
}

export const HomepageFeatures: FeaturesProps[] = [
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

export const WhyChooseUsData: FeaturesProps[] = [
  {
    id: 1,
    headline: "FREE CONSULTATION",
    content:
      "We offer free consultation and you never need to worry about the fees for consultation.",
    iconName: "handshake",
  },
  {
    id: 2,
    headline: "MOST QUALIFIED TEAM",
    content:
      "At Lawyero we have the best team which understands your case and try to help you achieve desired results.",
    iconName: "graduation-cap",
  },
  {
    id: 3,
    headline: "NO WIN NO FEES",
    content:
      "We have helped numerous clients in their complicated law matters and we are expert at this.",
    iconName: "sterling-sign",
  },
];

export const WeAreBestData: FeaturesProps[] = [
  {
    id: 1,
    headline: "WE UNDERSTAND LAW",
    content:
      "We have helped numerous clients in their complicated law matters and we are expert at this.",
    iconName: "scale-balanced",
  },
  {
    id: 2,
    headline: "HAPPY CLIENTS",
    content:
      "About 98% of our clients are satistied with the services they recieved and would be happy to recommend Lawyero to others.",
    iconName: "face-smile",
  },
  {
    id: 3,
    headline: "WE LEAD YOU TO SUCCESS",
    content:
      "Our ultimate goal is to help you and we believe that client is our asset.",
    iconName: "volume-high",
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

interface TeamMembersProps {
  id: number;
  name: string;
  href: string;
  image: StaticImageData;
  designation: string;
}

export const TeamMembers: TeamMembersProps[] = [
  {
    id: 1,
    image: teammember1,
    href: "#",
    name: "Robert Darren",
    designation: "Bank & Finance Lawyer",
  },
  {
    id: 2,
    image: teammember2,
    href: "#",
    name: "Tady Walsh",
    designation: "Child Custody Lawyer",
  },
  {
    id: 3,
    image: teammember3,
    href: "#",
    name: "Alanna",
    designation: "Business lawyer",
  },
  {
    id: 4,
    image: teammember4,
    href: "#",
    name: "Frank Moses",
    designation: "Injury Expert lawyer",
  },
  {
    id: 5,
    image: teammember5,
    href: "#",
    name: "John Doe",
    designation: "International Law lawyer",
  },
];

interface TestimonialsProps {
  id: number;
  image: StaticImageData;
  name: string;
  text: string;
  organization: string;
  designation: string;
}

export const Testimonials: TestimonialsProps[] = [
  {
    id: 1,
    image: testimonialimg1,
    name: "Jessica Berrera",
    text: "When we needed the legal assistance Lawyero came to our rescue. They took our case and get it solved in no time. Now when ever we need any assistance for legal matters we look no further then the lawyers at Lawyero. Thanks team Lawyero you are the best!",
    organization: "Opus Internatational Ltd",
    designation: "CEO Operations",
  },
  {
    id: 1,
    image: testimonialimg2,
    name: "John Kerry",
    text: "Our business was stuck in one of complex legal issue and one of our clients suggest team Lawyero. Now they are our official legal team which help us in numerous cases. Recommended to all!",
    organization: "Parag States",
    designation: "Founder",
  },
  {
    id: 1,
    image: testimonialimg3,
    name: "Grant Josh",
    text: "Team Lawyero is the best. Their team is awesome and when we visited their office their team welcomed us and make us feel really at home. They not only took our case but also helped us understand the complexity of the case. They fought for us and get the desired results soon. Thank you team lawyero! You are AWESOME.",
    organization: "Daily Times Network",
    designation: "Assistant Finance Manager",
  },
];

interface PADataProps {
  id: number;
  href: string;
  title: string;
  text: string;
  image: StaticImageData;
}

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
