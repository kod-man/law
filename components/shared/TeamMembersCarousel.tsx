import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import teammember1 from "@/public/assets/team-member-1.jpg";
import teammember2 from "@/public/assets/team-member-2.jpg";
import teammember3 from "@/public/assets/team-member-3.jpg";
import teammember4 from "@/public/assets/team-member-4.jpg";
import teammember5 from "@/public/assets/team-member-5.jpg";
import teammemberbefore from "@/public/assets/team-meber-before.svg";




export function TeamMembersCarousel() {
  return (
    <Carousel>
      <CarouselContent className="pt-3">
        <CarouselItem className="basis-1/4">
            <div className="relative  before:absolute before:bg-black before:opacity-30 before::content-[''] before:h-full before:w-0 before:transition-all before:duration-300 before:ease-in hover:before:w-full before:left-0 before:top-0 cursor-pointer">              
              <Image
                src={teammember1}
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
            <div className="*:text-primary-main *:italic *:text-center px-2 py-4 border-b-2 border-primary-main">
              <h3 className="text-2xl mb-1">Robert Darren</h3>
              <h4 className="text-xs">Bank & Finance lawyer</h4>
            </div>
        </CarouselItem>
        <CarouselItem className="basis-1/4">
          <div className="relative  before:absolute before:bg-black before:opacity-30 before::content-[''] before:h-full before:w-0 before:transition-all before:duration-300 before:ease-in hover:before:w-full before:left-0 before:top-0 cursor-pointer">              
              <Image
                src={teammember2}
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
            <div className="*:text-primary-main *:italic *:text-center px-2 py-4 border-b-2 border-primary-main">
              <h3 className="text-2xl mb-1">Tady Walsh</h3>
              <h4 className="text-xs">Child Custody Lawyer</h4>
            </div>
        </CarouselItem>
        <CarouselItem className="basis-1/4">
            <div className="relative  before:absolute before:bg-black before:opacity-30 before::content-[''] before:h-full before:w-0 before:transition-all before:duration-300 before:ease-in hover:before:w-full before:left-0 before:top-0 cursor-pointer">              
              <Image
                src={teammember3}
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
            <div className="*:text-primary-main *:italic *:text-center px-2 py-4 border-b-2 border-primary-main">
              <h3 className="text-2xl mb-1">Alanna</h3>
              <h4 className="text-xs">Business Lawyer</h4>
            </div>
        </CarouselItem>
        <CarouselItem className="basis-1/4">
            <div className="relative  before:absolute before:bg-black before:opacity-30 before::content-[''] before:h-full before:w-0 before:transition-all before:duration-300 before:ease-in hover:before:w-full before:left-0 before:top-0 cursor-pointer">              
              <Image
                src={teammember4}
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
            <div className="*:text-primary-main *:italic *:text-center px-2 py-4 border-b-2 border-primary-main">
              <h3 className="text-2xl mb-1">Frank Moses</h3>
              <h4 className="text-xs">Injury Expert Attorney</h4>
            </div>
        </CarouselItem>
        <CarouselItem className="basis-1/4">
            <div className="relative  before:absolute before:bg-black before:opacity-30 before::content-[''] before:h-full before:w-0 before:transition-all before:duration-300 before:ease-in hover:before:w-full before:left-0 before:top-0 cursor-pointer">              
                <Image
                  src={teammember5}
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
            <div className="*:text-primary-main *:italic *:text-center px-2 py-4 border-b-2 border-primary-main">
              <h3 className="text-2xl mb-1">John Doe</h3>
              <h4 className="text-xs">International Law Lawyer</h4>
            </div>
        </CarouselItem>
      </CarouselContent>
        <div className="w-full flex justify-center">
          <div className="team-member-arrow absolute w-28 h-12 pt-14 mt-14">
            <CarouselPrevious className="left-0 border-2 border-black opacity-100 disabled:opacity-100 rounded-none h-12 w-12 text-black  hover:bg-white bg-white"  />
            <CarouselNext className="right-0 border-2 border-black opacity-100 disabled:opacity-100 rounded-none h-12 w-12 text-black  hover:bg-white bg-white" />
          </div>
        </div>
    </Carousel>
    
    
  );
}
