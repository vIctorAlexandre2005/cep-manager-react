import { useContextAddress } from "@/context/AddressContext";

export function useAddress() {
  const {
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
  } = useContextAddress();

  return {
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
    setUf
  };
}
