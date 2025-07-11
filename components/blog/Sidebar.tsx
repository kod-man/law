import { blogCategories, blogPosts, blogTags } from "@/lib/data";
import Link from "next/link";
import React from "react";
import PrimaryHeadline from "../global/primary-headline";
import { Input } from "../ui/input";
import { ChevronRight, SearchIcon } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="basis-full pt-20 lg:basis-[30%] lg:pt-0">
      <div className="relative">
        <SearchIcon
          size={20}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-background"
        />
        <Input
          type="text"
          placeholder="Search"
          className="h-12 w-full rounded-none border-2 border-[#e8e6e6] bg-white px-3 py-4 text-[#1a2431] focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>
      <div className="mt-12">
        <PrimaryHeadline
          text="Kategoriler"
          headlineType="h3"
          additionalClass="text-[32px] primary-headline-left"
        />
        <ul>
          {blogCategories.map((item) => (
            <li
              className="relative border-b border-[#313131] py-4 pl-6"
              key={item.id}
            >
              <Link
                href={`/blog/category/${item.id}`}
                className="text-base leading-6 text-[#313131] hover:text-primary-main"
              >
                <ChevronRight
                  size={20}
                  className="absolute left-0 top-1/2 -translate-y-1/2 font-bold"
                />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <PrimaryHeadline
          text="Güncel Makaleler"
          headlineType="h3"
          additionalClass="text-[32px] primary-headline-left text-background"
          formatTwoColor
        />
        <ul>
          {blogPosts.slice(0, 5).map((item) => (
            <li
              className="relative border-b border-[#313131] py-4 pl-6"
              key={item.id}
            >
              <Link
                href="#"
                className="text-base leading-6 text-[#313131] hover:text-primary-main"
              >
                <ChevronRight
                  size={20}
                  className="absolute left-0 top-[30px] -translate-y-1/2 font-bold"
                />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <PrimaryHeadline
          text="Güncel Etiketler"
          headlineType="h3"
          additionalClass="text-[32px] primary-headline-left text-background"
          formatTwoColor
        />
        <ul className="flex">
          {blogTags.map((item) => (
            <li key={item.id}>
              <Link
                className="mr-2 inline-block border-2 border-primary-main bg-primary-main px-4 py-[14px] text-[19px] font-bold text-white hover:bg-white hover:text-primary-main"
                href={`/blog/tag/${item.id}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-12">
        <PrimaryHeadline
          text="Pusula Hukuk Bürosu’na Dair"
          headlineType="h3"
          additionalClass="text-[32px] primary-headline-left text-background"
          formatTwoColor
        />
        <p className="text-base text-[#333]">
          Pusula Hukuk, bireysel ve kurumsal müvekkillerine şeffaf, güvenilir ve
          çözüm odaklı hukuk hizmeti sunmak amacıyla kurulmuş bir hukuk
          bürosudur. İş hukuku başta olmak üzere, ticaret hukuku, borçlar
          hukuku, sosyal güvenlik hukuku ve tüketici hukuku gibi çeşitli
          alanlarda danışmanlık ve dava takibi hizmetleri sunmaktayız. Her
          müvekkilin ihtiyacına özel yaklaşım geliştirerek, hukuki süreci etkin
          şekilde yönetmeyi ilke ediniyoruz.
          <p>
            Deneyimli ve dinamik ekibimiz, hukuki gelişmeleri yakından takip
            ederek her dosyada en güncel bilgileri temel alır. Amacımız sadece
            uyuşmazlık çözmek değil; müvekkillerimizin gelecekte
            karşılaşabileceği riskleri de öngörerek proaktif çözümler
            üretmektir. Etik değerlere bağlı, erişilebilir ve kalıcı çözümler
            sunan bir hukuk anlayışıyla yanınızdayız.
          </p>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
