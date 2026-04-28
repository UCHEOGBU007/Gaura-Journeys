import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export function FAQAccordion({ items, title, subtitle }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
      {title && (
        <div className="bg-[#173d8c] p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          {subtitle && <p className="text-blue-200 font-light">{subtitle}</p>}
        </div>
      )}

      <div className="p-6 md:p-10 space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl border transition-all duration-300 ${
              openIndex === index
                ? "border-blue-200 bg-blue-50/30"
                : "border-gray-100 bg-white hover:bg-gray-50"
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
            >
              <span
                className={`font-bold transition-colors ${openIndex === index ? "text-[#173d8c]" : "text-gray-700"}`}
              >
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-[#173d8c]" : "text-gray-400"}`}
              />
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-blue-100/50 mt-2 pt-4">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
