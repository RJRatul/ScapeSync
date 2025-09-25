import Container from '../ui/Container';
import Button from '../ui/Button';

export default function CTA() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Your all-in-one platform for job scheduling, employee 
            management, and client service
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Built to keep your business running smoothly from anywhere.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Download on the App Store
            </Button>
            <Button variant="secondary" size="lg" className="bg-green-500 hover:bg-green-600">
              Download on Google Play
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}