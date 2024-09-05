import {toast} from "sonner";

export const successMessage = (mes) => {
    toast.success(mes, {
        position: "top-right",
        duration: 2000,
    });
};

export const errorMessage = (mes, position= "top-right") => {
    toast.error(mes, {
        position,
        duration: 2000,
    });
};

