import { useContextAddress } from "@/context/AddressContext";
import { searchAddressService } from "@/services/address";
import { toastError, toastSuccess } from "@/utils/toasts";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { toast } from "sonner";

export function useAddress() {
  const {
    address,
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

  function validDataAddress(name: string, cpf: string, cep: string) {
    // name deve estar preenchido
    const validName = name?.trim()?.length < 3 || name?.trim()?.length > 60
    if (validName) {
      toastError("O nome deve conter entre 3 a 60 caracteres.");
      return null;
    }

    // cep no formato correto
    const validCep = cep?.length < 8 || cep?.length > 8;
    if (validCep) {
      toastError("CEP irregular ou não encontrado.");
      return null;
    }

    // cpf no formato correto
    const validCpf = cpf?.length < 11 || cpf?.length > 11;
    if (validCpf) {
      toastError("Formato do CPF irregular.");
      return null;
    }
    // nenhum dos campos pode estar vazio
    if (validName && validCep && validCpf) {
      toastError("Preencha os campos necessários corretamente.");
      return null;
    }
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
    const valid = validDataAddress(name, cpf, cep);
    try {
      if (valid === null) {
        return;
      }
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
      toastSuccess("Endereço criado com sucesso!")
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
