import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header className="font-albert z-10">
      <div className="container py-2">
        <div className="flex justify-between">
          <div>
            Call Us:
            <Link className="font-bold" href="tel:1911462242">
              1911-462-242
            </Link>
          </div>
          <Link href="#" className="font-bold">
            Request a free consultation
          </Link>
        </div>
      </div>
      <div className="bg-background relative">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="py-5">
              <Link href="/">
                <Image src={logo} alt="Logo" width={166} height={30} />
              </Link>
            </div>
            <div className="text-white">
              <nav className="navbar navbar-default">
                <button type="button" className="hidden">
                  <i className="sr-only">Toggle navigation</i>

                  <span className="icon-bar"></span>

                  <span className="icon-bar"></span>

                  <span className="icon-bar"></span>
                </button>

                <ul className="flex gap-8">
                  <li className="group">
                    <Link
                      href="/"
                      className="py-7 block relative after:transition-transform duration-300 ease-in-out after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main group-hover:after:scale-x-100"
                    >
                      Home{" "}
                      <FontAwesomeIcon icon="chevron-down" className="hidden" />
                    </Link>
                    <ul
                      className="2xl:absolute bg-background min-w-52 top-full rounded-b-lg divide-y divide-[#29374a] opacity-0 scale-y-0 origin-top-left group-hover:opacity-100 group-hover:scale-y-100 transition ease-menu delay-100 duration-500  z-10"
                      role="list"
                    >
                      <li>
                        <Link href="/" className="px-5 py-4 block">
                          Home 1
                        </Link>
                      </li>
                      <li>
                        <Link href="/home2/" className="px-5 py-4 block">
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
                      className="py-7 block relative after:transition-transform duration-300 ease-in-out after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main group-hover:after:scale-x-100"
                    >
                      Practice Areas
                    </Link>
                    <ul
                      className="2xl:absolute bg-background min-w-52 top-full rounded-b-lg divide-y divide-[#29374a] opacity-0 scale-y-0 origin-top-left group-hover:opacity-100 group-hover:scale-y-100 transition ease-menu delay-100 duration-500  z-10"
                      role="list"
                    >
                      <li>
                        <Link href="/practice-area/" className="px-5 py-4 block">
                          2 Column Layout
                        </Link>
                      </li>
                      <li>
                        <Link href="practice-area-3column" className="px-5 py-4 block">
                          3 Column Layout
                        </Link>
                      </li>
                    </ul>
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
