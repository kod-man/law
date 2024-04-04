import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import whowecontent2 from "@/public/assets/who-we-content-2.jpg";
import Image from "next/image";
import PrimaryHeadline from "../global/primary-headline";
import { WeAreBestData } from "@/lib/data";

const WeAreBest = () => {
  return (
    <div className="flex bg-lightgrey">
      <div className="basis-1/2 pt-24 pb-16 px-11">
        <PrimaryHeadline
          text="We Are Best In Business"
          additionalClass="primary-headline-left"
        />
        {WeAreBestData.map((item) => (
          <div className="flex mb-8 pr-20" key={item.id}>
            <div className="flex-shrink-0 pr-7">
              <FontAwesomeIcon
                icon={item.iconName}
                className="w-14 h-14 border-2 p-3 border-background text-background"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-black">
                {item.headline}
              </h3>
              <p className="text-base">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="basis-1/2 relative">
        <Image
          src={whowecontent2}
          alt="Who We Content"
          fill={true}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default WeAreBest;
