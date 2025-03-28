import { AddressProps } from "@/interface/Address";
import { toastSuccess } from "@/utils/toasts";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

export async function searchAddressService(zip_code: string) {
  try {
    const response = await axios.get(
      `https://viacep.com.br/ws/${zip_code}/json/`
    );
    const data = await response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log("Erro na função searchAddress:", error);
  }
}

export async function getAddressService() {
  try {
    const response = await axios.get(`/api/getCep`);
    const data = await response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log("Erro na função getAddress:", error);
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

  console.log('data:', dataContent);

  try {
    const response = await axios.post("/api/sendAddress", dataContent);
    console.log('response DATA CONTENT:', response);
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