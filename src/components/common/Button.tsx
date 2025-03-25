import { JSX } from "react";

type ButtonProps = {
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  loader?: JSX.Element;
  icon?: JSX.Element;
  className?: string; // Caso queira adicionar estilos personalizados
};

export function ButtonComponent({
  text,
  onClick,
  disabled = false,
  isLoading = false,
  icon, // Definir valor padrão para o ícone
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading} // Desabilitar se estiver carregando ou desabilitado
      className={`transition duration-200 gap-2 cursor-pointer hover:opacity-80 p-2 flex justify-center text-center items-center ${className}`} // Permite adicionar classes extras
      {...rest}
    >
      {!isLoading && text && <span>{text}</span>} {icon}
      {/* Exibe o texto se não estiver carregando */}
    </button>
  );
};

export function PositiveButton({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="transition duration-200 gap-2 cursor-pointer hover:opacity-80 p-2 flex justify-center text-center items-center bg-red-500 rounded-md text-lg text-white font-semibold w-1/5"
    >
      {text}
    </button>
  );
};

export function NegativeButton({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="transition duration-200 gap-2 cursor-pointer hover:opacity-80 p-2 flex justify-center text-center items-center bg-transparent rounded-md text-lg font-semibold w-1/5"
    >
      {text}
    </button>
  );
};
