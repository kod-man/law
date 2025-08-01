import PrimaryHeadline from "../global/primary-headline";
import TeamMembersCarousel from "../shared/TeamMembersCarousel";

const TeamMembers = () => {
  return (
    <div className="bg-background">
      <div className="container pb-40 pt-20 lg:pb-52 lg:pt-28">
        <PrimaryHeadline
          text="Avukatlarımız ve Ortaklarımız"
          additionalClass="secondary-headline"
        />
        <TeamMembersCarousel />
      </div>
    </div>
  );
};

export default TeamMembers;
