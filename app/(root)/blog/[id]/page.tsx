import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { URLParams } from "@/types";
import { blogCategories, blogPosts, blogTags } from "@/lib/data";
import { formatDate } from "@/lib/utilFunctons";

import Sidebar from "@/components/blog/Sidebar";
const page = ({ params }: URLParams) => {
  return (
    <>
      <div className="relative py-[90px]">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="basis-[70%] pr-8">
              <div className="mb-12 pb-12 relative before:absolute before:bottom-0 before:left-0">
                {blogPosts
                  .filter((item) => item.id === +params.id)
                  .map((filteredItem) => (
                    <div key={filteredItem.id}>
                      <Image
                        src={filteredItem.featuredImage.node.mediaItem}
                        alt="Home BLog Post"
                        className=""
                      />
                      <div className=" bg-white">
                        <h2 className="my-6 text-[32px] leading-9 text-background font-bold capitalize">
                          {filteredItem.title}
                        </h2>
                        <ul className="flex pb-6">
                          <li className="flex items-center mr-5">
                            <FontAwesomeIcon
                              icon="calendar-day"
                              className="w-4"
                            />
                            <span className="text-base text-[#313131] pl-2">
                              {formatDate(filteredItem.date)}
                            </span>
                          </li>
                          <li className="flex items-center  mr-5">
                            <FontAwesomeIcon icon="user" className="w-4" />
                            <Link
                              className="text-base text-[#313131] hover:text-primary-main pl-2"
                              href="#"
                            >
                              {filteredItem.author}
                            </Link>
                          </li>
                          <li className="text-base text-[#313131] flex items-center  mr-5">
                            <FontAwesomeIcon icon="comment" className="w-4" />
                            <span className="pl-2">
                              {filteredItem.comments} Comments
                            </span>
                          </li>
                        </ul>
                        <ul className="flex pb-5">
                          {blogCategories.map((item, index) => (
                            <li key={item.id}>
                              <Link
                                href={`/blog/category/${item.id}`}
                                className="text-base text-primary-main pr-1"
                              >
                                {item.title}
                              </Link>
                              {blogCategories.length - 1 !== index && (
                                <span className="pr-1">|</span>
                              )}
                            </li>
                          ))}
                        </ul>
                        <p className="text-base text-[#333] leading-[1.62] mb-4">
                          Many people are not aware of their legal rights and
                          dont pay attention to the helping hand they can get
                          from legal advise. Therefore it is very important to
                          know that you are aware of your rights and seek legal
                          help when needed.
                        </p>
                        <p className="text-base text-[#333] leading-[1.62] mb-4">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using ‘Content here, content
                          here’, making it look like readable English. Many
                          desktop publishing packages and web page editors now
                          use Lorem Ipsum as their default model text, and a
                          search for ‘lorem ipsum’ will uncover many web sites
                          still in their infancy. Various versions have evolved
                          over the years, sometimes by accident, sometimes on
                          purpose (injected humour and the like).
                        </p>
                        <h3 className="text-[32px] text-[#333] font-bold pr-12 mb-3">
                          What To Do First When Encounter An Accident?
                        </h3>
                        <p className="text-base text-[#333] leading-[1.62] mb-4">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don’t look even slightly believable. If you are
                          going to use a passage of Lorem Ipsum, you need to be
                          sure there isn’t anything embarrassing hidden in the
                          middle of text. All the Lorem Ipsum generators on the
                          Internet tend to repeat predefined chunks as
                          necessary, making this the first true generator on the
                          Internet. It uses a dictionary of over 200 Latin
                          words, combined with a handful of model sentence
                          structures, to generate Lorem Ipsum which looks
                          reasonable. The generated Lorem Ipsum is therefore
                          always free from repetition, injected humour, or
                          non-characteristic words etc.
                        </p>
                        <div>
                          <h3 className="text-2xl mb-4 text-[#333] font-bold">
                            Tags:
                          </h3>
                          <ul className="flex">
                            {blogTags.map((item, index) => (
                              <li key={item.id}>
                                <Link
                                  href={`/blog/tag/${item.id}`}
                                  className={`inline-block text-base leading-[1.62] font-semibold hover:text-primary-main hover:underline mr-3 pr-3 relative ${
                                    blogTags.length - 1 !== index &&
                                    'before:absolute before:top-[11px] before:-right-[2.5px] before:h-[5px] before:bg-primary-main before:rounded-full before:w-[5px] before:content-[""]'
                                  }`}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
