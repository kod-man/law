import Image from "next/image";
import innerbanner from "@/public/assets/inner-page-banner.jpg";

const InnerBanner = ({ text }: any) => {
  return (
    <div className="py-[70px] relative overflow-hidden before:bg-background before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[''] before:opacity-70 before:z-[2]">
      <Image
          src={innerbanner}
          alt="Inner Page Banner"
          fill={true}
          className="object-cover"
        />
        <div className="container relative z-[3]">
          <h1 className="text-[40px] text-white font-bold text-center">{text}</h1>
        </div>
      </div>
  );
};

export default InnerBanner;
