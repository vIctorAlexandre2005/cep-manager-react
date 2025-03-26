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

  // Dados pessoais
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");

  // Endereço
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState(""); // logradouro
  const [district, setDistrict] = useState(""); // bairro
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  return (
    <AddressProvider.Provider
      value={{
        error,
        setError,
        loading,
        setLoading,
        address,
        setAddress,
        cep,
        setCep,
        city,
        setCity,
        cpf,
        setCpf,
        district,
        setDistrict,
        name,
        setName,
        street,
        setStreet,
        uf,
        setUf,
      }}
    >
      {children}
    </AddressProvider.Provider>
  );
};

export const useContextAddress = () => useContext(AddressProvider);
export default AddressContext;
