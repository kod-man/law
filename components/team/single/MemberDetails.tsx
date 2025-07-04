import Image from "next/image";
import Link from "next/link";

import homefirmimage from "@/public/assets/home-member1.jpeg";
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

const MemberDetails = () => {
  return (
    <div className="container py-16 lg:py-20">
      <div className="flex flex-wrap gap-8 lg:flex-nowrap">
        <div className="basis-full lg:basis-[30%]">
          <Image
            src={homefirmimage}
            alt="Home Firm Image"
            className="rounded-md"
          />
          <ul className="flex items-center justify-center py-5">
            {memberSocialLinks.map((link) => (
              <li className="ml-3 w-8" key={link.name}>
                <Link href={link.link} target="_blank">
                  {link.icon}
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
              Av. Mustafa Koyuncu, özel hukuk alanında uzmanlaşmış; özellikle
              ticaret hukuku, sözleşmeler hukuku ve şirketler hukuku konularında
              geniş tecrübeye sahip bir avukattır. İstanbul 2 No'lu Barosu’na
              kayıtlı olan Koyuncu, Türkçe ve İngilizce dillerinde hukuki
              danışmanlık sunmakta, müvekkillerine dava ve danışmanlık
              süreçlerinde çözüm odaklı destek sağlamaktadır.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetails;
