import PrimaryHeadline from "../global/primary-headline";
import { TeamMembersCarousel } from "../shared/TeamMembersCarousel";

const TeamMembers = () => {
  return (
    <div className="bg-background">
      <div className="container lg:pt-28 pt-20 lg:pb-52 pb-40">
        <PrimaryHeadline text="Our Team" additionalClass="secondary-headline" />
        <TeamMembersCarousel textColor="text-white" />
      </div>
    </div>
  );
};

export default TeamMembers;
