import { Accessibility } from "lucide-react";

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
      <Accessibility
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
      <Accessibility
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
      <Accessibility
        size="70"
        className="border-2 p-3 border-primary-main text-primary-main"
      />
    ),
    type: "bg-grey",
  },
];
