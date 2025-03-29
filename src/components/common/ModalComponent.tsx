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
  setOpen?: React.Dispatch<React.SetStateAction<number | boolean | undefined | {}>>;
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
  setOpen,
}: ModalProps) => {
  return (
    <Dialog open={open as any} onOpenChange={setOpen}>
      <DialogTrigger className={classNameTrigger}>
        {textTrigger} {iconTrigger}
      </DialogTrigger>
      <DialogContent className="xs:max-w-[600px] xs:max-h-full flex flex-col md:max-w-[800px] overflow-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl text-left font-bold">{title}</DialogTitle>
        </DialogHeader>
        {children}
        <DialogFooter>
          <div className="w-full mt-2 justify-end flex items-center gap-2">
            <NegativeButton text="Cancelar" onClick={onToDeny} />
            <PositiveButton
              isLoading={loading}
              text={textPositiveButton ? textPositiveButton : "Salvar"}
              onClick={onConfirm}
            />
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
