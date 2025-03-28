import { Dispatch } from "react";

export interface AddressProps {
    zip_code: string;
    street: string;
    district: string;
    city: string;
    uf: string;
}

export interface AddressMainProviderProps {
    id: string;
    name: string;
    cpf: string;
    address: AddressProps;
    created_at: string;
}

export interface AddressDataContextProps {
    selectedCard: number | undefined | boolean | {};
    setSelectedCard: React.Dispatch<React.SetStateAction<number | undefined | boolean | {}>>;
    updateName: string;
    setUpdateName: React.Dispatch<React.SetStateAction<string>>;
    error: boolean;
    setError: React.Dispatch<React.SetStateAction<boolean>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    address: AddressMainProviderProps[];
    setAddress: Dispatch<React.SetStateAction<AddressMainProviderProps[]>>;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    cpf: string;
    setCpf: React.Dispatch<React.SetStateAction<string>>;
    zip_code: string;
    setZip_code: React.Dispatch<React.SetStateAction<string>>;
}

export const defaultValueContextAddress: AddressDataContextProps = {
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
    zip_code: '',
    setZip_code: () => {},
};
