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
    openModalCreateAddress: boolean;
    setOpenModalCreateAddress: React.Dispatch<React.SetStateAction<boolean>>;
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

    // update
    updateName: string;
    setUpdateName: React.Dispatch<React.SetStateAction<string>>;
    updateCpf: string;
    setUpdateCpf: React.Dispatch<React.SetStateAction<string>>;
    updateZipCode: string;
    setUpdateZipCode: React.Dispatch<React.SetStateAction<string>>;
    updateStreet: string;
    setUpdateStreet: React.Dispatch<React.SetStateAction<string>>;
    updateDistrict: string;
    setUpdateDistrict: React.Dispatch<React.SetStateAction<string>>;
    updateCity: string;
    setUpdateCity: React.Dispatch<React.SetStateAction<string>>;
    updateUf: string;
    setUpdateUf: React.Dispatch<React.SetStateAction<string>>;
}

export const defaultValueContextAddress: AddressDataContextProps = {
    updateName: '',
    setUpdateName: () => {},
    updateCpf: '',
    setUpdateCpf: () => {},
    updateZipCode: '',
    setUpdateZipCode: () => {},
    updateStreet: '',
    setUpdateStreet: () => {},
    updateDistrict: '',
    setUpdateDistrict: () => {},
    updateCity: '',
    setUpdateCity: () => {},
    updateUf: '',
    setUpdateUf: () => {},
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
    openModalCreateAddress: false,
    setOpenModalCreateAddress: () => {},
};
