import PrimaryHeadline from "@/components/global/primary-headline";
import Image from "next/image";
import paimage1 from "@/public/assets/pa-img-1.jpg";

const PAContent = () => {
  return (
    <div className="container lg:py-24 py-16">
      <div className="flex lg:gap-10 gap-0 lg:flex-nowrap flex-wrap">
        <div className="lg:basis-4/6 basis-full">
          <PrimaryHeadline
            text="Overview"
            additionalClass="primary-headline-left"
          />
          <p className="text-base mb-5 text-[#333]">
            Family law involves a range of matters that are usually very
            personal, unique and emotionally challenging. Decisions involving
            your children and your financial well-being can be complex and
            nuanced and the results can last a lifetime. In these situations,
            you need more than just an attorney who has experience and knowledge
            of the law. You need someone who will provide you with guidance,
            creative thinking, and who understands the big picture and the
            impact your decisions will have on you.
          </p>
          <p className="text-base mb-5 text-[#333]">
            The family law attorneys at lawyero are committed to providing our
            clients with the skill and expertise necessary to meet the client’s
            objectives and goalswhile providing a trusted source of
            representation. We are responsive to our clients’ needs and we pride
            ourselves on our attentiveness and availability to handle client
            matters with care, respect and sensitivity.
          </p>
        </div>
        <div className="lg:basis-1/3 basis-full lg:pt-0 pt-7">
          <Image
            src={paimage1}
            alt="Practice Area Image"
            className="w-full rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default PAContent;
