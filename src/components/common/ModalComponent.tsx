import { HTMLAttributes, ReactNode } from "react";
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
import { ClassNameValue } from "tailwind-merge";

interface ModalProps {
  title: string;
  children: ReactNode;
  textPositiveButton?: string;
  onToDeny: () => void;
  onConfirm: () => void;
  open?: number | boolean | undefined | {};
  loading: boolean;
  classNameTrigger?: string | undefined;
  textTrigger: string;
  iconTrigger?: ReactNode;
}

export const ModalComponent = ({
  title,
  children,
  textPositiveButton,
  onToDeny,
  onConfirm,
  loading,
  open, 
  classNameTrigger,
  textTrigger,
  iconTrigger,
}: ModalProps) => {
  return (
    <Dialog open={open as any}>
      <DialogTrigger className={classNameTrigger}>{textTrigger} {iconTrigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] xl:max-w-[800px]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">{title}</DialogTitle>
        </DialogHeader>
        {children}
        <DialogFooter>
          <NegativeButton text="Cancelar" onClick={onToDeny} />
          <PositiveButton isLoading={loading} text={textPositiveButton ? textPositiveButton : "Salvar"} onClick={onConfirm} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
