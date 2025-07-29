import InnerBanner from "@/components/global/inner-banner";
import CTA from "@/components/shared/CTA";
import PreFooter from "@/components/shared/PreFooter";
import Quote from "@/components/shared/Quote";
import BackgroundAndPA from "@/components/team/single/BackgroundAndPA";
import MemberDetails from "@/components/team/single/MemberDetails";
import Stats from "@/components/team/single/Stats";
import { TeamMembers } from "@/lib/data";
import singleteambanner from "@/public/assets/single-team-members-banner.jpg";
import { notFound } from "next/navigation";

export default function LawyerPage({ params }: { params: { slug: string } }) {
  const lawyer = TeamMembers.find((l) => l.slug === params.slug);
  if (!lawyer) notFound();

  return (
    <>
      <InnerBanner text={lawyer.name} image={singleteambanner} />
      <MemberDetails lawyer={lawyer} />
      <Stats />
      <CTA
        headline="Hukuki sorunlarınız için danışmanlık alabilirsiniz."
        buttonText="Bize Ulaşın"
        buttonLink="#"
        ctaType="withBg"
        bgClass="bg-primary-main"
        buttonType="dark"
      />
      <BackgroundAndPA />
      <Quote text="" bgClass="bg-primary-main" textClass="text-white" />
      <PreFooter />
    </>
  );
}
