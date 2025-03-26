import { LocationsProps } from "@/utils/mockAddress";
import { FaCity, FaMapPin } from "react-icons/fa";
import { LuMapPinHouse } from "react-icons/lu";
import { PiCityBold, PiIdentificationCardFill } from "react-icons/pi";
import { RiMapPinUserFill } from "react-icons/ri";

export function CardWithAddressDetails({
  cep,
  city,
  cpf,
  district,
  id,
  logradouro,
  name,
  uf,
}: LocationsProps) {
  return (
    <div className="card w-sm min-h-auto shadow-md duration-200 transition ease-in-out hover:scale-105 cursor-pointer border border-gray-200 text-gray-900 rounded-xl hover:bg-gradient-to-r from-red-600 to-rose-600 hover:text-white bg-gray-50">
      <header className="card-header p-4">
        <div className="card-title flex gap-1">
          <FaMapPin size={28} />
          <h2 className="font-bold text-2xl flex gap-2 items-center">
            {city}, {uf}
          </h2>
        </div>
      </header>

      <div className="card-body flex flex-col gap-2 p-2">
        <h1 className="text-lg font-semibold flex gap-1.5 items-center">
          <RiMapPinUserFill size={24} />
          Nome: {name}
        </h1>
        <h1 className="text-lg font-semibold flex gap-1.5 items-center">
          <PiIdentificationCardFill size={24} />
          CPF: {cpf}
        </h1>
        <h1 className="text-lg font-semibold flex gap-1.5 items-center">
          <LuMapPinHouse size={24} />
          CEP: {cep}
        </h1>
        <h1 className="text-lg font-semibold flex gap-1.5 items-center">
          <FaCity size={24} />
          Logradouro: {logradouro}
        </h1>
        <h1 className="text-lg font-semibold flex gap-1.5 items-center">
          <PiCityBold size={24} />
          Bairro: {district}
        </h1>
      </div>

      <footer className="border-t border-gray-200">
        <div>
          <h1 className="text-base font-semibold text-left p-2 rounded-md">
            Criado em {new Date().toLocaleDateString("pt-BR")}
          </h1>
        </div>
      </footer>
    </div>
  );
}
