import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const Banner = () => {
  return (
    <Carousel>
      <CarouselContent className="-ml-4">
        <CarouselItem className="pl-4 bg-black text-white h-screen">
          Banner 1
        </CarouselItem>
        <CarouselItem className="pl-4 bg-black h-screen">...</CarouselItem>
        <CarouselItem className="pl-4 bg-black h-screen">...</CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Banner;
