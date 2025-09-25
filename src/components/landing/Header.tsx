import Link from "next/link";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white py-4 sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center">
          <div className="relative w-30 h-10 left-[-13px]">
            <Image
              src="/logo.svg"
              alt="ScapeSync"
              fill
              className="object-contain w-20"
              priority
            />
          </div>
          <div className="flex space-x-4">
            <Link href="/signup">
              <Button variant="primary">Get Started</Button>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
