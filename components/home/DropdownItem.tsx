import { ChevronRight } from "lucide-react";
import Link from "next/link";

const DropdownItem = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="group/subItem relative block px-5 py-4 text-white transition-all hover:pl-7 hover:text-primary-main"
  >
    <ChevronRight
      size="15"
      className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 transition-all duration-300 ease-menu"
    />
    {label}
  </Link>
);

export default DropdownItem;
