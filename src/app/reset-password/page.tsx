import AuthLayout from '@/components/layouts/AuthLayout';
import ResetPasswordForm from '@/components/forms/ResetPasswordForm';

export default function ResetPasswordPage() {
  return (
    <AuthLayout title="">
      <ResetPasswordForm />
    </AuthLayout>
  );
}