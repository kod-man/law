import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import testimonialimg1 from "@/public/assets/home-testimonial-img-1.jpeg";
import testimonialimg2 from "@/public/assets/home-testimonial-img-2.jpeg";
import testimonialimg3 from "@/public/assets/home-testimonial-img-3.jpeg";




export function TeamMembersCarousel() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        <CarouselItem className="">
          <div className="*:text-white w-[850px] m-auto">
            <Image
            src={testimonialimg1}
            alt="Testimonial Img"
            className="w-24 h-24 rounded-full m-auto border-4 border-white"
          />
          <h3 className="text-[32px] text-center font-bold my-4">Opus Internatational Ltd</h3>
          <p className="italic  text-left text-base mb-[18px]">When we needed the legal assistance Lawyero came to our rescue. They took our case and get it solved in no time. Now when ever we need any assistance for legal matters we look no further then the lawyers at Lawyero. Thanks team Lawyero you are the best!</p>
          <h4 className="font-bold text-base text-center">CEO Operations</h4>
          <h4 className="text-base text-center">Jessica Berrera</h4>
          </div>
        </CarouselItem>
        <CarouselItem className="">
          <div className="*:text-white w-[850px] m-auto">
            <Image
              src={testimonialimg2}
              alt="Testimonial Img"
              className="w-24 h-24 rounded-full m-auto border-4 border-white"
            />
            <h3 className="text-[32px] text-center font-bold my-4">Parag States</h3>
            <p className="italic  text-left  mb-[18px] text-base">Our business was stuck in one of complex legal issue and one of our clients suggest team Lawyero. Now they are our official legal team which help us in numerous cases. Recommended to all!</p>
            <h4 className="font-bold text-base text-center">Founder</h4>
            <h4 className="text-base text-center">JohnKerry</h4>
          </div>   
        </CarouselItem>
        <CarouselItem className="">
          <div className="*:text-white w-[850px] m-auto">
            <Image
              src={testimonialimg3}
              alt="Testimonial Img"
              className="w-24 h-24 rounded-full m-auto border-4 border-white"
            />
            <h3 className="text-[32px] text-center font-bold my-4">Daily Times Network
            </h3>
            <p className="italic text-left mb-[18px] text-base">Team Lawyero is the best. Their team is awesome and when we visited their office their team welcomed us and make us feel really at home. They not only took our case but also helped us understand the complexity of the case. They fought for us and get the desired results soon. Thank you team lawyero! You are AWESOME.</p>
            <h4 className="font-bold text-base text-center">Assistant Finance Manager</h4>
            <h4 className="text-base text-center">Grant Josh</h4>
          </div>
        </CarouselItem>
        {/* {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <span className="text-4xl font-semibold">{index + 1}</span>
            </div>
          </CarouselItem>
        ))} */}
      </CarouselContent>
      <CarouselPrevious className="left-0 border-2 border-white opacity-100 disabled:opacity-100 rounded-none h-12 w-12 text-white bg-transparent" />
      <CarouselNext className="right-0 border-2 border-white opacity-100 disabled:opacity-100 rounded-none h-12 w-12 text-white bg-transparent" />
    </Carousel>
  );
}
