import Image from "next/image";
import LeftIconBox from "../shared/LeftIconBox";
import { HomepageFeatures } from "@/lib/data";
import homeserviceimage from "@/public/assets/home-service-image.jpg";

const Features = () => {
  return (
    <>
      <div className="flex lg:gap-12 gap-4 bg-grey lg:flex-nowrap flex-wrap">
        <div className="lg:basis-1/2 basis-full relative lg:min-h-[100%] min-h-80">
          <Image
            src={homeserviceimage}
            alt="Home Service Image"
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="lg:basis-1/2 basis-full pt-20 md:pb-4 lg:pl-8 pl-8 lg:order-2 -order-1">
          {HomepageFeatures.map((item) => (
            <LeftIconBox
              key={`features${item.id}`}
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
