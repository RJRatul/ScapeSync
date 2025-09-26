import AuthLayout from '@/components/layouts/AuthLayout';
import ForgotPasswordVerificationForm from '@/components/forms/ForgotPasswordVerificationForm';
import { Suspense } from 'react';
import Button from '@/components/ui/Button';

export default function ForgotPasswordVerificationPage() {
  return (
    <Suspense
      fallback={
        <AuthLayout title="">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full animate-pulse mx-auto" />
            <div className="h-8 bg-gray-200 rounded w-2/3 mx-auto" />
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto" />
            <Button variant="primary" size="lg" className="w-full mt-4" disabled>
              Loading...
            </Button>
          </div>
        </AuthLayout>
      }
    >
      <AuthLayout title="">
        <ForgotPasswordVerificationForm />
      </AuthLayout>
    </Suspense>
  );
}
