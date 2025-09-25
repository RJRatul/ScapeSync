import Image from "next/image";

export default function ServiceUnderBuilt() {
  return (
    <section className=" bg-white">
      {/* User */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
        <div className="absolute inset-0 z-0">
            <Image
              src="/serviceUnderBuiltVector.svg"
              alt=""
              aria-hidden="true"
              width={100}
              height={130}
              style={{
                position: "absolute",
                top: "14%",
                left: "50%",
                transform: "translate(-535%, -100%)",
                pointerEvents: "none",
              }}
              priority
              className="lg:block hidden"
            />
          </div>
        <div className="text-start">
          <div className="inline-flex items-start py-2 mb-4">
            <span
              className="text-sm font-medium border rounded-full px-3 py-1"
              style={{ borderColor: "#3BA334", color: "#3BA334" }}
            >
              User
            </span>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Book services, track progress <br /> and stay updated
          </h2>
          <p className="text-md text-gray-600">
            Easily schedule appointments, get real-time updates, and <br />{" "}
            enjoy a smooth, transparent service experience.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center text-lg text-gray-900">
              <span className="text-green-700 mr-3 text-xl font-bold">|</span>
              Book services in seconds
            </li>
            <li className="flex items-center text-lg text-gray-900">
              <span className="text-green-500 mr-3 text-xl font-bold">|</span>
              Track real-time job updates
            </li>
            <li className="flex items-center text-lg text-gray-900">
              <span className="text-green-300 mr-3 text-xl font-bold">|</span>
              Schedule appointments at your convenience
            </li>
          </ul>
        </div>

        <div className="relative h-[500px] rounded-2xl hidden lg:flex items-center justify-center top-[-10px]">
          {/* Vector behind the main image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/userVector.svg"
              alt=""
              aria-hidden="true"
              width={500}
              height={130}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
              }}
              priority
              className="lg:block hidden"
            />
          </div>

          {/* Main image on top */}
          <div className="relative z-10 w-full h-full">
            <Image
              src="/bookService.png"
              alt="Service Booking Interface"
              fill
              className="object-contain rounded-2xl "
            />
          </div>
        </div>
      </div>
      {/* Business Owners */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16 top-[-200px]">
        <div className="relative h-[500px] rounded-2xl  items-center justify-center hidden lg:flex">
          <Image
            src="/businessOwner.png"
            alt="Service Booking Interface"
            fill
            className="object-contain rounded-2xl "
          />
        </div>
        <div className="text-start">
          <div className="inline-flex items-start py-2 mb-4">
            <span
              className="text-sm font-medium border rounded-full px-3 py-1"
              style={{ borderColor: "#3BA334", color: "#3BA334" }}
            >
              Business Owners
            </span>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Assign jobs, monitor performance, and <br /> streamline operations.
          </h2>
          <p className="text-md text-gray-600">
            Gain full control of your workforce with real-time tracking, <br />{" "}
            smart scheduling, and service management in one app.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center text-lg text-gray-900">
              <span className="text-green-700 mr-3 text-xl font-bold">|</span>
              Assign jobs to the right team member
            </li>
            <li className="flex items-center text-lg text-gray-900">
              <span className="text-green-500 mr-3 text-xl font-bold">|</span>
              Monitor performance in real time
            </li>
            <li className="flex items-center text-lg text-gray-900">
              <span className="text-green-300 mr-3 text-xl font-bold">|</span>
              Manage clients and services seamlessly
            </li>
          </ul>
        </div>
      </div>
      {/* Employees */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
        <div className="text-start">
          <div className="inline-flex items-start py-2 mb-4">
            <span
              className="text-sm font-medium border rounded-full px-3 py-1"
              style={{ borderColor: "#3BA334", color: "#3BA334" }}
            >
              Employees
            </span>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            See tasks, track time, and navigate <br /> routes with ease.
          </h2>
          <p className="text-md text-gray-600">
            Everything you need to manage your workday from job <br />{" "}
            assignments to optimized routes and time logging.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center text-lg text-gray-900">
              <span className="text-green-700 mr-3 text-xl font-bold">|</span>
              Assign jobs to the right team member
            </li>
            <li className="flex items-center text-lg text-gray-900">
              <span className="text-green-500 mr-3 text-xl font-bold">|</span>
              Monitor performance in real time
            </li>
            <li className="flex items-center text-lg text-gray-900">
              <span className="text-green-300 mr-3 text-xl font-bold">|</span>
              Manage clients and services seamlessly
            </li>
          </ul>
        </div>
        <div className="relative h-[500px] rounded-2xl  items-center justify-center top-[-100px] hidden lg:flex">
          <Image
            src="/employees.png"
            alt="Employees Interface"
            fill
            className="object-contain rounded-2xl "
          />
        </div>
      </div>
    </section>
  );
}
