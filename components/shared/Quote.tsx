import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface QuoteProps {
  text: string;
  bgClass: string;
  textClass: string;
}

const Quote = ({ text, bgClass, textClass }: QuoteProps) => {
  return (
    <div className={bgClass}>
      <div className="container">
        <div className="lg:py-[75px] py-[50px] lg:px-12 px-0 relative">
          <FontAwesomeIcon
            icon="quote-left"
            className="text-white absolute w-9 z-0 opacity-40 top-[60px]"
          />
          <p className={`lg:text-xl text-[18px] italic ${textClass}`}>
            {text}I was struggling to get my legal issues sorted out before i
            met Mr. John at Lawyero. I was amazed by his attitude and attention
            to detail and he sorted my case in no time understanding what i need
            to get done. Thankyou Mr. John.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
