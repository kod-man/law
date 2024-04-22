import PostBannerBox from "@/components/home/postBannerBox";
import IconsWithCounters from "@/components/home/iconsWithCounters";
import TwoColumnTextWithImage from "@/components/home/twoColumnTextWithImage";
import Features from "@/components/home/Features";
import CTA from "@/components/shared/CTA";
import PracticeAreas from "@/components/home/PracticeAreas";
import BlogPosts from "@/components/home/BlogPosts";
import FAQs from "@/components/home/FAQs";
import TeamMembers from "@/components/home/TeamMembers";
import PreFooter from "@/components/shared/PreFooter";
import Testimonials from "@/components/home/Testimonials";
import Typewriter from "@/components/home/Typewriter";
import { homeBannerTypewriter } from "@/lib/data";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <section className="bg-primary-main relative">
        <Image
          src={homeBannerTypewriter.image}
          alt="Homepage Image of a Lawyer"
          fill={true}
          className="object-cover object-top"
        />
        <div className="container relative z-1">
          <div className="h-[calc(90vh-32px)] w-full flex items-center">
            <div className="basis-1/2">
              <h1 className="text-5xl text-bg-background font-bold uppercase">
                CONSULT US FOR
                <br />
                <Typewriter homeBannerTypewriter={homeBannerTypewriter} />
                &nbsp;
              </h1>
            </div>
          </div>
        </div>
      </section>
      <PostBannerBox />
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
        headline="We Treat Every Case Equally With Same Attention And Dedication Because Every Client Matters."
        buttonLink="#"
        buttonText="Request Free Consultation"
        ctaType="withImage"
      />
      <FAQs />
      <Testimonials />
      <PreFooter />
    </>
  );
};

export default Home;
