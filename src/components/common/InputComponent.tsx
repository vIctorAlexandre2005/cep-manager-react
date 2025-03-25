import { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils"; // Função para concatenar classes CSS dinamicamente
import { AiOutlineExclamationCircle } from "react-icons/ai";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  minLength?: number;
  maxLength?: number;
  disable?: boolean;
  icon?: ReactNode;
  error?: string;
  className?: string;
}

export const InputComponent = ({
  label,
  minLength,
  maxLength,
  disable,
  icon,
  error,
  className,
  ...props
}: InputProps) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="text-xl font-semibold text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div
        className={cn(
          "relative transition duration-200 flex items-center border rounded-lg p-2",
          error
            ? "border-red-500"
            : "border-gray-400 hover:border-red-400 focus-within:border-red-500",
            disable ? "cursor-not-allowed opacity-50" : ''
        )}
      >
        {icon && <span className="absolute left-3 text-gray-500">{icon}</span>}
        <input
          minLength={minLength}
          maxLength={maxLength}
          disabled={disable}
          className={cn(
            "w-full bg-transparent text-lg outline-none focus:outline-none p-1 appearance-none text-gray-800",
            icon ? "pl-10" : "pl-3",
            error ? "border-red-500 text-red-500" : "border-gray-300",
            disable ? "cursor-not-allowed" : '',
            className
          )}
          {...props}
        />
      </div>
      {error && (
        <span className="text-red-500 text-sm flex items-center gap-1 mt-1">
          <AiOutlineExclamationCircle /> {error}
        </span>
      )}
    </div>
  );
};
