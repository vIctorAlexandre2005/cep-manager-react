import { toastSuccess } from "@/utils/toasts";
import axios, { AxiosError } from "axios";
import { useMutation, useQueryClient } from "react-query";

export async function searchAddressService(zip_code: string) {
  try {
    const response = await axios.get(
      `https://viacep.com.br/ws/${zip_code}/json/`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.error("Erro na função searchAddress:", error);
  }
}

export async function getAddressService() {
  try {
    const response = await axios.get(`/api/getCep`);
    const data = await response.data;
    return data;
  } catch (error: any) {
    throw error;
  }
}

export async function createAddressService(dataContent: {
  name: string;
  cpf: string;
  address: {
    zip_code: string;
    street: string;
    district: string;
    city: string;
    uf: string;
  };
}) {
  try {
    const response = await axios.post("/api/sendAddress", dataContent);
    return response.data;
  } catch (error) {
    console.error("Erro na função createAddressService:", error);
    throw error;
  }
}

export function useCreateAddress() {
  const queryClient = useQueryClient();

  return useMutation(createAddressService, {
    onSuccess: () => {
      toastSuccess("Endereço cadastrado com sucesso!");
      queryClient.invalidateQueries(["address"]);
    },
  });
}