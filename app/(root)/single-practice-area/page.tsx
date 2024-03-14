import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "next/image";
import singlepabanner from "@/public/assets/single-practice-banner.jpg";
import paimage1 from "@/public/assets/pa-img-1.jpg";
import SecondaryButtonCustom from "@/components/global/secondary-button";




const page = () => {
  return (
    <> 
      

      <div className="py-[70px] relative overflow-hidden before:bg-background before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[''] before:opacity-70 before:z-[2]">
      <Image
          src={singlepabanner}
          alt="Single Practice Arae Banner"
          fill={true}
          className="object-cover"
        />
        <div className="container relative z-[3]">
          <h1 className="text-[40px] text-white font-bold text-center">FAMILY LAW</h1>
        </div>
      </div>
      <div className="container py-24">
        <div className="flex gap-10">
          <div className="basis-4/6">
            <h3 className="text-[40px] pb-4 mb-7 font-bold text-primary-main relative before:absolute before:bottom-0 before:left-0 before:w-[150px] before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[40px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1]">
            Overview
            </h3>
            <p className="text-base mb-5 text-[#333]">Family law involves a range of matters that are usually very personal, unique and emotionally challenging. Decisions involving your children and your financial well-being can be complex and nuanced and the results can last a lifetime. In these situations, you need more than just an attorney who has experience and knowledge of the law. You need someone who will provide you with guidance, creative thinking, and who understands the big picture and the impact your decisions will have on you.</p>
            <p className="text-base mb-5 text-[#333]">The family law attorneys at lawyero are committed to providing our clients with the skill and expertise necessary to meet the client’s objectives and goalswhile providing a trusted source of representation. We are responsive to our clients’ needs and we pride ourselves on our attentiveness and availability to handle client matters with care, respect and sensitivity.</p>
          </div>
          <div className="basis-1/3">
            <Image
                src={paimage1}
                alt="Practice Area Image"
                className="w-full rounded"
              />
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
