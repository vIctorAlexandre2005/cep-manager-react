const handleNumberInput = (value: string, maxLength: number) => {
  return value.replace(/\D/g, "").slice(0, maxLength);
};

// Formatação de CPF (000.000.000-00)
export const formatCpf = (value: string) => {
  value = handleNumberInput(value, 11);
  return value
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1-$2");
};

// Formatação de CEP (00000-000)
export const formatCep = (value: string) => {
  value = handleNumberInput(value, 8);
  return value.replace(/^(\d{5})(\d)/, "$1-$2");
};
