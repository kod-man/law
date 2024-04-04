interface headlineProps {
  text: string;
  additionalClass?: string;
}

const PrimaryHeadline = ({ text, additionalClass }: headlineProps) => {
  if (additionalClass) {
    return <h2 className={`${additionalClass}`}>{text}</h2>;
  }
  return <h2 className="primary-headline">{text}</h2>;
};

export default PrimaryHeadline;
