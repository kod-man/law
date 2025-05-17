"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp, CircleHelp } from "lucide-react";
import { useState } from "react";

interface FAQProp {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQProp) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6 pr-0 sm:basis-full lg:basis-1/2 lg:pr-6">
      <div
        className="flex cursor-pointer items-start"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CircleHelp
          size="30"
          className="mt-1 shrink-0 rounded-full bg-white text-primary-main"
        />
        <div className="pl-4 flex-1">
          <div className="flex justify-between items-center">
            <h3 className="mb-3 text-2xl font-bold text-background">
              {question}
            </h3>
            {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </div>

          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                key="answer"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-base text-[#333]">{answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
