import { blogPosts } from "@/lib/data";
import { formatDate } from "@/lib/utilFunctons";
import { Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ButtonCustom from "../global/button";

const BlogGrid = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {blogPosts.map((item) => (
        <div
          key={item.id}
          className="flex flex-col size-full overflow-hidden rounded-xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
        >
          {/* Görsel */}
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={item.featuredImage.node.mediaItem}
              alt={item.title}
              fill
              className="object-fill"
            />
          </div>

          {/* İçerik */}
          <div className="flex flex-col p-5 flex-grow justify-between">
            <div className="flex-grow">
              <h3 className="mb-3 text-lg font-bold capitalize text-background hover:text-primary-main sm:text-xl">
                <Link href={item.linkHref}>{item.title}</Link>
              </h3>

              {/* Meta */}
              <ul className="mb-3 flex flex-wrap gap-4 text-xs text-[#313131]">
                <li className="flex items-center gap-1">
                  <Calendar className="w-4" />
                  <span>{formatDate(item.date)}</span>
                </li>
                <li className="flex items-center gap-1">
                  <User className="w-4" />
                  <Link href={`mailto:${item.author}`}>{item.author}</Link>
                </li>
              </ul>

              {/* Kısa excerpt */}
              <p className="mb-4 line-clamp-3 text-sm text-[#555]">
                {item.excerpt}
              </p>
            </div>

            {/* Buton */}
            <ButtonCustom
              href={item.linkHref}
              buttonType="dark"
              text="Read More"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogGrid;
