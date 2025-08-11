import BlogGrid from "@/components/blog/BlogGrid";
import InnerBanner from "@/components/global/inner-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Grid - Lawyero",
  description: "Your one stop solution for legal matters",
};

const Page = () => {
  return (
    <>
      <InnerBanner text="Makaleler" />
      <div className="relative py-[90px]">
        <div className="container">
          <div className="">
            <BlogGrid />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
