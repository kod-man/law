import Link from "next/link";
import React from "react";

interface IconCardWithLinkProps {
  link: string;
  iconName: React.ReactNode;
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
    <div className={`${cardBgClass} h-full w-full rounded-lg`}>
      <Link
        className="transition-box-shadow flex h-full w-full flex-col items-center justify-center p-6 duration-500 ease-in-out hover:shadow-[0_6px_13px_rgba(26,36,49,0.35)]"
        href={link}
      >
        <span className="inline-block">{iconName}</span>
        <h3 className="mt-5 text-2xl font-semibold text-white text-center">
          {pa}
        </h3>
      </Link>
    </div>
  );
};

export default IconCardWithLink;
