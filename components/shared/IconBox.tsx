"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";

interface propTypes {
  iconName: React.ReactNode;
  headline: string;
  content: string;
  type: string | undefined;
}

const IconBox = ({ iconName, headline, content, type }: propTypes) => {
  useGSAP(() => {
    gsap.to(".box", {
      opacity: 1,
      duration: 1,
      stagger: 0.3,
      y: 0,
    });
  });

  return (
    <div
      className={`lg:basis-1/3 sm:basis-full ${type} px-10 pt-10 pb-8 box opacity-0 translate-y-10`}
    >
      {iconName}
      <h3 className="text-2xl font-bold mt-5 mb-3 text-black">{headline}</h3>
      <p className="text-base">{content}</p>
    </div>
  );
};

export default IconBox;
