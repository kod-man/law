import InnerBanner from "@/components/global/inner-banner";
import PABottomContent from "@/components/practice-areas/single/PABottomContent";
import PAContent from "@/components/practice-areas/single/PAContent";
import CTA from "@/components/shared/CTA";
import PreFooter from "@/components/shared/PreFooter";
import { PAData, slugify } from "@/lib/data";

import singlepabanner from "@/public/assets/single-practice-banner.jpg";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Individual Practice Area - Lawyero",
  description: "Your one stop solution for legal matters",
};

const page = ({ params }: { params: { slug: string } }) => {
  const area = PAData.find((l) => slugify(l.title) === params.slug);
  if (!area) notFound();

  return (
    <>
      <InnerBanner text={area.title} image={singlepabanner} />

      <PAContent text={area.info} />

      <CTA
        bgClass="bg-primary-main"
        headline="Hukuki sorunlarınız için danışmanlık alabilirsiniz."
        buttonLink="#"
        buttonText="Contact Us"
        ctaType="withBg"
        buttonType="dark"
      />

      <PABottomContent />

      <PreFooter />
    </>
  );
};

export default page;
