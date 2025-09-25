import Container from "../ui/Container";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Farzana H.",
      role: "Owner, CleanPro Services",
      text: "This app completely changed the way we manage our team. Assigning jobs takes minutes, and we never miss an update.",
      profileImage: "/AhmedR.png",
      vectorImage: "/testimonial.svg",
    },
    {
      name: "Ahmed R.",
      role: "Technician",
      text: "I love how easy it is to see my daily tasks and track my time. It makes my job stress-free.",
      profileImage: "/AhmedR.png",
      vectorImage: "/testimonial.svg",
    },
    {
      name: "Farzana H.",
      role: "Rafiq M., Homeowner",
      text: "As a client, I love being able to see exactly when my service is on the way. No calls, no guessing — just clear updates.",
      profileImage: "/AhmedR.png",
      vectorImage: "/testimonial.svg",
    },
  ];

  return (
    <section className="relative bg-white">
      <div className="absolute inset-0 flex justify-center top-64">
        <div className="w-[80%] h-[60%] bg-[#CDE7CC] rounded-full blur-3xl opacity-60" />
      </div>
      <Container>
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          What Our Users Are Saying
        </h2>
        <p className="text-sm text-gray-600 max-w-3xl mx-auto mt-4 text-center mb-12">
          Real stories from clients, employees, and business owners who use{" "}
          <br className="hidden lg:block"/> our app every day.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              text={testimonial.text}
              profileImage={testimonial.profileImage}
              vectorImage={testimonial.vectorImage}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
