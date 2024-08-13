import {toast} from "sonner";


export const showSuccessToast = (message, duration = 2000) => {
    toast.success(message, {
        position: "top-right",
        autoClose: duration,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

export const showErrorToast = (message, duration = 2000) => {
    toast.error(message, {
        position: "top-right",
        autoClose: duration,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};
