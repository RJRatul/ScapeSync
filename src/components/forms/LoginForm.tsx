'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginFormData } from '@/utils/validationSchemas';
import { authApi } from '@/services/authApi';
import Input from '../ui/Input';
import Checkbox from '../ui/Checkbox';
import Button from '../ui/Button';
import Alert from '../ui/Alert';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const [apiSuccess, setApiSuccess] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const emailValue = watch('email');
  const passwordValue = watch('password');

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setApiError('');
    setApiSuccess('');

    try {
      const result = await authApi.login(data);
      
      if (result.status) {
        setApiSuccess(result.message || 'Login successful!');
        if (result.token) {
          localStorage.setItem('auth_token', result.token);
          localStorage.setItem('token_type', result.token_type || 'Bearer');
          localStorage.setItem('user_data', JSON.stringify(result.data));
        }
        setTimeout(() => {
          window.location.href = '/';
        }, 1000);
      } else {
        setApiError(result.message || 'Login failed');
      }
    } catch (error) {
      setApiError('An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      {apiError && (
        <Alert type="error">
          {apiError}
        </Alert>
      )}
      
      {apiSuccess && (
        <Alert type="success">
          {apiSuccess}
        </Alert>
      )}

      <Input
        label="Email address"
        type="email"
        placeholder=""
        value={emailValue || ''}
        error={errors.email?.message}
        {...register('email')}
      />

      <Input
        label="Password"
        type="password"
        placeholder=""
        value={passwordValue || ''}
        error={errors.password?.message}
        showPasswordToggle={true}
        {...register('password')}
      />

      <div className="flex items-center justify-between">
        <Checkbox
          label="Remember me"
          {...register('remember_me')}
        />
        <Link href="/forgot-password" className="text-sm text-green-700 hover:text-green-500 text-nowrap">
          Forgot password?
        </Link>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? 'Logging in...' : 'Login'}
      </Button>

      <div className="relative mt-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">OR</span>
        </div>
      </div>

      <Button
        type="button"
        variant="outline"
        size="lg"
        className="w-full flex items-center justify-center gap-3"
      >
        <FcGoogle className="w-5 h-5" />
        Continue with Google
      </Button>

      <div className="text-center mt-6">
        <p className="text-sm text-gray-600">
          Do not have an account?{' '}
          <Link href="/register" className="text-green-700 hover:text-green-500 font-medium">
            Get started
          </Link>
        </p>
      </div>
    </form>
  );
}