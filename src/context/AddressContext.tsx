import {
  AddressDataContextProps,
  AddressMainProviderProps,
  defaultValueContextAddress,
} from "@/interface/Address";
import { createContext, ReactNode, useContext, useState } from "react";

const AddressProvider = createContext<AddressDataContextProps>(defaultValueContextAddress);

const AddressContext = ({ children }: { children: ReactNode }) => {
  const [address, setAddress] = useState<AddressMainProviderProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number | undefined | boolean | {}>(false);

  // Dados pessoais
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");

  // Endereço
  const [zip_code, setZip_code] = useState(""); 

  const [updateName, setUpdateName] = useState(name);
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
        zip_code,
        setZip_code,
        cpf,
        setCpf,
        name,
        setName,
        updateName,
        setUpdateName,
      }}
    >
      {children}
    </AddressProvider.Provider>
  );
};

export const useContextAddress = () => useContext(AddressProvider);
export default AddressContext;
