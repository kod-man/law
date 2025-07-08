import React from "react";
import singleteambanner from "@/public/assets/single-team-members-banner.jpg";
import InnerBanner from "@/components/global/inner-banner";
import MemberDetails from "@/components/team/single/MemberDetails";
import Stats from "@/components/team/single/Stats";
import CTA from "@/components/shared/CTA";
import PreFooter from "@/components/shared/PreFooter";
import Quote from "@/components/shared/Quote";
import BackgroundAndPA from "@/components/team/single/BackgroundAndPA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team Member - Lawyero",
  description: "Your one stop solution for legal matters",
};

const page = () => {
  return (
    <>
      <InnerBanner text="Mustafa Koyuncu" image={singleteambanner} />

      <MemberDetails />

      <Stats />

      <CTA
        headline="Hukuki sorunlarınız için danışmanlık alabilirsiniz."
        buttonText="Bize Ulaşın"
        buttonLink="#"
        ctaType="withBg"
        bgClass="bg-primary-main"
        buttonType="dark"
      />

      <BackgroundAndPA />

      <Quote text="" bgClass="bg-primary-main" textClass="text-white" />

      <PreFooter />
    </>
  );
};

export default page;
