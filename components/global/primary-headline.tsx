interface headlineProps {
  text: string;
  additionalClass?: string;
  headlineType?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const PrimaryHeadline = ({
  text,
  additionalClass,
  headlineType,
}: headlineProps) => {
  const Tag = headlineType || "h2";
  if (additionalClass) {
    return <Tag className={`${additionalClass}`}>{text}</Tag>;
  }
  return <Tag className="primary-headline">{text}</Tag>;
};

export default PrimaryHeadline;
