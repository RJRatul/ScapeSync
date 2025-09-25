import Container from '../ui/Container';
import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            All Your Jobs <br />
            <span className="text-blue-600">One Smart App</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Built for business owners, employees, and clients streamline job 
            scheduling, service tracking, and team management in one powerful app.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" size="lg" className="flex items-center justify-center gap-2">
              <span>Download on the</span>
              <span className="font-bold">App Store</span>
            </Button>
            <Button variant="secondary" size="lg" className="flex items-center justify-center gap-2">
              <span>Download on the</span>
              <span className="font-bold">Google Play</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}