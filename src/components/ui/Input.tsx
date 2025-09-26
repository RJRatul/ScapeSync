// src/components/ui/Input.tsx
'use client';

import { InputHTMLAttributes, forwardRef, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  showPasswordToggle?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', value, onFocus, onBlur, type, showPasswordToggle, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const hasValue = Boolean(value);
    const shouldFloat = isFocused || hasValue;
    const inputType = showPasswordToggle && type === 'password' ? (showPassword ? 'text' : 'password') : type;

    return (
      <div className="relative w-full">
        <input
          ref={ref}
          type={inputType}
          value={value}
          onFocus={(e) => {
            setIsFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          className={`
            w-full px-4 pt-5 pb-2 border border-gray-300 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
            transition-all duration-200
            ${error ? 'border-red-500 focus:ring-red-500' : ''}
            ${showPasswordToggle ? 'pr-10' : ''}
            ${className}
          `}
          {...props}
        />
        
        {label && (
          <label
            className={`
              absolute left-4 transition-all duration-200 pointer-events-none
              ${shouldFloat 
                ? 'top-2 text-xs text-gray-600' 
                : 'top-1/2 transform -translate-y-1/2 text-gray-400 text-sm'
              }
            `}
          >
            {label}
          </label>
        )}
        
        {showPasswordToggle && type === 'password' && (
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
          </button>
        )}
        
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;