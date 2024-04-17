import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import Image from "next/image";
import { formatDate } from "@/lib/utilFunctons";
import ButtonCustom from "../global/button";

const BlogListTwoColumns = ({ listStyle }: { listStyle?: string }) => {
  return (
    <>
      {blogPosts.map((item, index) => (
        <div
          className="mb-12 pb-12 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[150px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1] flex lg:flex-nowrap flex-wrap"
          key={item.id}
        >
          <div   
            className={`lg:basis-1/2 basis-full ${
              listStyle === "chess" && index % 2 == 1
                ? "lg:pl-8 pl-0 lg:pb-0 pb-7 order-" + (index % 2)
                : "pl-0"
            }`}
          >
            <Image src={item.featuredImage.node.mediaItem} alt="Blog Post" />
          </div>
          <div
            className={`lg:basis-1/2 basis-full ${
              listStyle === "chess" && index % 2 == 1 ? "pl-0" : "lg:pl-8 pl-0 lg:pt-0 pt-7"
            }`}
          >
            <div className=" bg-white">
              <h3 className="mb-6">
                <Link
                  href={item.linkHref}
                  className="inline-block sm:text-[32px] text-[25px] leading-9 text-background font-bold cursor-pointer hover:text-primary-main capitalize"
                >
                  {item.title}
                </Link>
              </h3>
              <ul className="flex pb-6  sm:flex-nowrap flex-wrap">
                <li className="flex items-center mr-5 sm:basis-auto basis-full sm:mb-0 mb-4">
                  <FontAwesomeIcon icon="calendar-day" className="w-4" />
                  <Link
                    className="text-base text-[#313131] hover:text-primary-main pl-2"
                    href="#"
                  >
                    {formatDate(item.date)}
                  </Link>
                </li>
                <li className="flex items-center  mr-5 sm:basis-auto basis-full sm:mb-0 mb-4">
                  <FontAwesomeIcon icon="user" className="w-4" />
                  <Link
                    className="text-base text-[#313131] hover:text-primary-main pl-2"
                    href="mailto:adminlawyerowpadmin"
                  >
                    {item.author}
                  </Link>
                </li>
                <li className="text-base text-[#313131] flex items-center mr-5 sm:basis-auto basis-full">
                  <FontAwesomeIcon icon="comment" className="w-4" />
                  <span className="pl-2">{item.comments} Comments</span>
                </li>
              </ul>
              <p className="text-base text-[#333]">{item.excerpt}</p>
              <div className="text-right pt-6">
                <ButtonCustom
                  href={item.linkHref}
                  buttonType="dark"
                  text="Read More"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      <ul className="flex justify-center w-full">
        <li className="group h-12 w-12 border-2 border-background bg-white flex justify-center items-center hover:bg-background cursor-pointer mr-3">
          <FontAwesomeIcon
            icon="chevron-left"
            className="w-3 text-background group-hover:text-white"
          />
        </li>
        <li className="group h-12 w-12 border-2 border-background flex justify-center items-center bg-background cursor-pointer text-xl text-background text-white font-bold mr-3">
          1
        </li>
        <li className="group h-12 w-12 border-2 border-background bg-white flex justify-center items-center hover:bg-background cursor-pointer text-xl text-background hover:text-white font-bold  mr-3">
          2
        </li>
        <li className="group h-12 w-12 border-2 border-background bg-white flex justify-center items-center hover:bg-background cursor-pointer  mr-3">
          <FontAwesomeIcon
            icon="chevron-right"
            className="w-3 text-background group-hover:text-white"
          />
        </li>
      </ul>
    </>
  );
};

export default BlogListTwoColumns;
