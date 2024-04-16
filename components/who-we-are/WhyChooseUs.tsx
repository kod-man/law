import whowecontent from "@/public/assets/who-we-content.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import PrimaryHeadline from "../global/primary-headline";
import { WhyChooseUsData } from "@/lib/data";

const WhyChooseUs = () => {
  return (
    <div className="flex bg-lightgrey lg:flex-nowrap flex-wrap">
      <div className="basis-full lg:basis-1/2 sm:basis-full relative lg:min-h-[100%] sm:min-h-96">
        <Image
          src={whowecontent}
          alt="Who We Content"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="lg:pb-16 pb-8 lg:pl-11 lg:basis-1/2 sm:basis-full lg:pt-24 pt-14 md:pb-4 sm:pl-8 lg:order-2 sm:-order-1">
        <PrimaryHeadline
          text="Why Choose Us"
          additionalClass="primary-headline-left"
        />
        {WhyChooseUsData.map((item) => (
          <div className="flex mb-8 lg:pr-20 pr-8" key={item.id}>
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
    </div>
  );
};

export default WhyChooseUs;
