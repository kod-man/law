import PrimaryHeadline from "@/components/global/primary-headline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AttorneyPAList, attorneyEducaton } from "@/lib/data";
import React from "react";
import { splitHeadline } from "@/lib/utilFunctons";
import LeftIconBox from "@/components/shared/LeftIconBox";

const BackgroundAndPA = () => {
  return (
    <div className="overflow-hidden">
      <div className="container">
        <div className="flex">
          <div className="basis-2/5 pt-24 pb-16 pl-12 pr-14 relative before:z-[-1] before:top-0 before:absolute before:bg-grey before:content-[''] before:h-full before:w-[50vw] before:right-0">
            <PrimaryHeadline
              text="Attorney Background"
              additionalClass="primary-headline-left text-[32px]"
              headlineType="h3"
            />

            {attorneyEducaton.map((item, index) => (
              <div className="mb-8" key={index}>
                <h3 className="text-2xl font-bold mb-3 text-[#333]">
                  {splitHeadline(item.title)}
                </h3>
                <ol className="list-[square] pl-5">
                  {item.details.map((innerItem) => (
                    <li
                      className="text-base text-[#333] mb-3"
                      key={innerItem.id}
                    >
                      {innerItem.text}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
          <div className="basis-3/5 pt-24 pb-16 pl-12 pr-11 relative before:z-[-1] before:top-0 before:absolute before:bg-white before:content-[''] before:h-full before:w-[80vw] before:left-0">
            <PrimaryHeadline
              text="Practice Areas"
              additionalClass="primary-headline-left text-[32px]"
              headlineType="h3"
            />
            {AttorneyPAList.map((item) => (
              <React.Fragment key={item.id}>
                <LeftIconBox
                  iconName={item.iconName}
                  headline={item.headline}
                  content={item.content}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundAndPA;
