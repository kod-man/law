import { ContactForm } from "@/components/global/ContactForm";
import InnerBanner from "@/components/global/inner-banner";
import PrimaryHeadline from "@/components/global/primary-headline";
import { MapPin, PhoneCallIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Lawyero",
  description: "Your one stop solution for legal matters",
};

const page = () => {
  return (
    <>
      <InnerBanner text="İletişim" />
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12039.360564556615!2d29.093552015798637!3d40.969707968065094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac726c39a52f7%3A0x2f3c72d4e9859aef!2sPusula%20Hukuk!5e0!3m2!1str!2str!4v1716746618434!5m2!1str!2str"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="relative basis-full pb-20 pr-0 pt-16 before:z-[-1] lg:basis-2/3 lg:pr-12 lg:pt-24">
              <PrimaryHeadline
                text="Danışmanlık Randevusu Alın"
                additionalClass="text-3xl primary-headline-left"
                headlineType="h3"
              />
              <p className="mb-5 text-base leading-7 text-[#333]">
                Danışmanlık için bizi arayın veya aşağıdaki formu doldurun.
                Temsilcilerimizden biri 24 saat içinde size geri dönecektir.
              </p>
              <ContactForm />
            </div>
            <div className="relative basis-full pb-16 pt-0 lg:basis-1/3 lg:pb-20 lg:pt-24">
              <PrimaryHeadline
                text="İletişime Geçin"
                additionalClass="text-3xl primary-headline-left"
                headlineType="h3"
              />
              <ul>
                <li className="mb-[10px] flex items-center">
                  <PhoneCallIcon size={15} className="text-primary-main" />
                  <a
                    className="ml-2 inline-block text-base text-background"
                    href="tel:1911-462-242"
                  >
                    531-087-6275
                  </a>
                </li>
                <li className="mb-[10px] flex items-center">
                  <PhoneCallIcon size={15} className="text-primary-main" />
                  <a
                    className="ml-2 inline-block text-base text-background"
                    href="#"
                  >
                    531-087-6276
                  </a>
                </li>
              </ul>
              <div>
                <div className="mt-7">
                  <h3 className="mb-5 text-2xl font-bold text-[#333]">Adres</h3>
                  <div className="flex">
                    <MapPin size={15} className="mt-1 text-primary-main" />
                    <p className="pl-2 text-background">
                      Kozyatağı, Nevzat Bulut Sk. Birlik Apt. No: 3 A Blok Kat.1
                      Daire:2, <br /> 34742, Kadıköy/İstanbul.
                    </p>
                  </div>
                </div>
                <div className="mt-7">
                  <h3 className="mb-5 text-2xl font-bold text-[#333]">
                    E-posta
                  </h3>
                  <div className="flex">
                    <MapPin size={15} className="mt-1 text-primary-main" />
                    <p className="pl-2 text-background">
                      pusulahukuk@gmail.com
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="mb-7 mt-8 text-2xl font-bold text-[#333]">
                    Çalışma Saatleri
                  </h3>
                  <ul className="text-base leading-6 text-[#313131]">
                    <li className="relative flex border-b border-[#313131] py-4">
                      <span className="w-1/2 font-bold">
                        Pazartesi-Cumartesi
                      </span>
                      <span className="w-1/2 text-right">9:00 - 18:00</span>
                    </li>

                    <li className="relative flex py-4">
                      <span className="w-1/2 font-bold">Pazar</span>
                      <span className="w-1/2 text-right">Kapalı</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
