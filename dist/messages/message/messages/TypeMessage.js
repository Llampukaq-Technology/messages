import { toast } from "react-toastify";
const setupToast = (icon) => (dataMessage) => {
    toast[icon](dataMessage.description);
};
export const notifySuccess = setupToast("success");
export const notifyError = setupToast("error");
export const notifyWarning = setupToast("warn");
export const notifyAlert = setupToast("info");
