import Image from "next/image";
import LeftIconBox from "../shared/LeftIconBox";
import { HomepageFeatures } from "@/lib/data";
import homeserviceimage from "@/public/assets/home-service-image.jpg";

const Features = () => {
  return (
    <>
      <div className="flex gap-12 bg-grey">
        <div className="basis-1/2 relative">
          <Image
            src={homeserviceimage}
            alt="Home Service Image"
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="basis-1/2 pt-20 pb-4">
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
