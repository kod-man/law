import React from "react";
import ButtonCustom from "../global/button";
import PrimaryHeadline from "../global/primary-headline";
import Image from "next/image";
import hakki from "@/public/assets/hakki.jpg";

const TwoColumnTextWithImage = () => {
  return (
    <div className="container py-16 sm:py-20">
      <div className="flex flex-wrap gap-8 lg:flex-nowrap">
        <div className="basis-full lg:basis-[70%]">
          <PrimaryHeadline text="Hakkımızda" />
          <div className="text-base text-[#333]">
            <p className="mb-6">
              İstanbul'da bulunan Hukuk ve Danışmanlık Büromuz gerek ulusal
              gerekse de uluslararası alanda müvekkillerine hukukun pek çok
              alanında avukatlık hizmeti ve hukuki danışmanlık sağlamakta ve
              faaliyet gösterdiği çalışma alanlarında,müvekkillerin hukuki
              sorunların verimli ve doğru şekilde çözümlenmesini amaçlamaktadır.
            </p>
          </div>
          <ButtonCustom href="#" text="Devamını Oku" buttonType="secondary" />
        </div>
        <div className="flex basis-full justify-center sm:text-center lg:block lg:basis-[30%]">
          <Image src={hakki} alt="Home Firm Image" className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default TwoColumnTextWithImage;
