import { FAQsProps } from "@/lib/data";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "../ui/accordion";

const Accordions = ({ data }: { data: FAQsProps[] }) => {
  return (
    <Accordion className="pt-3" type="single" collapsible>
      {data.map((item) => (
        <AccordionItem
          className="border-b-0 mb-5"
          value={`item-${item.id}`}
          key={item.id}
        >
          <AccordionTrigger className="text-base text-background font-semibold py-2 px-4 border-2 border-background hover:no-underline rounded-md focus:bg-background focus:text-white text-left">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="mt-5 border-2 border-background rounded-md text-base leading-6 p-4 relative before:absolute before:-top-[22px] before:left-[30px] before:content-[''] before:bg-background before:w-[2px] before:h-5 after:absolute after:-top-[22px] after:right-[30px] after:content-[''] after:bg-background after:w-[2px] after:h-5">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Accordions;
