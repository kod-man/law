import { blogPosts } from "@/lib/data";
import BlogCard from "../shared/BlogCard";
import ButtonCustom from "../global/button";
import PrimaryHeadline from "../global/primary-headline";

const BlogPosts = () => {
  return (
    <>
      <div className="relative bg-grey py-14 sm:py-20">
        <div className="container">
          <PrimaryHeadline text="Makaleler" />
          <div className="grid grid-rows-2 gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
          <div className="mt-12 text-center">
            <ButtonCustom href="#" text="Tüm Makaleler" buttonType="dark" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPosts;
