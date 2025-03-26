import { DataCard } from "@/components/Address/Cards";
import { ModalComponent } from "@/components/common/ModalComponent";
import { CreateAddress } from "@/components/Address/Dialogs/createAddress/CreateAddress";
import Image from "next/image";
import { TbMapPinHeart } from "react-icons/tb";
import { AddressModalContent } from "@/components/Address/Dialogs/AddressModalContent";
import { locations } from "@/utils/mockAddress";

export default function Home() {
  return (
    <div className="flex mt-24 flex-col overflow-auto">
      <div className="flex justify-center items-center flex-col gap-4">
        <Image src="/map.svg" alt="Imagem do mapa" width={250} height={250} />
        <CreateAddress />
      </div>

      <div className="flex flex-col w-full mt-12 p-6 justify-center">
        <h1 className="font-bold mb-4 flex gap-2 text-3xl items-center">
          Endereços salvos ({locations?.length})
          <TbMapPinHeart size={34} color="rgb(239 68 70)" />
        </h1>

        <ModalComponent
          title="Alterar endereço"
          trigger={
            <div className="w-auto grid grid-cols-4 gap-4">
              {locations.map((location) => (
                <DataCard
                  cep={location.cep}
                  city={location.city}
                  cpf={location.cpf}
                  district={location.district}
                  id={location.id}
                  logradouro={location.logradouro}
                  name={location.name}
                  uf={location.uf}
                />
              ))}
            </div>
          }
          onConfirm={() => {}}
          textPositiveButton="Atualizar"
        >
          <AddressModalContent />
        </ModalComponent>
      </div>
    </div>
  );
}
