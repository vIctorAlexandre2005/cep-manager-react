import { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils"; // Função para concatenar classes CSS dinamicamente
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BarLoader, ClipLoader } from "react-spinners";
import { useAddress } from "@/hook/useAddress";
import { FaCircleCheck } from "react-icons/fa6";
import { LuMapPinX } from "react-icons/lu";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  loading?: boolean;
  minLength?: number;
  maxLength?: number;
  disable?: boolean;
  icon?: ReactNode;
  error?: boolean;
  textError?: string;
  className?: string;
}

export const InputComponent = ({
  label,
  minLength,
  maxLength,
  disable,
  icon,
  error,
  textError,
  className,
  loading,
  ...props
}: InputProps) => {
  const { cep } = useAddress();
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
          disable ? "cursor-not-allowed opacity-60" : ""
        )}
      >
        {icon && <span className="absolute left-3 text-gray-500">{icon}</span>}
        {cep?.length === 8 && loading && (
          <span className="absolute right-3 text-gray-500">
            <ClipLoader size={24} color="#EF4444" />
          </span>
        )}
        {cep?.length === 8 && !loading && !error && label === "CEP" && (
          <span className="absolute right-3 text-gray-500">
            <FaCircleCheck size={24} color="green" />
          </span>
        )}
        {cep?.length === 8 && error && (
          <span className="absolute right-3 text-gray-500">
            <LuMapPinX size={24} color="#EF4444" />
          </span>
        )}
        <input
          minLength={minLength}
          maxLength={maxLength}
          readOnly={disable}
          className={cn(
            "w-full bg-transparent text-lg font-bold outline-none focus:outline-none p-1 appearance-none text-gray-900",
            icon ? "pl-10" : "pl-3",
            error ? "border-red-500 pr-10 text-red-500" : "border-gray-300 pr-3",
            disable ? "cursor-not-allowed" : "",
            className
          )}
          {...props}
        />
      </div>
      {cep?.length === 8 && error && (
        <span className="text-red-500 text-base font-semibold flex items-center gap-1 mt-1">
          {" "}
          {textError}
        </span>
      )}
    </div>
  );
};
