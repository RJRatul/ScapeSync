import Container from '../ui/Container';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "This app completely changed the way we manage our team. Assigning jobs takes minutes, and we never miss an update.",
    name: "Farzana H.",
    role: "Owner",
    company: "CleanPro Services"
  },
  {
    quote: "I love how easy it is to see my daily tasks and track my time. It makes my job stress-free.",
    name: "Ahmed R.",
    role: "Technician",
    company: ""
  },
  {
    quote: "As a client, I love being able to see exactly when my service is on the way. No calls, no guessing — just clear updates.",
    name: "Rafiq M.",
    role: "Homeowner",
    company: ""
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          What Our Users Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4 italic">&quot;{testimonial.quote}&quot;</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-gray-600 font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500">
                    {testimonial.role}
                    {testimonial.company && `, ${testimonial.company}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}