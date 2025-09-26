import AuthLayout from '@/components/layouts/AuthLayout';
import LoginForm from '@/components/forms/LoginForm';

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome to ScapeSync"
      subtitle="Please share your login details so you can access the website."
    >
      <LoginForm />
    </AuthLayout>
  );
}