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

  function sendAddress(
    name: string,
    cpf: string,
    cep: string,
    street: string,
    district: string,
    city: string,
    uf: string
  ) {
    const newAddress = {
      name: name,
      cpf: cpf,
      cep: cep,
      street: street,
      district: district,
      city: city,
      uf: uf,
    };
    console.log("O que está sendo salvo:", newAddress);
  };

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
    setUf,
    sendAddress
  };
}
