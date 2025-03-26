import axios from "axios";

export async function searchAddressService(cep: string) {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log("Erro na função searchAddress:", error);
  }
}
