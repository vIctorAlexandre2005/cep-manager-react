import { useContextAddress } from "@/context/AddressContext";
import { searchAddressService } from "@/services/address";
import { useEffect } from "react";

export function useAddress() {
  const {
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
  } = useContextAddress();

  async function searchAddress(cep: string) {
    if (cep?.length === 8) {
      try {
        setLoading(true);
        const response = await searchAddressService(cep);
        console.log("response SEARCHADDRESS", response);
      } catch (error) {
        console.log("Erro na função searchAddress:", error);
      } finally {
        setLoading(false);
      }
    };
  };

  function sendAddress(
    name: string,
    cpf: string,
    cep: string,
    street: string,
    district: string,
    city: string,
    uf: string
  ) {
    try {
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
    } catch (error) {
      console.log("Erro na função sendAddress:", error);
    }
  }

  useEffect(() => {
    searchAddress(cep);
  }, [cep]);

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
    sendAddress,
  };
}
