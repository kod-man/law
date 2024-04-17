import PrimaryHeadline from "../global/primary-headline";
import React from "react";
import { TeamMembersCarousel } from "../shared/TeamMembersCarousel";

const TeamMembers = () => {
  return (
    <>
      <div className="container lg:pt-28 sm:pt-20 pt-16 lg:pb-52 sm:pb-40 pb-40">
        <PrimaryHeadline text="Our Team" />
        <TeamMembersCarousel />
      </div>
    </>
  );
};

export default TeamMembers;
