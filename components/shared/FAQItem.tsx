import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface FAQProp {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQProp) => {
  return (
    <div className="lg:basis-1/2 md:basis-1/2 sm:basis-full pr-6 mb-12">
      <div className="flex">
        <FontAwesomeIcon
          icon="question-circle"
          className="w-7 h-7 text-primary-main flex-shrink-0 mt-1"
        />
        <div className="pl-4">
          <h3 className="text-2xl text-background font-bold mb-3">
            {question}
          </h3>
          <p className="text-base text-[#333]">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
