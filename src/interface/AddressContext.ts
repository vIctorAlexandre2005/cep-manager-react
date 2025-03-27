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
    selectedCard: number | undefined | boolean | {};
    setSelectedCard: React.Dispatch<React.SetStateAction<number | undefined | boolean | {}>>;
    updateName: string;
    setUpdateName: React.Dispatch<React.SetStateAction<string>>;
    error: boolean;
    setError: React.Dispatch<React.SetStateAction<boolean>>;
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
}

export const defaultValueContextAddress: AddressData = {
    updateName: '',
    setUpdateName: () => {},
    selectedCard: false,
    setSelectedCard: () => {},
    error: false,
    setError: () => {},
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
};
