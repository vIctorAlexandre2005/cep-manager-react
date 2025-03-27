import { CardWithAddressDetails } from "@/components/Address/Cards";
import { CreateAddress } from "@/components/Address/Dialogs/createAddress/CreateAddress";
import Image from "next/image";
import { TbMapPinHeart } from "react-icons/tb";
import { locations } from "@/utils/mockAddress";
import { FaArrowDownLong } from "react-icons/fa6";
import { Fragment } from "react";
import { useAddress } from "@/hook/useAddress";
import { ModalComponent } from "@/components/common/ModalComponent";
import { UpdateAddressModalContent } from "@/components/Address/Dialogs/updateAddress/UpdateAddressModalContent";

export default function Home() {
  const { selectedCard, setSelectedCard } = useAddress();

  console.log(selectedCard);

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
          <div className="flex justify-center items-center opacity-90 flex-col">
            <Image src={"/world.svg"} width={320} height={320} alt="" />
            <h1 className="font-semibold text-2xl">
              Cadastre o seu lugar favorito!
            </h1>
          </div>
        ) : (
          <div className="
            w-full grid items-start gap-4
            sm:grid-cols-2 sm:gap-8
            lg:grid-cols-3
            xl:grid-cols-4 xl:gap-10 
            2xl:grid-cols-4 2xl:gap-6 
            3xl:grid-cols-5
            "
          >
            {locations.map((location) => (
              <Fragment key={location.id}>
                <CardWithAddressDetails
                  {...location}
                  onClick={() => setSelectedCard(location)}
                />
              </Fragment>
            ))}
          </div>
        )}

        <ModalComponent
          onToDeny={() => setSelectedCard(false)} // Fecha o modal ao cancelar
          title="Alterar endereço"
          trigger={null} // Não precisa do trigger aqui, já que o Card controla a abertura
          onConfirm={() => {}}
          textPositiveButton="Atualizar"
          open={selectedCard}
        >
          {selectedCard && (
            <UpdateAddressModalContent location={selectedCard} />
          )}
        </ModalComponent>
      </div>
    </div>
  );
}
