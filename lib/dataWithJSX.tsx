import { FeaturesProps, HomepagePAsProps, StatsWithIconProps } from "@/types";
import {
  Ambulance,
  BriefcaseBusiness,
  CarFront,
  CircleGauge,
  CirclePlay,
  Coffee,
  DollarSign,
  GraduationCap,
  Handshake,
  Link,
  PersonStanding,
  Phone,
  PoundSterling,
  Scale,
  Smile,
  SpeechIcon,
  ThumbsUp,
  Tv,
  Volume2,
} from "lucide-react";

// Data for Homepage Banner Icon Boxes

// Data for Homepage Features
export const HomepageFeatures: FeaturesProps[] = [
  {
    id: 1,
    headline: "DENEYİMLİ KADRO",
    content: "Tecrübeli ve yetkin kadromuz ile daima hizmetinizdeyiz.",
    iconName: (
      <Link
        size="60"
        className="border-2 border-primary-main p-4 text-primary-main"
      />
    ),
  },
  {
    id: 2,
    headline: "YÜKSEK PERFORMANS",
    content:
      "Genç ve dinamik avukat kadromuz ile Çalışma Alanlarımız dahilinde ki konularda yardımcı olmaya hazırız.",
    iconName: (
      <Phone
        size="60"
        className="border-2 border-primary-main p-4 text-primary-main"
      />
    ),
  },
  {
    id: 3,
    headline: "ERİŞİLEBİLİRLİK VE ŞEFFAFLIK",
    content:
      " Hukuki süreçler hakkında açık ve anlaşılır bilgiler sağlayarak, müvekkillerimizin bilinçli kararlar almasına yardımcı oluyoruz.",
    iconName: (
      <Coffee
        size="60"
        className="border-2 border-primary-main p-4 text-primary-main"
      />
    ),
  },
  {
    id: 4,
    headline: "STRATEJİK VE PROAKTİF YAKLAŞIM",
    content:
      " Yenilikçi ve stratejik hukuki çözümlerimizle, müvekkillerimizin hukuki ihtiyaçlarını öngörüyor ve proaktif stratejiler geliştiriyoruz.",
    iconName: (
      <BriefcaseBusiness
        size="60"
        className="border-2 border-primary-main p-4 text-primary-main"
      />
    ),
  },
];

// Data for Why Choose Us Section
export const WhyChooseUsData: FeaturesProps[] = [
  {
    id: 1,
    headline: "UZMANLIK VE DENEYİM",
    content:
      "İş, gayrimenkul ve ceza hukuku başta olmak üzere, farklı alanlardaki derin bilgi birikimimizle her davaya profesyonel yaklaşırız.",
    iconName: (
      <Handshake
        size={72}
        className="border-2 border-primary-main p-4 text-primary-main"
      />
    ),
  },
  {
    id: 2,
    headline: "GÜVENİLİR VE ŞEFFAF YAKLAŞIM",
    content:
      "Müvekkillerimizle açık iletişim kurar, hukuki süreci en başından itibaren şeffaflıkla yürütürüz.",
    iconName: (
      <GraduationCap
        size={72}
        className="border-2 border-primary-main p-4 text-primary-main"
      />
    ),
  },
  {
    id: 3,
    headline: "ÖNLEYİCİ VE ÇÖZÜM ODAKLI HİZMET",
    content:
      "Yalnızca sorunları çözmekle kalmaz, olası hukuki risklere karşı da koruma sağlayarak proaktif destek sunarız.",
    iconName: (
      <PoundSterling
        size={72}
        className="border-2 border-primary-main p-4 text-primary-main"
      />
    ),
  },
];

// Data for We Are Best Section
export const WeAreBestData: FeaturesProps[] = [
  {
    id: 1,
    headline: "HER DAVAYA STRATEJİK YAKLAŞIM",
    content:
      "Süreçleri sadece hukuki değil, stratejik bir bakış açısıyla ele alırız. Her adım önceden planlanır, her ihtimal hesaplanır.",
    iconName: (
      <Scale
        size={72}
        className="border-2 border-primary-main p-4 text-primary-main"
      />
    ),
  },
  {
    id: 2,
    headline: "SÖZDE DEĞİL, GERÇEKTE ULAŞILABİLİRİLİK",
    content:
      "Sorularınıza geç cevap veren değil, sizi gerçekten duyan ve yanıtlayan bir ekipten destek alırsınız. Her zaman ulaşabileceğiniz bir muhatabınız olur.",
    iconName: (
      <Smile
        size={72}
        className="border-2 border-primary-main p-4 text-primary-main"
      />
    ),
  },
  {
    id: 3,
    headline: "REHBERLİK EDEN BİR HUKUK ANLAYIŞI",
    content:
      "Adımızdaki “pusula” gibi, karmaşık ve belirsiz durumlarda size yalnızca bilgi değil yön veririz. Kararlarınıza ışık tutacak netlikte hukuki rehberlik sunarız.",
    iconName: (
      <Volume2
        size={72}
        className="border-2 border-primary-main p-4 text-primary-main"
      />
    ),
  },
];

// Data for Attorney Practice Area List
export const AttorneyPAList: FeaturesProps[] = [
  {
    id: 1,
    headline: "Family Law",
    content:
      "Robert has been working as a family law attorney for more than 10 years and have solved tons of cases with his expertise.",
    iconName: <Scale size={60} className="h-14 w-16 border-2 border-none" />,
  },
  {
    id: 2,
    headline: "Child Custody",
    content:
      "One of the most difficult and emotional area of law is related to the children law. Robert uses his experience to get these matters solved.",
    iconName: (
      <PersonStanding size={60} className="h-14 w-16 border-2 border-none" />
    ),
  },
  {
    id: 3,
    headline: "İş Hukuku",
    content:
      "Business laws are sometimes quite complex to figure out because of things become complicated when not sure about the laws. Robert is best when it comes to business law.",
    iconName: (
      <PoundSterling size={60} className="h-14 w-16 border-2 border-none" />
    ),
  },
  {
    id: 4,
    headline: "Emergency Law",
    content:
      "Robert has done well in the past 10 years tackling with emergency situations and have successfully taken clients case which lead them to protection under law.",
    iconName: (
      <Ambulance size={60} className="h-14 w-16 border-2 border-none" />
    ),
  },
];

// Data for Homepage Practice Area
export const HomepagePAs: HomepagePAsProps[] = [
  {
    id: 1,
    link: "#",
    PA: "Aile Hukuku",
    iconName: (
      <Scale size={60} className="h-14 w-16 border-2 border-none text-white" />
    ),
  },
  {
    id: 2,
    link: "#",
    PA: "Miras Hukuku",
    iconName: (
      <PersonStanding
        size={60}
        className="h-14 w-16 border-2 border-none text-white"
      />
    ),
  },
  {
    id: 3,
    link: "#",
    PA: "Sigorta Hukuku",
    iconName: (
      <CarFront
        size={60}
        className="h-14 w-16 border-2 border-none text-white"
      />
    ),
  },
  {
    id: 4,
    link: "#",
    PA: "İş Hukuku",
    iconName: (
      <PoundSterling
        size={60}
        className="h-14 w-16 border-2 border-none text-white"
      />
    ),
  },
  {
    id: 5,
    link: "#",
    PA: "Sosyal Medya ve İnternet Hukuku",
    iconName: (
      <Tv size={60} className="h-14 w-16 border-2 border-none text-white" />
    ),
  },
  {
    id: 6,
    link: "#",
    PA: "Spor Hukuku",
    iconName: (
      <CircleGauge
        size={60}
        className="h-14 w-16 border-2 border-none text-white"
      />
    ),
  },
  {
    id: 7,
    link: "#",
    PA: "Sağlık Hukuku",
    iconName: (
      <Ambulance
        size={60}
        className="h-14 w-16 border-2 border-none text-white"
      />
    ),
  },
  {
    id: 8,
    link: "#",
    PA: "Ceza Hukuku",
    iconName: (
      <CirclePlay
        size={60}
        className="h-14 w-16 border-2 border-none text-white"
      />
    ),
  },
];

// Data for Stats Counter
export const StatsWithIcon: StatsWithIconProps[] = [
  {
    id: 1,
    amountPreText: "",
    amount: 50,
    amountPostText: "+",
    text: "Dava ve Dosya Takibi",
    iconName: <Handshake size={72} className="border-2 p-4 text-white" />,
  },
  {
    id: 2,
    amountPreText: "+",
    amount: 23,
    amountPostText: "",
    text: "Hukuki Danışmanlık",
    iconName: <SpeechIcon size={72} className="border-2 p-4 text-white" />,
  },
  {
    id: 3,
    amountPreText: "+",
    amount: 98,
    amountPostText: "",
    text: "Arabuluculuk İşlemleri",
    iconName: <ThumbsUp size={72} className="border-2 p-4 text-white" />,
  },
];

// Data for Stats Counter
export const StatsWithIconTeam: StatsWithIconProps[] = [
  {
    id: 1,
    amountPreText: "",
    amount: 2000,
    amountPostText: "+",
    text: "Happy Clients",
    iconName: (
      <Smile
        size={72}
        className="border-2 border-primary-main p-4 text-primary-main"
      />
    ),
  },
  {
    id: 3,
    amountPreText: "",
    amount: 98,
    amountPostText: "%",
    text: "Success Rato",
    iconName: (
      <ThumbsUp
        size={72}
        className="border-2 border-primary-main p-4 text-primary-main"
      />
    ),
  },
  {
    id: 2,
    amountPreText: "$",
    amount: 20000000,
    amountPostText: "",
    text: "Recovered",
    iconName: (
      <DollarSign
        size={72}
        className="border-2 border-primary-main p-4 text-primary-main"
      />
    ),
  },
];
