import PrimaryHeadline from "../global/primary-headline";

interface HeadlineWithTextProps {
  headlineText: string;
  text: string;
}

const HeadlineWithText = ({ headlineText, text }: HeadlineWithTextProps) => {
  return (
    <div className="container pt-20 pb-7">
      <PrimaryHeadline text={headlineText} />
      <div className="pt-2 px-10 text-center">
        <p className="text-base leading-6 text-[#333]">{text}</p>
      </div>
    </div>
  );
};

export default HeadlineWithText;
