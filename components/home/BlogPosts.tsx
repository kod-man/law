import { blogPosts } from "@/lib/data";
import ButtonCustom from "../global/button";
import PrimaryHeadline from "../global/primary-headline";
import BlogCard from "../shared/BlogCard";

const BlogPosts = () => {
  return (
    <div className="relative bg-grey sm:py-20">
      <div className="mx-auto max-w-screen-2xl px-4 border-2">
        <PrimaryHeadline text="Makaleler" />
        <div className="grid gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
  );
};

export default BlogPosts;
