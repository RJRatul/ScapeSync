import AuthLayout from '@/components/layouts/AuthLayout';
import VerificationForm from '@/components/forms/VerificationForm';

export default function VerifyEmailPage() {
  return (
    <AuthLayout
      title=""
    >
      <VerificationForm />
    </AuthLayout>
  );
}