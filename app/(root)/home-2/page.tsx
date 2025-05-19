import IconsWithCounters from "@/components/home/iconsWithCounters";
import TwoColumnTextWithImage from "@/components/home/twoColumnTextWithImage";
import Features from "@/components/home/Features";
import CTA from "@/components/shared/CTA";
import PracticeAreas from "@/components/home/PracticeAreas";
import BlogPosts from "@/components/home/BlogPosts";
import FAQs from "@/components/home/FAQs";
import TeamMembers from "@/components/home/TeamMembers";
import PreFooter from "@/components/shared/PreFooter";

import Typewriter from "@/components/home/Typewriter";
import { homeBannerTypewriter } from "@/lib/data";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to Lawyero - Home 2",
  description: "Your one stop solution for legal matters",
};

const Home = () => {
  return (
    <>
      <section className="relative bg-primary-main">
        <Image
          src={homeBannerTypewriter.image}
          alt="Homepage Image of a Lawyer"
          fill={true}
          className="object-cover object-top"
        />
        <div className="container relative z-10">
          <div className="flex h-[calc(90vh-32px)] w-full items-center">
            <div className="basis-1/2">
              <h1 className="text-5xl font-bold uppercase text-background">
                CONSULT US FOR
                <br />
                <Typewriter homeBannerTypewriter={homeBannerTypewriter} />
                &nbsp;
              </h1>
            </div>
          </div>
        </div>
      </section>

      <IconsWithCounters />
      <TwoColumnTextWithImage />
      <Features />
      <CTA
        headline="Get the consultation For Most Complex Legal Issues."
        buttonLink="#"
        buttonText="Contact Us"
        ctaType="withBg"
      />
      <PracticeAreas />
      <BlogPosts />
      <TeamMembers />
      <CTA
        headline="Her Müvekkil Önemlidir, Çünkü Her Davaya Aynı Dikkat ve Özveriyle Eşit Yaklaşıyoruz."
        buttonLink="#"
        buttonText="Request Free Consultation"
        ctaType="withImage"
      />
      <FAQs />

      <PreFooter />
    </>
  );
};

export default Home;
