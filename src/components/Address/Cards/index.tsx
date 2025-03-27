import { LocationsProps } from "@/utils/mockAddress";
import Image from "next/image";
import { FaCalendarCheck, FaCity, FaMapPin } from "react-icons/fa";
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
      <header className="card-header relative">
        <div className="absolute inset-0 rounded-t-xl bg-black opacity-80"></div>
        <div className="card-title mt-12 text-gray-100 absolute items-center flex justify-center p-4 gap-1 z-10">
          <FaMapPin size={28} />
          <h2 className="font-bold text-2xl text-center flex gap-2 items-center">
            {city}, {uf}
          </h2>
        </div>
        <img
          src={"/cityToCard.jpg"}
          className="w-full h-44 object-cover rounded-t-xl hover:backdrop-opacity-45"
          alt="Background"
        />
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

      <footer className="border-t p-2 flex font-semibold items-center gap-2 text-base">
        <FaCalendarCheck size={18} />
        Criado em {new Date().toLocaleDateString()}
      </footer>
    </div>
  );
}
