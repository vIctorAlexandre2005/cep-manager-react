import { FaMapMarkerAlt } from "react-icons/fa";

export function Header() {
  return (
    <div className="w-full z-50 fixed backdrop-blur-2xl p-4 flex justify-between border-b border-gray-200">
      <div className="flex gap-2 items-center font-semibold bg-red-500 p-2 rounded-xl text-gray-50">
        <h1 className="text-2xl font-extrabold">CEP Manager</h1>
        <FaMapMarkerAlt size={28} />
      </div>
    </div>
  );
}
