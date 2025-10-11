import Image, { StaticImageData } from "next/image";

import PrimaryHeadline from "@/components/global/primary-headline";
import { TeamMembersProps } from "@/types";

import { FacebookIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

interface MemberDetailsProps {
  lawyer: TeamMembersProps | undefined;
}

const MemberDetails = ({ lawyer }: MemberDetailsProps) => {
  return (
    <div className="w-full">
      <div className="py-16 lg:py-20 mx-20">
        <div className="flex flex-wrap gap-8 lg:flex-nowrap justify-around w-full">
          <div className="basis-full lg:basis-[30%] flex flex-col justify-around h-full">
            <div className="w-[600px] aspect-[3/2] relative">
              <Image
                src={lawyer?.image as StaticImageData}
                alt="Home Firm Image"
                className="rounded-md object-cover"
                style={{ maxHeight: "500px" }}
              />
            </div>
          </div>
          <div className="basis-full lg:basis-[70%]">
            <PrimaryHeadline
              text="Biyografi"
              additionalClass="primary-headline-left"
            />
            <div className="text-base text-[#333]">
              <p className="mb-6">{lawyer?.info}</p>
            </div>
            <ul className="flex items-center justify-start gap-3 py-3 ">
              <ul className="flex gap-2">
                {lawyer?.facebookLink && (
                  <li>
                    <Link
                      href={lawyer.facebookLink}
                      target="_blank"
                      aria-label="Facebook"
                      className="block p-1 rounded-full bg-white border border-gray-200 shadow-md transition-transform duration-200 hover:scale-110 hover:bg-primary-main hover:text-white"
                    >
                      <FacebookIcon size={18} />
                    </Link>
                  </li>
                )}

                {lawyer?.linkedinLink && (
                  <li>
                    <Link
                      href={lawyer.linkedinLink}
                      target="_blank"
                      aria-label="LinkedIn"
                      className="block p-1 rounded-full bg-white border border-gray-200 shadow-md transition-transform duration-200 hover:scale-110 hover:bg-primary-main hover:text-white"
                    >
                      <LinkedinIcon size={18} />
                    </Link>
                  </li>
                )}
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetails;
