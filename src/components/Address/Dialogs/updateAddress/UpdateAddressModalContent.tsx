import { InputComponent } from "@/components/common/InputComponent";
import { Loader } from "@/components/common/Loader";
import { useAddress } from "@/hook/useAddress";
import { useState } from "react";
import { FaCity, FaMapMarkedAlt } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { GiBrazil } from "react-icons/gi";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { PiCityBold, PiIdentificationCardFill } from "react-icons/pi";
import { SyncLoader } from "react-spinners";

export function UpdateAddressModalContent({ location }: any) {

  console.log("location", location);

    const { addressDetails, isLoadingAddressDetails, success, updateName, setUpdateName, updateCpf, setUpdateCpf, updateZipCode, setUpdateZipCode, updateStreet, setUpdateStreet, updateDistrict, setUpdateDistrict, updateCity, setUpdateCity, updateUf, setUpdateUf } = useAddress();
    console.log("detalhes do sucesso:", success);
    console.log("detalhes do endereco:", addressDetails);
    

    if (isLoadingAddressDetails && success === false) {
      return <Loader loader={<SyncLoader color="rgb(239 68 70)" />} />;
    };

  return (
    <>
      {success && (
        <>
        <h1 className="text-2xl font-semibold">Dados pessoais</h1>
      <div className="w-full mb-4">
        <div className="flex items-center gap-4">
          <InputComponent
            value={success && updateName}
            onChange={(event) => setUpdateName(event.target.value)}
            type="text"
            label="Nome"
            placeholder="Digite seu nome"
            icon={<FaCircleUser size={24} />}
            required
          />
          <InputComponent
            value={updateCpf && updateCpf}
            onChange={(event) => setUpdateCpf(event.target.value)}
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
            value={updateZipCode && updateZipCode}
            onChange={(event) => setUpdateZipCode(event.target.value)}
            type="number"
            label="CEP"
            placeholder="Preencha seu CEP, ex: 00000-000"
            icon={<FaMapMarkedAlt size={24} />}
            textError="Endereço não encontrado!"
            required
          />
          <InputComponent
            value={updateStreet && updateStreet}
            type="text"
            label="Logradouro"
            placeholder="Avenida Afonso Pena"
            icon={<MdOutlineMapsHomeWork size={28} />}
            disable={true}
            required
          />
          <InputComponent
            value={updateDistrict && updateDistrict}
            type="text"
            label="Bairro"
            placeholder="Pechincha"
            icon={<PiCityBold size={28} />}
            disable={true}
            required
          />
          <InputComponent
            value={updateCity && updateCity}
            type="text"
            label="Cidade"
            placeholder="Niterói"
            icon={<FaCity size={28} />}
            disable={true}
            required
          />
          <InputComponent
            value={updateUf && updateUf}
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
      )}
    </>
  );
}