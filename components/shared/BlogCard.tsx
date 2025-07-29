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
    <div className="group flex flex-col h-full bg-white shadow-lg rounded-none">
      <div className="overflow-hidden">
        <Image
          src={imageURL}
          alt="Home Blog Post"
          className="w-full h-60 object-cover scale-110 transition-transform duration-500 ease-in-out group-hover:scale-100"
        />
      </div>

      <div className="flex flex-col justify-between flex-grow p-6">
        <div>
          <span className="mb-2 inline-block text-sm text-primary-main">
            {formatDate(date)}
          </span>
          <h3 className="mb-4">
            <Link
              href={linkHref}
              className="inline-block cursor-pointer text-lg font-semibold text-background hover:text-primary-main"
            >
              {title}
            </Link>
          </h3>
        </div>

        <div className="flex justify-end mt-auto">
          <Link
            href={linkHref}
            className="text-xs font-medium text-white bg-primary-main hover:bg-primary-dark transition px-3 py-1"
          >
            Devamını Oku
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
