import Banner from "@/components/home/banner";
import React from "react";
import Image from "next/image";
import library from "@/public/assets/banner/library-home.jpg";
import libraryicon from "@/public/assets/library-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonCustomdark from "../../../components/global/button-dark";
import PrimaryHeadline from "../../../components/global/primary-headline";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="container -mt-36 relative z-[3]">
          <div className="flex">
            <div className="basis-1/3 bg-grey px-10 pt-10 pb-8">
              <FontAwesomeIcon icon="user" className="w-14 border-2 p-3 border-primary-main text-primary-main"/>
              <h3 className="text-2xl font-bold mt-5 mb-3 text-black">20+ Years Of Experience</h3>
              <p className="text-base">We are in the law industry for more than 20 years with more than 98% of client satisfaction</p>
            </div>
            <div className="basis-1/3 bg-lightgrey px-10 pt-10 pb-8">
              <FontAwesomeIcon icon="shopping-bag" className="w-14 border-2 p-3 border-primary-main text-primary-main"/>
              <h3 className="text-2xl font-bold mt-5 mb-3 text-black">Qualified And Experienced Attorneys</h3>
              <p className="text-base">Our team is the best in the business. We are team of attorneys which are passionate about their jobs.</p>
            </div>
            <div className="basis-1/3 bg-grey px-10 pt-10 pb-8">
              <FontAwesomeIcon icon="trophy" className="w-14 border-2 p-3 border-primary-main text-primary-main"/>
              <h3 className="text-2xl font-bold mt-5 mb-3 text-black">Awards And Achievements</h3>
              <p className="text-base">We at lawyero earned the best law firm award in 2017 with a success ratio of 99%.</p>
            </div>
          </div>
      </div>

      <div className="bg-black py-20 relative overflow-hidden before:bg-[#1a2431] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[''] before:opacity-70 before:z-[2]">
        <Image src={library} alt="library" fill={true}
              className="object-cover" />
        <div className="container relative z-[3]">
          <div className="flex justify-between">
            <div className="flex items-center">
              <FontAwesomeIcon icon="handshake" className="w-[75px] h-[75px] border-2 p-2 border-white text-white"/>
              <h3 className="text-3xl font-bold mt-5 mb-3 text-white pl-8">
                <span className="block">150+</span> Customers
              </h3>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon="dollar" className="w-[75px] h-[75px] border-2 p-2 border-white text-white"/>
              <h3 className="text-3xl font-bold mt-5 mb-3 text-white pl-8">
                <span className="block">$20,000,000</span> Recovered
              </h3>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon="thumbs-up" className="w-[75px] h-[75px] border-2 p-2 border-white text-white"/>
              <h3 className="text-3xl font-bold mt-5 mb-3 text-white pl-8">
                <span className="block">98%</span> Success Ratio
              </h3>
            </div>
          </div>
        </div>
        <Image src={libraryicon} alt="library-icon" className="absolute bottom-0 z-[3]" />
      </div>

      <div className="container pt-20 pb-14">
        <div className="flex gap-8">
          <div className="basis-[70%]">
            <PrimaryHeadline text="About Firm" />
            <div className="text-base text-[#333]">
              <p className="mb-6">The attorneys of Lawyero have proven their ability to obtain excellent results on behalf of clients across industries in a wide range of disputes, from complex, international tech-based litigation to shareholder/partnership disputes and high-profile art transactions.</p>

              <p className="mb-6">Contact our office today to schedule a confidential consultation with one of your attorneys to discuss the particular legal challenges you or your business is facing.</p>
            </div>
            <ButtonCustomdark href="#" text="Learn More" />
          </div>
          <div className="basis-[30%]"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
