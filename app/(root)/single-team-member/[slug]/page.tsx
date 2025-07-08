import React from "react";
import singleteambanner from "@/public/assets/single-team-members-banner.jpg";
import InnerBanner from "@/components/global/inner-banner";
import MemberDetails from "@/components/team/single/MemberDetails";
import Stats from "@/components/team/single/Stats";
import CTA from "@/components/shared/CTA";
import PreFooter from "@/components/shared/PreFooter";
import Quote from "@/components/shared/Quote";
import BackgroundAndPA from "@/components/team/single/BackgroundAndPA";
import { notFound } from "next/navigation";

// Mock data for demonstration
const lawyers = [
  {
    slug: "mustafa-koyuncu",
    name: "Mustafa Koyuncu",
  },
  {
    slug: "adil-kucuk",
    name: "Adil Küçük",
  },
  {
    slug: "ilhan-mesut-celtikci",
    name: "İlhan Mesut Çeltikci",
  },
];

export default function LawyerPage({ params }: { params: { slug: string } }) {
  const lawyer = lawyers.find((l) => l.slug === params.slug);
  if (!lawyer) notFound();

  return (
    <>
      <InnerBanner text={lawyer.name} image={singleteambanner} />
      <MemberDetails name={lawyer.name} />
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
