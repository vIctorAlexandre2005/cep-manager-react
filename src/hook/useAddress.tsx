import { useContextAddress } from "@/context/AddressContext";
import { searchAddressService } from "@/services/address";
import { useEffect } from "react";
import { useQuery } from "react-query";

export function useAddress() {
  const {
    name,
    setName,
    setAddress,
    cep,
    setCep,
    cpf,
    setCpf,
    error,
    setError,
  } = useContextAddress();

  const { data: addressData, isLoading } = useQuery(
    ["address", cep],
    () => searchAddressService(cep),
    {
      enabled: cep?.length === 8,
      retry: false,
      onSuccess: (data) => {
        if (data?.erro === "true") {
          setError(true);
        } else {
          setError(false);
          setAddress(data);
        }
      },
    }
  );

  {
    /* 
    async function searchAddress(cep: string) {
    if (cep?.length === 8) {
      try {
        setLoading(true);
        const response = await searchAddressService(cep);
        console.log("response SEARCHADDRESS", response);
        if (response?.erro === "true") {
          setError(true);
        } else {
          setError(false);
        }
        setAddress(response);
        setCity(response?.localidade);
        setUf(response?.uf);
        setStreet(response?.logradouro);
        setDistrict(response?.bairro);
      } catch (error) {
        console.log("Erro na função searchAddress:", error);
      } finally {
        setLoading(false);
      }
    }
  }
    */
  }

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
      console.error("Erro na função sendAddress:", error);
    }
  }

  return {
    address: addressData,
    error,
    loading: isLoading,
    name,
    setName,
    cep,
    setCep,
    cpf,
    setCpf,
    sendAddress,
  };
}
