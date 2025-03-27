import { toast } from "react-toastify";

export function toastSuccess(message: string) {
  toast.success(message, { autoClose: 2000 });
};

export function toastError(message: string) {
  toast.error(message);
}

export function toastInfo(message: string) {
  toast.info(message);
}

export function toastWarning(message: string) {
  toast.warn(message);
}

export function toastLoading(message: string) {
  toast.loading(message);
}
