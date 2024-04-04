import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import InnerBanner from "@/components/global/inner-banner";
import HeadlineWithText from "@/components/shared/HeadlineWithText";
import PreFooter from "@/components/shared/PreFooter";
import PAList from "@/components/practice-areas/PAList";

const page = () => {
  return (
    <>
      <InnerBanner text="PRACTICE AREAS 3 COLUMN" />

      <HeadlineWithText
        headlineText="Practice Areas"
        text="At lawyero we practice almost all areas of life. Some of the most
          notable practice areas in which we have helped number of our clients
          to achieve their goals according to the laws are as follows:"
      />

      <PAList layout="3-column" />

      <PreFooter />
    </>
  );
};

export default page;
