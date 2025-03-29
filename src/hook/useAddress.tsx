import { useContextAddress } from "@/context/AddressContext";
import {
  getAddressService,
  getDetailsAddressService,
  searchAddressService,
  useCreateAddress,
  useDeleteAddress,
  useUpdateAddress,
} from "@/services/address";
import { toastError, toastSuccess } from "@/utils/toasts";
import { useState } from "react";
import { useQuery } from "react-query";

export function useAddress() {
  const {
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
    loading,
    setLoading,
    openModalCreateAddress,
    setOpenModalCreateAddress,
    updateCpf,
    setUpdateCpf,
    updateZipCode,
    setUpdateZipCode,
    updateStreet,
    setUpdateStreet,
    updateDistrict,
    setUpdateDistrict,
    updateCity,
    setUpdateCity,
    updateUf,
    setUpdateUf,
  } = useContextAddress();

  const [success, setSuccess] = useState(false);

  const removeFormatting = (value: string) => {
    return value.replace(/\D/g, ""); // Remove tudo que não for número
  };

  // Remove a formatação do CPF e do CEP
  const cleanCpf = removeFormatting(cpf);
  const cleanZipCode = removeFormatting(zip_code);

  const { data: addressData, isLoading } = useQuery(
    ["address", zip_code],
    () => searchAddressService(cleanZipCode),
    {
      enabled: cleanZipCode?.length === 8,
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

  const {
    data: addressDataList,
    isLoading: isLoadingList,
    isError: errorList,
  } = useQuery(
    ["address"],
    () => getAddressService(),

    {
      onSuccess: (data) => {
        setAddress(data);
      },
      refetchInterval: 120000,
      refetchOnWindowFocus: false, 
      staleTime: 60000, 
      cacheTime: 300000, 
      retry: 2, 
      refetchOnReconnect: true, 
      onError: (error: any) => {
        console.error("Erro ao buscar os dados", error);
      },
    }
  );

  const {
    data: addressDetails,
    isLoading: isLoadingAddressDetails,
    isError: errorAddressDetails,
  } = useQuery(
    ["addressDetails", selectedCard ? selectedCard : null],
    () => getDetailsAddressService(selectedCard),

    {
      onSuccess: (data) => {
        if (data) {
          setSuccess(true);
          setUpdateName(data?.name);
          setUpdateCpf(data?.cpf);
          setUpdateZipCode(data?.address?.zip_code);
          setUpdateStreet(data?.address?.street);
          setUpdateDistrict(data?.address?.district);
          setUpdateCity(data?.address?.city);
          setUpdateUf(data?.address?.uf);
        }
      },
      enabled: selectedCard !== null && selectedCard !== undefined,
      onError: (error: any) => {
        console.error("Erro ao buscar os dados", error);
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
    try {
      setLoading(true);
      // Validação (você pode manter o código de validação aqui)
      const valid = validDataAddress(name, cleanCpf, cleanZipCode);
      if (valid === null) {
        return;
      } else {
        const data = {
          name: name,
          cpf: cleanCpf,
          address: {
            zip_code: cleanZipCode,
            street: street,
            district: district,
            city: city,
            uf: uf,
          },
        };
        // Envia os dados sem formatação para o serviço
        createAddressService(data);
        setOpenModalCreateAddress(false);
      }
    } catch (error) {
      toastError("Erro ao enviar dados.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const { mutate: updateAddressService, isLoading: isLoadingUpdate } =
    useUpdateAddress();

  function validUpdateAddress(cpfUpdated: string) {
    if (!addressDataList) return null;
    
    const cpfExists = addressDataList.some(
      (address: any) =>
        removeFormatting(address?.cpf) === cpfUpdated &&
        address?.id !== selectedCard
    );

    if (cpfExists) {
      toastError("Esse CPF já está cadastrado em outro endereço.");
      return null;
    }
    return true;
  }

  function updateAddress(name: string, cpf: string, zip_code: string) {
    const cleanCpfUpdated = removeFormatting(cpf);
    const valid = validUpdateAddress(cleanCpfUpdated);

    try {
      if (valid === null) {
        return;
      }
      const data = {
        id: selectedCard,
        name: name,
        cpf: cleanCpfUpdated,
        address: {
          zip_code: cleanZipCode,
        },
      };
      // Envia os dados sem formatação para o serviço
      updateAddressService(data);
    } catch (error) {
      toastError("Erro ao enviar dados.");
      console.error(error);
    }
  }

  const {
    mutate: deleteAddressService,
    isLoading: isLoadingDeleteAddressService,
    isError: isErrorDeleteAddressService,
  } = useDeleteAddress();

  async function deleteAddress(id: number) {
    try {
      deleteAddressService(id);
      toastSuccess("Endereço excluido com sucesso!");
      setSelectedCard(false);
    } catch (error) {
      toastError("Erro ao enviar dados.");
      console.error(error);
    }
  }

  return {
    selectedCard,
    setSelectedCard,
    address: addressData,
    addressList: addressDataList,
    error,
    isLoadingList: isLoadingList,
    errorList,
    isLoadingSend: isLoadingSend,
    name,
    setName,
    zip_code,
    setZip_code,
    cpf,
    setCpf,
    updateName,
    setUpdateName,
    cleanZipCode,
    createAddress,
    loading,
    openModalCreateAddress,
    setOpenModalCreateAddress,
    addressDetails,
    isLoadingAddressDetails: isLoadingAddressDetails,
    success,
    updateCpf,
    setUpdateCpf,
    updateZipCode,
    setUpdateZipCode,
    updateStreet,
    setUpdateStreet,
    updateDistrict,
    setUpdateDistrict,
    updateCity,
    setUpdateCity,
    updateUf,
    setUpdateUf,
    updateAddress,
    isLoadingUpdate,
    deleteAddress,
  };
}
