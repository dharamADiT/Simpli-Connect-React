import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is SimpliConnect?",
    answer:
      "SimpliConnect is a platform that helps students, employees, and entrepreneurs compare banking services like loans, credit cards, schemes, scholarships, and offers from SBI, Federal Bank, and Canara Bank.",
  },
  {
    question: "How does SimpliConnect help me choose the right bank?",
    answer:
      "We simplify bank comparisons by showing benefits, interest rates, offers, and schemes in one place so users can make informed and confident financial decisions.",
  },
  {
    question: "Who can use SimpliConnect?",
    answer:
      "Anyone! But currently, our primary users are students, employees, and entrepreneurs looking for the best banking options.",
  },
  {
    question: "Is the information accurate?",
    answer:
      "Yes, we collect data from official bank sources and update it regularly to ensure accuracy.",
  },
  {
    question: "Is SimpliConnect free to use?",
    answer:
      "Yes! Our platform is completely free. We provide information to help users make better decisions without any cost.",
  },
  {
    question: "Will more banks be added in the future?",
    answer:
      "Absolutely. We plan to expand SimpliConnect with more banks, more services, and advanced comparison tools.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-5 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 underline tracking-wide">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-xl  bg-gray-800 transition-all"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left text-lg font-medium"
            >
              {faq.question}
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* Dropdown Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 p-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-400">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
