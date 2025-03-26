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
  trigger: ReactNode;
  children: ReactNode;
  textPositiveButton?: string;
  onToDeny: () => void;
  onConfirm: () => void;
}

export const ModalComponent = ({
  title,
  trigger,
  children,
  textPositiveButton,
  onToDeny,
  onConfirm,
}: ModalProps) => {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] xl:max-w-[800px]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">{title}</DialogTitle>
        </DialogHeader>
        {children}
        <DialogFooter>
          <NegativeButton text="Cancelar" onClick={onToDeny} />
          <PositiveButton text={textPositiveButton ? textPositiveButton : "Salvar"} onClick={onConfirm} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
