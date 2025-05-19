import { ChevronDown } from "lucide-react";
import Link from "next/link";
import DropdownItem from "./DropdownItem";

export const navItems = [
  { label: "Anasayfa", href: "/" },
  { label: "Hakkımızda", href: "/who-we-are/" },
  {
    label: "Faaliyet Alanlarımız",
    submenu: [
      { label: "2 Column Layout", href: "/practice-areas-2-column/" },
      { label: "3 Column Layout", href: "/practice-areas-3-column-layout/" },
      { label: "Individual Practice Area", href: "/single-practice-area/" },
    ],
  },
  {
    label: "Avukatlarımız",
    submenu: [
      { label: "Mustafa Koyuncu", href: "/single-team-member/" },
      { label: "Adil Küçük", href: "/single-team-member/" },
      { label: "Mesut", href: "/single-team-member/" },
      { label: "Adem Ayrancı", href: "/single-team-member/" },
    ],
  },
  {
    label: "Makaleler",
    submenu: [
      { label: "Blog With Sidebar", href: "/blog/" },
      { label: "Blog Full page", href: "/blog-full-page/" },
      { label: "Blog Chess Style", href: "/blog-chess-style/" },
      { label: "Blog Grid", href: "/blog-grid/" },
    ],
  },
  { label: "İletişim", href: "/contact/" },
];

const DesktopMenu = () => (
  <ul className="hidden lg:flex lg:gap-4 xl:gap-8">
    {navItems.map(({ label, href, submenu }) => (
      <li key={label} className="group relative">
        <Link
          href={href || "#"}
          className="relative block py-7 pr-5 duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main after:transition-transform group-hover:after:scale-x-100"
        >
          {label}
          {submenu && (
            <ChevronDown
              size="15"
              className="absolute right-0 top-1/2 -translate-y-1/2"
            />
          )}
        </Link>
        {submenu && (
          <ul className="absolute top-full z-10 origin-top-left scale-y-0 divide-y divide-[#29374a] rounded-b-lg bg-background opacity-0 transition delay-100 duration-500 ease-menu group-hover:scale-y-100 group-hover:opacity-100 lg:min-w-52">
            {submenu.map((item) => (
              <li key={item.label}>
                <DropdownItem {...item} />
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
);

export default DesktopMenu;
