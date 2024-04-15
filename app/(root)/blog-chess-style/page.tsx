import BlogListTwoColumns from "@/components/blog/BlogListTwoColumns";
import InnerBanner from "@/components/global/inner-banner";

const page = () => {
  return (
    <>
      <InnerBanner text="Blog Chess Style" />
      <div className="relative py-[90px]">
        <div className="container">
          <div className="flex flex-wrap">
            <BlogListTwoColumns listStyle="chess" />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
