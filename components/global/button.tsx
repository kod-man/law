import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface buttonCustomProps {
  text: string;
  href: string;
  buttonType?: string;
}

const ButtonCustom = ({ text, href, buttonType }: buttonCustomProps) => {
  const buttonType1 = (
    <Link className="group primary-button" href={href}>
      {text}
      <FontAwesomeIcon
        icon="chevron-right"
        className="w-3 absolute top-1/2 opacity-0 right-1/3 -translate-y-1/2 group-hover:right-5 group-hover:opacity-100 h-[15px]"
      />
    </Link>
  );

  const buttonType2 = buttonType == "secondary" && (
    <Link className="group primary-button-dark" href={href}>
      {text}
      <FontAwesomeIcon
        icon="chevron-right"
        className="text-main w-3 absolute top-1/2 opacity-0 right-1/3 -translate-y-1/2 group-hover:right-5 group-hover:opacity-100 h-[15px]"
      />
    </Link>
  );

  const buttonType3 = buttonType == "dark" && (
    <Link className="group secondary-button" href={href}>
      {text}
      <FontAwesomeIcon
        icon="chevron-right"
        className="w-3 absolute top-1/2 opacity-0 right-1/3 -translate-y-1/2 group-hover:right-5 group-hover:opacity-100 h-[15px]"
      />
    </Link>
  );

  switch (buttonType) {
    case "dark":
      return buttonType3;
      break;

    case "secondary":
      return buttonType2;
      break;

    default:
      return buttonType1;
      break;
  }
};

export default ButtonCustom;
