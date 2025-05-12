import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logo.jpeg";
import { ChevronDown, ChevronRight } from "lucide-react";
import {
  CalendarIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Header = () => {
  return (
    <header className="relative z-20 font-albert">
      <div className="container py-2">
        <div className="flex flex-wrap justify-center sm:flex-nowrap sm:justify-between">
          <div className="basis-full text-center sm:basis-auto sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 justify-center sm:justify-start">
              <Link
                href="tel:1911462242"
                className="font-bold inline-flex items-center gap-2"
              >
                <PhoneIcon className="w-5 h-5" />
                5310876275
              </Link>
              <div className="inline-flex items-center gap-2 ">
                <EnvelopeIcon className="w-5 h-5" />
                <span>pusulahukuk@gmail.com</span>
              </div>

              <div className="inline-flex items-center gap-2">
                <CalendarIcon className="w-5 h-5" />
                <p>Pazar-Cuma 08:00-18:00</p>
              </div>
            </div>
          </div>

          <Link
            href="#"
            className="inline-block px-4 py-2 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Bize Danışın
          </Link>
        </div>
      </div>
      <div className="relative bg-grey-bg">
        <div className="container">
          <div className="flex min-h-[80px] items-center  justify-between lg:min-h-full">
            <div className="shrink-0 basis-[166px] py-5">
              <Link href="/">
                <Image src={logo} alt="Logo" width={166} height={30} />
              </Link>
            </div>
            <div className="text-background">
              <Sheet>
                <SheetTrigger className="block lg:hidden">
                  <span className="mb-1 block h-[3px] w-7 rounded-md bg-white"></span>
                  <span className="mb-1 block h-[3px] w-7 rounded-md bg-white"></span>
                  <span className="block h-[3px] w-7 rounded-md bg-white"></span>
                </SheetTrigger>
                <SheetContent className="border-none p-0 text-red-400">
                  <div className="h-full overflow-y-auto p-6">
                    <SheetHeader>
                      <SheetTitle>
                        <Link href="/">
                          <Image
                            src={logo}
                            alt="Logo"
                            width={166}
                            height={30}
                          />
                        </Link>
                      </SheetTitle>
                      <SheetDescription>
                        <ul className="block pt-8 text-left *:text-white lg:hidden lg:gap-4 xl:gap-8">
                          <li className="relative">
                            <Link
                              href="/"
                              className="relative block border-b border-white py-3 pr-0 duration-300 ease-in-out after:transition-transform"
                            >
                              <Collapsible>
                                <CollapsibleTrigger>
                                  Home
                                  <ChevronDown
                                    size="15"
                                    className="absolute right-0 top-[21px] -translate-y-1/2"
                                  />
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                  <ul
                                    className="top-full z-10 w-full divide-y divide-white rounded-b-lg bg-background transition delay-100 duration-500 ease-menu  lg:min-w-52"
                                    role="list"
                                  >
                                    <li>
                                      <SheetClose asChild>
                                        <Link
                                          href="/"
                                          className="group/subItem text-grey-bg relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                                        >
                                          <ChevronRight
                                            size="15"
                                            className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                                          />
                                          Home 1
                                        </Link>
                                      </SheetClose>
                                    </li>
                                    <li>
                                      <SheetClose asChild>
                                        <Link
                                          href="/home-2/"
                                          className="group/subItem text-grey-bg relative block px-5 py-4 pb-1 transition-all hover:pl-7 hover:text-primary-main"
                                        >
                                          <ChevronRight
                                            size="15"
                                            className="absolute left-0 top-[17px] opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                                          />
                                          Home2
                                        </Link>
                                      </SheetClose>
                                    </li>
                                  </ul>
                                </CollapsibleContent>
                              </Collapsible>
                            </Link>
                          </li>
                          <li className="group relative">
                            <SheetClose asChild>
                              <Link
                                href="/who-we-are/"
                                className="relative block border-b border-white py-3 text-white duration-300 ease-in-out after:transition-transform"
                              >
                                Hakkımızda
                              </Link>
                            </SheetClose>
                          </li>
                          <li className="relative">
                            <Link
                              href="#"
                              className="relative  block border-b border-white py-3 duration-300 ease-in-out after:transition-transform"
                            >
                              <Collapsible>
                                <CollapsibleTrigger>
                                  Practice Areas
                                  <ChevronDown
                                    size="15"
                                    className="absolute right-0 top-[21px] -translate-y-1/2"
                                  />
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                  <ul
                                    className="top-full z-10 w-full divide-y divide-white rounded-b-lg bg-background transition delay-100 duration-500  ease-menu"
                                    role="list"
                                  >
                                    <li>
                                      <SheetClose asChild>
                                        <Link
                                          href="/practice-areas-2-column/"
                                          className="group/subItem text-grey-bg relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                                        >
                                          <ChevronRight
                                            size="15"
                                            className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                                          />
                                          2 Column Layout
                                        </Link>
                                      </SheetClose>
                                    </li>
                                    <li>
                                      <SheetClose asChild>
                                        <Link
                                          href="/practice-areas-3-column-layout/"
                                          className="group/subItem text-grey-bg relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                                        >
                                          <ChevronRight
                                            size="15"
                                            className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                                          />
                                          3 Column Layout
                                        </Link>
                                      </SheetClose>
                                    </li>
                                    <li>
                                      <SheetClose asChild>
                                        <Link
                                          href="/single-practice-area/"
                                          className="group/subItem text-grey-bg relative block px-5 py-4 pb-1 text-white transition-all hover:pl-7 hover:text-primary-main"
                                        >
                                          <ChevronRight
                                            size="15"
                                            className="absolute left-0 top-[17px] opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                                          />
                                          Individual Practice Area
                                        </Link>
                                      </SheetClose>
                                    </li>
                                  </ul>
                                </CollapsibleContent>
                              </Collapsible>
                            </Link>
                          </li>
                          <li className="relative">
                            <Link
                              href="#"
                              className="relative block  border-b border-white py-3 text-white duration-300 ease-in-out after:transition-transform"
                            >
                              <Collapsible>
                                <CollapsibleTrigger>
                                  Team Members
                                  <ChevronDown
                                    size="15"
                                    className="absolute right-0 top-1/2 -translate-y-1/2"
                                  />
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                  <ul
                                    className="top-full z-10 w-full divide-y divide-white rounded-b-lg bg-background transition delay-100 duration-500  ease-menu"
                                    role="list"
                                  >
                                    <li>
                                      <SheetClose asChild>
                                        <Link
                                          href="/single-team-member/"
                                          className="group/subItem text-grey-bg relative block px-5 py-4 pb-1 transition-all hover:pl-7 hover:text-primary-main"
                                        >
                                          <ChevronRight
                                            size="15"
                                            className="absolute left-0 top-[17px] opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                                          />
                                          Robert Darren
                                        </Link>
                                      </SheetClose>
                                    </li>
                                  </ul>
                                </CollapsibleContent>
                              </Collapsible>
                            </Link>
                          </li>
                          <li className="relative">
                            <Link
                              href="#"
                              className="relative block border-b border-white py-3 text-white duration-300 ease-in-out after:transition-transform"
                            >
                              <Collapsible>
                                <CollapsibleTrigger>
                                  Pages
                                  <ChevronDown
                                    size="15"
                                    className="absolute right-0 top-[21px] -translate-y-1/2"
                                  />
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                  <ul
                                    className="top-full z-10 w-full divide-y divide-white rounded-b-lg bg-background transition delay-100 duration-500  ease-menu"
                                    role="list"
                                  >
                                    <li>
                                      <SheetClose asChild>
                                        <Link
                                          href="/faqs/"
                                          className="group/subItem text-grey-bg relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                                        >
                                          <ChevronRight
                                            size="15"
                                            className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                                          />
                                          Faqs
                                        </Link>
                                      </SheetClose>
                                    </li>
                                    <li>
                                      <SheetClose asChild>
                                        <Link
                                          href="/404/"
                                          className="group/subItem text-grey-bg relative block px-5 py-4 pb-1 transition-all hover:pl-7 hover:text-primary-main"
                                        >
                                          <ChevronRight
                                            size="15"
                                            className="absolute left-0 top-[17px] opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                                          />
                                          404 Page
                                        </Link>
                                      </SheetClose>
                                    </li>
                                  </ul>
                                </CollapsibleContent>
                              </Collapsible>
                            </Link>
                          </li>
                          <li className="relative">
                            <Link
                              href="#"
                              className="relative block border-b border-white py-3 duration-300 ease-in-out after:transition-transform"
                            >
                              <Collapsible>
                                <CollapsibleTrigger>
                                  Blog
                                  <ChevronDown
                                    size="15"
                                    className="absolute right-0 top-[21px] -translate-y-1/2"
                                  />
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                  <ul
                                    className=" top-full z-10 w-full divide-y divide-white rounded-b-lg bg-background transition delay-100 duration-500 ease-menu  lg:right-0"
                                    role="list"
                                  >
                                    <li>
                                      <SheetClose asChild>
                                        <Link
                                          href="/blog/"
                                          className="group/subItem text-grey-bg relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                                        >
                                          <ChevronRight
                                            size="15"
                                            className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                                          />
                                          Blog With Sidebar
                                        </Link>
                                      </SheetClose>
                                    </li>
                                    <li>
                                      <SheetClose asChild>
                                        <Link
                                          href="/blog-full-page/"
                                          className="group/subItem text-grey-bg relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                                        >
                                          <ChevronRight
                                            size="15"
                                            className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                                          />
                                          Blog Full page
                                        </Link>
                                      </SheetClose>
                                    </li>

                                    <li>
                                      <SheetClose asChild>
                                        <Link
                                          href="/blog-chess-style/"
                                          className="group/subItem text-grey-bg relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                                        >
                                          <ChevronRight
                                            size="15"
                                            className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                                          />
                                          Blog Chess Style
                                        </Link>
                                      </SheetClose>
                                    </li>
                                    <li>
                                      <SheetClose asChild>
                                        <Link
                                          href="/blog-grid/"
                                          className="group/subItem text-grey-bg relative block px-5 py-4 pb-1 transition-all hover:pl-7 hover:text-primary-main"
                                        >
                                          <ChevronRight
                                            size="15"
                                            className="absolute left-0 top-[17px] opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                                          />
                                          Blog Grid
                                        </Link>
                                      </SheetClose>
                                    </li>
                                  </ul>
                                </CollapsibleContent>
                              </Collapsible>
                            </Link>
                          </li>
                          <li className="group relative">
                            <SheetClose asChild>
                              <Link
                                href="/contact/"
                                className="relative block border-b border-white py-3 duration-300 ease-in-out after:transition-transform"
                              >
                                Contact
                              </Link>
                            </SheetClose>
                          </li>
                        </ul>
                      </SheetDescription>
                    </SheetHeader>
                  </div>
                </SheetContent>
              </Sheet>
              <nav>
                <ul className="hidden lg:flex lg:gap-4 xl:gap-8">
                  <li className="group">
                    <Link
                      href="/"
                      className="relative block py-7 pr-5 duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main after:transition-transform after:content-[''] group-hover:after:scale-x-100"
                    >
                      Anasayfa
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href="/who-we-are/"
                      className="relative block py-7 duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main after:transition-transform after:content-[''] group-hover:after:scale-x-100"
                    >
                      Hakkımızda
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href="#"
                      className="relative block py-7 pr-5 duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main after:transition-transform after:content-[''] group-hover:after:scale-x-100"
                    >
                      Faaliyet Alanlarımız
                      <ChevronDown
                        size="15"
                        className="absolute right-0 top-1/2 -translate-y-1/2"
                      />
                    </Link>
                    <ul
                      className="absolute top-full z-10 origin-top-left scale-y-0 divide-y divide-[#29374a] rounded-b-lg bg-background opacity-0 transition delay-100 duration-500 ease-menu group-hover:scale-y-100 group-hover:opacity-100  lg:min-w-52"
                      role="list"
                    >
                      <li>
                        <Link
                          href="/practice-areas-2-column/"
                          className="group/subItem text-grey-bg relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                        >
                          <ChevronRight
                            size="15"
                            className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                          />
                          2 Column Layout
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/practice-areas-3-column-layout/"
                          className="group/subItem text-grey-bg relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                        >
                          <ChevronRight
                            size="15"
                            className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                          />
                          3 Column Layout
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/single-practice-area/"
                          className="group/subItem text-grey-bg relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                        >
                          <ChevronRight
                            size="15"
                            className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                          />
                          Individual Practice Area
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="group">
                    <Link
                      href="#"
                      className="relative block py-7 pr-5 duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main after:transition-transform after:content-[''] group-hover:after:scale-x-100"
                    >
                      Avukatlarımız
                      <ChevronDown
                        size="15"
                        className="absolute right-0 top-1/2 -translate-y-1/2"
                      />
                    </Link>
                    <ul
                      className="absolute top-full z-10 origin-top-left scale-y-0 divide-y divide-[#29374a] rounded-b-lg bg-background opacity-0 transition delay-100 duration-500 ease-menu group-hover:scale-y-100 group-hover:opacity-100  lg:min-w-52"
                      role="list"
                    >
                      <li>
                        <Link
                          href="/single-team-member/"
                          className="group/subItem text-grey-bg relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                        >
                          <ChevronRight
                            size="15"
                            className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                          />
                          Mustafa Koyuncu
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/single-team-member/"
                          className="group/subItem text-grey-bg relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                        >
                          <ChevronRight
                            size="15"
                            className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                          />
                          Adil Küçük
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/single-team-member/"
                          className="group/subItem text-grey-bg relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                        >
                          <ChevronRight
                            size="15"
                            className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                          />
                          Mesut
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/single-team-member/"
                          className="group/subItem text-grey-bg relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                        >
                          <ChevronRight
                            size="15"
                            className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                          />
                          Adem Ayrancı
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="group relative">
                    <Link
                      href="#"
                      className="relative block py-7 pr-5 duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main after:transition-transform after:content-[''] group-hover:after:scale-x-100"
                    >
                      Makaleler
                      <ChevronDown
                        size="15"
                        className="absolute right-0 top-1/2 -translate-y-1/2"
                      />
                    </Link>
                    <ul
                      className="absolute top-full z-10 origin-top-left scale-y-0 divide-y divide-[#29374a] rounded-b-lg bg-background opacity-0 transition delay-100 duration-500 ease-menu group-hover:scale-y-100 group-hover:opacity-100 lg:right-0  lg:min-w-52"
                      role="list"
                    >
                      <li>
                        <Link
                          href="/blog/"
                          className="group/subItem text-grey-bg relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                        >
                          <ChevronRight
                            size="15"
                            className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                          />
                          Blog With Sidebar
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog-full-page/"
                          className="group/subItem text-grey-bg relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                        >
                          <ChevronRight
                            size="15"
                            className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                          />
                          Blog Full page
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/blog-chess-style/"
                          className="group/subItem text-grey-bg relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                        >
                          <ChevronRight
                            size="15"
                            className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                          />
                          Blog Chess Style
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog-grid/"
                          className="group/subItem text-grey-bg relative block px-5 py-4 transition-all hover:pl-7 hover:text-primary-main"
                        >
                          <ChevronRight
                            size="15"
                            className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:delay-100 group-hover/subItem:duration-300 group-hover/subItem:ease-menu"
                          />
                          Blog Grid
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="group relative">
                    <Link
                      href="/contact/"
                      className="relative block py-7 duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main after:transition-transform after:content-[''] group-hover:after:scale-x-100"
                    >
                      İletişim
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
