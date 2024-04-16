import { BannerIconBoxes } from "@/lib/data";
import IconBox from "../shared/IconBox";

const postBannerBox = () => {
  return (
    <div className="container lg:-mt-36 md:mt-0 relative z-[3]">
      <div className="flex lg:flex-nowrap sm:flex-wrap">
        {BannerIconBoxes.map((item) => {
          return (
            <IconBox
              key={item.id}
              iconName={item.iconName}
              content={item.content}
              headline={item.headline}
              type={item.type}
            />
          );
        })}
      </div>
    </div>
  );
};

export default postBannerBox;
