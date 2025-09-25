import Container from '../ui/Container';

interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: '📅',
    title: 'Easy Service Booking',
    description: 'Streamlined booking process for clients with service catalogs and availability.',
    color: 'blue'
  },
  {
    icon: '📍',
    title: 'Real-Time Tracking',
    description: 'Monitor job progress, employee hours, and project timelines with live updates.',
    color: 'green'
  },
  {
    icon: '📊',
    title: 'Performance Analytics',
    description: 'Comprehensive reporting and insights to improve business operations and efficiency.',
    color: 'purple'
  },
  {
    icon: '🔒',
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with 99.9% uptime guarantee and data protection.',
    color: 'red'
  }
];

export default function FeaturesSection() {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    red: 'bg-red-100 text-red-600'
  };

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${colorClasses[feature.color as keyof typeof colorClasses]}`}>
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}