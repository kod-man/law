import React from "react";

interface StatsCounterIconBoxProps {
  iconName: React.ReactNode;
  amountPreText: string;
  amountPostText: string;
  text: string;
}

const StatsCounterIconBox = ({ iconName, text }: StatsCounterIconBoxProps) => {
  return (
    <div className="flex items-center sm:basis-full sm:justify-start md:justify-start">
      {iconName}
      <h3 className="mb-3 mt-5 pl-8 text-3xl font-bold text-white md:mb-5">
        {text}
      </h3>
    </div>
  );
};

export default StatsCounterIconBox;
