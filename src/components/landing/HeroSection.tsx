// src/components/landing/HeroSection.tsx
import Container from "../ui/Container";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, #CDE7CC 0%, transparent 20%, transparent 80%, #CDE7CC 100%)",
          opacity: 0.3,
          zIndex: 0,
        }}
      />

      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between relative z-10">
          <div className="lg:w-1/2 text-left relative z-10">
            <div className="relative inline-block">
              <Image
                src="/heroVector.svg"
                alt=""
                aria-hidden="true"
                width={130}
                height={130}
                style={{
                  position: "absolute",
                  top: "-90px",
                  left: "245px",
                  pointerEvents: "none",
                  zIndex: -1,
                }}
                priority
              />
              <h1 className="relative text-5xl md:text-6xl lg:text-7xl xl:text-[84px] leading-tight md:leading-snug lg:leading-[92px] font-bold text-gray-800 mb-6">
                All Your Jobs <br />
                <span className="text-scapesync-primary text-nowrap">
                  One Smart App
                  <Image
                    src="/heroVector2.svg"
                    alt=""
                    aria-hidden="true"
                    width={446}
                    height={100}
                    style={{
                      color: "transparent",
                      position: "absolute",
                      top: "172px",
                      left: "174px",
                      pointerEvents: "none",
                      zIndex: -1,
                      width: "446px",
                    }}
                    priority
                  />
                </span>
              </h1>
            </div>

            <p className="text-[16px] text-gray-600 mb-8 leading-relaxed max-w-lg">
              Built for business owners, employees, and clients streamline job
              scheduling, service tracking, and team management in one powerful
              app.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg border border-[#6DC57C] px-6 py-3 transition hover:bg-[#6DC57C]/5"
              >
                <Image
                  src="/icons/apple.svg"
                  alt="App Store"
                  width={28}
                  height={28}
                />
                <div className="text-left">
                  <p className="text-xs text-gray-600 leading-tight">
                    Download on the
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    App Store
                  </p>
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
                  <p className="text-xs text-gray-600 leading-tight">
                    Download on the
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    Google Play
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end relative z-10">
            <div className="relative w-full max-w-lg h-[400px] lg:h-[500px] xl:h-[640px] flex items-center justify-center">
              <div className="relative w-full h-[70%]">
                <Image
                  src="/heroSection.png"
                  alt="ScapeSync Hero Image"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
