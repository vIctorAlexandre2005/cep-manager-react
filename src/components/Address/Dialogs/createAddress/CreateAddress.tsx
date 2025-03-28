import { FaCircleUser } from "react-icons/fa6";
import { InputComponent } from "../../../common/InputComponent";
import { ModalComponent } from "../../../common/ModalComponent";
import { PiCityBold, PiIdentificationCardFill } from "react-icons/pi";
import { FaCity, FaMapMarkedAlt } from "react-icons/fa";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { GiBrazil } from "react-icons/gi";
import { ButtonComponent } from "../../../common/Button";
import { LuMapPinPlus } from "react-icons/lu";
import { CreateAddressModalContent } from "./CreateAddressModalContent";
import { useAddress } from "@/hook/useAddress";
import { ClipLoader } from "react-spinners";

export function CreateAddress() {
  const { 
    name,
    cpf,
    address,
    zip_code,
    loading,
    createAddress,
  } = useAddress();

  console.log('isLoadingSend:', loading);

  return (
    <ModalComponent
      title="Criar novo endereço"
      onToDeny={() => {}}
      loading={loading}
      onConfirm={() => createAddress(name, cpf, zip_code, address?.logradouro, address?.bairro, address?.localidade, address?.uf)}
      trigger={
        <ButtonComponent
          className="bg-red-500 rounded-lg p-2 text-xl text-white font-semibold"
          icon={<LuMapPinPlus size={24} />}
          text="Adicionar novo endereço"
        />
      }
    >
      <CreateAddressModalContent />
    </ModalComponent>
  );
}
