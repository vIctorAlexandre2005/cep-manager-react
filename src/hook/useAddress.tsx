import { useContextAddress } from "@/context/AddressContext";
import {
  createAddressService,
  getAddressService,
  searchAddressService,
  useCreateAddress,
} from "@/services/address";
import { toastError, toastSuccess } from "@/utils/toasts";
import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "sonner";

export function useAddress() {
  const {
    address,
    selectedCard,
    setSelectedCard,
    name,
    setName,
    setAddress,
    zip_code,
    setZip_code,
    cpf,
    setCpf,
    error,
    setError,
    updateName,
    setUpdateName,
  } = useContextAddress();

  const { data: addressData, isLoading } = useQuery(
    ["address", zip_code],
    () => searchAddressService(zip_code),
    {
      enabled: zip_code?.length === 8,
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

  const { data: addressDataList, isLoading: isLoadingList } = useQuery(
    ["address"],
    () => getAddressService(),
    {
      onSuccess: (data) => {
        setAddress(data);
      },
    }
  );

  function validDataAddress(name: string, cpf: string, zip_code: string) {
    // name deve estar preenchido
    const validName = name?.trim()?.length < 3 || name?.trim()?.length > 60;
    if (validName) {
      toastError("O nome deve conter entre 3 a 60 caracteres.");
      return null;
    }

    // cep no formato correto
    const validZip_Code = zip_code?.length < 8 || zip_code?.length > 8;
    if (validZip_Code) {
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
    if (validName && validZip_Code && validCpf) {
      toastError("Preencha os campos necessários corretamente.");
      return null;
    }
  }

  const { mutate: createAddressService, isLoading: isLoadingSend } =
    useCreateAddress();

  function createAddress(
    name: string,
    cpf: string,
    zip_code: string,
    street: string,
    district: string,
    city: string,
    uf: string
  ) {
    const valid = validDataAddress(name, cpf, zip_code);
    if (valid === null) {
      return;
    } else {
      const data = {
        name: name,
        cpf: cpf,
        address: {
          zip_code: zip_code,
          street: street,
          district: district,
          city: city,
          uf: uf,
        },
      };
      createAddressService(data);
    }
  }

  return {
    selectedCard,
    setSelectedCard,
    address: addressData,
    addressList: addressDataList,
    error,
    loading: isLoading,
    name,
    setName,
    zip_code,
    setZip_code,
    cpf,
    setCpf,
    updateName,
    setUpdateName,
    createAddress,
  };
}
