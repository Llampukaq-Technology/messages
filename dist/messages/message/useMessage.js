import { useContext } from "react";
import { MessageContext } from "./MessageProvider";
function useMessage() {
    return useContext(MessageContext);
}
export default useMessage;
