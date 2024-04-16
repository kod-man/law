import Image from "next/image";
import LeftIconBox from "../shared/LeftIconBox";
import { HomepageFeatures } from "@/lib/data";
import homeserviceimage from "@/public/assets/home-service-image.jpg";

const Features = () => {
  return (
    <>
      <div className="flex lg:gap-12 sm:gap-4 bg-grey lg:flex-nowrap sm:flex-wrap">
        <div className="lg:basis-1/2 sm:basis-full relative lg:min-h-[100%] sm:min-h-80">
          <Image
            src={homeserviceimage}
            alt="Home Service Image"
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="lg:basis-1/2 sm:basis-full pt-20 md:pb-4 lg:pl-8 sm:pl-8 lg:order-2 sm:-order-1">
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
