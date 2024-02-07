import { notifyAlert, notifyError, notifySuccess, notifyWarning, } from "./messages/TypeMessage";
import { toast } from "react-toastify";
function useM() {
    const message = (dataMessage) => {
        dataMessage?.type === "success" && notifySuccess(dataMessage);
        dataMessage?.type === "warning" && notifyWarning(dataMessage);
        dataMessage?.type === "error" && notifyError(dataMessage);
        dataMessage?.type === "alert" && notifyAlert(dataMessage);
    };
    const messagePromise = (fn, me) => {
        toast.promise(fn, me);
    };
    return { message, messagePromise };
}
export default useM;
