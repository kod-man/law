import Image from "next/image";
import LeftIconBox from "../shared/LeftIconBox";
import { HomepageFeatures } from "@/lib/data";
import homeserviceimage from "@/public/assets/home-service-image.jpg";

const Features = () => {
  return (
    <>
      <div className="flex gap-12 bg-grey lg:flex-nowrap sm:flex-wrap">
        <div className="lg:basis-1/2 sm:basis-full relative lg:min-h-[100%] md:min-h-80">
          <Image
            src={homeserviceimage}
            alt="Home Service Image"
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="lg:basis-1/2 sm:basis-full pt-20 pb-4 lg:pl-8 md:pl-8 lg:order-2 md:-order-1">
          {HomepageFeatures.map((item) => (
            <LeftIconBox
              key={item.id}
              iconName={item.iconName}
              headline={item.headline}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;
