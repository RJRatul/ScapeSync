import AuthLayout from '@/components/layouts/AuthLayout';
import Button from '@/components/ui/Button';
import { Suspense } from 'react';
import CongratulationsContent from '../../components/CongratulationsContent';

export default function CongratulationsPage() {
  return (
    <Suspense
      fallback={
        <AuthLayout title="">
          <div className="text-center">
            <div className="w-50 h-16 flex items-center justify-center mx-auto mb-20">
              <div className="w-16 h-16 bg-gray-200 rounded-full animate-pulse"></div>
            </div>
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-8"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
            </div>
            <Button
              variant="primary"
              size="lg"
              className="w-full block mt-4"
              disabled
            >
              Loading...
            </Button>
          </div>
        </AuthLayout>
      }
    >
      <CongratulationsContent />
    </Suspense>
  );
}
