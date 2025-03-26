import { InputComponent } from "@/components/common/InputComponent";
import { useAddress } from "@/hook/useAddress";
import { FaCity, FaMapMarkedAlt } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { GiBrazil } from "react-icons/gi";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { PiCityBold, PiIdentificationCardFill } from "react-icons/pi";

export function AddressModalContent() {
  const {
    name,
    setName,
    cpf,
    setCpf,
    cep,
    setCep,
    city,
    setCity,
    district,
    setDistrict,
    street,
    setStreet,
    uf,
    setUf,
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
            type="text"
            label="CEP"
            placeholder="Preencha seu CEP, ex: 00000-000"
            icon={<FaMapMarkedAlt size={24} />}
          />
          <InputComponent
            value={city}
            onChange={(event) => setCity(event.target.value)}
            type="text"
            label="Logradouro"
            placeholder="Avenida Afonso Pena"
            icon={<MdOutlineMapsHomeWork size={28} />}
            disable={true}
          />
          <InputComponent
            value={street}
            onChange={(event) => setStreet(event.target.value)}
            type="text"
            label="Bairro"
            placeholder="Pechincha"
            icon={<PiCityBold size={28} />}
            disable={true}
          />
          <InputComponent
            value={district}
            onChange={(event) => setDistrict(event.target.value)}
            type="text"
            label="Cidade"
            placeholder="Niterói"
            icon={<FaCity size={28} />}
            disable={true}
          />
          <InputComponent
            value={uf}
            onChange={(event) => setUf(event.target.value)}
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
