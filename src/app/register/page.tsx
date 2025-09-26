import AuthLayout from '@/components/layouts/AuthLayout';
import RegisterForm from '@/components/forms/RegisterForm';

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Create your Account"
      subtitle="When sports Meets smart Tech."
    >
      <RegisterForm />
    </AuthLayout>
  );
}