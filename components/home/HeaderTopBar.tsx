import { CalendarIcon, MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import ButtonCustom from "../global/button";

const contactDetails = [
  {
    icon: <PhoneIcon className="w-5 h-5" />,
    content: <Link href="tel:5310876275">531 087 6275</Link>,
  },
  {
    icon: <MailIcon className="w-5 h-5" />,
    content: <span>pusulahukuk@gmail.com</span>,
  },
  {
    icon: <CalendarIcon className="w-5 h-5" />,
    content: <p>Pazar - Cuma 08:00 - 18:00</p>,
  },
];

export default function HeaderTopBar() {
  return (
    <div className="w-full bg-white text-sm py-3 px-4 sm:px-10 flex flex-col sm:flex-row sm:justify-between items-center gap-4">
      {/* Contact info */}
      <div className="flex flex-wrap items-center gap-4 justify-center sm:justify-start">
        {contactDetails.map(({ icon, content }, idx) => (
          <div key={idx} className="flex items-center gap-2 whitespace-nowrap">
            {icon}
            {content}
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center sm:justify-end w-full sm:w-auto">
        <ButtonCustom href="" text="Bize Ulaşın" />
      </div>
    </div>
  );
}
