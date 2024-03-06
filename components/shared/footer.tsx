import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <div className="bg-background">
        <div className="container pt-20 pb-14">
          <div className="flex gap-8">
            <div className="basis-1/3">
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
                <Link
                  className="group bg-primary-main text-sm font-bold uppercase text-white hover:text-[#14cab4] py-4 px-7 inline-block hover:pr-11 border-2 border-[#14cab4] hover:bg-transparent relative transition-padding duration-300 ease-in-out hover:pr-11"
                  href="#"
                >
                  Buy Now
                  <FontAwesomeIcon
                    icon="chevron-right"
                    className="w-3 absolute top-1/2 opacity-0 right-1/3 -translate-y-1/2 group-hover:right-5 group-hover:opacity-100 h-[15px]"
                  />
                </Link>
              </div>
            </div>
            <div className="basis-1/3">
              <h3 className="text-3xl text-white font-bold mb-6">
                <span className="text-[#14cab4]">Legal</span> Advert
              </h3>
              <div className="mt-5 pb-7">
                <p className="text-white text-sm leading-6">
                  The information on this website is for general information
                  purposes only. Nothing on this site should be taken as legal
                  advice for any individual case or situation. This information
                  is not intended to create, and receipt or viewing does not
                  constitute, an attorney-client relationship.
                </p>
              </div>
            </div>
            <div className="basis-1/3">
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
                  <span className="w-1/2">9:00am - 5:00pm</span>
                </li>
                <li className="flex my-2 pl-5 relative">
                  <FontAwesomeIcon
                      icon="chevron-right"
                      className="w-3 h-[12px] absolute top-1/2 left-0 -translate-y-1/2"
                    />
                  <span className="w-1/2 font-bold">Tues</span>
                  <span className="w-1/2">9:00am - 5:00pm</span>
                </li>
                <li className="flex my-2 pl-5 relative">
                  <FontAwesomeIcon
                      icon="chevron-right"
                      className="w-3 h-[12px] absolute top-1/2 left-0 -translate-y-1/2"
                    />
                  <span className="w-1/2 font-bold">Wed</span>
                  <span className="w-1/2">9:00am - 5:00pm</span>
                </li>
                <li className="flex my-2 pl-5 relative">
                  <FontAwesomeIcon
                      icon="chevron-right"
                      className="w-3 h-[12px] absolute top-1/2 left-0 -translate-y-1/2"
                    />
                  <span className="w-1/2 font-bold">Thurs</span>
                  <span className="w-1/2">9:00am - 5:00pm</span>
                </li>
                <li className="flex my-2 pl-5 relative">
                  <FontAwesomeIcon
                      icon="chevron-right"
                      className="w-3 h-[12px] absolute top-1/2 left-0 -translate-y-1/2"
                    />
                  <span className="w-1/2 font-bold">Fri</span>
                  <span className="w-1/2">9:00am - 5:00pm</span>
                </li>
                <li className="flex my-2 pl-5 relative">
                  <FontAwesomeIcon
                      icon="chevron-right"
                      className="w-3 h-[12px] absolute top-1/2 left-0 -translate-y-1/2"
                    />
                  <span className="w-1/2 font-bold">Sat - Sun</span>
                  <span className="w-1/2">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-main py-7">
        <div className="container">
          <div className="w-1/2">
            <p className="text-white text-sm leading-6">
              © Copyrights Lawyero 2019. All Rights Reserved.
            </p>
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
