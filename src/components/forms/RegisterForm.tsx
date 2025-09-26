"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterFormData } from "@/utils/validationSchemas";
import { authApi } from "@/services/authApi";
import Input from "../ui/Input";
import Checkbox from "../ui/Checkbox";
import Button from "../ui/Button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const formValues = watch();

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    setApiError("");

    try {
      const result = await authApi.register(data);

      if (result.success) {
        if (result.data && result.data.email && result.data.otp) {
          const { email, otp } = result.data;
          window.location.href = `/verify-email?email=${encodeURIComponent(
            email
          )}&otp=${otp}`;
        } else {
          setApiError("Registration successful but missing verification data");
        }
      } else {
        setApiError(result.message || "Registration failed");
      }
    } catch (error) {
      setApiError("An error occurred during registration");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      {apiError && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm text-green-600">{apiError}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="First name"
          value={formValues.first_name || ""}
          error={errors.first_name?.message}
          {...register("first_name")}
        />
        <Input
          label="Last name"
          value={formValues.last_name || ""}
          error={errors.last_name?.message}
          {...register("last_name")}
        />
      </div>

      <Input
        label="Email address"
        type="email"
        value={formValues.email || ""}
        error={errors.email?.message}
        {...register("email")}
      />

      <Input
        label="Password"
        type="password"
        value={formValues.password || ""}
        error={errors.password?.message}
        showPasswordToggle={true}
        {...register("password")}
      />

      <Input
        label="Confirm Password"
        type="password"
        value={formValues.password_confirmation || ""}
        error={errors.password_confirmation?.message}
        showPasswordToggle={true}
        {...register("password_confirmation")}
      />

      <Checkbox
        label="I agree to ScapeSync Terms of Service and Privacy Policy."
        error={errors.terms?.message}
        {...register("terms")}
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? "Creating Account..." : "Create Account"}
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
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-green-700 hover:text-green-500 font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </form>
  );
}
