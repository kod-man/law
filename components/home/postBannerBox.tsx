import { BannerIconBoxes } from "@/lib/data";
import IconBox from "../shared/IconBox";
import { useRef } from "react";

const PostBannerBox = () => {
  return (
    <div className="container lg:px-8 px-0 lg:-mt-36 md:mt-0 relative z-[3]">
      <div className="flex lg:flex-nowrap flex-wrap">
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

export default PostBannerBox;
