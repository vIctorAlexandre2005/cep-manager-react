import { Dispatch } from "react";

export interface AddressProviderProps {
    id: string;
    name: string;
    cpf: string;
    cep: string;
    street: string;
    district: string;
    city: string;
    uf: string;
}

export interface AddressData {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    address: AddressProviderProps[];
    setAddress: Dispatch<React.SetStateAction<AddressProviderProps[]>>;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    cpf: string;
    setCpf: React.Dispatch<React.SetStateAction<string>>;
    cep: string;
    setCep: React.Dispatch<React.SetStateAction<string>>;
    street: string;
    setStreet: React.Dispatch<React.SetStateAction<string>>;
    district: string;
    setDistrict: React.Dispatch<React.SetStateAction<string>>;
    city: string;
    setCity: React.Dispatch<React.SetStateAction<string>>;
    uf: string;
    setUf: React.Dispatch<React.SetStateAction<string>>;
}

export const defaultValueContextAddress: AddressData = {
    loading: false,
    setLoading: () => {},
    address: [],
    setAddress: () => {},
    name: '',
    setName: () => {},
    cpf: '',
    setCpf: () => {},
    cep: '',
    setCep: () => {},
    street: '',
    setStreet: () => {},
    district: '',
    setDistrict: () => {},
    city: '',
    setCity: () => {},
    uf: '',
    setUf: () => {},
};
