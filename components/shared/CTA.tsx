import React from "react";
import ButtonCustom from "../global/button";
import Link from "next/link";
import Image from "next/image";
import homeconsultationcall from "@/public/assets/home-request-consultation.jpg";

interface CTAProps {
  headline: string;
  buttonLink: string;
  buttonText: string;
  ctaType: string;
}

const CTA = ({ headline, buttonLink, buttonText, ctaType }: CTAProps) => {
  let CTAWithImage;

  ctaType == "withBg" &&
    (CTAWithImage = (
      <div className="bg-background py-6">
        <div className="container">
          <div className="flex items-center">
            <div className="basis-1/2">
              <h3 className="text-xl text-white">{headline}</h3>
            </div>
            <div className="basis-1/2 text-right">
              <ButtonCustom
                href={buttonLink}
                text={buttonText}
                buttonType="secondary"
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
          <h2 className="text-[40px] text-white font-bold px-14 text-center mb-9 inline-block leading-10">
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
