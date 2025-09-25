// src/components/landing/FAQ.tsx
import Container from '../ui/Container';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Is the app free to use?",
    answer: "Yes! We offer a free plan for individuals and small teams. Paid plans unlock more features for scaling businesses."
  },
  {
    question: "Can I assign multiple employees to one job?",
    answer: "Yes, our platform allows you to assign multiple team members to a single job for collaborative work."
  },
  {
    question: "Does it work on both mobile and desktop?",
    answer: "Absolutely! ScapeSync is fully responsive and works seamlessly on mobile devices, tablets, and desktop computers."
  }
];

export default function FAQ() {
  return (
    <section className="py-20 bg-gray-50">
      <Container className="max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-gray-900">{item.question}</h3>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}