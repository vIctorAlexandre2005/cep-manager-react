import { CardWithAddressDetails } from "@/components/Address/Cards";
import { CreateAddress } from "@/components/Address/Dialogs/createAddress/CreateAddress";
import Image from "next/image";
import { TbMapPinHeart } from "react-icons/tb";
import { FaArrowDownLong } from "react-icons/fa6";
import { Fragment } from "react";
import { useAddress } from "@/hook/useAddress";
import { ModalComponent } from "@/components/common/ModalComponent";
import { UpdateAddressModalContent } from "@/components/Address/Dialogs/updateAddress/UpdateAddressModalContent";
import { AddressMainProviderProps, AddressProps } from "@/interface/Address";
import { ClipLoader } from "react-spinners";
import { Loader } from "@/components/common/Loader";

export default function Home() {
  const {
    selectedCard,
    setSelectedCard,
    addressList,
    isLoadingList,
    errorList,
  } = useAddress();


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
          Endereços salvos ({addressList?.length})
          <TbMapPinHeart size={34} color="rgb(239 68 70)" />
        </h1>
        {isLoadingList ? (
          <div className="flex justify-center items-center">
            <Loader loader={<ClipLoader color="rgb(239 68 70)" />} />
          </div>
        ) : errorList ? ( // <- Aqui estava errado
          <div className="flex justify-center items-center">
            <h1 className="font-semibold text-2xl text-red-500">
              Erro ao carregar os endereços
            </h1>
          </div>
        ) : null}

        {addressList?.length === 0 && (
          <div className="flex justify-center items-center opacity-90 flex-col">
            <Image src={"/world.svg"} width={320} height={320} alt="" />
            <h1 className="font-semibold text-2xl">
              Cadastre o seu lugar favorito!
            </h1>
          </div>
        )}
        <ModalComponent
          loading={false}
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
