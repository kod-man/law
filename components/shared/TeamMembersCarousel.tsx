"use client";

import { TeamMembers } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function TeamMembersCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  // Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(4); // lg: 4 items
      } else if (window.innerWidth >= 768) {
        setItemsPerView(3); // md: 3 items
      } else if (window.innerWidth >= 640) {
        setItemsPerView(2); // sm: 2 items
      } else {
        setItemsPerView(1); // mobile: 1 item
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);

    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  // Auto-loop effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = Math.max(0, TeamMembers.length - itemsPerView);
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 3000); // 3 saniyede bir değişir

    return () => clearInterval(interval);
  }, [itemsPerView]);

  const nextSlide = () => {
    const maxIndex = Math.max(0, TeamMembers.length - itemsPerView);
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    const maxIndex = Math.max(0, TeamMembers.length - itemsPerView);
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  const maxIndex = Math.max(0, TeamMembers.length - itemsPerView);
  const showArrows = TeamMembers.length > itemsPerView;

  return (
    <div className="w-full mx-auto p-4">
      <div className="relative">
        {/* Navigation Arrows */}
        {showArrows && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="size-5 text-gray-600" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="size-5 text-gray-600" />
            </button>
          </>
        )}

        {/* Carousel Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {TeamMembers.map((item) => (
              <div
                key={item.id}
                className="shrink-0 px-2"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                {/* Kartın tamamı tıklanabilir hale geliyor */}
                <a
                  href={`/single-team-member/${item.slug}`}
                  className="block h-full group"
                >
                  <div className="bg-white rounded-lg border border-gray-200 p-6 h-full transition-all duration-300 group-hover:shadow-xl group-hover:border-gray-300">
                    <div className="overflow-hidden rounded-md">
                      <Image
                        src={item.image}
                        alt="Team Member Img"
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                        width={400}
                        height={400}
                      />
                    </div>
                    <h3 className="text-lg mt-4 font-semibold text-primary-main text-center">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm text-center leading-relaxed">
                      {item.designation}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        {showArrows && (
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`size-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
