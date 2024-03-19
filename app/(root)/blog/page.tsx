import homeblog1 from "@/public/assets/home-blog-1.jpg";
import homeblog2 from "@/public/assets/home-blog-2.jpg";
import homeblog4 from "@/public/assets/home-blog-4.jpg";
import homeblog5 from "@/public/assets/home-blog-5.jpg";
import homeblog6 from "@/public/assets/home-blog-6.jpg";
import sideblog1 from "@/public/assets/blog-side-bar-1.jpg";
import sideblog2 from "@/public/assets/blog-side-bar-2.jpg";
import sideblog3 from "@/public/assets/blog-side-bar-3.jpg";
import sideblog4 from "@/public/assets/blog-side-bar-4.jpg";
import sideblog5 from "@/public/assets/blog-side-bar-5.jpg";
import sideblog6 from "@/public/assets/blog-side-bar-6.jpg";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SecondaryButtonCustom from "@/components/global/secondary-button";


 


const page = () => {    
  return (
    <> 
    <div className="relative py-[90px]">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="basis-[70%] pr-8">
              <div className="mb-12 pb-12 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[150px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1]">
                <div className="overflow-hidden">
                  <Image
                    src={homeblog1}
                    alt="Home BLog Post"
                    className=""
                  />
                </div>
                <div className=" bg-white">
                  <h3 className="my-6">
                    <Link
                      href="#"
                      className="inline-block text-[32px] leading-9 text-background font-bold cursor-pointer hover:text-primary-main capitalize"
                    >
                      When to seek legal help? Important to know when
                    </Link>
                  </h3>
                  <ul className="flex pb-6">
                    <li className="flex items-center mr-5">
                      <FontAwesomeIcon
                        icon="calendar-day"
                        className="w-4"
                      />
                      <Link 
                        className="text-base text-[#313131] hover:text-primary-main pl-2"
                        href="#">
                        December 25, 2024
                      </Link>
                    </li>
                    <li className="flex items-center  mr-5">
                      <FontAwesomeIcon
                        icon="user"
                        className="w-4"
                      />
                      <Link 
                        className="text-base text-[#313131] hover:text-primary-main pl-2"
                        href="mailto:adminlawyerowpadmin">
                        adminlawyerowpadmin
                      </Link>
                    </li>
                    <li className="text-base text-[#313131] flex items-center  mr-5">
                      <FontAwesomeIcon
                        icon="comment"
                        className="w-4"
                      />
                      <span className="pl-2">No Comments</span>
                    </li>
                  </ul>
                  <p className="text-base text-[#333]">Many people are not aware of their legal rights and dont pay attention to the helping hand they can get from legal advise. Therefore it is very important to know that you are aware of …</p>
                  <div className="text-right pt-6">
                    <SecondaryButtonCustom href="#" text="Read More" />
                  </div>
                </div>
              </div>
              <div className="mb-12 pb-12 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[150px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1]">
                <div className="overflow-hidden">
                  <Image
                    src={homeblog2}
                    alt="Home BLog Post"
                    className=""
                  />
                </div>
                <div className=" bg-white">
                  <h3 className="my-6">
                    <Link
                      href="#"
                      className="inline-block text-[32px] leading-9 text-background font-bold cursor-pointer hover:text-primary-main capitalize"
                    >
                      Seek Immediate Legal Advice When Most Needed
                    </Link>
                  </h3>
                  <ul className="flex pb-6">
                    <li className="flex items-center mr-5">
                      <FontAwesomeIcon
                        icon="calendar-day"
                        className="w-4"
                      />
                      <Link 
                        className="text-base text-[#313131] hover:text-primary-main pl-2"
                        href="#">
                        December 25, 2024
                      </Link>
                    </li>
                    <li className="flex items-center  mr-5">
                      <FontAwesomeIcon
                        icon="user"
                        className="w-4"
                      />
                      <Link 
                        className="text-base text-[#313131] hover:text-primary-main pl-2"
                        href="mailto:adminlawyerowpadmin">
                        adminlawyerowpadmin
                      </Link>
                    </li>
                    <li className="text-base text-[#313131] flex items-center  mr-5">
                      <FontAwesomeIcon
                        icon="comment"
                        className="w-4"
                      />
                      <span className="pl-2">No Comments</span>
                    </li>
                  </ul>
                  <p className="text-base text-[#333]">Every person have suffered from violence at work, home, school or any other place at least once in their life time. Most people dont share their experiences as they think this will be inappropriate to …</p>
                  <div className="text-right pt-6">
                    <SecondaryButtonCustom href="#" text="Read More" />
                  </div>
                </div>
              </div>
              <div className="mb-12 pb-12 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[150px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1]">
                <div className="overflow-hidden">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/jIZY26GZWVY?si=ApYwcpmkvDIpUhjx" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
                <div className=" bg-white">
                  <h3 className="my-6">
                    <Link
                      href="#"
                      className="inline-block text-[32px] leading-9 text-background font-bold cursor-pointer hover:text-primary-main capitalize"
                    >
                      What It Takes To Be A Lawyer (The Untold Story)
                    </Link>
                  </h3>
                  <ul className="flex pb-6">
                    <li className="flex items-center mr-5">
                      <FontAwesomeIcon
                        icon="calendar-day"
                        className="w-4"
                      />
                      <Link 
                        className="text-base text-[#313131] hover:text-primary-main pl-2"
                        href="#">
                        December 25, 2024
                      </Link>
                    </li>
                    <li className="flex items-center  mr-5">
                      <FontAwesomeIcon
                        icon="user"
                        className="w-4"
                      />
                      <Link 
                        className="text-base text-[#313131] hover:text-primary-main pl-2"
                        href="mailto:adminlawyerowpadmin">
                        adminlawyerowpadmin
                      </Link>
                    </li>
                    <li className="text-base text-[#313131] flex items-center  mr-5">
                      <FontAwesomeIcon
                        icon="comment"
                        className="w-4"
                      />
                      <span className="pl-2">No Comments</span>
                    </li>
                  </ul>
                  <p className="text-base text-[#333]">In this short video it is discussed what it takes to be a lawyer. A lawyer’s life is not easy and it goes through several ups and downs. If is one moment up and another …</p>
                  <div className="text-right pt-6">
                    <SecondaryButtonCustom href="#" text="Read More" />
                  </div>
                </div>
              </div>
              <div className="mb-12 pb-12 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[150px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1]">
                <div className="overflow-hidden">
                  <Image
                    src={homeblog4}
                    alt="Home BLog Post"
                    className=""
                  />
                </div>
                <div className=" bg-white">
                  <h3 className="my-6">
                    <Link
                      href="#"
                      className="inline-block text-[32px] leading-9 text-background font-bold cursor-pointer hover:text-primary-main capitalize"
                    >
                      US Government Provides Emergency Help
                    </Link>
                  </h3>
                  <ul className="flex pb-6">
                    <li className="flex items-center mr-5">
                      <FontAwesomeIcon
                        icon="calendar-day"
                        className="w-4"
                      />
                      <Link 
                        className="text-base text-[#313131] hover:text-primary-main pl-2"
                        href="#">
                        December 25, 2024
                      </Link>
                    </li>
                    <li className="flex items-center  mr-5">
                      <FontAwesomeIcon
                        icon="user"
                        className="w-4"
                      />
                      <Link 
                        className="text-base text-[#313131] hover:text-primary-main pl-2"
                        href="mailto:adminlawyerowpadmin">
                        adminlawyerowpadmin
                      </Link>
                    </li>
                    <li className="text-base text-[#313131] flex items-center  mr-5">
                      <FontAwesomeIcon
                        icon="comment"
                        className="w-4"
                      />
                      <span className="pl-2">No Comments</span>
                    </li>
                  </ul>
                  <p className="text-base text-[#333]">Emergency can be caused anywhere and can happen to anybody. People in the US have Emergency coverage provided by the government but it involves filling your case with great attention and need to be persuaded …</p>
                  <div className="text-right pt-6">
                    <SecondaryButtonCustom href="#" text="Read More" />
                  </div>
                </div>
              </div>
              <div className="mb-12 pb-12 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[150px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1]">
                <div className="overflow-hidden">
                  <Image
                    src={homeblog5}
                    alt="Home BLog Post"
                    className=""
                  />
                </div>
                <div className=" bg-white">
                  <h3 className="my-6">
                    <Link
                      href="#"
                      className="inline-block text-[32px] leading-9 text-background font-bold cursor-pointer hover:text-primary-main capitalize"
                    >
                      Can The Police Search My Car For Drugs Based On Suspicion Only?
                    </Link>
                  </h3>
                  <ul className="flex pb-6">
                    <li className="flex items-center mr-5">
                      <FontAwesomeIcon
                        icon="calendar-day"
                        className="w-4"
                      />
                      <Link 
                        className="text-base text-[#313131] hover:text-primary-main pl-2"
                        href="#">
                        December 25, 2024
                      </Link>
                    </li>
                    <li className="flex items-center  mr-5">
                      <FontAwesomeIcon
                        icon="user"
                        className="w-4"
                      />
                      <Link 
                        className="text-base text-[#313131] hover:text-primary-main pl-2"
                        href="mailto:adminlawyerowpadmin">
                        adminlawyerowpadmin
                      </Link>
                    </li>
                    <li className="text-base text-[#313131] flex items-center  mr-5">
                      <FontAwesomeIcon
                        icon="comment"
                        className="w-4"
                      />
                      <span className="pl-2">No Comments</span>
                    </li>
                  </ul>
                  <p className="text-base text-[#333]">One of the most frequent situations in which people are arrested for drug possession is during a traffic stop in which a police officer searches a car for drugs and arrests one or more of …</p>
                  <div className="text-right pt-6">
                    <SecondaryButtonCustom href="#" text="Read More" />
                  </div>
                </div>
              </div>
              <div className="mb-12 pb-12 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[150px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1]">
                <div className="overflow-hidden">
                  <Image
                    src={homeblog6}
                    alt="Home BLog Post"
                    className=""
                  />
                </div>
                <div className=" bg-white">
                  <h3 className="my-6">
                    <Link
                      href="#"
                      className="inline-block text-[32px] leading-9 text-background font-bold cursor-pointer hover:text-primary-main capitalize"
                    >
                      Five Things To Consider After An Accident
                    </Link>
                  </h3>
                  <ul className="flex pb-6">
                    <li className="flex items-center mr-5">
                      <FontAwesomeIcon
                        icon="calendar-day"
                        className="w-4"
                      />
                      <Link 
                        className="text-base text-[#313131] hover:text-primary-main pl-2"
                        href="#">
                        December 25, 2024
                      </Link>
                    </li>
                    <li className="flex items-center  mr-5">
                      <FontAwesomeIcon
                        icon="user"
                        className="w-4"
                      />
                      <Link 
                        className="text-base text-[#313131] hover:text-primary-main pl-2"
                        href="mailto:adminlawyerowpadmin">
                        adminlawyerowpadmin
                      </Link>
                    </li>
                    <li className="text-base text-[#313131] flex items-center  mr-5">
                      <FontAwesomeIcon
                        icon="comment"
                        className="w-4"
                      />
                      <span className="pl-2">No Comments</span>
                    </li>
                  </ul>
                  <p className="text-base text-[#333]">Whenever you are involved in an accident always avoid giving any statement before contacting you attorney. Legal advise is really important in these matters and your initial reaction can be make or break for your …</p>
                  <div className="text-right pt-6">
                    <SecondaryButtonCustom href="#" text="Read More" />
                  </div>
                </div>
              </div>
              <div>
                <ul className="flex">
                  <li className="group h-12 w-12 border-2 border-background bg-white flex justify-center items-center hover:bg-background cursor-pointer mr-3">
                    <FontAwesomeIcon
                        icon="less-than"
                        className="w-3 text-background group-hover:text-white"
                      />
                  </li>
                  <li className="group h-12 w-12 border-2 border-background flex justify-center items-center bg-background cursor-pointer text-xl text-background text-white font-bold mr-3">
                    1
                  </li>
                  <li className="group h-12 w-12 border-2 border-background bg-white flex justify-center items-center hover:bg-background cursor-pointer text-xl text-background hover:text-white font-bold  mr-3">
                    2
                  </li>
                  <li className="group h-12 w-12 border-2 border-background bg-white flex justify-center items-center hover:bg-background cursor-pointer  mr-3">
                    <FontAwesomeIcon
                        icon="greater-than"
                        className="w-3 text-background group-hover:text-white"
                      />
                  </li>
                </ul>
              </div>
            </div>
            <div className="basis-[30%]">
              <div className="relative">
                <FontAwesomeIcon
                  icon="search"
                  className="w-5 text-background absolute right-4 top-1/2 -translate-y-1/2"
                />
                <input type="text" placeholder="Search" className="w-full h-12 text-[#1a2431] border-2 border-[#e8e6e6] py-4 px-3" />
              </div>
              <div className="mt-12">
                <h3 className="text-[32px] pb-3 mb-7 font-bold text-primary-main relative before:absolute before:bottom-0 before:left-0 before:w-[150px] before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[40px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1]">
                  Categories
                </h3>
                <ul>
                  <li className="py-4 pl-5 relative border-b-[1px] border-[#313131]">
                    <Link href="#"
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
                    <Link href="#"
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
                    <Link href="#"
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
                    <Link href="#"
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
                    <Link href="#"
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
                    <Link href="#"
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
                    <Link href="#"
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
                    <Link href="#"
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
                    <Link href="#"
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
                    <Link href="#"
                    className="text-base leading-6 text-[#313131] hover:text-primary-main"
                    >
                      <FontAwesomeIcon
                        icon="chevron-right"
                        className="w-3 h-[15px] absolute top-7 left-0 translate-y-[-50%] font-bold"
                      />
                        Can The Police Search My Car For Drugs Based On Suspicion Only?
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
                    href="">
                      Accident
                    </Link>
                  </li>
                  <li>
                    <Link
                    className="inline-block mr-2 hover:bg-white hover:text-primary-main text-[19px] border-2 border-primary-main font-bold bg-primary-main text-white py-[14px] px-4" 
                    href="">
                      Attorney
                    </Link>
                  </li>
                  <li>
                    <Link
                    className="inline-block mr-2 hover:bg-white hover:text-primary-main text-[19px] border-2 border-primary-main font-bold bg-primary-main text-white py-[14px] px-4" 
                    href="">
                      Law
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12">
                <h3 className="text-[32px] pb-3 mb-7 font-bold text-primary-main relative before:absolute before:bottom-0 before:left-0 before:w-[150px] before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[40px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1]">
                  About <span className="text-background">Lawyero</span>
                </h3>
                <p className="text-base text-[#333]">We never take that trust for granted. We learn our clients’ needs and expectations; we communicate openly; we follow up frequently; we respond timely; and we are always available. In short, we develop a relationship with our clients. Our clients’ goals become our goals. We provide aggressive and professional legal representation to every client in order to ensure his or her issue is resolved in the best possible manner.</p>
              </div>

              <div className="mt-12">
                <h3 className="text-[32px] pb-3 mb-7 font-bold text-primary-main relative before:absolute before:bottom-0 before:left-0 before:w-[150px] before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[40px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1]">
                  Browse <span className="text-background">Our Gallery</span>
                </h3>
                <ul className="flex flex-wrap justify-between">
                  <li className="basis-[30%] mb-2">
                    <Link
                    className="inline-block h-[105px] w-[105px]" 
                    href="#">
                      <Image
                        src={sideblog1}
                        alt="BLog Post Img"
                        className="w-full h-full"
                      />
                    </Link>
                  </li>
                  <li className="basis-[30%] mb-2">
                    <Link 
                    className="inline-block h-[105px] w-[105px]" 
                    href="#">
                      <Image
                        src={sideblog2}
                        alt="BLog Post Img"
                        className="w-full h-full"
                      />
                    </Link>
                  </li>
                  <li className="basis-[30%] mb-2">
                    <Link
                    className="inline-block h-[105px] w-[105px]"  
                    href="#">
                      <Image
                        src={sideblog3}
                        alt="BLog Post Img"
                        className="w-full h-full"
                      />
                    </Link>
                  </li>
                  <li className="basis-[30%] mb-2">
                    <Link
                    className="inline-block h-[105px] w-[105px]" 
                    href="#">
                      <Image
                        src={sideblog4}
                        alt="BLog Post Img"
                        className="w-full h-full"
                      />
                    </Link>
                  </li>
                  <li className="basis-[30%] mb-2">
                    <Link
                    className="inline-block h-[105px] w-[105px]" 
                    href="#">
                      <Image
                        src={sideblog5}
                        alt="BLog Post Img"
                        className="w-full h-full"
                      />
                    </Link>
                  </li>
                  <li className="basis-[30%] mb-2">
                    <Link
                    className="inline-block h-[105px] w-[105px]" 
                    href="#">
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
                    <Link href="#"
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
                  <li className="py-4 pl-5 relative">
                    <Link href="#"
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
                    <Link href="#"
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
                    <Link href="#"
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
                    <Link href="#"
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
