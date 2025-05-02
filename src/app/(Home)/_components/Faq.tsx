"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What features does GravityX offer?",
    answer:
      "GravityX offers a comprehensive suite of features including advanced analytics, real-time collaboration tools, customizable dashboards, automated reporting, integration with popular third-party services, and dedicated customer support. Our platform is designed to streamline your workflow and enhance productivity across your organization.",
  },
  {
    question: "How can GravityX benefit my organization?",
    answer:
      "GravityX can transform your organization by reducing manual processes, improving data visibility, enabling better decision-making, and fostering collaboration. Our clients typically see a 30% increase in productivity and a significant reduction in operational costs within the first three months of implementation.",
  },
  {
    question: "Is GravityX suitable for small businesses or large enterprises?",
    answer:
      "GravityX is designed to scale with your business needs. We offer tailored solutions for organizations of all sizes, from startups to Fortune 500 companies. Our flexible pricing model ensures you only pay for what you need, making it accessible for small businesses while providing the robust capabilities required by large enterprises.",
  },
  {
    question: "Is GravityX customizable to fit our specific needs?",
    answer:
      "Absolutely. GravityX is highly customizable with modular components that can be tailored to your specific industry requirements. Our professional services team works closely with you to configure the platform to match your unique workflows, branding, and business processes. We also offer an API for deeper integrations with your existing systems.",
  },
  {
    question: "How secure is the data stored on GravityX?",
    answer:
      "Security is our top priority. GravityX employs end-to-end encryption, regular security audits, and follows industry best practices for data protection. We are compliant with major regulations including GDPR, HIPAA, and SOC 2. All data is stored in secure, redundant data centers with 99.9% uptime guarantee.",
  },
  {
    question: "GravityX employs end-to-end encryption, ensuring that data.",
    answer:
      "Our end-to-end encryption ensures that your data is protected at every stage - during transmission, processing, and storage. We use AES-256 encryption, the same standard used by financial institutions and government agencies. Additionally, we implement strict access controls, regular security updates, and continuous monitoring to protect against potential threats.",
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
