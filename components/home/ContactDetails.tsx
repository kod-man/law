import { CalendarIcon, MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

const contactDetails = [
  {
    icon: <PhoneIcon className="w-5 h-5" />,
    content: (
      <Link
        href="tel:1911462242"
        className="font-bold inline-flex items-center gap-2"
      >
        5310876275
      </Link>
    ),
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

const ContactDetails = () => (
  <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
    {contactDetails.map(({ icon, content }, idx) => (
      <div key={idx} className="inline-flex items-center gap-2">
        {icon}
        {content}
      </div>
    ))}
  </div>
);

export default ContactDetails;
