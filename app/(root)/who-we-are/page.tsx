import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import InnerBanner from "@/components/global/inner-banner";
import TeamMembers from "@/components/who-we-are/TeamMembers";
import TopText from "@/components/who-we-are/TopText";
import CTA from "@/components/shared/CTA";
import WeAreBest from "@/components/who-we-are/WeAreBest";
import WhyChooseUs from "@/components/who-we-are/WhyChooseUs";
import PreFooter from "@/components/shared/PreFooter";

const page = () => {
  return (
    <>
      <InnerBanner text="WHO WE ARE" />
      <TopText />
      <TeamMembers />
      <CTA
        bgClass="bg-primary-main"
        headline="Get the consultation For Most Complex Legal Issues."
        buttonLink="#"
        buttonText="Contact Us"
        ctaType="withBg"
        buttonType="dark"
      />
      <WhyChooseUs />
      <WeAreBest />
      <PreFooter />
    </>
  );
};

export default page;
