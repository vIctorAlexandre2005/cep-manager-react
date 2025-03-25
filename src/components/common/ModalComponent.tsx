import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LuMapPinPlus } from "react-icons/lu";
import { ButtonComponent, NegativeButton, PositiveButton } from "./Button";

interface ModalProps {
  title: string;
  triggerText: string;
  triggerIcon?: ReactNode;
  children: ReactNode;
  onConfirm: () => void;
}

export const ModalComponent = ({
  title,
  triggerText,
  triggerIcon,
  children,
  onConfirm,
}: ModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <ButtonComponent
          className="bg-red-500 rounded-lg p-2 text-lg text-white font-semibold w-1/5"
          text={triggerText}
          icon={triggerIcon as any}
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] xl:max-w-[800px]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">{title}</DialogTitle>
        </DialogHeader>
        {children}
        <DialogFooter>
          <NegativeButton text="Cancelar" onClick={() => {}} />
          <PositiveButton text="Salvar" onClick={() => {}} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
