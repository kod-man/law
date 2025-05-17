import logo from "@/public/assets/logo.jpeg";
import Image from "next/image";
import Link from "next/link";
import DesktopMenu from "./DesktopMenu";
import HeaderTopBar from "./HeaderTopBar";
import MobileMenu from "./MobileMenu";

const HeaderMainBar = () => (
  <div className="relative bg-grey-bg ">
    <div className="border-2 w-full flex">
      {/* 🔹 Desktop görünüm */}
      <div className="hidden lg:flex items-start justify-between w-full py-4">
        {/* Logo - Sol köşe */}
        <div className="shrink-0 pl-10">
          <Link href="/" className="block">
            <Image src={logo} alt="Logo" width={166} height={30} />
          </Link>
        </div>

        {/* Menü - Ortada */}
        <div>
          <DesktopMenu />
        </div>

        {/* İletişim Bilgileri - Sağda dikey */}
        <div className="flex flex-col items-end gap-2 text-sm pr-10">
          <HeaderTopBar />
        </div>
      </div>

      {/* 🔸 Mobil görünüm */}
      <div className="flex lg:hidden items-center justify-between min-h-[80px]">
        <Link href="/" className="shrink-0 py-5">
          <Image src={logo} alt="Logo" width={166} height={30} />
        </Link>
        <MobileMenu />
      </div>
    </div>
  </div>
);

export default HeaderMainBar;
