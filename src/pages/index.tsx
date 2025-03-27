import { CardWithAddressDetails } from "@/components/Address/Cards";
import { ModalComponent } from "@/components/common/ModalComponent";
import { CreateAddress } from "@/components/Address/Dialogs/createAddress/CreateAddress";
import Image from "next/image";
import { TbMapPinHeart } from "react-icons/tb";
import { AddressModalContent } from "@/components/Address/Dialogs/AddressModalContent";
import { locations } from "@/utils/mockAddress";
import { FaArrowDownLong } from "react-icons/fa6";
import { Fragment } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex mt-24 flex-col overflow-auto">
      <div className="flex justify-center items-center flex-col gap-4">
        <Image src="/map.svg" alt="Imagem do mapa" width={250} height={250} />
        <FaArrowDownLong
          size={28}
          className="animate-infinite animate-bounce text-slate-700"
        />
        <CreateAddress />
      </div>

      <div className="flex flex-col w-full mt-12 p-6 justify-center">
        <h1 className="font-bold mb-4 flex gap-2 text-3xl items-center">
          Endereços salvos ({locations?.length})
          <TbMapPinHeart size={34} color="rgb(239 68 70)" />
        </h1>

        {locations?.length === 0 ? (
          <div className="flex justify-center opacity-90 items-center flex-col">
            <Image src={"/world.svg"} width={320} height={320} alt="" />
            <h1 className="font-semibold text-2xl">
              Espalhe seus endereços pelo mundo!
            </h1>
          </div>
        ) : (
          <ModalComponent
            onToDeny={() => {}}
            title="Alterar endereço"
            trigger={
              <div className="w-auto grid grid-cols-4 gap-4">
                {locations.map((location) => (
                  <Fragment key={location.id}>
                    <CardWithAddressDetails
                      cep={location.cep}
                      city={location.city}
                      cpf={location.cpf}
                      district={location.district}
                      id={location.id}
                      logradouro={location.logradouro}
                      name={location.name}
                      uf={location.uf}
                    />
                  </Fragment>
                ))}
              </div>
            }
            onConfirm={() => {}}
            textPositiveButton="Atualizar"
          >
            <AddressModalContent />
          </ModalComponent>
        )}
      </div>
    </div>
  );
};
