import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonCustom from "../global/button";

const Footer = () => {
  return (
    <>
      <div className="bg-background">
        <div className="container pt-20 pb-14">
          <div className="flex lg:flex-nowrap sm:flex-wrap gap-8">
            <div className="lg:basis-1/3 sm:basis-full">
              <div>
                <Link href="http://bsmthemes.com/demo/lawyero">
                  <Image src={logo} alt="Logo" width={166} height={30} />
                </Link>
                <div className="mt-5 pb-7">
                  <p className="text-white text-sm leading-6">
                    Lawyero is the ultimate theme for the attorneys and law
                    firms that best suits their requirements. It is composed of
                    large number of components and is made with love.
                  </p>
                </div>
                <ButtonCustom href="#" text="Buy Now" />
              </div>
            </div>
            <div className="lg:basis-1/3 sm:basis-full">
              <h3 className="text-3xl text-white font-bold mb-6">
                <span className="text-[#14cab4]">Legal</span> Advert
              </h3>
              <div className="mt-5 lg:pb-7">
                <p className="text-white text-sm leading-6">
                  The information on this website is for general information
                  purposes only. Nothing on this site should be taken as legal
                  advice for any individual case or situation. This information
                  is not intended to create, and receipt or viewing does not
                  constitute, an attorney-client relationship.
                </p>
              </div>
            </div>
            <div className="lg:basis-1/3 sm:basis-full">
              <h3 className="text-3xl text-white font-bold mb-6">
                <span className="text-[#14cab4] font-bold">Opening </span> Hour
              </h3>
              <ul className="text-white text-sm leading-6">
                <li className="flex my-2 pl-5 relative">
                  <FontAwesomeIcon
                    icon="chevron-right"
                    className="w-3 h-[12px] absolute top-1/2 left-0 -translate-y-1/2"
                  />
                  <span className="w-1/2 font-bold">Mon</span>
                  <span className="w-1/2 text-right">9:00am - 5:00pm</span>
                </li>
                <li className="flex my-2 pl-5 relative">
                  <FontAwesomeIcon
                    icon="chevron-right"
                    className="w-3 h-[12px] absolute top-1/2 left-0 -translate-y-1/2"
                  />
                  <span className="w-1/2 font-bold">Tues</span>
                  <span className="w-1/2 text-right">9:00am - 5:00pm</span>
                </li>
                <li className="flex my-2 pl-5 relative">
                  <FontAwesomeIcon
                    icon="chevron-right"
                    className="w-3 h-[12px] absolute top-1/2 left-0 -translate-y-1/2"
                  />
                  <span className="w-1/2 font-bold">Wed</span>
                  <span className="w-1/2 text-right">9:00am - 5:00pm</span>
                </li>
                <li className="flex my-2 pl-5 relative">
                  <FontAwesomeIcon
                    icon="chevron-right"
                    className="w-3 h-[12px] absolute top-1/2 left-0 -translate-y-1/2"
                  />
                  <span className="w-1/2 font-bold">Thurs</span>
                  <span className="w-1/2 text-right">9:00am - 5:00pm</span>
                </li>
                <li className="flex my-2 pl-5 relative">
                  <FontAwesomeIcon
                    icon="chevron-right"
                    className="w-3 h-[12px] absolute top-1/2 left-0 -translate-y-1/2"
                  />
                  <span className="w-1/2 font-bold">Fri</span>
                  <span className="w-1/2 text-right">9:00am - 5:00pm</span>
                </li>
                <li className="flex my-2 pl-5 relative">
                  <FontAwesomeIcon
                    icon="chevron-right"
                    className="w-3 h-[12px] absolute top-1/2 left-0 -translate-y-1/2"
                  />
                  <span className="w-1/2 font-bold">Sat - Sun</span>
                  <span className="w-1/2 text-right">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-main py-7">
        <div className="container">
          <div className="flex items-center lg:flex-nowrap sm:flex-wrap">
            <div className="lg:basis-1/2 sm:basis-full">
              <p className="text-white lg:text-left sm:text-center lg:mb-0 sm:mb-4 text-sm leading-6">
                &copy; Copyrights Lawyero 2024. All Rights Reserved.
              </p>
            </div>
            <div className="lg:basis-1/2 sm:basis-full">
              <ul className="flex lg:justify-end sm:justify-center items-center">
                <li className="w-8 ml-3">
                  <Link href="#">
                    <FontAwesomeIcon className="text-white" icon={["fab", "facebook"]} />
                  </Link>
                </li>
                <li className="w-8 ml-3">
                  <Link href="#">
                    <FontAwesomeIcon className="text-white" icon={["fab", "twitter"]} />
                  </Link>
                </li>
                <li className="w-8 ml-3">
                  <Link href="#">
                    <FontAwesomeIcon className="text-white" icon={["fab", "linkedin"]} />
                  </Link>
                </li>
                <li className="w-8 ml-3">
                  <Link href="#">
                    <FontAwesomeIcon className="text-white" icon={["fab", "youtube"]} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
