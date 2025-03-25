import { DataCard } from "@/components/Cards";
import { ButtonComponent } from "@/components/common/Button";
import Image from "next/image";
import { BsPlusCircle, BsPlusCircleFill } from "react-icons/bs";
import { HiMiniMapPin } from "react-icons/hi2";
import { LuMapPin, LuMapPinHouse, LuMapPinPlus } from "react-icons/lu";
import { TbMapPinHeart } from "react-icons/tb";

export default function Home() {
  return (
    <div className="flex mt-24 flex-col overflow-auto">
      <div className="flex justify-center items-center flex-col gap-4">
        <Image src="/map.svg" alt="Imagem do mapa" width={200} height={200} />
        <ButtonComponent
          className="bg-red-500 rounded-lg p-2 text-lg text-white font-semibold w-1/5"
          text="Adicionar novo endereço"
          icon={<LuMapPinPlus size={24} />}
        />
      </div>

      <div className="flex flex-col w-full mt-12 p-6 justify-center">
        <h1 className="font-bold mb-4 flex gap-2 text-3xl items-center">
          Endereços salvos
          <TbMapPinHeart size={34} color="rgb(239 68 70)" />
        </h1>
        <div className="w-auto grid grid-cols-5 gap-4">
          <DataCard />
          <DataCard />
          <DataCard />
          <DataCard />
          <DataCard />
          <DataCard />
          <DataCard />
          <DataCard />
          <DataCard />
          <DataCard />
          <DataCard />
          <DataCard />
          <DataCard />
        </div>
      </div>
    </div>
  );
}
