import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface LeftIconBoxProps {
  iconName: IconProp;
  headline: string;
  content: string;
}

const LeftIconBox = ({ iconName, headline, content }: LeftIconBoxProps) => {
  return (
    <div className="flex mb-14 pr-20">
      <div className="flex-shrink-0 pr-7">
        <FontAwesomeIcon
          icon={iconName}
          className="w-14 h-14 border-2 p-3 border-primary-main text-primary-main"
        />
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-2 text-black">{headline}</h3>
        <p className="text-base">{content}</p>
      </div>
    </div>
  );
};

export default LeftIconBox;
