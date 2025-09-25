import Container from "../ui/Container";
import Image from "next/image";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "/icons/easy-booking.svg",
    title: "Easy Service Booking",
    description:
      "Streamlined booking process for clients with service catalogs and availability.",
  },
  {
    icon: "/icons/real-time-tracking.svg",
    title: "Real-Time Tracking",
    description:
      "Monitor job progress, employee hours, and project timelines with live updates.",
  },
  {
    icon: "/icons/performance-analytics.svg",
    title: "Performance Analytics",
    description:
      "Comprehensive reporting and insights to improve business operations and efficiency.",
  },
  {
    icon: "/icons/secure-reliable.svg",
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security with 99.9% uptime guarantee and data protection.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              {index < features.length - 1 && (
                <div className="hidden lg:block absolute top-0 right-0 w-px h-full bg-gray-200 transform translate-x-4" />
              )}
              {index === 1 && (
                <div className="hidden md:block lg:hidden absolute top-0 right-0 w-px h-full bg-gray-200 transform translate-x-4" />
              )}

              <div className="text-start p-6">
                <div className="w-16 h-16 bg-green-50 flex items-center justify-center mb-4 rounded-lg">
                  <div className="relative w-8 h-8">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
