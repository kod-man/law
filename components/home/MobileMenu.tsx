import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/public/assets/logo.jpeg";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navItems } from "./DesktopMenu";
import DropdownItem from "./DropdownItem";

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

export default MobileMenu;
