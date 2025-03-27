import {
  AddressData,
  AddressProviderProps,
  defaultValueContextAddress,
} from "@/interface/AddressContext";
import { createContext, ReactNode, useContext, useState } from "react";

const AddressProvider = createContext<AddressData>(defaultValueContextAddress);

const AddressContext = ({ children }: { children: ReactNode }) => {
  const [address, setAddress] = useState<AddressProviderProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number | undefined | boolean | {}>(false);

  // Dados pessoais
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");

  // Endereço
  const [cep, setCep] = useState("");
  return (
    <AddressProvider.Provider
      value={{
        selectedCard,
        setSelectedCard,
        error,
        setError,
        loading,
        setLoading,
        address,
        setAddress,
        cep,
        setCep,
        cpf,
        setCpf,
        name,
        setName,
      }}
    >
      {children}
    </AddressProvider.Provider>
  );
};

export const useContextAddress = () => useContext(AddressProvider);
export default AddressContext;
