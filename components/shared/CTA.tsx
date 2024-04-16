import React from "react";
import ButtonCustom from "../global/button";
import Link from "next/link";
import Image from "next/image";
import homeconsultationcall from "@/public/assets/home-request-consultation.jpg";

interface CTAProps {
  bgClass?: string;
  headline: string;
  buttonLink: string;
  buttonText: string;
  ctaType: string;
  buttonType?: string;
}

const CTA = ({
  bgClass,
  headline,
  buttonLink,
  buttonText,
  ctaType,
  buttonType,
}: CTAProps) => {
  let CTAWithImage;

  ctaType == "withBg" &&
    (CTAWithImage = (
      <div className={`${bgClass ? bgClass : "bg-background"} py-6`}>
        <div className="container">
          <div className="flex lg:flex-nowrap sm:flex-wrap items-center">
            <div className="lg:basis-1/2 sm:basis-full">
              <h3 className="text-xl lg:text-left sm:text-center text-white">{headline}</h3>
            </div>
            <div className="lg:basis-1/2 sm:basis-full lg:text-right sm:text-center lg:mt-0 sm:mt-7">
              <ButtonCustom
                href={buttonLink}
                text={buttonText}
                buttonType={`${buttonType ? buttonType : "secondary"}`}
              />
            </div>
          </div>
        </div>
      </div>
    ));

  ctaType == "withImage" &&
    (CTAWithImage = (
      <div className="bg-black py-20 relative overflow-hidden before:bg-[#1a2431] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[''] before:opacity-70 before:z-[2]">
        <Image
          src={homeconsultationcall}
          alt="Home Consultation Call"
          fill={true}
          className="object-cover"
        />
        <div className="container relative z-[3] text-center">
          <h2 className="text-[40px] text-white font-bold lg:px-14 sm:px-0 text-center mb-9 inline-block leading-10">
            {headline}
          </h2>
          <Link
            className="border-[3px] border-white text-base font-bold text-white px-3 py-4 inline-block"
            href={buttonLink}
          >
            {buttonText}
          </Link>
        </div>
      </div>
    ));

  return CTAWithImage;
};

export default CTA;
