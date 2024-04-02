import PrimaryHeadline from "../global/primary-headline";
import React from "react";
import { TeamMembersCarousel } from "../shared/TeamMembersCarousel";
import libraryicon from "@/public/assets/library-icon-grey.svg";
import Image from "next/image";
import testimonialbg from "@/public/assets/home-testimonial-bg.jpg";


const TeamMembers = () => {
  return (
    <>
    <div className="container pt-28 pb-24">
      <PrimaryHeadline text="Our Team" />
    </div>
    <div className="bg-grey relative overflow-hidden before:bg-[#1a2431] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[''] before:opacity-70 before:z-[2]">
      <Image
          src={libraryicon}
          alt="library-icon"
          className="absolute top-0 z-[3] w-full rotate-180"
        />
      <Image src={testimonialbg} alt="testimonial-bg" fill={true} className="object-cover" />
      <div className="container pt-24 pb-20 relative z-[3]">    
        <h2 className="text-center pb-2 text-[40px] text-white font-bold relative z-[1] before:absolute before:left-0 before:right-0 before:m-auto before:bottom-0 before:w-36 before:h-[3px] before:bg-white mb-12">What Our Customers Say</h2>
        <TeamMembersCarousel />
      </div>
    </div>
    </>
  );
};

export default TeamMembers;
