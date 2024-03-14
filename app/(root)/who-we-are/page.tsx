import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "next/image";
import InnerBanner from "@/components/global/inner-banner";
import SecondaryButtonCustom from "@/components/global/secondary-button";
import whowecontent from "@/public/assets/who-we-content.jpg";
import whowecontent2 from "@/public/assets/who-we-content-2.jpg";


const page = () => {
  return (
    <> 
      <InnerBanner text="WHO WE ARE" />
      <div className="container pt-24 pb-36">
        <div className="flex gap-11">
          <div className="basis-8/12">
            <h2 className="text-[40px] text-background font-bold mb-2">We Are All About Our Clients</h2>
            <p className="text-base text-background mb-5">Clients entrust us to help them achieve their goals with their legal matters to grow and we never take that trust for granted. At lawyero we consider our clients are our own family member and provide them with care and counseling they deserve.</p>
            <p className="text-base text-background mb-5">Character, Hard Work, and Compassion! These three components are the pillars to making sure we provide the best service to the clients we represent.</p>
            <p>Whether its a matter of child custody or family law we are here to help. We also specialize in auto accident and injuries related to auto mobile industry. You should be compensated for any injury that you encountered whether at work or by someone else negligance.</p>
            <p className="text-base text-background mb-5">If you think your case falls in any of the above categories Give Us a Call.</p>
          </div>
          <div className="basis-1/3">
            <div className="bg-background p-8">
              <h3 className="text-[32px] text-white mb-2">Our Mission</h3>
              <p className="text-base text-white mb-4">We never take that trust for granted. We learn our clients’ needs and expectations; we communicate openly; we follow up frequently; we respond timely; and we are always available. In short, we develop a relationship with our clients. Our clients’ goals become our goals. We provide aggressive and professional legal representation to every client in order to ensure his or her issue is resolved in the best possible manner.</p>
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

      <div className="flex bg-lightgrey">
        <div className="basis-1/2 relative">
          <Image
            src={whowecontent}
            alt="Who We Content"
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="basis-1/2 pt-24 pb-16 pl-11">
          <h3 className="text-[40px] pb-4 mb-9 font-bold text-primary-main relative before:absolute before:bottom-0 before:left-0 before:w-[150px] before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[40px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1]">
            Why Choose Us
          </h3>
          <div className="flex mb-8 pr-20">
            <div className="flex-shrink-0 pr-7">
              <FontAwesomeIcon
                icon="handshake"
                className="w-14 h-14 border-2 p-3 border-background text-background"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-black">
                FREE CONSULTATION
              </h3>
              <p className="text-base">
                We offer free consultation and you never need to worry about the fees for consultation
              </p>
            </div>
          </div>
          <div className="flex mb-8 pr-20">
            <div className="flex-shrink-0 pr-7">
              <FontAwesomeIcon
                icon="graduation-cap"
                className="w-14 h-14 border-2 p-3 border-background text-background"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-black">
                MOST QUALIFIED TEAM
              </h3>
              <p className="text-base">
                At Lawyero we have the best team which understands your case and try to help you achieve desired results
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
              <h3 className="text-2xl font-bold mb-2 text-black">
                NO WIN NO FEES
              </h3>
              <p className="text-base">
                We have helped numerous clients in their complicated law matters and we are expert at this.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex bg-lightgrey">
        <div className="basis-1/2 pt-24 pb-16 px-11">
          <h3 className="text-[40px] pb-4 mb-9 font-bold text-primary-main relative before:absolute before:bottom-0 before:left-0 before:w-[150px] before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[40px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1]">
            We Are Best In Business
          </h3>
          <div className="flex mb-8 pr-20">
            <div className="flex-shrink-0 pr-7">
              <FontAwesomeIcon
                icon="scale-balanced"
                className="w-14 h-14 border-2 p-3 border-background text-background"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-black">
              WE UNDERSTAND LAW
              </h3>
              <p className="text-base">
              We have helped numerous clients in their complicated law matters and we are expert at this.
              </p>
            </div>
          </div>
          <div className="flex mb-8 pr-20">
            <div className="flex-shrink-0 pr-7">
              <FontAwesomeIcon
                icon="face-smile"
                className="w-14 h-14 border-2 p-3 border-background text-background"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-black">
              HAPPY CLIENTS
              </h3>
              <p className="text-base">
              About 98% of our clients are satistied with the services they recieved and would be happy to recommend Lawyero to others.
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
              <h3 className="text-2xl font-bold mb-2 text-black">
              WE LEAD YOU TO SUCCESS
              </h3>
              <p className="text-base">
              Our ultimate goal is to help you and we believe that client is our asset.
              </p>
            </div>
          </div>
        </div>
        <div className="basis-1/2 relative">
          <Image
            src={whowecontent2}
            alt="Who We Content"
            fill={true}
            className="object-cover"
          />
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
