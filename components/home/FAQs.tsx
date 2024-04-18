import PrimaryHeadline from "../global/primary-headline";
import { FAQData } from "@/lib/data";
import FAQItem from "../shared/FAQItem";

const FAQs = () => {
  return (
    <div className="bg-grey pt-20 pb-11">
      <div className="container">
        <PrimaryHeadline text="Frequently Asked Questions" />
        <div className="flex pt-3 flex-wrap">
          {FAQData.map((item) => (
            <FAQItem
              key={`faq${item.id}`}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
