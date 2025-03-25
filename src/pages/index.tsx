import { DataCard } from "@/components/Cards";
import { ButtonComponent } from "@/components/common/Button";
import Image from "next/image";
import { BsPlusCircle, BsPlusCircleFill } from "react-icons/bs";
import { HiMiniMapPin } from "react-icons/hi2";
import { LuMapPin, LuMapPinHouse, LuMapPinPlus } from "react-icons/lu";

export default function Home() {
  return (
    <div className="flex mt-24 flex-col overflow-auto">
      <div className="flex justify-center items-center flex-col gap-4">
        <Image src="/map.svg" alt="Imagem do mapa" width={200} height={200} />
        <ButtonComponent
          className="bg-red-500 rounded-xl p-2 text-lg text-white font-semibold w-1/5"
          text="Adicionar novo endereço"
          icon={<LuMapPinPlus size={24} />}
        />
      </div>

      <div className="flex justify-start p-4">
        <DataCard />
      </div>
    </div>
  );
}
