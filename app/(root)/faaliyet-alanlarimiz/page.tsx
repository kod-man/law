import InnerBanner from "@/components/global/inner-banner";
import PAList from "@/components/practice-areas/PAList";
import HeadlineWithText from "@/components/shared/HeadlineWithText";
import PreFooter from "@/components/shared/PreFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faaliyet Alanlarımız - Lawyero",
  description: "Your one stop solution for legal matters",
};
const page = () => {
  return (
    <>
      <InnerBanner text="FAALİYET ALANLARIMIZ" />

      <HeadlineWithText
        headlineText="Faaliyet Alanlarımız"
        text="Pusula Hukuk olarak, hayatın pek çok alanına dokunan geniş bir hizmet yelpazesi sunmaktayız. Müvekkillerimizin hukuki hedeflerine ulaşmalarına katkı sağladığımız başlıca uygulama alanlarımızdan bazıları şunlardır:"
      />

      <PAList layout="3-column" />

      <PreFooter />
    </>
  );
};

export default page;
