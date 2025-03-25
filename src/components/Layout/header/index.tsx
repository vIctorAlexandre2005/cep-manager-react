import { FaMapMarkerAlt } from "react-icons/fa";
import { PiMapPinLineFill } from "react-icons/pi";

export function Header() {
  return (
    <div className="w-full z-50 fixed backdrop-blur-xl p-4 flex justify-between border-b border-gray-200">
      <div className="flex gap-2 items-center font-semibold bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
        <h1 className="text-2xl font-extrabold">CEP Manager</h1>
        <PiMapPinLineFill size={28} color="rgb(239 68 70)" />
      </div>
    </div>
  );
}
