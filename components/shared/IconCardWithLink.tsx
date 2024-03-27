import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface IconCardWithLinkProps {
  link: string;
  iconName: IconProp;
  pa: string;
  cardBgClass: string;
}

const IconCardWithLink = ({
  link,
  iconName,
  pa,
  cardBgClass,
}: IconCardWithLinkProps) => {
  return (
    <div className="px-2 basis-1/4 min-h-64 text-center group mb-4 flex">
      <div className={`${cardBgClass}  w-full`}>
        <Link
          className="flex justify-center items-center h-full w-full flex-col transition-box-shadow duration-500 ease-in-out group-hover:shadow-[0_6px_13px_rgba(26,36,49,0.35)]"
          href={link}
        >
          <span className="inline-block">
            <FontAwesomeIcon icon={iconName} className="w-14 h-14 text-white" />
          </span>
          <h3 className="text-2xl text-white font-semibold mt-5">{pa}</h3>
        </Link>
      </div>
    </div>
  );
};

export default IconCardWithLink;
