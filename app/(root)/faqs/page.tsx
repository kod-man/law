import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import InnerBanner from "@/components/global/inner-banner";
import PrimaryHeadline from "@/components/global/primary-headline";
import Image from "next/image";
import libraryicon from "@/public/assets/library-icon.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const page = () => {
  return (
    <> 
      <InnerBanner text="FAQS" />
      <div className="container pt-[85px] pb-20">
          <PrimaryHeadline text="Frequently Asked Questions Accordion" />
          <Accordion className="pt-3" type="single" collapsible>
            <AccordionItem className="border-b-0 mb-5" value="item-1">
              <AccordionTrigger className="text-base text-background font-semibold py-2 px-4 border-2 border-background hover:no-underline rounded-md focus:bg-background focus:text-white">Which Areas Do You Cover?</AccordionTrigger>
              <AccordionContent className="mt-5 border-2 border-background rounded-md text-base leading-6 p-4 relative before:absolute before:-top-[22px] before:left-[30px] before:content-[''] before:bg-background before:w-[2px] before:h-5 after:absolute after:-top-[22px] after:right-[30px] after:content-[''] after:bg-background after:w-[2px] after:h-5">
              We cover multiple areas mainly involving Family Law, Child Law, Emergency Law and Business Law. The complete list of all the practice areas can be found on this website.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b-0 mb-5" value="item-2">
              <AccordionTrigger className="text-base text-background font-semibold py-2 px-4 border-2 border-background hover:no-underline rounded-md focus:bg-background focus:text-white">What Is Attorney Customer Relationship?</AccordionTrigger>
              <AccordionContent className="mt-5 border-2 border-background rounded-md text-base leading-6 p-4 relative before:absolute before:-top-[22px] before:left-[30px] before:content-[''] before:bg-background before:w-[2px] before:h-5 after:absolute after:-top-[22px] after:right-[30px] after:content-[''] after:bg-background after:w-[2px] after:h-5">
              The initial consultation doesnt include Attorney Customer relationship. Only once you hire us then the attorney customer relationship is built.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b-0 mb-5" value="item-3">
              <AccordionTrigger className="text-base text-background font-semibold py-2 px-4 border-2 border-background hover:no-underline rounded-md focus:bg-background focus:text-white">Do You Screen All The Information You Get?</AccordionTrigger>
              <AccordionContent className="mt-5 border-2 border-background rounded-md text-base leading-6 p-4 relative before:absolute before:-top-[22px] before:left-[30px] before:content-[''] before:bg-background before:w-[2px] before:h-5 after:absolute after:-top-[22px] after:right-[30px] after:content-[''] after:bg-background after:w-[2px] after:h-5">
              At lawyero we treat privacy very strictly. All the information that you provide is confidential and wont be leaked under any circumstances.
              </AccordionContent>
            </AccordionItem>
            
            
          </Accordion>
      </div>
      <div className="bg-grey pt-20 pb-11 overflow-hidden relative">
      <Image
            src={libraryicon}
            alt="library-icon"
            className="absolute top-0 z-[3] w-full rotate-180"
          />
        <div className="container">
          <PrimaryHeadline text="Frequently Asked Questions Style 1" />
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
          <PrimaryHeadline text="Frequently Asked Questions Style 2" />
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
      

     


      <div className="overflow-hidden">
        <div className="container">
          <div className="flex">
            <div className="basis-1/3 py-24 relative before:z-[-1] before:top-0 before:absolute before:bg-grey before:content-[''] before:h-full before:w-[50vw] before:right-0">
              <h3 className="text-3xl pb-5 mb-7 font-bold text-primary-main relative before:absolute before:bottom-0 before:left-0 before:w-[150px] before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[40px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1]">
                Get In Touch
              </h3>
              <ul>
                <li className="flex items-center mb-[10px]">
                  <FontAwesomeIcon
                    icon="phone"
                    className="w-3 h-4 text-background"
                  />
                  <a
                    className="inline-block text-base text-background ml-2"
                    href="tel:123-456-7890"
                  >
                    123-456-7890
                  </a>
                </li>
                <li className="flex items-center mb-[10px]">
                  <FontAwesomeIcon
                    icon="fax"
                    className="w-3 h-4 text-background"
                  />
                  <a
                    className="inline-block text-base text-background ml-2"
                    href="#"
                  >
                    123-456-7890
                  </a>
                </li>
              </ul>
              <div>
                <div className="mt-7">
                  <h3 className="text-2xl text-[#333] font-bold mb-4">
                    Head Office
                  </h3>
                  <div className="flex">
                    <FontAwesomeIcon
                      icon="location-dot"
                      className="w-2 h-4 text-background mt-[2px]"
                    />
                    <p className="pl-2 text-background">
                      4th Floor ABC Plaza Downtown, March <br /> Street, Sydney.
                    </p>
                  </div>
                </div>
                <div className="mt-7">
                  <h3 className="text-2xl text-[#333] font-bold mb-4">
                    Regional Office
                  </h3>
                  <div className="flex">
                    <FontAwesomeIcon
                      icon="location-dot"
                      className="w-2 h-4 text-background mt-[2px]"
                    />
                    <p className="pl-2 text-background">
                      4th Floor ABC Plaza Downtown, March <br /> Street, Sydney.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-2/3 py-24 pl-12 pr-20 relative before:z-[-1] before:top-0 before:absolute before:bg-lightgrey before:content-[''] before:h-full before:w-[80vw] before:left-0">
              <h3 className="text-3xl pb-5 mb-7 font-bold text-primary-main relative before:absolute before:bottom-0 before:left-0 before:w-[150px] before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[40px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1]">
                Schedule A Free Consultation
              </h3>
              <form action="">
                <div className="mb-8">
                  <label htmlFor="fname">
                    <input
                      type="text"
                      placeholder="First Name"
                      id="fname"
                      className="h-12 px-4 py-2 w-full text-background border-[1px] border-[#e8e6e6] placeholder:text-base placeholder:text-background font-bold placeholder:font-normal"
                    />
                  </label>
                </div>
                <div className="mb-8">
                  <label htmlFor="lname">
                    <input
                      type="text"
                      placeholder="Last Name"
                      id="lname"
                      className="h-12 px-4 py-2 w-full text-background border-[1px] border-[#e8e6e6] placeholder:text-base placeholder:text-background font-bold placeholder:font-normal"
                    />
                  </label>
                </div>
                <div className="mb-8">
                  <label htmlFor="email">
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      className="h-12 px-4 py-2 w-full text-background border-[1px] border-[#e8e6e6] placeholder:text-base placeholder:text-background font-bold placeholder:font-normal"
                    />
                  </label>
                </div>
                <div className="mb-8">
                  <label>
                    <select className="h-12 px-4 py-2 w-full text-background border-[1px] border-[#e8e6e6] placeholder:text-base placeholder:text-background font-bold placeholder:font-normal">
                      <option>---</option>
                      <option>Your Case Falls In</option>
                      <option>Family Law</option>
                      <option>Child Custody</option>
                    </select>
                  </label>
                </div>
                <div className="mb-8">
                  <label htmlFor="tmessage">
                    <textarea
                      id="tmessage"
                      placeholder="Tell Us About Your Case"
                      className="px-4 py-2 w-full text-background border-[1px] border-[#e8e6e6] placeholder:text-base placeholder:text-background font-bold placeholder:font-normal h-48 resize-none"
                    ></textarea>
                  </label>
                </div>
                <div className="pt-2">
                  <label htmlFor="submit">
                    <input
                      type="button"
                      value="Contact Us"
                      className="text-base font-bold bg-primary-main uppercase text-white border-[1px] px-7 py-[14px] hover:border-primary-main hover:bg-white hover:text-primary-main transition-colors ease-in duration-300"
                    />
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
