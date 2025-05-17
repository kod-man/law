import { CalendarIcon, MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import ButtonCustom from "../global/button";

const contactDetails = [
  {
    icon: <PhoneIcon className="w-5 h-5" />,
    content: <Link href="tel:1911462242">5310876275</Link>,
  },
  {
    icon: <MailIcon className="w-5 h-5" />,
    content: <span>pusulahukuk@gmail.com</span>,
  },
  {
    icon: <CalendarIcon className="w-5 h-5" />,
    content: <p>Pazar-Cuma 08:00-18:00</p>,
  },
];

const HeaderTopBar = () => (
  <div className="flex flex-col items-end gap-2 text-sm">
    {/* Contact info */}
    <div className="flex flex-col items-end gap-1">
      {contactDetails.map(({ icon, content }, idx) => (
        <div key={idx} className="flex items-center gap-2">
          {icon}
          {content}
        </div>
      ))}
    </div>

    {/* CTA Button */}
    <ButtonCustom href="" text="Bize Ulasin" />
  </div>
);

export default HeaderTopBar;
