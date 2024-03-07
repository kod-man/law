import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const ButtonCustomdark = ({ text, href }: any) => {
  return (
    <Link className="group primary-button-dark" href={href}>
      {text}
      <FontAwesomeIcon
        icon="chevron-right"
        className="text-main w-3 absolute top-1/2 opacity-0 right-1/3 -translate-y-1/2 group-hover:right-5 group-hover:opacity-100 h-[15px]"
      />
    </Link>
  );
};

export default ButtonCustomdark;
