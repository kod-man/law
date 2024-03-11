import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const SecondaryButtonCustom = ({ text, href }: any) => {
  return (
    <Link className="group secondary-button" href={href}>
      {text}
      <FontAwesomeIcon
        icon="chevron-right"
        className="w-3 absolute top-1/2 opacity-0 right-1/3 -translate-y-1/2 group-hover:right-5 group-hover:opacity-100 h-[15px]"
      />
    </Link>
  );
};

export default SecondaryButtonCustom;
