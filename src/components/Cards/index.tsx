import { FaCity, FaHouseUser, FaMapPin } from "react-icons/fa";
import { HiMiniMapPin } from "react-icons/hi2";
import { LuMapPinHouse } from "react-icons/lu";
import { PiCityBold } from "react-icons/pi";
import { RiMapPinUserFill } from "react-icons/ri";

export function DataCard() {
  return (
    <div className="card h-auto shadow-lg duration-300 transition ease-in-out hover:scale-105 cursor-pointer border border-gray-200 text-gray-900 rounded-xl hover:bg-gradient-to-r from-red-600 to-rose-600 hover:text-white bg-gray-50">
      <header className="card-header p-4">
        <div className="card-title flex gap-1">
          <FaMapPin size={28} />
          <h2 className="font-bold text-3xl flex gap-2 items-center">
            Rio de Janeiro, RJ
          </h2>
        </div>
      </header>

      <div className="card-body flex flex-col gap-2 p-2">
        <h1 className="text-lg font-semibold flex gap-1.5 items-center">
          <RiMapPinUserFill size={24} />
          Nome: João
        </h1>
        <h1 className="text-lg font-semibold flex gap-1.5 items-center">
          <LuMapPinHouse size={24} />
          CEP: 20000-000
        </h1>
        <h1 className="text-lg font-semibold flex gap-1.5 items-center">
          <FaCity size={24} />
          Logradouro: Av. Paulista
        </h1>
        <h1 className="text-lg font-semibold flex gap-1.5 items-center">
          <PiCityBold size={24} />
          Bairro: Copacabana
        </h1>
      </div>

      <footer className="border-t border-gray-200">
        <div>
          <h1 className="text-sm p-2 rounded-md">
            Criado em {new Date().toLocaleString()}
          </h1>
        </div>
      </footer>
    </div>
  );
}
