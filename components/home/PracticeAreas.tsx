"use client";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { HomepagePAs } from "@/lib/dataWithJSX";
import PrimaryHeadline from "../global/primary-headline";
import IconCardWithLink from "../shared/IconCardWithLink";

const PracticeAreas = () => {
  return (
    <div className="container pt-16 pb-16 lg:pb-32 sm:pt-20 sm:pb-20 relative">
      <PrimaryHeadline text="Faaliyet Alanlarımız" />
      <Swiper
        modules={[FreeMode, Autoplay]}
        loop={true} // 🔁 Baştan sona döngü
        spaceBetween={16}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          reverseDirection: false, // ⬅️ Bu false olduğunda sağa doğru akar
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
        className="mt-8"
      >
        {HomepagePAs.map((item, index) => (
          <SwiperSlide key={`PA${item.id}`} className="!h-[260px]">
            <IconCardWithLink
              link={item.link}
              pa={item.PA}
              iconName={item.iconName}
              cardBgClass={
                index % 2 === 0 ? "bg-background" : "bg-primary-main"
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PracticeAreas;
