import { ButtonComponent } from "@/components/common/Button";
import Image from "next/image";
import { BsPlusCircle, BsPlusCircleFill } from "react-icons/bs";

export default function Home() {
  return (
    <div className="flex mt-24 flex-col items-center justify-center overflow-auto gap-4">
      <Image src="/map.svg" alt="Logo" width={200} height={200} />
      <ButtonComponent 
        className="bg-red-500 rounded-xl p-2 text-lg text-white font-semibold w-1/5" 
        text="Criar novo endereço" 
        icon={<BsPlusCircle size={24} />} 
      />
    </div>
  );
}
