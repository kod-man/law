import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface BlogCardProps {
  imageURL: StaticImageData;
  date: string;
  linkHref: string;
  title: string;
}

const BlogCard = ({ imageURL, date, linkHref, title }: BlogCardProps) => {
  return (
    <div className="basis-1/3 group pr-2 mb-12">
      <div className="overflow-hidden">
        <Image
          src={imageURL}
          alt="Home BLog Post"
          className="transition-transform scale-[1.1] duration-500 ease-in-out group-hover:scale-[1]"
        />
      </div>
      <div className="p-5 bg-white">
        <span className="text-sm text-primary-main mb-4 inline-block">
          {date}
        </span>
        <h3>
          <Link
            href={linkHref}
            className="inline-block text-base text-background font-semibold cursor-pointer hover:text-primary-main"
          >
            {title}
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default BlogCard;
