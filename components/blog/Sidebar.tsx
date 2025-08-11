import { blogPosts } from "@/lib/data";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import PrimaryHeadline from "../global/primary-headline";

const Sidebar = () => {
  return (
    <div className="basis-full pt-20 lg:basis-[30%] lg:pt-0">
      <div className="mt-12">
        <PrimaryHeadline
          text="Güncel Makaleler"
          headlineType="h3"
          additionalClass="text-[32px] primary-headline-left text-background"
          formatTwoColor
        />
        <ul>
          {blogPosts.slice(0, 5).map((item) => (
            <li
              className="relative border-b border-[#313131] py-4 pl-6"
              key={item.id}
            >
              <Link
                href="#"
                className="text-base leading-6 text-[#313131] hover:text-primary-main"
              >
                <ChevronRight
                  size={20}
                  className="absolute left-0 top-[30px] -translate-y-1/2 font-bold"
                />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
