import { PAData, slugify } from "@/lib/data";
import logo from "@/public/assets/logo.svg";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="bg-background">
        <div className="container pb-14 pt-20">
          <div className="flex flex-wrap gap-8 lg:flex-nowrap">
            <div className="basis-full lg:basis-1/3">
              <div>
                <Link href="/">
                  <Image src={logo} alt="Logo" width={166} height={30} />
                </Link>
                <div className="mt-5 pb-7">
                  <p className="text-sm leading-6 text-white">
                    Pusula Hukuk Bürosu, alanında seçkin, yetkin hukukçulardan
                    oluşan kadrosu ve saygınlığından ödün vermeyen kurumsal
                    yapısıyla hukukun farklı pek çok alanında faaliyet
                    göstermektedir.
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-full lg:basis-1/3">
              <h3 className="mb-6 text-3xl font-bold text-white text-center">
                Faaliyet Alanlarımız
              </h3>
              <div className="grid grid-cols-2 gap-1">
                {PAData.map((pa) => (
                  <a
                    key={pa.title}
                    href={`/faaliyet-alanlarimiz/${slugify(pa.title)}`}
                    className="p-2 text-sm text-gray-100 cursor-pointer relative inline-block transition-all duration-300 hover:underline hover:underline-offset-4"
                  >
                    {pa.title}
                  </a>
                ))}
              </div>
            </div>

            <div className="basis-full lg:basis-1/3">
              <h3 className="mb-6 text-3xl font-bold text-white">
                <span className="font-bold text-[#14cab4]">Bize </span> Ulaşın
              </h3>
              <ul className="text-sm leading-6 text-white">
                <li className="relative my-2 flex pl-5">
                  <ChevronRight
                    size={15}
                    className="absolute left-0 top-1/2 -translate-y-1/2"
                  />
                  <span className="w-1/2 font-bold">Pazartesi</span>
                  <span className="w-1/2 text-right">08:00 - 17:30</span>
                </li>
                <li className="relative my-2 flex pl-5">
                  <ChevronRight
                    size={15}
                    className="absolute left-0 top-1/2 -translate-y-1/2"
                  />
                  <span className="w-1/2 font-bold">Salı</span>
                  <span className="w-1/2 text-right">08:00 - 17:30</span>
                </li>
                <li className="relative my-2 flex pl-5">
                  <ChevronRight
                    size={15}
                    className="absolute left-0 top-1/2 -translate-y-1/2"
                  />
                  <span className="w-1/2 font-bold">Çarşamba</span>
                  <span className="w-1/2 text-right">08:00 - 17:30</span>
                </li>
                <li className="relative my-2 flex pl-5">
                  <ChevronRight
                    size={15}
                    className="absolute left-0 top-1/2 -translate-y-1/2"
                  />
                  <span className="w-1/2 font-bold">Perşembe</span>
                  <span className="w-1/2 text-right">08:00 - 17:30</span>
                </li>
                <li className="relative my-2 flex pl-5">
                  <ChevronRight
                    size={15}
                    className="absolute left-0 top-1/2 -translate-y-1/2"
                  />
                  <span className="w-1/2 font-bold">Cuma</span>
                  <span className="w-1/2 text-right">08:00 - 17:30</span>
                </li>
                <li className="relative my-2 flex pl-5">
                  <ChevronRight
                    size={15}
                    className="absolute left-0 top-1/2 -translate-y-1/2"
                  />
                  <span className="w-1/2 font-bold">Cumartesi</span>
                  <span className="w-1/2 text-right">08:00 - 17:30</span>
                </li>
                <li className="relative my-2 flex pl-5">
                  <ChevronRight
                    size={15}
                    className="absolute left-0 top-1/2 -translate-y-1/2"
                  />
                  <span className="w-1/2 font-bold">Pazar</span>
                  <span className="w-1/2 text-right">Kapalı</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-main py-7">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center">
            <div className="basis-full text-center">
              <p className="text-sm leading-6 text-white">
                &copy; Pusula Hukuk 2025. Tüm Hakları Saklıdır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
