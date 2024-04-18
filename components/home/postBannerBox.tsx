import { BannerIconBoxes } from "@/lib/dataWithJSX";
import IconBox from "../shared/IconBox";

const PostBannerBox = () => {
  return (
    <div className="container lg:px-8 px-0 lg:-mt-36 md:mt-0 relative z-[3]">
      <div className="flex lg:flex-nowrap flex-wrap">
        {BannerIconBoxes.map((item, index) => {
          return (
            <IconBox
              key={`box${item.id}`}
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
