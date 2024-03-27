import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface propTypes {
  iconName: IconProp;
  headline: string;
  content: string;
  type: string | undefined;
}

const IconBox = ({ iconName, headline, content, type }: propTypes) => {
  return (
    <div className={`basis-1/3 ${type} px-10 pt-10 pb-8`}>
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
