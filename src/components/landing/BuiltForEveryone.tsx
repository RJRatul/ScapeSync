import Container from "../ui/Container";
import Image from "next/image";
import ServicesUnderBuilt from "./ServicesUnderBuiltForEveryone";

export default function BuiltForEveryone() {
  return (
    <section className="py-20 bg-white text-center relative">
      <Container>
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span
              className="text-gray-900"
              style={{
                textShadow: `
        0px 1px 0px #d4d4d4,
        0px 2px 0px #bdbdbd,
        0px 3px 0px #a8a8a8,
        0px 4px 0px #949494,
        0px 5px 0px #828282,
        0px 6px 0px #717171,
        0px 7px 0px #626262,
        0px 8px 7px rgba(0,0,0,0.4)
      `,
              }}
            >
              Build for <span className="text-scapesync-primary">Everyone</span>
            </span>
          </h2>
          <div className="flex justify-center">
            <Image
              src="/builtForEveryone.svg"
              alt=""
              width={300}
              height={20}
              className="lg:block hidden relative top-[-16px] left-[130px]"
            />
          </div>

          <p className="text-sm text-gray-600 max-w-3xl mx-auto mt-4">
            Whether you&apos;re booking services, managing tasks, or running
            operations, we&apos;ve <br/> designed the perfect experience for you.
          </p>
        </div>
        <div>
          <ServicesUnderBuilt />
        </div>
      </Container>
    </section>
  );
}
