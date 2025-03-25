import { DataCard } from "@/components/Cards";
import { ButtonComponent } from "@/components/common/Button";
import { InputComponent } from "@/components/common/InputComponent";
import { ModalComponent } from "@/components/common/ModalComponent";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { BsPlusCircle, BsPlusCircleFill } from "react-icons/bs";
import { FaCity, FaMapMarkedAlt } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { GiBrazil } from "react-icons/gi";
import { HiMiniMapPin } from "react-icons/hi2";
import { LuMapPin, LuMapPinHouse, LuMapPinPlus } from "react-icons/lu";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { PiCityBold, PiIdentificationCardFill } from "react-icons/pi";
import { TbMapPinHeart } from "react-icons/tb";

export default function Home() {
  return (
    <div className="flex mt-24 flex-col overflow-auto">
      <div className="flex justify-center items-center flex-col gap-4">
        <Image src="/map.svg" alt="Imagem do mapa" width={250} height={250} />
        <ModalComponent
          title="Criar novo endereço"
          triggerText="Adicionar novo endereço"
          onConfirm={() => console.log("Endereço salvo!")}
        >
          <h1 className="text-2xl font-semibold">Dados pessoais</h1>
          <div className="w-full mb-4">
            <div className="flex items-center gap-4">
              <InputComponent
                type="text"
                label="Nome"
                placeholder="Digite seu nome"
                icon={<FaCircleUser size={24} />}
              />
              <InputComponent
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
                type="text"
                label="CEP"
                placeholder="Preencha seu CEP, ex: 00000-000"
                icon={<FaMapMarkedAlt size={24} />}
              />
              <InputComponent
                type="text"
                label="Logradouro"
                placeholder="Avenida Afonso Pena"
                icon={<MdOutlineMapsHomeWork size={28} />}
                disable={true}
              />
              <InputComponent
                type="text"
                label="Bairro"
                placeholder="Pechincha"
                icon={<PiCityBold size={28} />}
                disable={true}
              />
              <InputComponent
                type="text"
                label="Cidade"
                placeholder="Niterói"
                icon={<FaCity size={28} />}
                disable={true}
              />
              <InputComponent
                type="text"
                label="UF"
                placeholder="RJ"
                icon={<GiBrazil size={28} />}
                disable={true}
              />
            </div>
          </div>
        </ModalComponent>
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
