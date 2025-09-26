"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  verificationSchema,
  VerificationFormData,
} from "@/utils/validationSchemas";
import { authApi } from "@/services/authApi";
import Button from "../ui/Button";
import OtpInput from "../ui/OtpInput";
import { useSearchParams } from "next/navigation";
import Alert from "../ui/Alert";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function VerificationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | "">("");
  const [message, setMessage] = useState("");
  const [otp, setOtp] = useState("");
  const [resendCountdown, setResendCountdown] = useState(0);
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const suggestedOtp = searchParams.get("otp") || "";
  const [latestOtp, setLatestOtp] = useState(suggestedOtp || "");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<VerificationFormData>({
    resolver: zodResolver(verificationSchema),
    defaultValues: {
      email: email,
    },
  });

  useEffect(() => {
    setValue("email", email);
    if (suggestedOtp) {
      setLatestOtp(suggestedOtp);
      setOtp(suggestedOtp);
      setValue("otp", suggestedOtp);
    }
  }, [email, suggestedOtp, setValue]);

  useEffect(() => {
    if (resendCountdown > 0) {
      const timer = setTimeout(() => {
        setResendCountdown(resendCountdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCountdown]);

  const handleOtpChange = (newOtp: string) => {
    setOtp(newOtp);
    setValue("otp", newOtp);
  };

  const onSubmit = async (data: VerificationFormData) => {
    setIsLoading(true);
    setStatus("");
    setMessage("");

    try {
      const result = await authApi.verifyPasswordResetOtp(data);
      console.log("Verification response:", result);

      if (result.status === true || result.status === 201) {
        setStatus("success");
        setMessage(result.message || "Email verified successfully");
        if (result.token) {
          localStorage.setItem("reset_token", result.token);
          console.log("Reset token stored:", result.token);
        }

        setTimeout(() => {
          window.location.href = `/reset-password?email=${encodeURIComponent(
            data.email
          )}&token=${encodeURIComponent(result.token || "")}`;
        }, 1000);
      } else {
        setStatus("error");
        setMessage(result.message || "Verification failed");
      }
    } catch (error) {
      setStatus("error");
      setMessage("An error occurred during verification");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (resendCountdown > 0 || !email) return;

    setIsResending(true);
    setStatus("");
    setMessage("");

    try {
      const result = await authApi.resendOtp(email);

      if (result.success) {
        setStatus("success");
        setMessage(result.message || "Verification code sent successfully!");
        if (result.success && result.data?.otp) {
          setLatestOtp(result.data.otp);
          setOtp("");
          setValue("otp", "");
        }

        setResendCountdown(30);
      } else {
        setStatus("error");
        setMessage(result.message || "Failed to resend verification code");
      }
    } catch (error) {
      setStatus("error");
      setMessage("An error occurred while resending the code");
    } finally {
      setIsResending(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      {message && <Alert type={status as "success" | "error"}>{message}</Alert>}

      <input type="hidden" {...register("email")} />
      <Link href="/forgot-password">
        <div className="flex items-center text-green-700 hover:text-green-500 mb-4 cursor-pointer">
          <FaArrowLeft className="w-4 h-4 mr-2" />
          Back
        </div>
      </Link>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Please check your email!
      </h2>
      <p className="text-sm text-gray-600 text-left">
        We have emailed a 6-digit confirmation code to {email}, please enter the
        code in the box below to verify your email.
      </p>

      <div className="text-center mb-6">
        {latestOtp && (
          <p className="text-sm text-green-600 mt-2">Demo OTP: {latestOtp}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3 text-center">
          Enter verification code
        </label>
        <OtpInput
          length={6}
          onChange={handleOtpChange}
          error={errors.otp?.message}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isLoading || otp.length !== 6}
      >
        {isLoading ? "OTP Verifying..." : "Verify"}
      </Button>

      <div className="text-center">
        <p className="text-sm text-gray-600">
          Do not have a code?{" "}
          {resendCountdown > 0 ? (
            <span className="text-gray-400">Resend in {resendCountdown}s</span>
          ) : (
            <button
              type="button"
              onClick={handleResendOtp}
              disabled={isResending}
              className="text-green-700 hover:text-green-500 font-medium cursor-pointer disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              {isResending ? "Resending..." : "Resend Code"}
            </button>
          )}
        </p>
      </div>
    </form>
  );
}
