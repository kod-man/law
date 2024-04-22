"use client";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { useRef, useState } from "react";
import { formatCurrency } from "@/lib/utilFunctons";

interface StatsCounterIconBoxProps {
  iconName: IconProp;
  amountPreText: string;
  amount: number;
  amountPostText: string;
  text: string;
}

const StatsCounterIconBox = ({
  iconName,
  amountPreText,
  amount,
  amountPostText,
  text,
}: StatsCounterIconBoxProps) => {
  const [endAmount, setAmount] = useState(amount);

  const amountRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    gsap.to(amountRef.current, {
      duration: 2,
      innerHTML: endAmount,
      roundProps: "innerHTML",
      scrollTrigger: {
        trigger: amountRef.current,
        start: "top 70%",
      },
      onUpdate: () => {
        if (amountRef.current) {
          const currentValue = parseFloat(
            amountRef.current.innerHTML.replace(/[^0-9.-]+/g, "")
          );
          amountRef.current.innerHTML = formatCurrency(currentValue);
        }
      },

      onComplete: () => {
        if (amountRef.current) {
          amountRef.current.innerHTML = formatCurrency(endAmount);
        }
      },
    });
  });

  return (
    <div className="flex items-center sm:basis-full sm:justify-start md:justify-start">
      <FontAwesomeIcon
        icon={iconName}
        className="w-[75px] h-[75px] border-2 p-2 border-white text-white"
      />
      <h3 className="text-3xl font-bold mt-5 mb-3 md:mb-5 text-white pl-8">
        <span className="block">
          {amountPreText ? amountPreText : ""}
          <span ref={amountRef}>0</span>
          {amountPostText ? amountPostText : ""}
        </span>{" "}
        {text}
      </h3>
    </div>
  );
};

export default StatsCounterIconBox;
