import homeblog1 from "@/public/assets/home-blog-1.jpg";
import homeblog2 from "@/public/assets/home-blog-2.jpg";
import homeblog4 from "@/public/assets/home-blog-4.jpg";
import homeblog3 from "@/public/assets/home-blog-3.jpg";
import homeblog5 from "@/public/assets/home-blog-5.jpg";
import homeblog6 from "@/public/assets/home-blog-6.jpg";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SecondaryButtonCustom from "@/components/global/secondary-button";
import BlogGrid from "@/components/blog/BlogGrid";
import InnerBanner from "@/components/global/inner-banner";

const Page = () => {
  return (
    <>
      <InnerBanner text="Blog Grid" />
      <div className="relative py-[90px]">
        <div className="container">
          <div className="grid grid-cols-2 gap-7">
            <BlogGrid />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
