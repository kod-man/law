import Banner from "@/components/home/banner";
import React from "react";
import Image from "next/image";
import library from "@/public/assets/library-home.jpg";
import libraryicon from "@/public/assets/library-icon.svg";
import homefirmimage from "@/public/assets/home-member1.jpg";
import homeserviceimage from "@/public/assets/home-service-image.jpg";
import homeblogbefore from "@/public/assets/home-blog-before.svg";
import homeblog1 from "@/public/assets/home-blog-1.jpg";
import homeblog2 from "@/public/assets/home-blog-2.jpg";
import homeblog3 from "@/public/assets/home-blog-3.jpg";
import homeblog4 from "@/public/assets/home-blog-4.jpg";
import homeblog5 from "@/public/assets/home-blog-5.jpg";
import homeblog6 from "@/public/assets/home-blog-6.jpg";
import homeconsultationcall from "@/public/assets/home-request-consultation.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonCustomdark from "@/components/global/button-dark";
import SecondaryButtonCustom from "@/components/global/secondary-button";
import PrimaryHeadline from "@/components/global/primary-headline";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="container -mt-36 relative z-[3]">
        <div className="flex">
          <div className="basis-1/3 bg-grey px-10 pt-10 pb-8">
            <FontAwesomeIcon
              icon="user"
              className="w-14 border-2 p-3 border-primary-main text-primary-main"
            />
            <h3 className="text-2xl font-bold mt-5 mb-3 text-black">
              20+ Years Of Experience
            </h3>
            <p className="text-base">
              We are in the law industry for more than 20 years with more than
              98% of client satisfaction
            </p>
          </div>
          <div className="basis-1/3 bg-lightgrey px-10 pt-10 pb-8">
            <FontAwesomeIcon
              icon="shopping-bag"
              className="w-14 border-2 p-3 border-primary-main text-primary-main"
            />
            <h3 className="text-2xl font-bold mt-5 mb-3 text-black">
              Qualified And Experienced Attorneys
            </h3>
            <p className="text-base">
              Our team is the best in the business. We are team of attorneys
              which are passionate about their jobs.
            </p>
          </div>
          <div className="basis-1/3 bg-grey px-10 pt-10 pb-8">
            <FontAwesomeIcon
              icon="trophy"
              className="w-14 border-2 p-3 border-primary-main text-primary-main"
            />
            <h3 className="text-2xl font-bold mt-5 mb-3 text-black">
              Awards And Achievements
            </h3>
            <p className="text-base">
              We at lawyero earned the best law firm award in 2017 with a
              success ratio of 99%.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black py-20 relative overflow-hidden before:bg-[#1a2431] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[''] before:opacity-70 before:z-[2]">
        <Image
          src={library}
          alt="library"
          fill={true}
          className="object-cover"
        />
        <div className="container relative z-[3]">
          <div className="flex justify-between">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon="handshake"
                className="w-[75px] h-[75px] border-2 p-2 border-white text-white"
              />
              <h3 className="text-3xl font-bold mt-5 mb-3 text-white pl-8">
                <span className="block">150+</span> Customers
              </h3>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon="dollar"
                className="w-[75px] h-[75px] border-2 p-2 border-white text-white"
              />
              <h3 className="text-3xl font-bold mt-5 mb-3 text-white pl-8">
                <span className="block">$20,000,000</span> Recovered
              </h3>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon="thumbs-up"
                className="w-[75px] h-[75px] border-2 p-2 border-white text-white"
              />
              <h3 className="text-3xl font-bold mt-5 mb-3 text-white pl-8">
                <span className="block">98%</span> Success Ratio
              </h3>
            </div>
          </div>
        </div>

        <Image
          src={libraryicon}
          alt="library-icon"
          className="absolute bottom-0 z-[3] w-full"
        />
      </div>

      <div className="container pt-20 pb-20">
        <div className="flex gap-8">
          <div className="basis-[70%]">
            <PrimaryHeadline text="About Firm" />
            <div className="text-base text-[#333]">
              <p className="mb-6">
                The attorneys of Lawyero have proven their ability to obtain
                excellent results on behalf of clients across industries in a
                wide range of disputes, from complex, international tech-based
                litigation to shareholder/partnership disputes and high-profile
                art transactions.
              </p>

              <p className="mb-6">
                Contact our office today to schedule a confidential consultation
                with one of your attorneys to discuss the particular legal
                challenges you or your business is facing.
              </p>
            </div>
            <ButtonCustomdark href="#" text="Learn More" />
          </div>
          <div className="basis-[30%]">
            <Image
              src={homefirmimage}
              alt="Home Firm Image"
              className="rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-12 bg-grey">
        <div className="basis-1/2 relative">
          <Image
            src={homeserviceimage}
            alt="Home Service Image"
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="basis-1/2 pt-20 pb-4">
          <div className="flex mb-14 pr-20">
            <div className="flex-shrink-0 pr-7">
              <FontAwesomeIcon
                icon="link"
                className="w-14 h-14 border-2 p-3 border-primary-main text-primary-main"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-black">
                PERSONAL SERVICE
              </h3>
              <p className="text-base">
                Our attorneys are committed to you and will work vigorously to
                obtain the best possible recovery in your case.
              </p>
            </div>
          </div>
          <div className="flex mb-14 pr-20">
            <div className="flex-shrink-0 pr-7">
              <FontAwesomeIcon
                icon="phone"
                className="w-14 h-14 border-2 p-3 border-primary-main text-primary-main"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-black">
                SCREENING FREE
              </h3>
              <p className="text-base">
                At the our law Firm, you do not have to go through a call
                screen. You will get to speak to an attorney directly,
                preferably the one who will be handling your case.
              </p>
            </div>
          </div>
          <div className="flex mb-14 pr-20">
            <div className="flex-shrink-0 pr-7">
              <FontAwesomeIcon
                icon="mug-hot"
                className="w-14 h-14 border-2 p-3 border-primary-main text-primary-main"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-black">
                ALWAYS RESPONSIVE
              </h3>
              <p className="text-base">
                Your attorney will address any problems quickly and respect your
                time by promptly replying to your inquiries.
              </p>
            </div>
          </div>
          <div className="flex mb-14 pr-20">
            <div className="flex-shrink-0 pr-7">
              <FontAwesomeIcon
                icon="suitcase"
                className="w-14 h-14 border-2 p-3 border-primary-main text-primary-main"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-black">
                CASE EXPERIENCE
              </h3>
              <p className="text-base">
                Our attorneys are experienced and can handle any type of injury
                case for you.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-background py-6">
        <div className="container">
          <div className="flex items-center">
            <div className="basis-1/2">
              <h3 className="text-xl text-white">
                Get the consultation For Most Complex Legal Issues.
              </h3>
            </div>
            <div className="basis-1/2 text-right">
              <ButtonCustomdark href="#" text="Contact Us" />
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-20 pb-32 relative">
        <PrimaryHeadline text="Practice Areas" />
        <div className="flex gap-8">
          <div className="basis-1/4 bg-primary-main min-h-64 text-center group mb-7">
            <Link
              className="flex justify-center items-center h-full w-full flex-col transition-box-shadow duration-500 ease-in-out group-hover:shadow-[0_6px_13px_rgba(26,36,49,0.35)]"
              href="#"
            >
              <span className="inline-block">
                <FontAwesomeIcon
                  icon="scale-balanced"
                  className="w-14 h-14 text-white"
                />
              </span>
              <h3 className="text-2xl text-white font-semibold mt-5">
                Family Law
              </h3>
            </Link>
          </div>
          <div className="basis-1/4 bg-background min-h-64 text-center group mb-7">
            <Link
              className="flex justify-center items-center h-full w-full flex-col transition-box-shadow duration-500 ease-in-out group-hover:shadow-[0_6px_13px_rgba(26,36,49,0.35)]"
              href="#"
            >
              <span className="inline-block">
                <FontAwesomeIcon
                  icon="child"
                  className="w-14 h-14 text-white"
                />
              </span>
              <h3 className="text-2xl text-white font-semibold mt-5">
                Child Custody
              </h3>
            </Link>
          </div>
          <div className="basis-1/4 bg-primary-main min-h-64 text-center group mb-7">
            <Link
              className="flex justify-center items-center h-full w-full flex-col transition-box-shadow duration-500 ease-in-out group-hover:shadow-[0_6px_13px_rgba(26,36,49,0.35)]"
              href="#"
            >
              <span className="inline-block">
                <FontAwesomeIcon icon="car" className="w-14 h-14 text-white" />
              </span>
              <h3 className="text-2xl text-white font-semibold mt-5">
                Auto Accidents
              </h3>
            </Link>
          </div>
          <div className="basis-1/4 bg-background min-h-64 text-center group mb-7">
            <Link
              className="flex justify-center items-center h-full w-full flex-col transition-box-shadow duration-500 ease-in-out group-hover:shadow-[0_6px_13px_rgba(26,36,49,0.35)]"
              href="#"
            >
              <span className="inline-block">
                <FontAwesomeIcon
                  icon="sterling-sign"
                  className="w-14 h-14 text-white"
                />
              </span>
              <h3 className="text-2xl text-white font-semibold mt-5">
                Business Law
              </h3>
            </Link>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="basis-1/4 bg-background min-h-64 text-center group mb-7">
            <Link
              className="flex justify-center items-center h-full w-full flex-col transition-box-shadow duration-500 ease-in-out group-hover:shadow-[0_6px_13px_rgba(26,36,49,0.35)]"
              href="#"
            >
              <span className="inline-block">
                <FontAwesomeIcon
                  icon="print"
                  className="w-14 h-14 text-white"
                />
              </span>
              <h3 className="text-2xl text-white font-semibold mt-5">
                Internet Fraud
              </h3>
            </Link>
          </div>
          <div className="basis-1/4 bg-primary-main min-h-64 text-center group mb-7">
            <Link
              className="flex justify-center items-center h-full w-full flex-col transition-box-shadow duration-500 ease-in-out group-hover:shadow-[0_6px_13px_rgba(26,36,49,0.35)]"
              href="#"
            >
              <span className="inline-block">
                <FontAwesomeIcon
                  icon="futbol"
                  className="w-14 h-14 text-white"
                />
              </span>
              <h3 className="text-2xl text-white font-semibold mt-5">
                Sports Injury
              </h3>
            </Link>
          </div>
          <div className="basis-1/4 bg-background min-h-64 text-center group mb-7">
            <Link
              className="flex justify-center items-center h-full w-full flex-col transition-box-shadow duration-500 ease-in-out group-hover:shadow-[0_6px_13px_rgba(26,36,49,0.35)]"
              href="#"
            >
              <span className="inline-block">
                <FontAwesomeIcon
                  icon="truck-medical"
                  className="w-14 h-14 text-white"
                />
              </span>
              <h3 className="text-2xl text-white font-semibold mt-5">
                Emergency Law
              </h3>
            </Link>
          </div>
          <div className="basis-1/4 bg-primary-main min-h-64 text-center group mb-7">
            <Link
              className="flex justify-center items-center h-full w-full flex-col transition-box-shadow duration-500 ease-in-out group-hover:shadow-[0_6px_13px_rgba(26,36,49,0.35)]"
              href="#"
            >
              <span className="inline-block">
                <FontAwesomeIcon
                  icon="futbol"
                  className="w-14 h-14 text-white"
                />
              </span>
              <h3 className="text-2xl text-white font-semibold mt-5">
                Drowning Law
              </h3>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative bg-grey pt-20 pb-20">
        <Image
          src={homeblogbefore}
          alt="Home BLog"
          className="absolute -top-[56px] z-[3] w-full"
        />
        <div className="container">
          <PrimaryHeadline text="News & Insights" />
          <div className="flex flex-wrap">
            <div className="basis-1/3 group pr-2 mb-12">
              <div className="overflow-hidden">
                <Image
                  src={homeblog1}
                  alt="Home BLog Post"
                  className="transition-transform scale-[1.1] duration-500 ease-in-out group-hover:scale-[1]"
                />
              </div>
              <div className="p-5 bg-white">
                <span className="text-sm text-primary-main mb-4 inline-block">
                  Dec, 25 2024
                </span>
                <h3>
                  <Link
                    href="#"
                    className="inline-block text-base text-background font-semibold cursor-pointer hover:text-primary-main"
                  >
                    When to seek legal help? Important to know when
                  </Link>
                </h3>
              </div>
            </div>
            <div className="basis-1/3 group pr-3 pl-2 mb-12">
              <div className="overflow-hidden">
                <Image
                  src={homeblog2}
                  alt="Home BLog Post"
                  className="transition-transform scale-[1.1] duration-500 ease-in-out group-hover:scale-[1]"
                />
              </div>
              <div className="p-5 bg-white">
                <span className="text-sm text-primary-main mb-4 inline-block">
                  Dec, 25 2024
                </span>
                <h3>
                  <Link
                    href="#"
                    className="inline-block text-base text-background font-semibold cursor-pointer hover:text-primary-main"
                  >
                    Seek immediate legal advice when most needed
                  </Link>
                </h3>
              </div>
            </div>
            <div className="basis-1/3 group pl-3 mb-12">
              <div className="overflow-hidden">
                <Image
                  src={homeblog3}
                  alt="Home BLog Post"
                  className="transition-transform scale-[1.1] duration-500 ease-in-out group-hover:scale-[1]"
                />
              </div>
              <div className="p-5 bg-white">
                <span className="text-sm text-primary-main mb-4 inline-block">
                  Dec, 25 2024
                </span>
                <h3>
                  <Link
                    href="#"
                    className="inline-block text-base text-background font-semibold cursor-pointer hover:text-primary-main"
                  >
                    What it takes to be a lawyer (the untold story)
                  </Link>
                </h3>
              </div>
            </div>
            <div className="basis-1/3 group pr-3 mb-12">
              <div className="overflow-hidden">
                <Image
                  src={homeblog4}
                  alt="Home BLog Post"
                  className="transition-transform scale-[1.1] duration-500 ease-in-out group-hover:scale-[1]"
                />
              </div>
              <div className="p-5 bg-white">
                <span className="text-sm text-primary-main mb-4 inline-block">
                  Dec, 25 2024
                </span>
                <h3>
                  <Link
                    href="#"
                    className="inline-block text-base text-background font-semibold cursor-pointer hover:text-primary-main"
                  >
                    When to seek legal help? Important to know when
                  </Link>
                </h3>
              </div>
            </div>
            <div className="basis-1/3 group pr-3 pl-3  mb-12">
              <div className="overflow-hidden">
                <Image
                  src={homeblog5}
                  alt="Home BLog Post"
                  className="transition-transform scale-[1.1] duration-500 ease-in-out group-hover:scale-[1]"
                />
              </div>
              <div className="p-5 bg-white">
                <span className="text-sm text-primary-main mb-4 inline-block">
                  Dec, 25 2024
                </span>
                <h3>
                  <Link
                    href="#"
                    className="inline-block text-base text-background font-semibold cursor-pointer hover:text-primary-main"
                  >
                    Seek immediate legal advice when most needed
                  </Link>
                </h3>
              </div>
            </div>
            <div className="basis-1/3 group pl-3  mb-12">
              <div className="overflow-hidden">
                <Image
                  src={homeblog6}
                  alt="Home BLog Post"
                  className="transition-transform scale-[1.1] duration-500 ease-in-out group-hover:scale-[1]"
                />
              </div>
              <div className="p-5 bg-white">
                <span className="text-sm text-primary-main mb-4 inline-block">
                  Dec, 25 2024
                </span>
                <h3>
                  <Link
                    href="#"
                    className="inline-block text-base text-background font-semibold cursor-pointer hover:text-primary-main"
                  >
                    What it takes to be a lawyer (the untold story)
                  </Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="text-center">
            <SecondaryButtonCustom href="#" text="Read More Posts" />
          </div>
        </div>
        <Image
          src={homeblogbefore}
          alt="Home BLog"
          className="absolute -bottom-[56px] z-[3] w-full rotate-180"
        />
      </div>
      <div className="container pt-28 pb-24">
        <PrimaryHeadline text="Our Team" />
      </div>
      <div className="bg-black py-20 relative overflow-hidden before:bg-[#1a2431] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[''] before:opacity-70 before:z-[2]">
        <Image
          src={homeconsultationcall}
          alt="Home Consultation Call"
          fill={true}
          className="object-cover"
        />
        <div className="container relative z-[3] text-center">
          <h2 className="text-[40px] text-white font-bold px-14 text-center mb-9 inline-block leading-10">
            We Treat Every Case Equally With Same Attention And Dedication
            Because Every Client Matters.
          </h2>
          <Link
            className="border-[3px] border-white text-base font-bold text-white px-3 py-4 inline-block"
            href="#"
          >
            Request Free Consultation
          </Link>
        </div>
      </div>
      <div className="bg-grey pt-20 pb-11">
        <div className="container">
          <PrimaryHeadline text="Frequently Asked Questions" />
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
                      className="text-base font-bold bg-primary-main uppercase text-white border-[1px] px-7 py-[14px] hover:border-primary-main hover:bg-white hover:text-primary-main"
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

export default Home;
