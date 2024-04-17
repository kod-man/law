"use client";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

interface propTypes {
  iconName: IconProp;
  headline: string;
  content: string;
  type: string | undefined;
}

const IconBox = ({ iconName, headline, content, type }: propTypes) => {
  useGSAP(() => {
    gsap.to(".box", {
      opacity: 1,
      duration: 1,
      delay: 0.5,
      stagger: 0.3,
    });
  });

  return (
    <div
      className={`lg:basis-1/3 sm:basis-full ${type} px-10 pt-10 pb-8 box opacity-0`}
    >
      <FontAwesomeIcon
        icon={iconName}
        className="w-14 border-2 p-3 border-primary-main text-primary-main"
      />
      <h3 className="text-2xl font-bold mt-5 mb-3 text-black">{headline}</h3>
      <p className="text-base">{content}</p>
    </div>
  );
};

export default IconBox;
