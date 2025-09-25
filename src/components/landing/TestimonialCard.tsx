import Image from 'next/image';

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  profileImage: string;
  vectorImage: string;
}

export default function TestimonialCard({ 
  name, 
  role, 
  text, 
  profileImage, 
  vectorImage 
}: TestimonialCardProps) {
  return (
    <div className="relative bg-white rounded-2xl shadow-lg p-8 w-full max-w-md mx-auto min-h-[200px] flex flex-col">
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={profileImage}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">{name}</h3>
            <p className="text-gray-600">{role}</p>
          </div>
        </div>
        <div className="relative flex-1">
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <Image
              src={vectorImage}
              alt=""
              aria-hidden="true"
              width={80}
              height={80}
              className="object-contain opacity-20"
            />
          </div>
          <div className="relative z-10 h-full flex items-center">
            <p className="text-md md:text-lg text-gray-600 leading-relaxed">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}