import logo from "@/public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const HeaderMainBar = () => (
  <div className="relative bg-grey-bg ">
    <div className="w-full flex items-center">
      {/* 🔹 Desktop görünüm */}
      <div className="hidden lg:flex items-center justify-between w-full ">
        {/* Logo - Sol köşe */}
        <div className="shrink-0 pl-10">
          <Link href="/" className="block">
            <Image src={logo} alt="Logo" width={166} height={20} />
          </Link>
        </div>

        {/* Menü - Ortada */}
        <div>
          <DesktopMenu />
        </div>

        {/* İletişim Bilgileri - Sağda dikey */}
        <div className="flex flex-col items-end gap-2 text-sm pr-10"></div>
      </div>

      {/* 🔸 Mobil görünüm */}
      <div className="flex lg:hidden items-center justify-between min-h-[80px] w-full mx-4">
        <Link href="/" className="shrink-0 py-5">
          <Image src={logo} alt="Logo" width={166} height={30} />
        </Link>
        <MobileMenu />
      </div>
    </div>
  </div>
);

export default HeaderMainBar;
