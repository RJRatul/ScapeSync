"use client";

import { useState } from "react";
import Container from "../ui/Container";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Is the app free to use?",
    answer:
      "Yes! We offer a free plan for individuals and small teams. Paid plans unlock more features for scaling businesses.",
  },
  {
    question: "Can I assign multiple employees to one job?",
    answer:
      "Yes, you can assign multiple employees to a single job. Our platform supports collaborative work assignments and team management.",
  },
  {
    question: "Does it work on both mobile and desktop?",
    answer:
      "Absolutely! ScapeSync is fully responsive and works seamlessly on mobile devices, tablets, and desktop computers.",
  },
  {
    question: "How secure is my data?",
    answer:
      "We use enterprise-grade security with 99.9% uptime guarantee and data protection to ensure your information is always safe.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-60 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-gray-600">
            Quick answers to help you get the most out of our app.
          </p>
        </div>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="cursor-pointer w-full px-6 py-4 text-left flex justify-between items-center rounded-lg"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {item.question}
                </span>
                <span
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                >
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-4 pl-8 lg:pl-16">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
