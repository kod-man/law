import PrimaryHeadline from "@/components/global/primary-headline";
import paimage1 from "@/public/assets/pa-img-1.jpg";
import Image from "next/image";
import React from "react";

interface IPAConcent {
  text: () => React.JSX.Element;
}

const PAContent = ({ text }: IPAConcent) => {
  return (
    <div className="container py-16 lg:py-24">
      <div className="flex flex-wrap gap-0 lg:flex-nowrap lg:gap-10">
        <div className="basis-full lg:basis-4/6">
          <PrimaryHeadline
            text="Overview"
            additionalClass="primary-headline-left"
          />
          {text()}
        </div>
        <div className="basis-full pt-7 lg:basis-1/3 lg:pt-0">
          <Image
            src={paimage1}
            alt="Practice Area Image"
            className="w-full rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default PAContent;
