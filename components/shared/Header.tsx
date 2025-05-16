import logo from "@/public/assets/logo.jpeg";
import {
  CalendarIcon,
  ChevronDown,
  ChevronRight,
  MailIcon,
  PhoneIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const contactDetails = [
  {
    icon: <PhoneIcon className="w-5 h-5" />,
    content: (
      <Link
        href="tel:1911462242"
        className="font-bold inline-flex items-center gap-2"
      >
        5310876275
      </Link>
    ),
  },
  {
    icon: <MailIcon className="w-5 h-5" />,
    content: <span>pusulahukuk@gmail.com</span>,
  },
  {
    icon: <CalendarIcon className="w-5 h-5" />,
    content: <p>Pazar-Cuma 08:00-18:00</p>,
  },
];

const navItems = [
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

const DropdownItem = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="group/subItem relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
  >
    <ChevronRight
      size="15"
      className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 transition-all duration-300 ease-menu"
    />
    {label}
  </Link>
);

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
              <li key={item.label}>{<DropdownItem {...item} />}</li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
);

const MobileMenu = () => (
  <Sheet>
    <SheetTrigger className="block lg:hidden space-y-1">
      <div className="h-[3px] w-7 bg-white rounded-md" />
      <div className="h-[3px] w-7 bg-white rounded-md" />
      <div className="h-[3px] w-7 bg-white rounded-md" />
    </SheetTrigger>
    <SheetContent className="border-none p-0 text-white bg-background">
      <div className="p-6">
        <SheetHeader>
          <SheetTitle>
            <Link href="/">
              <Image src={logo} alt="Logo" width={166} height={30} />
            </Link>
          </SheetTitle>
        </SheetHeader>
        <ul className="pt-8 space-y-2">
          {navItems.map(({ label, href, submenu }) => (
            <li key={label}>
              {submenu ? (
                <Collapsible>
                  <CollapsibleTrigger className="flex justify-between items-center w-full py-3 border-b border-white">
                    {label}
                    <ChevronDown size="15" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <ul className="divide-y divide-white">
                      {submenu.map((item) => (
                        <li key={item.label}>
                          <SheetClose asChild>
                            <DropdownItem {...item} />
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <SheetClose asChild>
                  <Link
                    href={href || "#"}
                    className="block py-3 border-b border-white"
                  >
                    {label}
                  </Link>
                </SheetClose>
              )}
            </li>
          ))}
        </ul>
      </div>
    </SheetContent>
  </Sheet>
);

const Header = () => {
  return (
    <header className="relative z-20 font-albert">
      <div className="container py-2">
        <div className="flex flex-wrap justify-center sm:justify-between gap-y-2">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            {contactDetails.map(({ icon, content }, idx) => (
              <div key={idx} className="inline-flex items-center gap-2">
                {icon}
                {content}
              </div>
            ))}
          </div>
          <Link
            href="#"
            className="px-4 py-2 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Bize Danışın
          </Link>
        </div>
      </div>
      <div className="relative bg-grey-bg">
        <div className="container">
          <div className="flex min-h-[80px] items-center justify-between">
            <Link href="/" className="shrink-0 py-5">
              <Image src={logo} alt="Logo" width={166} height={30} />
            </Link>
            <div className="text-background flex items-center gap-6">
              <MobileMenu />
              <DesktopMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
