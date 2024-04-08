import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import library from "@/public/assets/library-home.jpg";
import libraryicon from "@/public/assets/library-icon.svg";
import StatsCounterIconBox from "@/components/shared/statsCounterIconBox";
import { StatsWithIconTeam } from "@/lib/data";

const Stats = () => {
  return (
    <div className="bg-black pt-28 pb-20 relative overflow-hidden before:bg-[#1a2431] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[''] before:opacity-70 before:z-[2]">
      <Image
        src={libraryicon}
        alt="library-icon"
        className="absolute top-0 z-[3] w-full rotate-180"
      />
      <Image src={library} alt="library" fill={true} className="object-cover" />
      <div className="container relative z-[3]">
        <div className="flex justify-between">
          {StatsWithIconTeam.map((item) => {
            return (
              <StatsCounterIconBox
                key={item.id}
                iconName={item.iconName}
                amount={item.amount}
                amountPreText={item.amountPreText}
                amountPostText={item.amountPostText}
                text={item.text}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
