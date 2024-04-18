import { StatsWithIcon } from "@/lib/data";
import Image from "next/image";
import StatsCounterIconBox from "../shared/statsCounterIconBox";
import library from "@/public/assets/library-home.jpg";
import libraryicon from "@/public/assets/library-icon.svg";

const IconsWithCounters = () => {
  return (
    <div className="bg-black sm:py-20 py-16 relative overflow-hidden before:bg-[#1a2431] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[''] before:opacity-70 before:z-[2] countersLawyero">
      <Image src={library} alt="library" fill={true} className="object-cover" />
      <div className="container relative z-[3]">
        <div className="flex justify-between lg:flex-nowrap flex-wrap">
          {StatsWithIcon.map((item) => {
            return (
              <StatsCounterIconBox
                key={`statbox${item.id}`}
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

      <Image
        src={libraryicon}
        alt="library-icon"
        className="absolute bottom-0 z-[3] w-full"
      />
    </div>
  );
};

export default IconsWithCounters;
