"use client";
import AuthLayout from '@/components/layouts/AuthLayout';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

export default function CongratulationsPage() {
  const searchParams = useSearchParams();
  const flow = searchParams.get('flow');
  
  const isPasswordResetSuccess = flow === 'password-reset';
  // const isEmailVerificationSuccess = !isPasswordResetSuccess;

  const getTitle = () => {
    return isPasswordResetSuccess 
      ? "Password Changed Successfully!" 
      : "Account Created Successfully!";
  };

  const getDescription = () => {
    return isPasswordResetSuccess
      ? "Your account is set up! Just verify your email to get started.."
      : "Your email address has been verified. You can now access all features of ScapeSync.";
  };

  const getButtonText = () => {
    return isPasswordResetSuccess ? "Continue to Login" : "Go to Home";
  };

  const getButtonHref = () => {
    return isPasswordResetSuccess ? "/login" : "/";
  };

  return (
    <AuthLayout title="">
      <div className="text-center">
        <div className="w-50 h-16  flex items-center justify-center mx-auto mb-20">
          <Image 
            src="/congratulation.png" 
            alt="Success" 
            width={500} 
            height={500} 
            className="text-green-600"
          />
        </div>
        <div className="">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-nowrap">{getTitle()}</h3>
          <p className="text-xs text-gray-600 mt-2">{getDescription()}</p>
        </div>
        <Link href={getButtonHref()} className="">
          <Button variant="primary" size="lg" className="w-full block mt-4">
            {getButtonText()}
          </Button>
        </Link>
      </div>
    </AuthLayout>
  );
}