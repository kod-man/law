import IconsWithCounters from "@/components/home/iconsWithCounters";
import TwoColumnTextWithImage from "@/components/home/twoColumnTextWithImage";
import Features from "@/components/home/Features";
import CTA from "@/components/shared/CTA";
import PracticeAreas from "@/components/home/PracticeAreas";
import BlogPosts from "@/components/home/BlogPosts";
import FAQs from "@/components/home/FAQs";
import TeamMembers from "@/components/home/TeamMembers";
import Banner from "@/components/home/banner";
import PreFooter from "@/components/shared/PreFooter";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to Lawyero",
  description: "Your one stop solution for legal matters",
};
const Home = () => {
  return (
    <>
      <Banner />

      <IconsWithCounters />
      <TwoColumnTextWithImage />
      <Features />
      <CTA
        headline="Hukuki sorunlarınız için danışmanlık alabilirsiniz."
        buttonLink="#"
        buttonText="Bize Ulaşın"
        ctaType="withBg"
      />
      <PracticeAreas />
      <BlogPosts />
      <TeamMembers />
      <CTA
        headline="Her Müvekkil Önemlidir, Çünkü Her Davaya Aynı Dikkat ve Özveriyle Eşit Yaklaşıyoruz."
        buttonLink="#"
        buttonText="Bize Danışın"
        ctaType="withImage"
      />
      <FAQs />

      <PreFooter />
    </>
  );
};

export default Home;
