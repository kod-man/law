import homeblog1 from "@/public/assets/home-blog-1.jpg";
import homeblog2 from "@/public/assets/home-blog-2.jpg";
import homeblog4 from "@/public/assets/home-blog-4.jpg";
import homeblog3 from "@/public/assets/home-blog-3.jpg";
import homeblog5 from "@/public/assets/home-blog-5.jpg";
import homeblog6 from "@/public/assets/home-blog-6.jpg";
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
              <div>
                <div className="mb-12 pb-12 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[150px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1] flex">
                  <div className="basis-1/2">
                    <Image
                      src={homeblog1}
                      alt="Home BLog Post"
                      className=""
                    />
                  </div>
                  <div className="basis-1/2 pl-8">
                    <div className=" bg-white">
                      <h3 className="mb-6">
                        <Link
                          href="#"
                          className="inline-block text-[32px] leading-9 text-background font-bold cursor-pointer hover:text-primary-main capitalize"
                        >
                          When to seek legal help? Important to know when
                        </Link>
                      </h3>
                      <ul className="flex pb-6 flex-wrap">
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
                        <li className="text-base text-[#313131] flex items-center pt-8  mr-5">
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
                </div>
              </div>
              <div>
                <div className="mb-12 pb-12 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[150px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1] flex">
                  <div className="basis-1/2">
                    <Image
                      src={homeblog2}
                      alt="Home BLog Post"
                      className=""
                    />
                  </div>
                  <div className="basis-1/2 pl-8">
                    <div className="bg-white">
                      <h3 className="mb-6">
                        <Link
                          href="#"
                          className="inline-block text-[32px] leading-9 text-background font-bold cursor-pointer hover:text-primary-main capitalize"
                        >
                          Seek Immediate Legal Advice When Most Needed
                        </Link>
                      </h3>
                      <ul className="flex pb-6 flex-wrap">
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
                        <li className="text-base text-[#313131] flex items-center pt-8 mr-5">
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
                </div>
              </div>
              <div>
                <div className="mb-12 pb-12 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[150px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1] flex">
                  <div className="basis-1/2">
                    <Image
                        src={homeblog3}
                        alt="Home BLog Post"
                        className=""
                      />
                  </div>
                  <div className="basis-1/2 pl-8">
                    <div className=" bg-white">
                      <h3 className="mb-6">
                        <Link
                          href="#"
                          className="inline-block text-[32px] leading-9 text-background font-bold cursor-pointer hover:text-primary-main capitalize"
                        >
                          What It Takes To Be A Lawyer (The Untold Story)
                        </Link>
                      </h3>
                      <ul className="flex pb-6 flex-wrap">
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
                        <li className="text-base text-[#313131] flex items-center pt-8 mr-5">
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
                </div>
              </div>
              <div>
                <div className="mb-12 pb-12 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[150px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1] flex">
                  <div className="basis-1/2">
                    <Image
                      src={homeblog4}
                      alt="Home BLog Post"
                      className=""
                    />
                  </div>
                  <div className="basis-1/2 pl-8">
                    <div className=" bg-white">
                      <h3 className="my-6">
                        <Link
                          href="#"
                          className="inline-block text-[32px] leading-9 text-background font-bold cursor-pointer hover:text-primary-main capitalize"
                        >
                          US Government Provides Emergency Help
                        </Link>
                      </h3>
                      <ul className="flex pb-6 flex-wrap">
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
                        <li className="text-base text-[#313131] flex items-center pt-8 mr-5">
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
                </div>
              </div>
              <div>
                <div className="mb-12 pb-12 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[150px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1] flex">
                  <div className="basis-1/2">
                    <Image
                      src={homeblog5}
                      alt="Home BLog Post"
                      className=""
                    />
                  </div>
                  <div className="basis-1/2 pl-8">
                    <div className=" bg-white">
                      <h3 className="my-6">
                        <Link
                          href="#"
                          className="inline-block text-[32px] leading-9 text-background font-bold cursor-pointer hover:text-primary-main capitalize"
                        >
                          Can The Police Search My Car For Drugs Based On Suspicion Only?
                        </Link>
                      </h3>
                      <ul className="flex pb-6 flex-wrap">
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
                        <li className="text-base text-[#313131] flex items-center pt-8 mr-5">
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
                </div>
              </div>
              <div>
                <div className="mb-12 pb-12 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:content-[''] before:bg-background after:absolute after:content-[''] after:w-[150px] after:h-[3px] after:bg-primary-main after:bottom-0 after:left-0 after:z-[1] flex">
                  <div className="basis-1/2">
                    <Image
                      src={homeblog6}
                      alt="Home BLog Post"
                      className=""
                    />
                  </div>
                  <div className="basis-1/2 pl-8">
                    <div className=" bg-white">
                      <h3 className="my-6">
                        <Link
                          href="#"
                          className="inline-block text-[32px] leading-9 text-background font-bold cursor-pointer hover:text-primary-main capitalize"
                        >
                          Five Things To Consider After An Accident
                        </Link>
                      </h3>
                      <ul className="flex pb-6 flex-wrap">
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
                        <li className="text-base text-[#313131] flex items-center pt-8 mr-5">
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
        </div>
      </div>

      
    </>
  );
};

export default page;
