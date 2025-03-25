import { FaCircleUser } from "react-icons/fa6";
import { InputComponent } from "../common/InputComponent";
import { ModalComponent } from "../common/ModalComponent";
import { PiCityBold, PiIdentificationCardFill } from "react-icons/pi";
import { FaCity, FaMapMarkedAlt } from "react-icons/fa";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { GiBrazil } from "react-icons/gi";

export function CreateAddress() {
  return (
    <ModalComponent
      title="Criar novo endereço"
      triggerText="Adicionar novo endereço"
      onConfirm={() => console.log("Endereço salvo!")}
    >
      <h1 className="text-2xl font-semibold">Dados pessoais</h1>
      <div className="w-full mb-4">
        <div className="flex items-center gap-4">
          <InputComponent
            type="text"
            label="Nome"
            placeholder="Digite seu nome"
            icon={<FaCircleUser size={24} />}
          />
          <InputComponent
            type="text"
            label="CPF"
            placeholder="Digite sua senha"
            icon={<PiIdentificationCardFill size={28} />}
          />
        </div>
      </div>

      <h1 className="text-2xl font-semibold">Dados do endereço</h1>
      <div className="w-full">
        <div className="grid grid-cols-2 gap-4 w-full">
          <InputComponent
            type="text"
            label="CEP"
            placeholder="Preencha seu CEP, ex: 00000-000"
            icon={<FaMapMarkedAlt size={24} />}
          />
          <InputComponent
            type="text"
            label="Logradouro"
            placeholder="Avenida Afonso Pena"
            icon={<MdOutlineMapsHomeWork size={28} />}
            disable={true}
          />
          <InputComponent
            type="text"
            label="Bairro"
            placeholder="Pechincha"
            icon={<PiCityBold size={28} />}
            disable={true}
          />
          <InputComponent
            type="text"
            label="Cidade"
            placeholder="Niterói"
            icon={<FaCity size={28} />}
            disable={true}
          />
          <InputComponent
            type="text"
            label="UF"
            placeholder="RJ"
            icon={<GiBrazil size={28} />}
            disable={true}
          />
        </div>
      </div>
    </ModalComponent>
  );
}
