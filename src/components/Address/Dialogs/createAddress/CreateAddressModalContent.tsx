import { InputComponent } from "@/components/common/InputComponent";
import { useAddress } from "@/hook/useAddress";
import { formatCep, formatCpf } from "@/utils/formatInput";
import { FaCity, FaMapMarkedAlt } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { GiBrazil } from "react-icons/gi";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { PiCityBold, PiIdentificationCardFill } from "react-icons/pi";

export function CreateAddressModalContent() {
  const { error, address, loading, name, setName, cpf, setCpf, zip_code, setZip_code } =
    useAddress();

  return (
    <>
      <h1 className="text-2xl font-semibold">Dados pessoais</h1>
      <div className="w-full mb-4">
        <div className="flex xs:flex-col sm:flex-row items-center gap-4">
          <InputComponent
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            label="Nome"
            placeholder="Digite seu nome"
            icon={<FaCircleUser size={24} />}
            required
          />
          <InputComponent
            value={cpf}
            onChange={(event) => setCpf(formatCpf(event.target.value))}
            type="text"
            label="CPF"
            placeholder="Digite seu CPF"
            icon={<PiIdentificationCardFill size={28} />}
            maxLength={14}
            required
          />
        </div>
      </div>

      <h1 className="text-2xl font-semibold">Dados do endereço</h1>
      <div className="w-full">
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <InputComponent
            value={zip_code}
            onChange={(event) => setZip_code(formatCep(event.target.value))}
            type="text"
            label="CEP"
            placeholder="Preencha seu CEP, ex: 00000-000"
            icon={<FaMapMarkedAlt size={24} />}
            loading={loading}
            error={error as any}
            textError="Endereço não encontrado!"
            required
            maxLength={9}
          />
          <InputComponent
            value={address?.logradouro}
            type="text"
            label="Logradouro"
            placeholder="Logradouro"
            icon={<MdOutlineMapsHomeWork size={28} />}
            disable={true}
            required
          />
          <InputComponent
            value={address?.bairro}
            type="text"
            label="Bairro"
            placeholder="Bairro"
            icon={<PiCityBold size={28} />}
            disable={true}
            required
          />
          <InputComponent
            value={address?.localidade}
            type="text"
            label="Cidade"
            placeholder="Cidade"
            icon={<FaCity size={28} />}
            disable={true}
            required
          />
          <InputComponent
            value={address?.uf}
            type="text"
            label="UF"
            placeholder="UF"
            icon={<GiBrazil size={28} />}
            disable={true}
            required
          />
        </div>
      </div>
    </>
  );
}
