import React from "react";

interface LeftIconBoxProps {
  iconName: React.ReactNode;
  headline: string;
  content: string;
}

const LeftIconBox = ({ iconName, headline, content }: LeftIconBoxProps) => {
  return (
    <div className="flex mb-10 lg:pr-20 pr-0">
      <div className="flex-shrink-0 pr-7">{iconName}</div>
      <div>
        <h3 className="text-2xl font-bold mb-2 text-black">{headline}</h3>
        <p className="text-base">{content}</p>
      </div>
    </div>
  );
};

export default LeftIconBox;
