import homeblog1 from "@/public/assets/home-blog-1.jpg";
import sideblog1 from "@/public/assets/blog-side-bar-1.jpg";
import sideblog2 from "@/public/assets/blog-side-bar-2.jpg";
import sideblog3 from "@/public/assets/blog-side-bar-3.jpg";
import sideblog4 from "@/public/assets/blog-side-bar-4.jpg";
import sideblog5 from "@/public/assets/blog-side-bar-5.jpg";
import sideblog6 from "@/public/assets/blog-side-bar-6.jpg";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const page = () => {
  return (
    <>
      <div className="relative py-[90px]">
        <div className="container">
          <div className="flex lg:flex-nowrap flex-wrap">
            <div className="lg:basis-[70%] basis-full lg:pr-8 pr-0">
              <div className="mb-12 pb-12 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[150px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1]">
                <Image src={homeblog1} alt="Home BLog Post" className="" />
                <div className=" bg-white">
                  <h2 className="my-6">
                    <Link
                      href="#"
                      className="inline-block text-[32px] leading-9 text-background font-bold cursor-pointer hover:text-primary-main capitalize"
                    >
                      When to seek legal help? Important to know whens
                    </Link>
                  </h2>
                  <ul className="flex pb-6">
                    <li className="flex items-center mr-5">
                      <FontAwesomeIcon icon="calendar-day" className="w-4" />
                      <Link
                        className="text-base text-[#313131] hover:text-primary-main pl-2"
                        href="#"
                      >
                        December 25, 2024
                      </Link>
                    </li>
                    <li className="flex items-center  mr-5">
                      <FontAwesomeIcon icon="user" className="w-4" />
                      <Link
                        className="text-base text-[#313131] hover:text-primary-main pl-2"
                        href="mailto:adminlawyerowpadmin"
                      >
                        adminlawyerowpadmin
                      </Link>
                    </li>
                    <li className="text-base text-[#313131] flex items-center  mr-5">
                      <FontAwesomeIcon icon="comment" className="w-4" />
                      <span className="pl-2">No Comments</span>
                    </li>
                  </ul>
                  <ul className="flex pb-5">
                    <li>
                      <Link
                        href=""
                        className="text-base text-primary-main pr-1"
                      >
                        Child Custody
                      </Link>
                      ,
                    </li>
                    <li className="ml-1">
                      <Link
                        href="#"
                        className="text-base text-primary-main pr-1"
                      >
                        Family Law
                      </Link>
                      ,
                    </li>
                    <li className="ml-1">
                      <Link
                        href="#"
                        className="text-base text-primary-main pr-1"
                      >
                        Infomatics
                      </Link>
                      ,
                    </li>
                    <li className="ml-1">
                      <Link
                        href="#"
                        className="text-base text-primary-main pr-1"
                      >
                        Legal Advise
                      </Link>
                      ,
                    </li>
                    <li className="ml-1">
                      <Link
                        href="#"
                        className="text-base text-primary-main pr-1"
                      >
                        {" "}
                        News
                      </Link>
                      ,
                    </li>
                  </ul>
                  <p className="text-base text-[#333] leading-[1.62] mb-4">
                    Many people are not aware of their legal rights and dont pay
                    attention to the helping hand they can get from legal
                    advise. Therefore it is very important to know that you are
                    aware of your rights and seek legal help when needed.
                  </p>
                  <p className="text-base text-[#333] leading-[1.62] mb-4">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using ‘Content here, content here’, making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for ‘lorem ipsum’ will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>
                  <h3 className="text-[32px] text-[#333] font-bold pr-12 mb-3">
                    What To Do First When Encounter An Accident?
                  </h3>
                  <p className="text-base text-[#333] leading-[1.62] mb-4">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don’t
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn’t
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet. It uses a dictionary of over 200
                    Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.
                    The generated Lorem Ipsum is therefore always free from
                    repetition, injected humour, or non-characteristic words
                    etc.
                  </p>
                  <div>
                    <h3 className="text-2xl mb-4 text-[#333] font-bold">
                      Tags:
                    </h3>
                    <ul className="flex">
                      <li>
                        <Link
                          href="#"
                          className="inline-block text-base leading-[1.62] font-semibold hover:text-primary-main hover:underline mr-3 pr-3 relative before:absolute before:top-[11px] before:-right-[2.5px] before:h-[5px] before:bg-primary-main before:rounded-full before:w-[5px] before:content-['']"
                        >
                          Accident
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="inline-block text-base leading-[1.62] font-semibold hover:text-primary-main hover:underline mr-3 pr-3 relative before:absolute before:top-[11px] before:-right-[2.5px] before:h-[5px] before:bg-primary-main before:rounded-full before:w-[5px] before:content-['']"
                        >
                          Attorney
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="inline-block text-base leading-[1.62] font-semibold hover:text-primary-main hover:underline"
                        >
                          Law
                        </Link>
                      </li>
                    </ul>
                    <Link
                      href="#"
                      className="text-base text-white capitalize bg-background py-3 px-4 inline-block font-semibold mt-6"
                    >
                      Prev Post
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-[32px] pb-3 mb-7 font-bold text-background relative before:absolute before:bottom-0 before:left-0 before:w-[150px] before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[40px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1]">
                  Leave A Reply
                </h3>
                <p className="text-base text-[#333] mb-5">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <form action="">
                  <label
                    htmlFor="tmessage"
                    className="text-base leading-[1.62] font-bold text-[#333]"
                  >
                    Comment
                    <textarea
                      id="tmessage"
                      className="px-4 py-2 w-full text-background border-[2px] border-[#e8e6e6] h-24 resize-none mb-6 mt-1"
                    ></textarea>
                  </label>
                  <label
                    htmlFor="name"
                    className="text-base leading-[1.62] font-bold text-[#333]"
                  >
                    Name *
                    <input
                      id="name"
                      className="px-4 py-2 w-full text-background border-[2px] border-[#e8e6e6] mt-1 mb-6"
                    ></input>
                  </label>
                  <label
                    htmlFor="email"
                    className="text-base leading-[1.62] font-bold text-[#333]"
                  >
                    Email *
                    <input
                      id="email"
                      className="px-4 py-2 w-full text-background border-[2px] border-[#e8e6e6] mt-1 mb-6"
                    ></input>
                  </label>
                  <label
                    htmlFor="website"
                    className="text-base leading-[1.62] font-bold text-[#333]"
                  >
                    Website
                    <input
                      id="website"
                      className="px-4 py-2 w-full text-background border-[2px] border-[#e8e6e6] mt-1 mb-6"
                    ></input>
                  </label>
                  <div className="pt-3">
                    <label>
                      <input type="checkbox" />
                      <span className="inline-block text-base text-[#333] leading-[1.62] font-bold pl-3">
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </span>
                    </label>
                  </div>
                  <div className="pt-6">
                    <label htmlFor="submit">
                      <input
                        type="button"
                        value="Post Comment"
                        className="text-base font-bold bg-primary-main uppercase text-white border-[1px] px-7 py-4 hover:border-primary-main hover:bg-white hover:text-primary-main transition-colors ease-in duration-300"
                      />
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div className="lg:basis-[30%] basis-full lg:pt-0 pt-20">
              <div className="relative">
                <FontAwesomeIcon
                  icon="search"
                  className="w-5 text-background absolute right-4 top-1/2 -translate-y-1/2"
                />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full h-12 text-[#1a2431] border-2 border-[#e8e6e6] py-4 px-3"
                />
              </div>
              <div className="mt-12">
                <h3 className="text-[32px] pb-3 mb-7 font-bold text-primary-main relative before:absolute before:bottom-0 before:left-0 before:w-[150px] before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[40px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1]">
                  Categories
                </h3>
                <ul>
                  <li className="py-4 pl-5 relative border-b-[1px] border-[#313131]">
                    <Link
                      href="#"
                      className="text-base leading-6 text-[#313131] hover:text-primary-main"
                    >
                      <FontAwesomeIcon
                        icon="chevron-right"
                        className="w-3 h-[15px] absolute top-1/2 left-0 translate-y-[-50%] font-bold"
                      />
                      Child Custody
                    </Link>
                  </li>

                  <li className="py-4 pl-5 relative border-b-[1px] border-[#313131]">
                    <Link
                      href="#"
                      className="text-base leading-6 text-[#313131] hover:text-primary-main"
                    >
                      <FontAwesomeIcon
                        icon="chevron-right"
                        className="w-3 h-[15px] absolute top-1/2 left-0 translate-y-[-50%] font-bold"
                      />
                      Family Law
                    </Link>
                  </li>

                  <li className="py-4 pl-5 relative border-b-[1px] border-[#313131]">
                    <Link
                      href="#"
                      className="text-base leading-6 text-[#313131] hover:text-primary-main"
                    >
                      <FontAwesomeIcon
                        icon="chevron-right"
                        className="w-3 h-[15px] absolute top-1/2 left-0 translate-y-[-50%] font-bold"
                      />
                      Infomatics
                    </Link>
                  </li>

                  <li className="py-4 pl-5 relative border-b-[1px] border-[#313131]">
                    <Link
                      href="#"
                      className="text-base leading-6 text-[#313131] hover:text-primary-main"
                    >
                      <FontAwesomeIcon
                        icon="chevron-right"
                        className="w-3 h-[15px] absolute top-1/2 left-0 translate-y-[-50%] font-bold"
                      />
                      Legal Advise
                    </Link>
                  </li>
                  <li className="py-4 pl-5 relative">
                    <Link
                      href="#"
                      className="text-base leading-6 text-[#313131] hover:text-primary-main"
                    >
                      <FontAwesomeIcon
                        icon="chevron-right"
                        className="w-3 h-[15px] absolute top-1/2 left-0 translate-y-[-50%] font-bold"
                      />
                      News
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mt-12">
                <h3 className="text-[32px] pb-3 mb-7 font-bold text-primary-main relative before:absolute before:bottom-0 before:left-0 before:w-[150px] before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[40px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1]">
                  Recent <span className="text-background">Posts</span>
                </h3>
                <ul>
                  <li className="py-4 pl-5 relative border-b-[1px] border-[#313131]">
                    <Link
                      href="#"
                      className="text-base leading-6 text-[#313131] hover:text-primary-main"
                    >
                      <FontAwesomeIcon
                        icon="chevron-right"
                        className="w-3 h-[15px] absolute top-7 left-0 translate-y-[-50%] font-bold"
                      />
                      When To Seek Legal Help? Important To Know When
                    </Link>
                  </li>
                  <li className="py-4 pl-5 relative border-b-[1px] border-[#313131]">
                    <Link
                      href="#"
                      className="text-base leading-6 text-[#313131] hover:text-primary-main"
                    >
                      <FontAwesomeIcon
                        icon="chevron-right"
                        className="w-3 h-[15px] absolute top-7 left-0 translate-y-[-50%] font-bold"
                      />
                      Seek Immediate Legal Advice When Most Needed
                    </Link>
                  </li>
                  <li className="py-4 pl-5 relative border-b-[1px] border-[#313131]">
                    <Link
                      href="#"
                      className="text-base leading-6 text-[#313131] hover:text-primary-main"
                    >
                      <FontAwesomeIcon
                        icon="chevron-right"
                        className="w-3 h-[15px] absolute top-7 left-0 translate-y-[-50%] font-bold"
                      />
                      What It Takes To Be A Lawyer (The Untold Story)
                    </Link>
                  </li>
                  <li className="py-4 pl-5 relative border-b-[1px] border-[#313131]">
                    <Link
                      href="#"
                      className="text-base leading-6 text-[#313131] hover:text-primary-main"
                    >
                      <FontAwesomeIcon
                        icon="chevron-right"
                        className="w-3 h-[15px] absolute top-7 left-0 translate-y-[-50%] font-bold"
                      />
                      US Government Provides Emergency Help
                    </Link>
                  </li>
                  <li className="py-4 pl-5 relative">
                    <Link
                      href="#"
                      className="text-base leading-6 text-[#313131] hover:text-primary-main"
                    >
                      <FontAwesomeIcon
                        icon="chevron-right"
                        className="w-3 h-[15px] absolute top-7 left-0 translate-y-[-50%] font-bold"
                      />
                      Can The Police Search My Car For Drugs Based On Suspicion
                      Only?
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <h3 className="text-[32px] pb-3 mb-7 font-bold text-primary-main relative before:absolute before:bottom-0 before:left-0 before:w-[150px] before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[40px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1]">
                  Recent <span className="text-background">Tags</span>
                </h3>
                <ul className="flex">
                  <li>
                    <Link
                      className="inline-block mr-2 hover:bg-white hover:text-primary-main text-[19px] border-2 border-primary-main font-bold bg-primary-main text-white py-[14px] px-4"
                      href=""
                    >
                      Accident
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="inline-block mr-2 hover:bg-white hover:text-primary-main text-[19px] border-2 border-primary-main font-bold bg-primary-main text-white py-[14px] px-4"
                      href=""
                    >
                      Attorney
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="inline-block mr-2 hover:bg-white hover:text-primary-main text-[19px] border-2 border-primary-main font-bold bg-primary-main text-white py-[14px] px-4"
                      href=""
                    >
                      Law
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12">
                <h3 className="text-[32px] pb-3 mb-7 font-bold text-primary-main relative before:absolute before:bottom-0 before:left-0 before:w-[150px] before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[40px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1]">
                  About <span className="text-background">Lawyero</span>
                </h3>
                <p className="text-base text-[#333]">
                  We never take that trust for granted. We learn our clients’
                  needs and expectations; we communicate openly; we follow up
                  frequently; we respond timely; and we are always available. In
                  short, we develop a relationship with our clients. Our
                  clients’ goals become our goals. We provide aggressive and
                  professional legal representation to every client in order to
                  ensure his or her issue is resolved in the best possible
                  manner.
                </p>
              </div>

              <div className="mt-12">
                <h3 className="text-[32px] pb-3 mb-7 font-bold text-primary-main relative before:absolute before:bottom-0 before:left-0 before:w-[150px] before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[40px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1]">
                  Browse <span className="text-background">Our Gallery</span>
                </h3>
                <ul className="lg:flex grid flex-wrap justify-between grid-cols-3 lg:gap-0 gap-5">
                  <li className="lg:basis-[30%] basis-1/3 mb-2">
                    <Link className="inline-block lg:h-[105px] h-full lg:w-[105px] w-full" href="#">
                      <Image
                        src={sideblog1}
                        alt="BLog Post Img"
                        className="w-full h-full"
                      />
                    </Link>
                  </li>
                  <li className="lg:basis-[30%] basis-1/3 mb-2">
                    <Link className="inline-block lg:h-[105px] h-full lg:w-[105px] w-full" href="#">
                      <Image
                        src={sideblog2}
                        alt="BLog Post Img"
                        className="w-full h-full"
                      />
                    </Link>
                  </li>
                  <li className="lg:basis-[30%] basis-1/3 mb-2">
                    <Link className="inline-block lg:h-[105px] h-full lg:w-[105px] w-full" href="#">
                      <Image
                        src={sideblog3}
                        alt="BLog Post Img"
                        className="w-full h-full"
                      />
                    </Link>
                  </li>
                  <li className="lg:basis-[30%] basis-1/3 mb-2">
                    <Link className="inline-block lg:h-[105px] h-full lg:w-[105px] w-full" href="#">
                      <Image
                        src={sideblog4}
                        alt="BLog Post Img"
                        className="w-full h-full"
                      />
                    </Link>
                  </li>
                  <li className="lg:basis-[30%] basis-1/3 mb-2">
                    <Link className="inline-block lg:h-[105px] h-full lg:w-[105px] w-full" href="#">
                      <Image
                        src={sideblog5}
                        alt="BLog Post Img"
                        className="w-full h-full"
                      />
                    </Link>
                  </li>
                  <li className="lg:basis-[30%] basis-1/3 mb-2">
                    <Link className="inline-block lg:h-[105px] h-full lg:w-[105px] w-full" href="#">
                      <Image
                        src={sideblog6}
                        alt="BLog Post Img"
                        className="w-full h-full"
                      />
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mt-10">
                <h3 className="text-[32px] pb-3 mb-7 font-bold text-primary-main relative before:absolute before:bottom-0 before:left-0 before:w-[150px] before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[40px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1]">
                  Archives
                </h3>
                <ul>
                  <li className="py-4 pl-5 relative">
                    <Link
                      href="#"
                      className="text-base leading-6 text-[#313131] hover:text-primary-main"
                    >
                      <FontAwesomeIcon
                        icon="chevron-right"
                        className="w-3 h-[15px] absolute top-1/2 left-0 translate-y-[-50%] font-bold"
                      />
                      December 2024
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10">
                <h3 className="text-[32px] pb-3 mb-7 font-bold text-primary-main relative before:absolute before:bottom-0 before:left-0 before:w-[150px] before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[40px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1]">
                  Meta <span className="text-background">Menu</span>
                </h3>
                <ul>
                  <li className="py-4 pl-5 relative border-b-[1px] border-[#313131]">
                    <Link
                      href="#"
                      className="text-base leading-6 text-[#313131] hover:text-primary-main"
                    >
                      <FontAwesomeIcon
                        icon="chevron-right"
                        className="w-3 h-[15px] absolute top-1/2 left-0 translate-y-[-50%] font-bold"
                      />
                      Log In
                    </Link>
                  </li>

                  <li className="py-4 pl-5 relative border-b-[1px] border-[#313131]">
                    <Link
                      href="#"
                      className="text-base leading-6 text-[#313131] hover:text-primary-main"
                    >
                      <FontAwesomeIcon
                        icon="chevron-right"
                        className="w-3 h-[15px] absolute top-1/2 left-0 translate-y-[-50%] font-bold"
                      />
                      Entries RSS
                    </Link>
                  </li>

                  <li className="py-4 pl-5 relative border-b-[1px] border-[#313131]">
                    <Link
                      href="#"
                      className="text-base leading-6 text-[#313131] hover:text-primary-main"
                    >
                      <FontAwesomeIcon
                        icon="chevron-right"
                        className="w-3 h-[15px] absolute top-1/2 left-0 translate-y-[-50%] font-bold"
                      />
                      Comments RSS
                    </Link>
                  </li>

                  <li className="py-4 pl-5 relative border-b-[1px] border-[#313131]">
                    <Link
                      href="#"
                      className="text-base leading-6 text-[#313131] hover:text-primary-main"
                    >
                      <FontAwesomeIcon
                        icon="chevron-right"
                        className="w-3 h-[15px] absolute top-1/2 left-0 translate-y-[-50%] font-bold"
                      />
                      WordPress.Org
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
