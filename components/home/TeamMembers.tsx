import PrimaryHeadline from "../global/primary-headline";
import React from "react";
import { TeamMembersCarousel } from "../shared/TeamMembersCarousel";
import libraryicon from "@/public/assets/library-icon-grey.svg";
import Image from "next/image";
import testimonialbg from "@/public/assets/home-testimonial-bg.jpg";


const TeamMembers = () => {
  return (
    <>
    <div className="container pt-28 pb-52">
      <PrimaryHeadline text="Our Team" />
      <TeamMembersCarousel />
    </div>
    </>
  );
};

export default TeamMembers;
