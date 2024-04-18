import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import teammemberbefore from "@/public/assets/team-meber-before.svg";
import { TeamMembers } from "@/lib/data";
import Link from "next/link";

export function TeamMembersCarousel({ textColor }: { textColor?: string }) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="pt-3">
        {TeamMembers.map((item) => (
          <CarouselItem
            key={`team${item.id}`}
            className="lg:basis-1/4 md:basis-1/2"
          >
            <Link href={item.href} className="group">
              <div className="relative before:absolute before:bg-black before:opacity-30 before::content-[''] before:h-full before:w-0 before:transition-all before:duration-300 before:ease-in group-hover:before:w-full before:left-0 before:top-0 cursor-pointer">
                <Image
                  src={item.image}
                  alt="Team Member Img"
                  className="w-full"
                />
                <Image
                  src={teammemberbefore}
                  alt="Team Member Before"
                  className="w-11 h-11 absolute left-0 top-0"
                />
                <Image
                  src={teammemberbefore}
                  alt="Team Member Before"
                  className="w-11 h-11 absolute right-0 bottom-0 rotate-[180deg]"
                />
              </div>
              <div
                className={`${
                  textColor ? "*:" + textColor : "*:text-primary-main"
                } *:italic *:text-center px-2 py-4 border-b-2 border-primary-main`}
              >
                <h3 className="text-2xl mb-1">{item.name}</h3>
                <h4 className="text-xs">{item.designation}</h4>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="w-full flex justify-center">
        <div className="team-member-arrow absolute w-28 h-12 pt-14 mt-14">
          <CarouselPrevious className="left-0 border-2 border-black opacity-100 disabled:opacity-100 rounded-none h-12 w-12 text-black  hover:bg-white bg-white" />
          <CarouselNext className="right-0 border-2 border-black opacity-100 disabled:opacity-100 rounded-none h-12 w-12 text-black  hover:bg-white bg-white" />
        </div>
      </div>
    </Carousel>
  );
}
