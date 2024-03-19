import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "next/image";
import singleteambanner from "@/public/assets/single-team-members-banner.jpg";
import homefirmimage from "@/public/assets/home-member1.jpg";
import Link from "next/link";
import library from "@/public/assets/library-home.jpg";
import libraryicon from "@/public/assets/library-icon.svg";
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
            <ul className="flex justify-center items-center py-5">
                <li className="w-8 ml-3">
                  <Link href="#">
                    <FontAwesomeIcon className="text-background hover:text-primary-main hover:transition-all" icon={["fab", "facebook-square"]} />
                  </Link>
                </li>
                <li className="w-8 ml-3">
                  <Link href="#">
                    <FontAwesomeIcon className="text-background hover:text-primary-main hover:transition-all" icon={["fab", "twitter-square"]} />
                  </Link>
                </li>
                <li className="w-8 ml-3">
                  <Link href="#">
                    <FontAwesomeIcon className="text-background hover:text-primary-main hover:transition-all" icon={["fab", "linkedin-in"]} />
                  </Link>
                </li>
                <li className="w-8 ml-3">
                  <Link href="#">
                    <FontAwesomeIcon className="text-background hover:text-primary-main hover:transition-all" icon={["fab", "youtube-square"]} />
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

      <div className="bg-black pt-28 pb-20 relative overflow-hidden before:bg-[#1a2431] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[''] before:opacity-70 before:z-[2]">
        <Image
            src={libraryicon}
            alt="library-icon"
            className="absolute top-0 z-[3] w-full rotate-180"
          />
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
                icon="hand-scissors"
                className="w-[75px] h-[75px] border-2 p-4 border-white text-white"
              />
              <h3 className="text-3xl font-bold mt-5 mb-3 text-white pl-8">
                <span className="block">20,000+</span> Cases Solved
              </h3>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon="smile"
                className="w-[75px] h-[75px] border-2 p-4 border-white text-white"
              />
              <h3 className="text-3xl font-bold mt-5 mb-3 text-white pl-8">
                <span className="block">2,000+</span> Happy Clients
              </h3>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon="handshake"
                className="w-[75px] h-[75px] border-2 p-4 border-white text-white"
              />
              <h3 className="text-3xl font-bold mt-5 mb-3 text-white pl-8">
                <span className="block">98%</span> Success Rate
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-main py-6">
        <div className="container">
          <div className="flex items-center">
            <div className="basis-1/2">
              <h3 className="text-xl text-white">
                Get the consultation For Most Complex Legal Issues.
              </h3>
            </div>
            <div className="basis-1/2 text-right">
              <SecondaryButtonCustom href="#" text="Contact Us" />
            </div>
          </div>
        </div>
      </div>



      <div className="overflow-hidden">
        <div className="container">
          <div className="flex">
            <div className="basis-2/5 pt-24 pb-16 pl-12 pr-14 relative before:z-[-1] before:top-0 before:absolute before:bg-grey before:content-[''] before:h-full before:w-[50vw] before:right-0">
              <h3 className="text-[32px] pb-4 mb-7 font-bold text-primary-main relative before:absolute before:bottom-0 before:left-0 before:w-[150px] before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[40px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1]">
                Attorney Background
              </h3>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-3 text-[#333]">
                  <span className="inline-block text-primary-main">Attorney</span> Of Law
                </h3>
                <ol>
                  <li className="text-base text-[#333] mb-3">1. Texas Southern University – Thurgood Marshall School of Law, Juris Doctor (J.D.), Houston, TX</li>
                  <li className="text-base text-[#333] mb-3">2. Paul Quinn College, Bachelor of Science (B.S.), Dallas, TX</li>
                </ol>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-3 text-[#333]">
                  <span className="inline-block text-primary-main">Admission</span> Bar
                </h3>
                <ol>
                  <li className="text-base text-[#333] mb-3">1. State Bar of Texas, 2010</li>
                  <li className="text-base text-[#333] mb-3">2. U.S. District Court – Northern District of Texas</li>
                </ol>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-3 text-[#333]">
                  <span className="inline-block text-primary-main">Bar </span>Membership
                </h3>
                <ol>
                  <li className="text-base text-[#333] mb-3">1. Texas Trial Lawyer’s Association</li>
                  <li className="text-base text-[#333] mb-3">2. Dallas Association of Young Lawyers</li>
                </ol>
              </div>
            </div>
            <div className="basis-3/5 pt-24 pb-16 pl-12 pr-11 relative before:z-[-1] before:top-0 before:absolute before:bg-white before:content-[''] before:h-full before:w-[80vw] before:left-0">
              <h3 className="text-[32px] pb-4 mb-7 font-bold text-primary-main relative before:absolute before:bottom-0 before:left-0 before:w-[150px] before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[40px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1]">
                Practice Areas
              </h3>
              <div className="flex mb-8 pr-20">
            <div className="flex-shrink-0 pr-7">
              <FontAwesomeIcon
                icon="scale-balanced"
                className="w-14 h-14 border-2 p-3 border-background text-background"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-[#333]">
                Family Law
              </h3>
              <p className="text-base">
                Robert has been working as a family law attorney for more than 10 years and have solved tons of cases with his expertise.
              </p>
            </div>
          </div>
          <div className="flex mb-8 pr-20">
            <div className="flex-shrink-0 pr-7">
              <FontAwesomeIcon
                icon="child"
                className="w-14 h-14 border-2 p-3 border-background text-background"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-[#333]">
              Child Custody
              </h3>
              <p className="text-base">
              One of the most difficult and emotional area of law is related to the children law. Robert uses his experience to get these matters solved.
              </p>
            </div>
          </div>
          <div className="flex mb-8 pr-20">
            <div className="flex-shrink-0 pr-7">
              <FontAwesomeIcon
                icon="sterling-sign"
                className="w-14 h-14 border-2 p-3 border-background text-background"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-[#333]">
                Business Law
              </h3>
              <p className="text-base">
              Business laws are sometimes quite complex to figure out because of things become complicated when not sure about the laws. Robert is best when it comes to business law.
              </p>
            </div>
          </div>
          <div className="flex mb-8 pr-20">
            <div className="flex-shrink-0 pr-7">
              <FontAwesomeIcon
                icon="volume-high"
                className="w-14 h-14 border-2 p-3 border-background text-background"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-[#333]">
                Emergency Law
              </h3>
              <p className="text-base">
              Robert has done well in the past 10 years tackling with emergency situations and have successfully taken clients case which lead them to protection under law.
              </p>
            </div>
          </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-main">
        <div className="container">
          <div className="py-[75px] px-12 relative">
            <FontAwesomeIcon
              icon="quote-left"
              className="text-white absolute w-9 z-0 opacity-40 top-[60px]"
            />
            <p className="text-xl	italic text-white">I was struggling to get my legal issues sorted out before i met Mr. John at Lawyero. I was amazed by his attitude and attention to detail and he sorted my case in no time understanding what i need to get done. Thankyou Mr. John.</p>
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
