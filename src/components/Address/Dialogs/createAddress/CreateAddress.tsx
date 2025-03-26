import { FaCircleUser } from "react-icons/fa6";
import { InputComponent } from "../../../common/InputComponent";
import { ModalComponent } from "../../../common/ModalComponent";
import { PiCityBold, PiIdentificationCardFill } from "react-icons/pi";
import { FaCity, FaMapMarkedAlt } from "react-icons/fa";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { GiBrazil } from "react-icons/gi";
import { ButtonComponent } from "../../../common/Button";
import { LuMapPinPlus } from "react-icons/lu";
import { AddressModalContent } from "../AddressModalContent";

export function CreateAddress() {
  return (
    <ModalComponent
      title="Criar novo endereço"
      onConfirm={() => console.log("Endereço salvo!")}
      trigger={
        <ButtonComponent
          className="bg-red-500 rounded-lg p-2 text-xl text-white font-semibold"
          icon={<LuMapPinPlus size={24} />}
          text="Adicionar novo endereço"
        />
      }
    >
      <AddressModalContent />
    </ModalComponent>
  );
}
