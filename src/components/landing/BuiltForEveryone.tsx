import Container from '../ui/Container';

interface Benefit {
  text: string;
}

interface UserRole {
  title: string;
  description: string;
  benefits: Benefit[];
}

const clientBenefits: Benefit[] = [
  { text: 'Book services in seconds' },
  { text: 'Track real-time job updates' },
  { text: 'Schedule appointments at your convenience' }
];

const businessOwnerBenefits: Benefit[] = [
  { text: 'Assign jobs to the right team member' },
  { text: 'Monitor performance in real time' },
  { text: 'Manage clients and services seamlessly' }
];

const employeeBenefits: Benefit[] = [
  { text: 'See daily tasks clearly' },
  { text: 'Track time effortlessly' },
  { text: 'Navigate optimized routes' }
];

export default function BuiltForEveryone() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Built for Everyone</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you&apos;re booking services, managing tasks, or running operations, we&apos;ve 
            designed the perfect experience for you.
          </p>
        </div>

        {/* Client Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">
                Book services, track progress and stay updated
              </h3>
              <p className="text-gray-600 mb-6">
                Easily schedule appointments, get real-time updates, and 
                enjoy a smooth, transparent service experience.
              </p>
              <ul className="space-y-3">
                {clientBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    {benefit.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Client Interface Image</span>
            </div>
          </div>
        </div>

        {/* Business Owners & Employees */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Business Owners</h3>
            <p className="text-gray-600 mb-6">
              Assign jobs, monitor performance, and streamline operations. 
              Gain full control of your workforce with real-time tracking, 
              smart scheduling, and service management in one app.
            </p>
            <ul className="space-y-3">
              {businessOwnerBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-3">✓</span>
                  {benefit.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Employees</h3>
            <p className="text-gray-600 mb-6">
              See tasks, track time, and navigate routes with ease. 
              Everything you need to manage your workday from job 
              assignments to optimized routes and time logging.
            </p>
            <ul className="space-y-3">
              {employeeBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-3">✓</span>
                  {benefit.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}