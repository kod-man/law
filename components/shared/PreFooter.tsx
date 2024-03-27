import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContactForm } from "../global/ContactForm";

const PreFooter = () => {
  return (
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
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
