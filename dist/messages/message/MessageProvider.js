import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext } from "react";
import useM from "./useM";
import { ToastContainer } from "react-toastify";
const MessageContext = createContext({});
function MessageProvider({ children, option = {
    position: "top-right",
    autoClose: 1500,
    limit: 6,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    theme: "light",
}, }) {
    const n = useM();
    return (_jsxs(MessageContext.Provider, { value: n, children: [_jsx(ToastContainer, { ...option }), children] }));
}
export { MessageContext, MessageProvider };
