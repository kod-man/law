import { blogPosts } from "@/lib/data";
import BlogCard from "../shared/BlogCard";
import ButtonCustom from "../global/button";
import PrimaryHeadline from "../global/primary-headline";

const BlogPosts = () => {
  return (
    <>
      <div className="relative bg-grey sm:pt-20 sm:pb-20 pt-14 pb-14">
        <div className="container">
          <PrimaryHeadline text="News & Insights" />
          <div className="grid grid-rows-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
            {blogPosts.map((item) => (
              <BlogCard
                key={`blog${item.id}`}
                imageURL={item.featuredImage.node.mediaItem}
                date={item.date}
                linkHref={item.linkHref}
                title={item.title}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <ButtonCustom href="#" text="Read More Posts" buttonType="dark" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPosts;
