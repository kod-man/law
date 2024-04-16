import BlogList from "@/components/blog/BlogList";
import Sidebar from "@/components/blog/Sidebar";
import InnerBanner from "@/components/global/inner-banner";

const Page = () => {
  return (
    <>
      <InnerBanner text="Blog With Sidebar" />

      <div className="relative py-[90px]">
        <div className="container">
          <div className="flex sm:flex-wrap lg:flex-nowrap">
            <BlogList layoutClass="lg:basis-[70%] basis-full" />
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
