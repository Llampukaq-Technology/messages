import {
  notifyAlert,
  notifyError,
  notifySuccess,
  notifyWarning,
} from "./messages/TypeMessage";
import { toast } from "react-toastify";

export interface MessageProps {
  type: "success" | "error" | "warning" | "alert";
  description?: "";
}
function useM() {
  const message = (dataMessage: MessageProps | undefined) => {
    dataMessage?.type === "success" && notifySuccess(dataMessage);
    dataMessage?.type === "warning" && notifyWarning(dataMessage);
    dataMessage?.type === "error" && notifyError(dataMessage);
    dataMessage?.type === "alert" && notifyAlert(dataMessage);
  };
  const messagePromise = (
    fn: Promise<any | undefined | void | null>,
    me: {
      pending?: string;
      success?: string;
      error?: string;
    }
  ) => {
    toast.promise(fn, me);
  };
  return { message, messagePromise };
}
export default useM;
