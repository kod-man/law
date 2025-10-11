import { formatDate } from "@/lib/utilFunctons";
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
    <Link
      href={linkHref}
      className="group flex flex-col h-full bg-white shadow-lg rounded-none cursor-pointer"
    >
      <div className="relative w-full h-72 overflow-hidden">
        <Image
          src={imageURL}
          alt="Home Blog Post"
          fill
          style={{
            width: "100%",
          }}
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col justify-between grow p-6">
        <div>
          <span className="mb-2 inline-block text-sm text-primary-main">
            {formatDate(date)}
          </span>
          <h3 className="mb-4 text-lg font-semibold text-background group-hover:text-primary-main">
            {title}
          </h3>
        </div>

        <div className="flex justify-end mt-auto">
          <span className="text-xs font-medium text-white bg-primary-main group-hover:bg-primary-dark transition px-3 py-1">
            Devamını Oku
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
