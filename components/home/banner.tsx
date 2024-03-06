import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Link from "next/link";
import { bannerItems } from "@/constants/homeBanner";

const Banner = () => {
  return (
    <Carousel>
      <CarouselContent className="ml-0 relative">
        {bannerItems.map((item) => (
          <CarouselItem
            key={item.id}
            className="pl-0 text-white relative overflow-hidden before:absolute before:content-[''] before:w-full before:h-full before:bg-black/15 before:z-10"
          >
            <Image
              src={item.image}
              alt="homepage banner image"
              fill={true}
              className="object-cover"
            />
            <div className="relative pt-[300px] pb-[300px] top-0 z-10 w-full">
              <div className="container">
                <div className="carousel-caption">
                  <h2 className="font-bold text-6xl uppercase w-2/3 mb-5 max-w-full leading-tight">
                    {item.content}
                  </h2>
                  <Link className="primary-button" href={item.linkHref}>
                    {item.linkText}
                  </Link>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Banner;
