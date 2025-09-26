"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  forgotPasswordSchema,
  ForgotPasswordFormData,
} from "@/utils/validationSchemas";
import { authApi } from "@/services/authApi";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Alert from "../ui/Alert";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [apiSuccess, setApiSuccess] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const emailValue = watch("email");

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setIsLoading(true);
    setApiError("");
    setApiSuccess("");

    try {
      const result = await authApi.forgotPassword(data.email);

      if (result.status) {
        setApiSuccess(
          result.message || "Verification code sent to your email!"
        );
        const otp = result.data?.otp || "";

        setTimeout(() => {
          router.push(
            `/verify-forgot-password-email?email=${encodeURIComponent(
              data.email
            )}&otp=${encodeURIComponent(otp)}&flow=password-reset`
          );
        }, 1500);
      } else {
        setApiError(result.message || "Failed to send verification code");
      }
    } catch (error) {
      setApiError("An error occurred while sending verification code");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      {apiError && <Alert type="error">{apiError}</Alert>}

      {apiSuccess && <Alert type="success">{apiSuccess}</Alert>}
      <Link href="/login">
        <div className="flex items-center text-green-700 hover:text-green-500 mb-4 cursor-pointer">
          <FaArrowLeft className="w-4 h-4 mr-2" />
          Back
        </div>
      </Link>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Forgot your password?
      </h2>
      <p className="text-sm text-gray-600 text-left">
        Please enter the email address associated with your account, and we will
        email you a link to reset your password.
      </p>
      <Input
        label="Email address"
        type="email"
        placeholder=""
        value={emailValue || ""}
        error={errors.email?.message}
        {...register("email")}
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Reset Password"}
      </Button>
    </form>
  );
}
