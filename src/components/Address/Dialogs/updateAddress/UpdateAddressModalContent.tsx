import { InputComponent } from "@/components/common/InputComponent";
import { useAddress } from "@/hook/useAddress";
import { useState } from "react";
import { FaCity, FaMapMarkedAlt } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { GiBrazil } from "react-icons/gi";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { PiCityBold, PiIdentificationCardFill } from "react-icons/pi";

export function UpdateAddressModalContent({ location }: any) {

    const { updateName, setUpdateName } = useAddress();

    const [update, setUpdate] = useState(location.name);

    console.log(location.cep.trim());

  return (
    <>
      <h1 className="text-2xl font-semibold">Dados pessoais</h1>
      <div className="w-full mb-4">
        <div className="flex items-center gap-4">
          <InputComponent
            value={update}
            onChange={(event) => setUpdate(event.target.value)}
            type="text"
            label="Nome"
            placeholder="Digite seu nome"
            icon={<FaCircleUser size={24} />}
            required
          />
          <InputComponent
            value={location.cpf}
            // onChange={(event) => setCpf(event.target.value)}
            type="text"
            label="CPF"
            placeholder="Digite sua senha"
            icon={<PiIdentificationCardFill size={28} />}
            required
          />
        </div>
      </div>

      <h1 className="text-2xl font-semibold">Dados do endereço</h1>
      <div className="w-full">
        <div className="grid grid-cols-2 gap-4 w-full">
          <InputComponent
            value={location.cep}
            // onChange={(event) => setCep(event.target.value)}
            type="number"
            label="CEP"
            placeholder="Preencha seu CEP, ex: 00000-000"
            icon={<FaMapMarkedAlt size={24} />}
            textError="Endereço não encontrado!"
            required
          />
          <InputComponent
            value={location?.street}
            type="text"
            label="Logradouro"
            placeholder="Avenida Afonso Pena"
            icon={<MdOutlineMapsHomeWork size={28} />}
            disable={true}
            required
          />
          <InputComponent
            value={location?.district}
            type="text"
            label="Bairro"
            placeholder="Pechincha"
            icon={<PiCityBold size={28} />}
            disable={true}
            required
          />
          <InputComponent
            value={location?.city}
            type="text"
            label="Cidade"
            placeholder="Niterói"
            icon={<FaCity size={28} />}
            disable={true}
            required
          />
          <InputComponent
            value={location?.uf}
            type="text"
            label="UF"
            placeholder="RJ"
            icon={<GiBrazil size={28} />}
            disable={true}
            required
          />
        </div>
      </div>
    </>
  );
}