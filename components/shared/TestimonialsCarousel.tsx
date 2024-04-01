import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function TestimonialsCarousel() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        <CarouselItem>
          <div className="p-1">
            <span className="text-4xl font-semibold">1</span>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <span className="text-4xl font-semibold">1</span>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <span className="text-4xl font-semibold">1</span>
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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
