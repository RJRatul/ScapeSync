"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  resetPasswordSchema,
  ResetPasswordFormData,
} from "@/utils/validationSchemas";
import { authApi } from "@/services/authApi";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Alert from "../ui/Alert";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function ResetPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | "">("");
  const [message, setMessage] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const email = searchParams.get("email") || "";
  const token = searchParams.get("token") || "";
  const [resetToken, setResetToken] = useState(token);

  useEffect(() => {
    if (!token) {
      const storedToken = localStorage.getItem("reset_token");
      if (storedToken) {
        setResetToken(storedToken);
      }
    }
  }, [token]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const passwordValue = watch("password");

  const onSubmit = async (data: ResetPasswordFormData) => {
    setIsLoading(true);
    setStatus("");
    setMessage("");

    if (!email || !resetToken) {
      setStatus("error");
      setMessage(
        "Missing required information. Please try the reset process again."
      );
      setIsLoading(false);
      return;
    }

    try {
      const result = await authApi.resetPassword({
        email: email,
        token: resetToken,
        password: data.password,
        password_confirmation: data.password_confirmation,
      });

      console.log("Reset password response:", result);

      if (result.status) {
        setStatus("success");
        setMessage(result.message || "Password reset successfully!");
        localStorage.removeItem("reset_token");
        setTimeout(() => {
          router.push("/congratulations?flow=password-reset");
        }, 2000);
      } else {
        setStatus("error");
        setMessage(result.message || "Password reset failed");
        if (result.errors) {
          const errorMessages = Object.values(result.errors).flat().join(", ");
          setMessage(errorMessages || "Password reset failed");
        }
      }
    } catch (error) {
      setStatus("error");
      setMessage("An error occurred while resetting password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      {message && <Alert type={status as "success" | "error"}>{message}</Alert>}
      <Link href="/verify-forgot-password-email">
        <div className="flex items-center text-green-700 hover:text-green-500 mb-4 cursor-pointer">
          <FaArrowLeft className="w-4 h-4 mr-2" />
          Back
        </div>
      </Link>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Reset Your Password
      </h2>
      <p className="text-sm text-gray-600 text-left">
        Enter your new password below.
      </p>

      <Input
        label="New Password"
        type="password"
        placeholder=""
        value={passwordValue || ""}
        error={errors.password?.message}
        showPasswordToggle={true}
        {...register("password")}
      />

      <Input
        label="Confirm New Password"
        type="password"
        placeholder=""
        error={errors.password_confirmation?.message}
        showPasswordToggle={true}
        {...register("password_confirmation")}
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isLoading || !email || !resetToken}
      >
        {isLoading ? "Resetting..." : "Reset Password"}
      </Button>
    </form>
  );
}
