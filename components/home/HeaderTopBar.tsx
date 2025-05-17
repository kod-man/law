import Link from "next/link";
import ContactDetails from "./ContactDetails";

const HeaderTopBar = () => (
  <div className="container py-2">
    <div className="flex flex-wrap justify-center sm:justify-between gap-y-2">
      <ContactDetails />
      <Link
        href="#"
        className="px-4 py-2 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
      >
        Bize Danışın
      </Link>
    </div>
  </div>
);

export default HeaderTopBar;
