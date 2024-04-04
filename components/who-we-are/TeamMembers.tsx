import PrimaryHeadline from "../global/primary-headline";
import { TeamMembersCarousel } from "../shared/TeamMembersCarousel";

const TeamMembers = () => {
  return (
    <div className="bg-background">
      <div className="container pt-28 pb-52">
        <PrimaryHeadline text="Our Team" additionalClass="secondary-headline" />
        <TeamMembersCarousel textColor="text-white" />
      </div>
    </div>
  );
};

export default TeamMembers;
