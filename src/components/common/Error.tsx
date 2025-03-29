import Image from "next/image";

export function Error({ error }: { error: string }) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <Image src={"/errorImage.svg"} alt="Imagem de erro" width={300} height={300} />
      <h1 className="text-red-500 text-2xl font-semibold">{error}</h1>
    </div>
  );
}
