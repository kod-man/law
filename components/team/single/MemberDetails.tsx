import Image from "next/image";
import Link from "next/link";

import mustafa from "@/public/assets/home-member1.jpeg";
import adil from "@/public/assets/home-member2.jpeg";
import ilhan from "@/public/assets/home-member3.jpeg";
import PrimaryHeadline from "@/components/global/primary-headline";
import React from "react";
import { Facebook, LinkedinIcon } from "lucide-react";

const memberSocialLinks: {
  name: string;
  link: string;
  icon: React.ReactNode;
}[] = [
  {
    name: "Facebook",
    link: "#",
    icon: <Facebook size={30} />,
  },
  {
    name: "LinkedIn",
    link: "#",
    icon: <LinkedinIcon size={30} />,
  },
];

interface MemberDetailsProps {
  name: string;
}

const MemberDetails = ({ name }: MemberDetailsProps) => {
  return (
    <div className="w-full">
      <div className="py-16 lg:py-20 mx-20">
        <div className="flex flex-wrap gap-8 lg:flex-nowrap justify-around w-full">
          <div className="basis-full lg:basis-[30%] flex flex-col justify-around h-full">
            <div className="w-[500px] aspect-[3/2] relative">
              <Image
                src={mustafa}
                alt="Home Firm Image"
                fill
                className="rounded-md object-cover"
              />
            </div>
            <ul className="flex items-center justify-start gap-3 py-3 ">
              {memberSocialLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.link}
                    target="_blank"
                    aria-label={link.name}
                    className="block p-1 rounded-full bg-white border border-gray-200 shadow-md transition-transform duration-200 hover:scale-110 hover:bg-primary-main hover:text-white"
                  >
                    {React.cloneElement(link.icon as React.ReactElement, {
                      size: 18,
                    })}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="basis-full lg:basis-[70%]">
            <PrimaryHeadline
              text="Biyografi"
              additionalClass="primary-headline-left"
            />
            <div className="text-base text-[#333]">
              <p className="mb-6">
                Av. {name}, özel hukuk alanında uzmanlaşmış; özellikle ticaret
                hukuku, sözleşmeler hukuku ve şirketler hukuku konularında geniş
                tecrübeye sahip bir avukattır. İstanbul 2 No'lu Barosu'na
                kayıtlı olan {name.split(" ")[1] || name}, Türkçe ve İngilizce
                dillerinde hukuki danışmanlık sunmakta, müvekkillerine dava ve
                danışmanlık süreçlerinde çözüm odaklı destek sağlamaktadır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetails;
