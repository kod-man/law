import React from "react";
import PrimaryHeadline from "../global/primary-headline";
import Accordions from "../shared/Accordions";
import { FAQData } from "@/lib/data";

const FAQsAccordion = () => {
  return (
    <div className="container pt-[85px] pb-20">
      <PrimaryHeadline text="FAQs Accordion" />
      <Accordions data={FAQData} />
    </div>
  );
};

export default FAQsAccordion;
