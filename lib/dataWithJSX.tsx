import {Award, User, BriefcaseBusiness, Trophy, Link, Phone, Coffee, Scale, PersonStanding, CarFront, PoundSterling, Tv, CircleGauge, Ambulance, CirclePlay, } from "lucide-react";

interface BannerIconBoxesProps {
  id: number;
  headline: string;
  content: string;
  iconName: React.ReactNode;
  type: string;
}

export const BannerIconBoxes: BannerIconBoxesProps[] = [
  {
    id: 1,
    headline: "20+ Years Of Experience",
    content:
      "We are in the law industry for more than 20 years with more than 98% of client satisfaction",
    iconName: (
      <User 
        size="70"
        className="border-2 p-3 border-primary-main text-primary-main"
      />
    ),
    type: "bg-grey",
  },
  {
    id: 2,
    headline: "Qualified And Experienced Attorneys",
    content:
      "Our team is the best in the business. We are team of attorneys which are passionate about their jobs.",
    iconName: (
      <BriefcaseBusiness 
        size="70"
        className="border-2 p-3 border-primary-main text-primary-main"
      />
    ),
    type: "bg-lightgrey",
  },
  {
    id: 3,
    headline: "Awards And Achievements",
    content:
      "We at lawyero earned the best law firm award in 2017 with a success ratio of 99%.",
    iconName: (
      <Trophy 
        size="70"
        className="border-2 p-3 border-primary-main text-primary-main"
      />
    ),
    type: "bg-grey",
  },
];

interface FeaturesProps {
  id: number;
  headline: string;
  content: string;
  iconName: React.ReactNode;
}

export const HomepageFeatures: FeaturesProps[] = [
  {
    id: 1,
    headline: "PERSONAL SERVICE",
    content:
      "Our attorneys are committed to you and will work vigorously to obtain the best possible recovery in your case.",
    iconName: (
      <Link
        size={42}
        className="w-14 h-14 border-2 p-3 border-primary-main text-primary-main"
      />
    ),
  },
  {
    id: 2,
    headline: "SCREENING FREE",
    content:
      "At the our law Firm, you do not have to go through a call screen. You will get to speak to an attorney directly, preferably the one who will be handling your case.",
    iconName: (
    <Phone
        size={42}
        className="w-14 h-14 border-2 p-3 border-primary-main text-primary-main"
      />
    ),
  },
  {
    id: 3,
    headline: "ALWAYS RESPONSIVE",
    content:
      "Your attorney will address any problems quickly and respect your time by promptly replying to your inquiries.", 
    iconName: (
      <Coffee
          size={42}
          className="w-14 h-14 border-2 p-3 border-primary-main text-primary-main"
        />
      ),
  },
  {
    id: 4,
    headline: "CASE EXPERIENCE",
    content:
      "Our attorneys are experienced and can handle any type of injury case for you.",
    iconName: (
      <BriefcaseBusiness
          size={42}
          className="w-14 h-14 border-2 p-3 border-primary-main text-primary-main"
        />
      ),
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

export const AttorneyPAList: FeaturesProps[] = [
  {
    id: 1,
    headline: "Family Law",
    content:
      "Robert has been working as a family law attorney for more than 10 years and have solved tons of cases with his expertise.",
    iconName: "scale-balanced",
  },
  {
    id: 2,
    headline: "Child Custody",
    content:
      "One of the most difficult and emotional area of law is related to the children law. Robert uses his experience to get these matters solved.",
    iconName: "child",
  },
  {
    id: 3,
    headline: "Business Law",
    content:
      "Business laws are sometimes quite complex to figure out because of things become complicated when not sure about the laws. Robert is best when it comes to business law.",
    iconName: "sterling-sign",
  },
  {
    id: 4,
    headline: "Emergency Law",
    content:
      "Robert has done well in the past 10 years tackling with emergency situations and have successfully taken clients case which lead them to protection under law.",
    iconName: "volume-high",
  },
];


interface HomepagePAsProps {
  id: number;
  link: string;
  PA: string;
  iconName: React.ReactNode;
}

export const HomepagePAs: HomepagePAsProps[] = [
  {
    id: 1,
    link: "#",
    PA: "Family Law",
    iconName: (
      <Scale 
          size={60}
          className="w-15 h-14 border-2 border-none text-white"
        />
      ),
  },
  {
    id: 2,
    link: "#",
    PA: "Child Custody",
    iconName: (
      <PersonStanding  
          size={60}
          className="w-15 h-14 border-2 border-none text-white"
        />
      ),
  },
  {
    id: 3,
    link: "#",
    PA: "Auto Accidents",
    iconName: (
      <CarFront 
        size={60}
          className="w-15 h-14 border-2 border-none text-white"
        />
      ),
  },
  { 
    id: 4,
    link: "#",
    PA: "Business Law",
    iconName: (
      <PoundSterling 
        size={60}
          className="w-15 h-14 border-2 border-none text-white"
        />
      ),
  },
  {
    id: 5,
    link: "#",
    PA: "Internet Fraud",
    iconName: (
      <Tv 
        size={60}
          className="w-15 h-14 border-2 border-none text-white"
        />
      ),
  },
  {
    id: 6,
    link: "#",
    PA: "Sports Injury",
    iconName: (
      <CircleGauge  
        size={60}
          className="w-15 h-14 border-2 border-none text-white"
        />
      ),
  },
  {
    id: 7,
    link: "#",
    PA: "Emergency Law",
    iconName: (
      <Ambulance 
        size={60}
          className="w-15 h-14 border-2 border-none text-white"
        />
      ),
  },
  {
    id: 8,
    link: "#",
    PA: "Drowning Law",
    iconName: (
      <CirclePlay  
        size={60}
          className="w-15 h-14 border-2 border-none text-white"
        />
      ),
  },
];
