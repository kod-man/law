import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import paimagetopcontent from "@/public/assets/single-pa-top-content.jpg";
import PrimaryHeadline from "@/components/global/primary-headline";

const listData: string[] = [
  "Divorce",
  "Financial Matters",
  "Agreements",
  "Spouse Abuse",
  "Childern",
  "Martial Matters",
];

const PABottomContent = () => {
  return (
    <div className="flex gap-8">
      <div className="basis-1/2 relative">
        <Image
          src={paimagetopcontent}
          alt="Single Practice Area Top"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="basis-1/2 pt-24 pb-16 pl-11 pr-20">
        <PrimaryHeadline
          text="History In Family Law Cases"
          additionalClass="primary-headline-left"
        />
        <p className="text-base leading-6 text-[#333] mb-5">
          For almost 20 years, Lawyero family law attorneys have helped our
          clients with the following matters
        </p>
        <ul className="pb-8">
          {listData.map((item, index) => (
            <li
              key={index}
              className="text-base leading-6 text-[#313131] py-4 pl-5 relative border-b-[1px] border-[#313131]"
            >
              <FontAwesomeIcon
                icon="chevron-right"
                className="w-3 h-[15px] absolute top-1/2 left-0 translate-y-[-50%]"
              />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-base leading-6 text-[#333] font-bold mb-5">
          Contact us today for an initial case evaluation. You will speak with
          one of our attorneys to discuss your situation. You will receive
          information concerning your particular matter and you can evaluate
          whether our attorney fits your needs and comfort level. You can decide
          whether our attorney is right for you. Contact us today at
          1911-462-242.
        </p>
      </div>
    </div>
  );
};

export default PABottomContent;
