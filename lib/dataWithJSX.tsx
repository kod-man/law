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
    headline: "Aile Hukuku",
    content: "",
    iconName: <Scale size={60} className="h-14 w-16 border-2 border-none" />,
  },
  {
    id: 2,
    headline: "Ceza Hukuku",
    content: "",
    iconName: (
      <PersonStanding size={60} className="h-14 w-16 border-2 border-none" />
    ),
  },
  {
    id: 3,
    headline: "İş Hukuku",
    content: "",
    iconName: (
      <PoundSterling size={60} className="h-14 w-16 border-2 border-none" />
    ),
  },
  {
    id: 4,
    headline: "Sağlık Hukuku",
    content: "",
    iconName: (
      <Ambulance size={60} className="h-14 w-16 border-2 border-none" />
    ),
  },
];

// Data for Homepage Practice Area

export const HomepagePAs: HomepagePAsProps[] = [
  {
    id: 1,
    link: "/faaliyet-alanlarimiz/aile-hukuku",
    PA: "Basın Hukuku",
    iconName: (
      <Scale size={60} className="h-14 w-16 border-2 border-none text-white" />
    ),
  },
  {
    id: 2,
    link: "/faaliyet-alanlarimiz/miras-hukuku",
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
    link: "/faaliyet-alanlarimiz/trafik-ve-sigorta-hukuku",
    PA: "Trafik ve Sigorta Hukuku",
    iconName: (
      <CarFront
        size={60}
        className="h-14 w-16 border-2 border-none text-white"
      />
    ),
  },
  {
    id: 4,
    link: "/faaliyet-alanlarimiz/is-hukuku",
    PA: "İcra ve İflas Hukuku",
    iconName: (
      <PoundSterling
        size={60}
        className="h-14 w-16 border-2 border-none text-white"
      />
    ),
  },
  {
    id: 5,
    link: "/faaliyet-alanlarimiz/sosyal-medya-hukuku",
    PA: "Sosyal Medya ve Hukuku",
    iconName: (
      <Tv size={60} className="h-14 w-16 border-2 border-none text-white" />
    ),
  },
  {
    id: 6,
    link: "/faaliyet-alanlarimiz/spor-hukuku",
    PA: "Sözleşmeler Hukuku",
    iconName: (
      <CircleGauge
        size={60}
        className="h-14 w-16 border-2 border-none text-white"
      />
    ),
  },
  {
    id: 7,
    link: "/faaliyet-alanlarimiz/saglik-hukuku",
    PA: "Tüketici Hukuku",
    iconName: (
      <Ambulance
        size={60}
        className="h-14 w-16 border-2 border-none text-white"
      />
    ),
  },
  {
    id: 8,
    link: "/faaliyet-alanlarimiz/ceza-hukuku",
    PA: "Gayrimenkul Hukuku",
    iconName: (
      <CirclePlay
        size={60}
        className="h-14 w-16 border-2 border-none text-white"
      />
    ),
  },
  // Yeni eklenenler
  {
    id: 9,
    link: "/faaliyet-alanlarimiz/aile-hukuku",
    PA: "Aile Hukuku",
    iconName: (
      <Scale size={60} className="h-14 w-16 border-2 border-none text-white" />
    ),
  },
  {
    id: 10,
    link: "/faaliyet-alanlarimiz/ceza-hukuku",
    PA: "Ceza Hukuku",
    iconName: (
      <PersonStanding
        size={60}
        className="h-14 w-16 border-2 border-none text-white"
      />
    ),
  },
  {
    id: 11,
    link: "/faaliyet-alanlarimiz/is-hukuku",
    PA: "İş Hukuku",
    iconName: (
      <PoundSterling
        size={60}
        className="h-14 w-16 border-2 border-none text-white"
      />
    ),
  },
  {
    id: 12,
    link: "/faaliyet-alanlarimiz/saglik-hukuku",
    PA: "Sağlık Hukuku",
    iconName: (
      <Ambulance
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
    text: "Mutlu Müvekkiller",
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
    text: "Olumlu Sonuçlar",
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
    text: "Sonuçlanan Tazminatlar",
    iconName: (
      <DollarSign
        size={72}
        className="border-2 border-primary-main p-4 text-primary-main"
      />
    ),
  },
];
