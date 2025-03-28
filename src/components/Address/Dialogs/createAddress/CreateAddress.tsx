import { ModalComponent } from "../../../common/ModalComponent";
import { LuMapPinPlus } from "react-icons/lu";
import { CreateAddressModalContent } from "./CreateAddressModalContent";
import { useAddress } from "@/hook/useAddress";

export function CreateAddress() {
  const { 
    name,
    cpf,
    address,
    zip_code,
    isLoadingSend,
    createAddress,
    openModalCreateAddress,
    setOpenModalCreateAddress
  } = useAddress();
  return (
    <ModalComponent
      title="Criar novo endereço"
      onToDeny={() => setOpenModalCreateAddress(false)}
      open={openModalCreateAddress}
      loading={isLoadingSend}
      classNameTrigger="bg-red-500 cursor-pointer hover:bg-red-600 transition duration-200 rounded-lg flex gap-2 items-center p-2 text-xl text-white font-semibold"
      iconTrigger={<LuMapPinPlus size={24} />}
      textTrigger="Adicionar novo endereço"
      onConfirm={() => createAddress(name, cpf, zip_code, address?.logradouro, address?.bairro, address?.localidade, address?.uf)}
    >
      <CreateAddressModalContent />
    </ModalComponent>
  );
}
