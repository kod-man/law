import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import InnerBanner from "@/components/global/inner-banner";
import PrimaryHeadline from "@/components/global/primary-headline";
import Image from "next/image";
import libraryicon from "@/public/assets/library-icon.svg";
import PreFooter from "@/components/shared/PreFooter";
import Accordions from "@/components/shared/Accordions";
import { FAQData } from "@/lib/data";

const Page = () => {
  return (
    <>
      <InnerBanner text="FAQS" />
      <div className="container pt-[85px] pb-20">
        <PrimaryHeadline text="FAQs Accordion" />
        <Accordions data={FAQData} />
      </div>
      <div className="bg-grey pt-20 pb-11 overflow-hidden relative">
        <Image
          src={libraryicon}
          alt="library-icon"
          className="absolute top-0 z-[3] w-full rotate-180"
        />
        <div className="container">
          <PrimaryHeadline text="FAQs Style 1" />
          <div className="flex pt-3 flex-wrap">
            <div className="basis-full mb-12">
              <div className="flex">
                <FontAwesomeIcon
                  icon="question-circle"
                  className="w-7 h-7 text-primary-main flex-shrink-0 mt-1"
                />
                <div className="pl-4">
                  <h3 className="text-2xl text-background font-bold mb-3">
                    Do I Have A Case?
                  </h3>
                  <p className="text-base text-[#333]">
                    The answer of this question depends upon situation to
                    situation. The best answer can only be achieved once you
                    contact one of attorney who will guide you.
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-full mb-12">
              <div className="flex">
                <FontAwesomeIcon
                  icon="question-circle"
                  className="w-7 h-7 text-primary-main flex-shrink-0 mt-1"
                />
                <div className="pl-4">
                  <h3 className="text-2xl text-background font-bold mb-3">
                    Which Areas Do You Cover?
                  </h3>
                  <p className="text-base text-[#333]">
                    We cover multiple areas mainly involving Family Law, Child
                    Law, Emergency Law and Business Law. The complete list of
                    all the practice areas can be found on this website.
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-full mb-12">
              <div className="flex">
                <FontAwesomeIcon
                  icon="question-circle"
                  className="w-7 h-7 text-primary-main flex-shrink-0 mt-1"
                />
                <div className="pl-4">
                  <h3 className="text-2xl text-background font-bold mb-3">
                    Do Hiring You Guarantee Results?
                  </h3>
                  <p className="text-base text-[#333]">
                    The short answer to this question is No. Every case is
                    different and prior results although show very high success
                    rate but it still doesnt guarantee the same outcome.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20 pb-11">
        <div className="container">
          <PrimaryHeadline text="FAQs Style 2" />
          <div className="flex pt-3 flex-wrap">
            <div className="basis-1/2 pr-6 mb-12">
              <div className="flex">
                <FontAwesomeIcon
                  icon="question-circle"
                  className="w-7 h-7 text-primary-main flex-shrink-0 mt-1"
                />
                <div className="pl-4">
                  <h3 className="text-2xl text-background font-bold mb-3">
                    Do I Have A Case?
                  </h3>
                  <p className="text-base text-[#333]">
                    The answer of this question depends upon situation to
                    situation. The best answer can only be achieved once you
                    contact one of attorney who will guide you.
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-1/2 pl-6 mb-12">
              <div className="flex">
                <FontAwesomeIcon
                  icon="question-circle"
                  className="w-7 h-7 text-primary-main flex-shrink-0 mt-1"
                />
                <div className="pl-4">
                  <h3 className="text-2xl text-background font-bold mb-3">
                    Which Areas Do You Cover?
                  </h3>
                  <p className="text-base text-[#333]">
                    We cover multiple areas mainly involving Family Law, Child
                    Law, Emergency Law and Business Law. The complete list of
                    all the practice areas can be found on this website.
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-1/2 pr-6 mb-12">
              <div className="flex">
                <FontAwesomeIcon
                  icon="question-circle"
                  className="w-7 h-7 text-primary-main flex-shrink-0 mt-1"
                />
                <div className="pl-4">
                  <h3 className="text-2xl text-background font-bold mb-3">
                    Do Hiring You Guarantee Results?
                  </h3>
                  <p className="text-base text-[#333]">
                    The short answer to this question is No. Every case is
                    different and prior results although show very high success
                    rate but it still doesnt guarantee the same outcome.
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-1/2 pl-6 mb-12">
              <div className="flex">
                <FontAwesomeIcon
                  icon="question-circle"
                  className="w-7 h-7 text-primary-main flex-shrink-0 mt-1"
                />
                <div className="pl-4">
                  <h3 className="text-2xl text-background font-bold mb-3">
                    What Is Attorney Customer Relationship?
                  </h3>
                  <p className="text-base text-[#333]">
                    The initial consultation doesnt include Attorney Customer
                    relationship. Only once you hire us then the attorney
                    customer relationship is built.
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-1/2 pr-6 mb-12">
              <div className="flex">
                <FontAwesomeIcon
                  icon="question-circle"
                  className="w-7 h-7 text-primary-main flex-shrink-0 mt-1"
                />
                <div className="pl-4">
                  <h3 className="text-2xl text-background font-bold mb-3">
                    What Is Your Consultation Fees?
                  </h3>
                  <p className="text-base text-[#333]">
                    The consultation is absolutely free. Yes you have read it
                    right absolutely free. Once you hire us for your case we
                    only charge then.
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-1/2 pl-6 mb-12">
              <div className="flex">
                <FontAwesomeIcon
                  icon="question-circle"
                  className="w-7 h-7 text-primary-main flex-shrink-0 mt-1"
                />
                <div className="pl-4">
                  <h3 className="text-2xl text-background font-bold mb-3">
                    Do You Screen All The Information You Get?
                  </h3>
                  <p className="text-base text-[#333]">
                    At lawyero we treat privacy very strictly. All the
                    information that you provide is confidential and wont be
                    leaked under any circumstances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PreFooter />
    </>
  );
};

export default Page;
