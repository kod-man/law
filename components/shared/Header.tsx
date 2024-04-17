import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Sheet,
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
    <header className="font-albert z-10">
      <div className="container py-2">
        <div className="flex sm:justify-between justify-center sm:flex-nowrap flex-wrap">
          <div>
            Call Us:
            <Link className="font-bold" href="tel:1911462242">
              1911-462-2425
            </Link>
          </div>
          <Link href="#" className="font-bold">
            Request a free consultation
          </Link>
        </div>
      </div>
      <div className="bg-background relative">
        <div className="container">
          <div className="flex justify-between items-center  min-h-[80px] lg:min-h-full">
            <div className="py-5 basis-[166px] flex-shrink-0">
              <Link href="/">
                <Image src={logo} alt="Logo" width={166} height={30} />
              </Link>
            </div>
            <div className="text-white">
              <Sheet>
                <SheetTrigger className="block lg:hidden">
                  <span className="h-[3px] w-7 block rounded-md bg-white mb-1"></span>
                  <span className="h-[3px] w-7 block rounded-md bg-white mb-1"></span>
                  <span className="h-[3px] w-7 block rounded-md bg-white"></span>
                </SheetTrigger>
                <SheetContent className="text-white p-0 border-none">
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
                        <ul className="xl:gap-8 lg:gap-4 block lg:hidden *:text-white pt-8 text-left">
                          <li className="relative">
                            <Link
                              href="/"
                              className="py-3 pr-0 block relative after:transition-transform duration-300 ease-in-out border-b border-white"
                            >
                              <Collapsible>
                                <CollapsibleTrigger>
                                  Home
                                  <FontAwesomeIcon
                                    icon="chevron-down"
                                    className="absolute top-[21px] -translate-y-1/2 right-0 w-2.5"
                                  />
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                  <ul
                                    className="bg-background lg:min-w-52 w-full top-full rounded-b-lg divide-y divide-white transition ease-menu delay-100 duration-500  z-10"
                                    role="list"
                                  >
                                    <li>
                                      <Link
                                        href="/"
                                        className="px-5 py-4 block hover:text-primary-main relative group/subItem transition-all hover:pl-7"
                                      >
                                        <FontAwesomeIcon
                                          icon="chevron-right"
                                          className="absolute h-[12px] w-[12px] top-1/2 opacity-0 left-0 -translate-y-1/2 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:ease-menu group-hover/subItem:delay-100 group-hover/subItem:duration-300"
                                        />
                                        Home 1
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/home-2/"
                                        className="px-5 py-4 pb-0 block hover:text-primary-main relative group/subItem transition-all hover:pl-7"
                                      >
                                        <FontAwesomeIcon
                                          icon="chevron-right"
                                          className="absolute h-[12px] w-[12px] top-1/2 opacity-0 left-0 -translate-y-1/2 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:ease-menu group-hover/subItem:delay-100 group-hover/subItem:duration-300"
                                        />
                                        Home2
                                      </Link>
                                    </li>
                                  </ul>
                                </CollapsibleContent>
                              </Collapsible>
                            </Link>
                          </li>
                          <li className="group relative">
                            <Link
                              href="/who-we-are/"
                              className="text-white py-3 block relative after:transition-transform duration-300 ease-in-out border-b border-white"
                            >
                              Who We Are
                            </Link>
                          </li>
                          <li className="relative">
                            <Link
                              href="#"
                              className="py-3  block relative after:transition-transform duration-300 ease-in-out border-b border-white"
                            >
                              <Collapsible>
                                <CollapsibleTrigger>
                                  Practice Areas
                                  <FontAwesomeIcon
                                    icon="chevron-down"
                                    className="absolute top-[21px] -translate-y-1/2 right-0 w-2.5"
                                  />
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                  <ul
                                    className="bg-background w-full top-full rounded-b-lg divide-y divide-white transition ease-menu delay-100 duration-500  z-10"
                                    role="list"
                                  >
                                    <li>
                                      <Link
                                        href="/practice-areas-2-column/"
                                        className="px-5 py-4 block hover:text-primary-main relative group/subItem transition-all hover:pl-7"
                                      >
                                        <FontAwesomeIcon
                                          icon="chevron-right"
                                          className="absolute h-[12px] w-[12px] top-1/2 opacity-0 left-0 -translate-y-1/2 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:ease-menu group-hover/subItem:delay-100 group-hover/subItem:duration-300"
                                        />
                                        2 Column Layout
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/practice-areas-3-column-layout/"
                                        className="px-5 py-4 block hover:text-primary-main relative group/subItem transition-all hover:pl-7"
                                      >
                                        <FontAwesomeIcon
                                          icon="chevron-right"
                                          className="absolute h-[12px] w-[12px] top-1/2 opacity-0 left-0 -translate-y-1/2 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:ease-menu group-hover/subItem:delay-100 group-hover/subItem:duration-300"
                                        />
                                        3 Column Layout
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/single-practice-area/"
                                        className="text-white px-5 py-4 pb-0 block hover:text-primary-main relative group/subItem transition-all hover:pl-7"
                                      >
                                        <FontAwesomeIcon
                                          icon="chevron-right"
                                          className="absolute h-[12px] w-[12px] top-1/2 opacity-0 left-0 -translate-y-1/2 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:ease-menu group-hover/subItem:delay-100 group-hover/subItem:duration-300"
                                        />
                                        Individual Practice Area
                                      </Link>
                                    </li>
                                  </ul>
                                </CollapsibleContent>
                              </Collapsible>
                            </Link>
                          </li>
                          <li className="relative">
                            <Link
                              href="#"
                              className="text-white py-3  block relative after:transition-transform duration-300 ease-in-out border-b border-white"
                            >
                              <Collapsible>
                                <CollapsibleTrigger>
                                  Team Members
                                  <FontAwesomeIcon
                                    icon="chevron-down"
                                    className="absolute top-[21px] -translate-y-1/2 right-0 w-2.5"
                                  />
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                  <ul
                                    className="bg-background w-full top-full rounded-b-lg divide-y divide-white transition ease-menu delay-100 duration-500  z-10"
                                    role="list"
                                  >
                                    <li>
                                      <Link
                                        href="/single-team-member/"
                                        className="px-5 py-4 pb-0 block hover:text-primary-main relative group/subItem transition-all hover:pl-7"
                                      >
                                        <FontAwesomeIcon
                                          icon="chevron-right"
                                          className="absolute h-[12px] w-[12px] top-1/2 opacity-0 left-0 -translate-y-1/2 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:ease-menu group-hover/subItem:delay-100 group-hover/subItem:duration-300"
                                        />
                                        Robert Darren
                                      </Link>
                                    </li>
                                  </ul>
                                </CollapsibleContent>
                              </Collapsible>
                            </Link>
                          </li>
                          <li className="relative">
                            <Link
                              href="#"
                              className="text-white py-3 block relative after:transition-transform duration-300 ease-in-out border-b border-white"
                            >
                              <Collapsible>
                                <CollapsibleTrigger>
                                  Pages
                                  <FontAwesomeIcon
                                    icon="chevron-down"
                                    className="absolute top-[21px] -translate-y-1/2 right-0 w-2.5"
                                  />
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                  <ul
                                    className="bg-background w-full top-full rounded-b-lg divide-y divide-white transition ease-menu delay-100 duration-500  z-10"
                                    role="list"
                                  >
                                    <li>
                                      <Link
                                        href="/faqs/"
                                        className="px-5 py-4 block hover:text-primary-main relative group/subItem transition-all hover:pl-7"
                                      >
                                        <FontAwesomeIcon
                                          icon="chevron-right"
                                          className="absolute h-[12px] w-[12px] top-1/2 opacity-0 left-0 -translate-y-1/2 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:ease-menu group-hover/subItem:delay-100 group-hover/subItem:duration-300"
                                        />
                                        Faqs
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/404/"
                                        className="px-5 py-4 pb-0 block hover:text-primary-main relative group/subItem transition-all hover:pl-7"
                                      >
                                        <FontAwesomeIcon
                                          icon="chevron-right"
                                          className="absolute h-[12px] w-[12px] top-1/2 opacity-0 left-0 -translate-y-1/2 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:ease-menu group-hover/subItem:delay-100 group-hover/subItem:duration-300"
                                        />
                                        404 Page
                                      </Link>
                                    </li>
                                  </ul>
                                </CollapsibleContent>
                              </Collapsible>
                            </Link>
                          </li>
                          <li className="relative">
                            <Link
                              href="#"
                              className="py-3 block relative after:transition-transform duration-300 ease-in-out border-b border-white"
                            >
                              <Collapsible>
                                <CollapsibleTrigger>
                                  Blog
                                  <FontAwesomeIcon
                                    icon="chevron-down"
                                    className="absolute top-[21px] -translate-y-1/2 right-0 w-2.5"
                                  />
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                  <ul
                                    className=" bg-background w-full lg:right-0 top-full rounded-b-lg divide-y divide-white transition ease-menu delay-100 duration-500  z-10"
                                    role="list"
                                  >
                                    <li>
                                      <Link
                                        href="/blog/"
                                        className="px-5 py-4 block hover:text-primary-main relative group/subItem transition-all hover:pl-7"
                                      >
                                        <FontAwesomeIcon
                                          icon="chevron-right"
                                          className="absolute h-[12px] w-[12px] top-1/2 opacity-0 left-0 -translate-y-1/2 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:ease-menu group-hover/subItem:delay-100 group-hover/subItem:duration-300"
                                        />
                                        Blog With Sidebar
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/blog-full-page/"
                                        className="px-5 py-4 block hover:text-primary-main relative group/subItem transition-all hover:pl-7"
                                      >
                                        <FontAwesomeIcon
                                          icon="chevron-right"
                                          className="absolute h-[12px] w-[12px] top-1/2 opacity-0 left-0 -translate-y-1/2 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:ease-menu group-hover/subItem:delay-100 group-hover/subItem:duration-300"
                                        />
                                        Blog Full page
                                      </Link>
                                    </li>

                                    <li>
                                      <Link
                                        href="/blog-chess-style/"
                                        className="px-5 py-4 block hover:text-primary-main relative group/subItem transition-all hover:pl-7"
                                      >
                                        <FontAwesomeIcon
                                          icon="chevron-right"
                                          className="absolute h-[12px] w-[12px] top-1/2 opacity-0 left-0 -translate-y-1/2 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:ease-menu group-hover/subItem:delay-100 group-hover/subItem:duration-300"
                                        />
                                        Blog Chess Style
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/blog-grid/"
                                        className="px-5 py-4 pb-0 block hover:text-primary-main relative group/subItem transition-all hover:pl-7"
                                      >
                                        <FontAwesomeIcon
                                          icon="chevron-right"
                                          className="absolute h-[12px] w-[12px] top-1/2 opacity-0 left-0 -translate-y-1/2 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:ease-menu group-hover/subItem:delay-100 group-hover/subItem:duration-300"
                                        />
                                        Blog Grid
                                      </Link>
                                    </li>
                                  </ul>
                                </CollapsibleContent>
                              </Collapsible>
                            </Link>
                          </li>
                          <li className="group relative">
                            <Link
                              href="/contact/"
                              className="py-3 block relative after:transition-transform duration-300 ease-in-out border-b border-white"
                            >
                              Contact
                            </Link>
                          </li>
                        </ul>
                      </SheetDescription>
                    </SheetHeader>
                  </div>
                </SheetContent>
              </Sheet>
              <nav className="navbar navbar-default">
                <button type="button" className="hidden">
                  <i className="sr-only">Toggle navigation</i>

                  <span className="icon-bar"></span>

                  <span className="icon-bar"></span>

                  <span className="icon-bar"></span>
                </button>

                <ul className="xl:gap-8 lg:gap-4 hidden lg:flex">
                  <li className="group">
                    <Link
                      href="/"
                      className="py-7 pr-4 block relative after:transition-transform duration-300 ease-in-out after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main group-hover:after:scale-x-100"
                    >
                      Home
                      <FontAwesomeIcon
                        icon="chevron-down"
                        className="absolute top-1/2 -translate-y-1/2 right-0 w-2.5"
                      />
                    </Link>
                    <ul
                      className="absolute bg-background lg:min-w-52 top-full rounded-b-lg divide-y divide-[#29374a] opacity-0 scale-y-0 origin-top-left group-hover:opacity-100 group-hover:scale-y-100 transition ease-menu delay-100 duration-500  z-10"
                      role="list"
                    >
                      <li>
                        <Link
                          href="/"
                          className="px-5 py-4 block hover:text-primary-main relative group/subItem transition-all hover:pl-7"
                        >
                          <FontAwesomeIcon
                            icon="chevron-right"
                            className="absolute h-[12px] w-[12px] top-1/2 opacity-0 left-0 -translate-y-1/2 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:ease-menu group-hover/subItem:delay-100 group-hover/subItem:duration-300"
                          />
                          Home 1
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/home-2/"
                          className="px-5 py-4 block hover:text-primary-main relative group/subItem transition-all hover:pl-7"
                        >
                          <FontAwesomeIcon
                            icon="chevron-right"
                            className="absolute h-[12px] w-[12px] top-1/2 opacity-0 left-0 -translate-y-1/2 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:ease-menu group-hover/subItem:delay-100 group-hover/subItem:duration-300"
                          />
                          Home2
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="group">
                    <Link
                      href="/who-we-are/"
                      className="py-7 block relative after:transition-transform duration-300 ease-in-out after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main group-hover:after:scale-x-100"
                    >
                      Who We Are
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href="#"
                      className="py-7 pr-4 block relative after:transition-transform duration-300 ease-in-out after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main group-hover:after:scale-x-100"
                    >
                      Practice Areas
                      <FontAwesomeIcon
                        icon="chevron-down"
                        className="absolute top-1/2 -translate-y-1/2 right-0 w-2.5"
                      />
                    </Link>
                    <ul
                      className="absolute bg-background lg:min-w-52 top-full rounded-b-lg divide-y divide-[#29374a] opacity-0 scale-y-0 origin-top-left group-hover:opacity-100 group-hover:scale-y-100 transition ease-menu delay-100 duration-500  z-10"
                      role="list"
                    >
                      <li>
                        <Link
                          href="/practice-areas-2-column/"
                          className="px-5 py-4 block hover:text-primary-main relative group/subItem transition-all hover:pl-7"
                        >
                          <FontAwesomeIcon
                            icon="chevron-right"
                            className="absolute h-[12px] w-[12px] top-1/2 opacity-0 left-0 -translate-y-1/2 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:ease-menu group-hover/subItem:delay-100 group-hover/subItem:duration-300"
                          />
                          2 Column Layout
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/practice-areas-3-column-layout/"
                          className="px-5 py-4 block hover:text-primary-main relative group/subItem transition-all hover:pl-7"
                        >
                          <FontAwesomeIcon
                            icon="chevron-right"
                            className="absolute h-[12px] w-[12px] top-1/2 opacity-0 left-0 -translate-y-1/2 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:ease-menu group-hover/subItem:delay-100 group-hover/subItem:duration-300"
                          />
                          3 Column Layout
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/single-practice-area/"
                          className="px-5 py-4 block hover:text-primary-main relative group/subItem transition-all hover:pl-7"
                        >
                          <FontAwesomeIcon
                            icon="chevron-right"
                            className="absolute h-[12px] w-[12px] top-1/2 opacity-0 left-0 -translate-y-1/2 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:ease-menu group-hover/subItem:delay-100 group-hover/subItem:duration-300"
                          />
                          Individual Practice Area
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="group">
                    <Link
                      href="#"
                      className="py-7 pr-4 block relative after:transition-transform duration-300 ease-in-out after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main group-hover:after:scale-x-100"
                    >
                      Team Members
                      <FontAwesomeIcon
                        icon="chevron-down"
                        className="absolute top-1/2 -translate-y-1/2 right-0 w-2.5"
                      />
                    </Link>
                    <ul
                      className="absolute bg-background lg:min-w-52 top-full rounded-b-lg divide-y divide-[#29374a] opacity-0 scale-y-0 origin-top-left group-hover:opacity-100 group-hover:scale-y-100 transition ease-menu delay-100 duration-500  z-10"
                      role="list"
                    >
                      <li>
                        <Link
                          href="/single-team-member/"
                          className="px-5 py-4 block hover:text-primary-main relative group/subItem transition-all hover:pl-7"
                        >
                          <FontAwesomeIcon
                            icon="chevron-right"
                            className="absolute h-[12px] w-[12px] top-1/2 opacity-0 left-0 -translate-y-1/2 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:ease-menu group-hover/subItem:delay-100 group-hover/subItem:duration-300"
                          />
                          Robert Darren
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="group relative">
                    <Link
                      href="#"
                      className="py-7 pr-4 block relative after:transition-transform duration-300 ease-in-out after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main group-hover:after:scale-x-100"
                    >
                      Pages
                      <FontAwesomeIcon
                        icon="chevron-down"
                        className="absolute top-1/2 -translate-y-1/2 right-0 w-2.5"
                      />
                    </Link>
                    <ul
                      className="absolute bg-background lg:min-w-52 top-full rounded-b-lg divide-y divide-[#29374a] opacity-0 scale-y-0 origin-top-left group-hover:opacity-100 group-hover:scale-y-100 transition ease-menu delay-100 duration-500  z-10"
                      role="list"
                    >
                      <li>
                        <Link
                          href="/faqs/"
                          className="px-5 py-4 block hover:text-primary-main relative group/subItem transition-all hover:pl-7"
                        >
                          <FontAwesomeIcon
                            icon="chevron-right"
                            className="absolute h-[12px] w-[12px] top-1/2 opacity-0 left-0 -translate-y-1/2 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:ease-menu group-hover/subItem:delay-100 group-hover/subItem:duration-300"
                          />
                          Faqs
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/404/"
                          className="px-5 py-4 block hover:text-primary-main relative group/subItem transition-all hover:pl-7"
                        >
                          <FontAwesomeIcon
                            icon="chevron-right"
                            className="absolute h-[12px] w-[12px] top-1/2 opacity-0 left-0 -translate-y-1/2 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:ease-menu group-hover/subItem:delay-100 group-hover/subItem:duration-300"
                          />
                          404 Page
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="group relative">
                    <Link
                      href="#"
                      className="py-7 pr-4 block relative after:transition-transform duration-300 ease-in-out after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main group-hover:after:scale-x-100"
                    >
                      Blog
                      <FontAwesomeIcon
                        icon="chevron-down"
                        className="absolute top-1/2 -translate-y-1/2 right-0 w-2.5"
                      />
                    </Link>
                    <ul
                      className="absolute bg-background lg:min-w-52 lg:right-0 top-full rounded-b-lg divide-y divide-[#29374a] opacity-0 scale-y-0 origin-top-left group-hover:opacity-100 group-hover:scale-y-100 transition ease-menu delay-100 duration-500  z-10"
                      role="list"
                    >
                      <li>
                        <Link
                          href="/blog/"
                          className="px-5 py-4 block hover:text-primary-main relative group/subItem transition-all hover:pl-7"
                        >
                          <FontAwesomeIcon
                            icon="chevron-right"
                            className="absolute h-[12px] w-[12px] top-1/2 opacity-0 left-0 -translate-y-1/2 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:ease-menu group-hover/subItem:delay-100 group-hover/subItem:duration-300"
                          />
                          Blog With Sidebar
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog-full-page/"
                          className="px-5 py-4 block hover:text-primary-main relative group/subItem transition-all hover:pl-7"
                        >
                          <FontAwesomeIcon
                            icon="chevron-right"
                            className="absolute h-[12px] w-[12px] top-1/2 opacity-0 left-0 -translate-y-1/2 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:ease-menu group-hover/subItem:delay-100 group-hover/subItem:duration-300"
                          />
                          Blog Full page
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/blog-chess-style/"
                          className="px-5 py-4 block hover:text-primary-main relative group/subItem transition-all hover:pl-7"
                        >
                          <FontAwesomeIcon
                            icon="chevron-right"
                            className="absolute h-[12px] w-[12px] top-1/2 opacity-0 left-0 -translate-y-1/2 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:ease-menu group-hover/subItem:delay-100 group-hover/subItem:duration-300"
                          />
                          Blog Chess Style
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog-grid/"
                          className="px-5 py-4 block hover:text-primary-main relative group/subItem transition-all hover:pl-7"
                        >
                          <FontAwesomeIcon
                            icon="chevron-right"
                            className="absolute h-[12px] w-[12px] top-1/2 opacity-0 left-0 -translate-y-1/2 group-hover/subItem:left-[10px] group-hover/subItem:opacity-100 group-hover/subItem:transition group-hover/subItem:ease-menu group-hover/subItem:delay-100 group-hover/subItem:duration-300"
                          />
                          Blog Grid
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="group relative">
                    <Link
                      href="/contact/"
                      className="py-7 block relative after:transition-transform duration-300 ease-in-out after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main group-hover:after:scale-x-100"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="hidden">
              <div
                id="op-main-menu"
                className="collapse navbar-collapse op-menu"
              >
                <ul id="menu-main-menu-1" className="nav navbar-nav">
                  <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-1607">
                    <a href="#">
                      Home<i className="fa fa-chevron-down"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-7 current_page_item menu-item-10">
                        <a href="http://bsmthemes.com/demo/lawyero/">
                          Home 1<i className="fa fa-chevron-down"></i>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1606">
                        <a href="http://bsmthemes.com/demo/lawyero/home2/">
                          Home2<i className="fa fa-chevron-down"></i>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-326">
                    <a href="http://bsmthemes.com/demo/lawyero/who-we-are/">
                      Who We Are<i className="fa fa-chevron-down"></i>
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1273">
                    <a href="#">
                      Practice Areas<i className="fa fa-chevron-down"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1275">
                        <a href="http://bsmthemes.com/demo/lawyero/practice-areas-2-column/">
                          2 Column Layout<i className="fa fa-chevron-down"></i>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1274">
                        <a href="http://bsmthemes.com/demo/lawyero/practice-areas-3-column-layout/">
                          3 Column Layout<i className="fa fa-chevron-down"></i>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-opus_our_services menu-item-1280">
                        <a href="http://bsmthemes.com/demo/lawyero/our-services/family-law/">
                          Individual Practice Area
                          <i className="fa fa-chevron-down"></i>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-854">
                    <a href="#">
                      Team Members<i className="fa fa-chevron-down"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-opus_team menu-item-1281">
                        <a href="http://bsmthemes.com/demo/lawyero/member/robert/">
                          Robert Darren<i className="fa fa-chevron-down"></i>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1394">
                    <a href="#">
                      Pages<i className="fa fa-chevron-down"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1420">
                        <a href="http://bsmthemes.com/demo/lawyero/faqs/">
                          FAQs<i className="fa fa-chevron-down"></i>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1395">
                        <a href="http://bsmthemes.com/demo/lawyero/404">
                          404 Page<i className="fa fa-chevron-down"></i>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1611">
                    <a href="#">
                      Blog<i className="fa fa-chevron-down"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-538">
                        <a href="http://bsmthemes.com/demo/lawyero/blog/">
                          Blog With Sidebar
                          <i className="fa fa-chevron-down"></i>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1610">
                        <a href="http://bsmthemes.com/demo/lawyero/blog-full-page/">
                          Blog Full Page<i className="fa fa-chevron-down"></i>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1620">
                        <a href="http://bsmthemes.com/demo/lawyero/blog-chess-style/">
                          Blog Chess Style<i className="fa fa-chevron-down"></i>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1615">
                        <a href="http://bsmthemes.com/demo/lawyero/blog-grid/">
                          Blog Grid<i className="fa fa-chevron-down"></i>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-494">
                    <a href="http://bsmthemes.com/demo/lawyero/contact/">
                      Contact<i className="fa fa-chevron-down"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
