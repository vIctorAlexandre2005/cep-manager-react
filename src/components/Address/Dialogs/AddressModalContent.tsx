import { InputComponent } from "@/components/common/InputComponent";
import { useAddress } from "@/hook/useAddress";
import { FaCity, FaMapMarkedAlt } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { GiBrazil } from "react-icons/gi";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { PiCityBold, PiIdentificationCardFill } from "react-icons/pi";

export function AddressModalContent() {
  const {
    error,
    address,
    loading,
    name,
    setName,
    cpf,
    setCpf,
    cep,
    setCep,
  } = useAddress();

  return (
    <>
      <h1 className="text-2xl font-semibold">Dados pessoais</h1>
      <div className="w-full mb-4">
        <div className="flex items-center gap-4">
          <InputComponent
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            label="Nome"
            placeholder="Digite seu nome"
            icon={<FaCircleUser size={24} />}
          />
          <InputComponent
            value={cpf}
            onChange={(event) => setCpf(event.target.value)}
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
            value={cep}
            onChange={(event) => setCep(event.target.value)}
            type="number"
            label="CEP"
            placeholder="Preencha seu CEP, ex: 00000-000"
            icon={<FaMapMarkedAlt size={24} />}
            loading={loading}
            error={error as any}
            textError="Endereço não encontrado!"
          />
          <InputComponent
            value={address?.logradouro}
            type="text"
            label="Logradouro"
            placeholder="Avenida Afonso Pena"
            icon={<MdOutlineMapsHomeWork size={28} />}
            disable={true}
          />
          <InputComponent
            value={address?.bairro}
            type="text"
            label="Bairro"
            placeholder="Pechincha"
            icon={<PiCityBold size={28} />}
            disable={true}
          />
          <InputComponent
            value={address?.localidade}
            type="text"
            label="Cidade"
            placeholder="Niterói"
            icon={<FaCity size={28} />}
            disable={true}
          />
          <InputComponent
            value={address?.uf}
            type="text"
            label="UF"
            placeholder="RJ"
            icon={<GiBrazil size={28} />}
            disable={true}
          />
        </div>
      </div>
    </>
  );
}
