import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "next/image";
import singleteambanner from "@/public/assets/single-team-members-banner.jpg";
import homefirmimage from "@/public/assets/home-member1.jpg";
import Link from "next/link";
import paimage1 from "@/public/assets/pa-img-1.jpg";
import paimagetopcontent from "@/public/assets/single-pa-top-content.jpg";
import SecondaryButtonCustom from "@/components/global/secondary-button";




const page = () => {
  return (
    <> 
      

      <div className="py-[70px] relative overflow-hidden before:bg-background before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[''] before:opacity-70 before:z-[2]">
      <Image
          src={singleteambanner}
          alt="Single Practice Arae Banner"
          fill={true}
          className="object-cover"
        />
        <div className="container relative z-[3]">
          <h1 className="text-[40px] text-white font-bold text-center">ROBERT DARREN</h1>
        </div>
      </div>
      <div className="container pt-20 pb-20">
        <div className="flex gap-8">
        <div className="basis-[30%]">
            <Image
              src={homefirmimage}
              alt="Home Firm Image"
              className="rounded-md"
            />
            <ul className="flex justify-end items-center">
                <li className="w-8 ml-3">
                  <Link href="#">
                    <FontAwesomeIcon className="text-background" icon={["fab", "facebook-square"]} />
                  </Link>
                </li>
                <li className="w-8 ml-3">
                  <Link href="#">
                    <FontAwesomeIcon className="text-background" icon={["fab", "twitter-square"]} />
                  </Link>
                </li>
                <li className="w-8 ml-3">
                  <Link href="#">
                    <FontAwesomeIcon className="text-background" icon={["fab", "linkedin-in"]} />
                  </Link>
                </li>
                <li className="w-8 ml-3">
                  <Link href="#">
                    <FontAwesomeIcon className="text-background" icon={["fab", "youtube-square"]} />
                  </Link>
                </li>
              </ul>
          </div>
          <div className="basis-[70%]">
          <h3 className="text-[32px] pb-3 mb-7 font-bold text-primary-main relative before:absolute before:bottom-0 before:left-0 before:w-[150px] before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[40px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1]">
            About Attorney</h3>
            <div className="text-base text-[#333]">
              <p className="mb-6">
              Robert has been practicing law for last 13 years and have been very successful in getting his clients the protection within the jurisdictions of Law.
              </p>
              <p className="mb-6">
              Robert earned his Juris Doctorate from Villanova University School of Law in Villanova, Pennsylvania in 2001.  He earned his undergraduate degree from Denison University in 1998, having studied Philosophy with additional emphasis in ancient political thought.  While at Villanova University School of Law, Robert served as a summer associate at Greenberg Traurig in Los Angeles, California as well as the Editor of Outside Articles of the Villanova University School of Law Environmental Law Journal.
              </p>
              <p className="mb-6">
              Mr. Robert is a firm believer of the fact that in order to be able to succeed in this industry you have to dedicate your time, work and emotions for the clients to get the best result out and keeping the clients in a state of mind that they ca
              </p>
              <p className="mb-6">
              He has helped his clients recover over $150,000 in various cases and has nearly perfect success ratio.
              </p>
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
