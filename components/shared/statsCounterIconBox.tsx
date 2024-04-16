import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface StatsCounterIconBoxProps {
  iconName: IconProp;
  amountPreText: string;
  amount: string;
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
  return (
    <div className="flex items-center md:basis-1/2 sm:basis-full sm:justify-center md:justify-start">
      <FontAwesomeIcon
        icon={iconName}
        className="w-[75px] h-[75px] border-2 p-2 border-white text-white"
      />
      <h3 className="text-3xl font-bold mt-5 mb-3 md:mb-5 text-white pl-8">
        <span className="block">
          {amountPreText ? amountPreText : ""}
          {amount}
          {amountPostText ? amountPostText : ""}
        </span>{" "}
        {text}
      </h3>
    </div>
  );
};

export default StatsCounterIconBox;
