import logo from "@/public/assets/logo.jpeg";
import Image from "next/image";
import Link from "next/link";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const HeaderMainBar = () => (
  <div className="relative bg-grey-bg">
    <div className="container">
      <div className="flex min-h-[80px] items-center justify-between">
        <Link href="/" className="shrink-0 py-5">
          <Image src={logo} alt="Logo" width={166} height={30} />
        </Link>
        <div className="text-background flex items-center gap-6">
          {/* 👇 Here’s the MobileMenu for small screens */}
          <MobileMenu />
          {/* 👇 And the DesktopMenu for large screens */}
          <DesktopMenu />
        </div>
      </div>
    </div>
  </div>
);

export default HeaderMainBar;
