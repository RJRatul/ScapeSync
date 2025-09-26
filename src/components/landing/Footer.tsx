import Container from "../ui/Container";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0F3B34] text-white py-20 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-20">
        <Image
          src="/footerVector.svg"
          alt=""
          aria-hidden="true"
          width={900}
          height={100}
          className="object-contain "
        />
      </div>

      <Container>
        <div className="text-center relative z-10">
          <div className="flex flex-col justify-between sm:flex-row gap-4 mb-8">
            <div className="relative w-30 h-10 left-[-13px]">
              <Image
                src="/footerLogo.svg"
                alt="ScapeSync"
                fill
                className="object-contain w-20 relative left-2"
                priority
              />
            </div>
            <p className="text-left text-sm text-[#CFD8D6]">
              Your all-in-one platform for job scheduling, employee{" "}
              <br className="hidden lg:block" /> management, and client service
              built to keep your <br className="hidden lg:block" /> business
              running smoothly from anywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg border border-[#6DC57C] px-6 py-3 transition hover:bg-[#6DC57C]/5"
              >
                <Image
                  src="/icons/appleWhite.svg"
                  alt="App Store"
                  width={28}
                  height={28}
                />
                <div className="text-left">
                  <p className="text-xs ">Download on the</p>
                  <p className="text-lg font-semibold ">App Store</p>
                </div>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg border border-[#6DC57C] px-6 py-3 transition hover:bg-[#6DC57C]/5"
              >
                <Image
                  src="/icons/playstore.svg"
                  alt="Google Play"
                  width={28}
                  height={28}
                />
                <div className="text-left">
                  <p className="text-xs  leading-tight">Download on the</p>
                  <p className="text-lg font-semibold ">Google Play</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-6 text-white text-xl justify-start">
            <Link href="#" aria-label="YouTube">
              <FaYoutube />
            </Link>
            <Link href="#" aria-label="Twitter">
              <FaXTwitter     />
            </Link>
            <Link href="#" aria-label="Facebook">
              <FaFacebookF />
            </Link>
            <Link href="#" aria-label="Instagram">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </Container>
      <div className="relative top-20">
        <div className="border-t border-gray-700"></div>
        <p className="text-gray-400 mx-auto lg:px-30 px-4 text-xs">
          © 2021-2025, ScapeSync. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
