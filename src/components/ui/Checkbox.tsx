import { InputHTMLAttributes, forwardRef } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            ref={ref}
            className={`
              w-4 h-4 text-green-700 border-gray-300 rounded 
              focus:ring-green-600 focus:ring-2
              ${error ? 'border-red-500' : ''}
              ${className}
            `}
            {...props}
          />
          <span className="text-sm text-gray-700">{label}</span>
        </label>
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;