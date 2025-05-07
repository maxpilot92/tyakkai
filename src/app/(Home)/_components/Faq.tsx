"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What services does Tyakkai Solutions offer?",
    answer:
      "Tyakkai Solutions provides a comprehensive range of digital marketing services, including SEO optimization, social media management, content marketing, Google Ads, and graphic & web design.",
  },
  {
    question: "Where is Tyakkai Solutions located?",
    answer:
      "Tyakkai Solutions is based in Kathmandu, Nepal, specifically at KMC-10, Shankhamul.",
  },
  {
    question: "How can I contact Tyakkai Solutions?",
    answer:
      "You can reach out via phone at 015920722 or email at tyakkaisolutions@gmail.com. They also offer a contact form on their website for inquiries.",
  },
  {
    question: "What industries has Tyakkai Solutions worked with?",
    answer:
      "Tyakkai Solutions has collaborated with various sectors, including education (e.g., Focus Academy, Moves International,  AAIC, etc), and other companies like Liberty Microlife, Dhanwantari Ayurvedic Hospital, Lawanya International and many more. ",
  },
  {
    question: "Does Tyakkai Solutions provide SEO services in Nepal?",
    answer:
      "Yes, Tyakkai Solutions specializes in SEO optimization services tailored for businesses in Nepal, aiming to enhance online visibility and search engine rankings.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" w-full bg-gray-50 rounded-lg p-6 px-14 ">
      <div className="text-center px-4 lg:px-0">
        <h1 className="mx-auto text-5xl font-medium text-black dark:text-white max-w-[550px] pt-28">
          Have a question? We are here to answer.
        </h1>
      </div>

      <div
        style={{
          letterSpacing: "-1px",
          fontSize: "14px",
          lineHeight: "140%",
        }}
        className="space-y-0 divide-y divide-gray-200 "
      >
        {faqData.map((faq, index) => (
          <div key={index} className="py-4">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center w-full text-left py-2 focus:outline-none"
            >
              <h3 className="text-2xl font-medium text-gray-900 ">
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 ml-2 cursor-pointer"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M11 0L12.5556 9.44437L22 11L12.5556 12.5556L11 22L9.44437 12.5556L0 11L9.44437 9.44437L11 0Z"
                    fill="#101010"
                  />
                </svg>
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                  style={{
                    letterSpacing: "0px",
                  }}
                >
                  <div className="pt-4 pb-2 pr-8 text-gray-600">
                    {faq.answer}
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
