import { blogCategories, blogPosts, blogTags } from "@/lib/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import PrimaryHeadline from "../global/primary-headline";
import { Input } from "../ui/input";

const Sidebar = () => {
  return (
    <div className="basis-[30%]">
      <div className="relative">
        <FontAwesomeIcon
          icon="search"
          className="w-5 text-background absolute right-4 top-1/2 -translate-y-1/2"
        />
        <Input
          type="text"
          placeholder="Search"
          className="w-full h-12 text-[#1a2431] border-2 border-[#e8e6e6] py-4 px-3 bg-white rounded-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>
      <div className="mt-12">
        <PrimaryHeadline
          text="Categories"
          headlineType="h3"
          additionalClass="text-[32px] primary-headline-left"
        />
        <ul>
          {blogCategories.map((item) => (
            <li
              className="py-4 pl-5 relative border-b-[1px] border-[#313131]"
              key={item.id}
            >
              <Link
                href={`/blog/category/${item.id}`}
                className="text-base leading-6 text-[#313131] hover:text-primary-main"
              >
                <FontAwesomeIcon
                  icon="chevron-right"
                  className="w-3 h-[15px] absolute top-1/2 left-0 translate-y-[-50%] font-bold"
                />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <PrimaryHeadline
          text="Recent Posts"
          headlineType="h3"
          additionalClass="text-[32px] primary-headline-left text-background"
          formatTwoColor
        />
        <ul>
          {blogPosts.slice(0, 5).map((item) => (
            <li
              className="py-4 pl-5 relative border-b-[1px] border-[#313131]"
              key={item.id}
            >
              <Link
                href="#"
                className="text-base leading-6 text-[#313131] hover:text-primary-main"
              >
                <FontAwesomeIcon
                  icon="chevron-right"
                  className="w-3 h-[15px] absolute top-7 left-0 translate-y-[-50%] font-bold"
                />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <PrimaryHeadline
          text="Recent Tags"
          headlineType="h3"
          additionalClass="text-[32px] primary-headline-left text-background"
          formatTwoColor
        />
        <ul className="flex">
          {blogTags.map((item) => (
            <li key={item.id}>
              <Link
                className="inline-block mr-2 hover:bg-white hover:text-primary-main text-[19px] border-2 border-primary-main font-bold bg-primary-main text-white py-[14px] px-4"
                href={`/blog/tag/${item.id}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-12">
        <PrimaryHeadline
          text="About Lawyero"
          headlineType="h3"
          additionalClass="text-[32px] primary-headline-left text-background"
          formatTwoColor
        />
        <p className="text-base text-[#333]">
          We never take that trust for granted. We learn our clients’ needs and
          expectations; we communicate openly; we follow up frequently; we
          respond timely; and we are always available. In short, we develop a
          relationship with our clients. Our clients’ goals become our goals. We
          provide aggressive and professional legal representation to every
          client in order to ensure his or her issue is resolved in the best
          possible manner.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
