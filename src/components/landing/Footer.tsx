import Container from '../ui/Container';
import Button from '../ui/Button';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container>
        <div className="text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              Download on the App Store
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              Download on Google Play
            </Button>
          </div>
          <p className="text-gray-400">© 2021-2025, ScapeSync. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
}