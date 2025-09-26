'use client';

import { InputHTMLAttributes, useState, useRef } from 'react';

interface OtpInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  length?: number;
  onChange: (otp: string) => void;
  error?: string;
}

export default function OtpInput({ length = 6, onChange, error, ...props }: OtpInputProps) {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    const otpString = newOtp.join('');
    onChange(otpString);
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').slice(0, length);
    if (/^\d+$/.test(pasteData)) {
      const newOtp = [...otp];
      pasteData.split('').forEach((char, index) => {
        if (index < length) newOtp[index] = char;
      });
      setOtp(newOtp);
      onChange(newOtp.join(''));
    }
  };

  return (
    <div className="w-full">
      <div className="flex space-x-3 justify-center">
        {Array.from({ length }, (_, index) => (
          <input
            key={index}
            ref={(el) => {
              if (el) inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            value={otp[index]}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            className={`
              w-12 h-12 text-center text-2xl font-semibold
              border border-gray-300 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent
              transition-colors duration-200
              ${error ? 'border-red-500 focus:ring-red-500' : ''}
            `}
            {...props}
          />
        ))}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600 text-center">{error}</p>
      )}
    </div>
  );
}