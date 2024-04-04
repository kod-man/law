import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

import homefirmimage from "@/public/assets/home-member1.jpg";
import PrimaryHeadline from "@/components/global/primary-headline";
import { IconName } from "@fortawesome/fontawesome-svg-core";

const memberSocialLinks: { name: string; link: string; icon: IconName }[] = [
  {
    name: "Facebook",
    link: "#",
    icon: "facebook",
  },
  {
    name: "Twitter",
    link: "#",
    icon: "twitter",
  },
  {
    name: "LinkedIn",
    link: "#",
    icon: "linkedin-in",
  },
  {
    name: "Youtube",
    link: "#",
    icon: "youtube",
  },
];

const MemberDetails = () => {
  return (
    <div className="container pt-20 pb-20">
      <div className="flex gap-8">
        <div className="basis-[30%]">
          <Image
            src={homefirmimage}
            alt="Home Firm Image"
            className="rounded-md"
          />
          <ul className="flex justify-center items-center py-5">
            {memberSocialLinks.map((link) => (
              <li className="w-8 ml-3" key={link.name}>
                <Link href={link.link}>
                  <FontAwesomeIcon
                    className="text-background hover:text-primary-main hover:transition-all"
                    icon={["fab", link.icon]}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="basis-[70%]">
          <PrimaryHeadline
            text="About Attorney"
            additionalClass="primary-headline-left"
          />
          <div className="text-base text-[#333]">
            <p className="mb-6">
              Robert has been practicing law for last 13 years and have been
              very successful in getting his clients the protection within the
              jurisdictions of Law.
            </p>
            <p className="mb-6">
              Robert earned his Juris Doctorate from Villanova University School
              of Law in Villanova, Pennsylvania in 2001. He earned his
              undergraduate degree from Denison University in 1998, having
              studied Philosophy with additional emphasis in ancient political
              thought. While at Villanova University School of Law, Robert
              served as a summer associate at Greenberg Traurig in Los Angeles,
              California as well as the Editor of Outside Articles of the
              Villanova University School of Law Environmental Law Journal.
            </p>
            <p className="mb-6">
              Mr. Robert is a firm believer of the fact that in order to be able
              to succeed in this industry you have to dedicate your time, work
              and emotions for the clients to get the best result out and
              keeping the clients in a state of mind that they ca
            </p>
            <p className="mb-6">
              He has helped his clients recover over $150,000 in various cases
              and has nearly perfect success ratio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetails;
