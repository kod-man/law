import React from "react";
import InnerBanner from "@/components/global/inner-banner";
import PreFooter from "@/components/shared/PreFooter";
import FAQsList from "@/components/FAQs/FAQsList";
import FAQsAccordion from "@/components/FAQs/FAQsAccordion";

const Page = () => {
  return (
    <>
      <InnerBanner text="FAQS" />

      <FAQsAccordion />

      <FAQsList headline="FAQs Style 1" separator />

      <FAQsList headline="FAQs Style 2" columns={2} bgType="white" />

      <PreFooter />
    </>
  );
};

export default Page;
