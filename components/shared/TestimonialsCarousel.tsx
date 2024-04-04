import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Testimonials } from "@/lib/data";

export function TestimonialsCarousel() {
  return (
    <Carousel
      className="w-full"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {Testimonials.map((item) => (
          <CarouselItem key={item.id}>
            <div className="*:text-white w-[850px] m-auto">
              <Image
                src={item.image}
                alt="Testimonial Img"
                className="w-24 h-24 rounded-full m-auto border-4 border-white"
              />
              <h3 className="text-[32px] text-center font-bold my-4">
                {item.organization}
              </h3>
              <p className="italic  text-left  mb-[18px] text-base">
                {item.text}
              </p>
              <h4 className="font-bold text-base text-center">
                {item.designation}
              </h4>
              <h4 className="text-base text-center">{item.name}</h4>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 border-2 border-white opacity-100 disabled:opacity-100 rounded-none h-12 w-12 text-white bg-transparent" />
      <CarouselNext className="right-0 border-2 border-white opacity-100 disabled:opacity-100 rounded-none h-12 w-12 text-white bg-transparent" />
    </Carousel>
  );
}
