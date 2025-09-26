import AuthLayout from '@/components/layouts/AuthLayout';
import ForgotPasswordVerificationForm from '@/components/forms/ForgotPasswordVerificationForm';

export default function VerifyEmailPage() {
  return (
    <AuthLayout
      title=""
    >
      <ForgotPasswordVerificationForm />
    </AuthLayout>
  );
}