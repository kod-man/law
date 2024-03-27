import { BannerIconBoxes } from "@/lib/data";
import IconBox from "../shared/IconBox";

const postBannerBox = () => {
  return (
    <div className="container -mt-36 relative z-[3]">
      <div className="flex">
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
