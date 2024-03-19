import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InnerBanner from "@/components/global/inner-banner";

 


const page = () => {
  return (
    <> 
    <InnerBanner text="CONTACT" />
    <div className="w-full">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.3198605784473!2d151.2501603754003!3d-33.88141516051197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12adea8d78a407%3A0x1bd0d69402d8e8ed!2sMarch%20St%2C%20Bellevue%20Hill%20NSW%202023%2C%20Australia!5e0!3m2!1sen!2s!4v1710833934772!5m2!1sen!2s" width="100%" height="480"></iframe>
    </div>
    

    <div className="overflow-hidden">
        <div className="container">
          <div className="flex">
          <div className="basis-2/3 pt-24 pb-20 pr-12 relative before:z-[-1]">
              <h3 className="text-3xl pb-5 mb-7 font-bold text-primary-main relative before:absolute before:bottom-0 before:left-0 before:w-[150px] before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[40px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1]">
                Schedule A Free Consultation
              </h3>
              <p className="text-base leading-7 text-[#333] mb-5">Give us a call to schedule a free consultation or fill out the following form. One of our representatives will get back to you within 24 hours.</p>
              <form action="">
                <div className="mb-9">
                  <label htmlFor="fname">
                    <input
                      type="text"
                      placeholder="First Name"
                      id="fname"
                      className="h-12 px-4 py-2 w-full text-background border-[2px] border-[#e8e6e6] placeholder:text-base placeholder:text-background font-bold placeholder:font-normal"
                    />
                  </label>
                </div>
                <div className="mb-9">
                  <label htmlFor="lname">
                    <input
                      type="text"
                      placeholder="Last Name"
                      id="lname"
                      className="h-12 px-4 py-2 w-full text-background border-[2px] border-[#e8e6e6] placeholder:text-base placeholder:text-background font-bold placeholder:font-normal"
                    />
                  </label>
                </div>
                <div className="mb-9">
                  <label htmlFor="email">
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      className="h-12 px-4 py-2 w-full text-background border-[2px] border-[#e8e6e6] placeholder:text-base placeholder:text-background font-bold placeholder:font-normal"
                    />
                  </label>
                </div>
                <div className="mb-9">
                  <label>
                    <select className="h-12 px-4 py-2 w-full text-background border-[2px] border-[#e8e6e6] placeholder:text-base placeholder:text-background font-bold placeholder:font-normal">
                      <option>---</option>
                      <option>Your Case Falls In</option>
                      <option>Family Law</option>
                      <option>Child Custody</option>
                    </select>
                  </label>
                </div>
                <div className="mb-9">
                  <label htmlFor="tmessage">
                    <textarea
                      id="tmessage"
                      placeholder="Tell Us About Your Case"
                      className="px-4 py-2 w-full text-background border-[2px] border-[#e8e6e6] placeholder:text-base placeholder:text-background font-bold placeholder:font-normal h-52 resize-none"
                    ></textarea>
                  </label>
                </div>
                <div className="pt-4">
                  <label htmlFor="submit">
                    <input
                      type="button"
                      value="Contact Us"
                      className="text-base font-bold bg-primary-main uppercase text-white border-[2px] border-primary-main px-7 py-[14px] hover:border-primary-main hover:bg-white hover:text-primary-main transition-colors ease-in duration-300"
                    />
                  </label>
                </div>
              </form>
            </div>
            <div className="basis-1/3 pt-24 pb-20 relative">
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
                    href="tel:1911-462-242"
                  >
                    1911-462-242
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
                    1911-462-281
                  </a>
                </li>
              </ul>
              <div>
                <div className="mt-7">
                  <h3 className="text-2xl text-[#333] font-bold mb-5">
                    Head Office
                  </h3>
                  <div className="flex">
                    <FontAwesomeIcon
                      icon="location-dot"
                      className="w-2 h-4 text-background mt-[2px]"
                    />
                    <p className="pl-2 text-background">
                      4th Floor ABC Plaza Downtown, <br /> March  Street, Sydney.
                    </p>
                  </div>
                </div>
                <div className="mt-7">
                  <h3 className="text-2xl text-[#333] font-bold mb-5">
                    Regional Office
                  </h3>
                  <div className="flex">
                    <FontAwesomeIcon
                      icon="location-dot"
                      className="w-2 h-4 text-background mt-[2px]"
                    />
                    <p className="pl-2 text-background">
                      4th Floor ABC Plaza Downtown, <br /> March  Street, Sydney.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl text-[#333] font-bold mb-7 mt-8">
                    Working Hours
                  </h3>
                  <ul className="text-[#313131] text-base leading-6">
                    <li className="flex relative py-4 border-b-[1px] border-[#313131]">
                      <span className="w-1/2 font-bold">Mon-Wed</span>
                      <span className="w-1/2 text-right">9:00am - 5:00pm</span>
                    </li>
                    <li className="flex relative py-4 border-b-[1px] border-[#313131]">
                      <span className="w-1/2 font-bold">Thurs-Fri</span>
                      <span className="w-1/2 text-right">9:00am - 5:00pm</span>
                    </li>
                    <li className="flex relative py-4">
                      <span className="w-1/2 font-bold">Sat-Sun</span>
                      <span className="w-1/2 text-right">Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      
    </>
  );
};

export default page;
