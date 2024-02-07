import React, { ReactNode, createContext } from "react";
import useM from "./useM";

import { ToastContainer, ToastContainerProps } from "react-toastify";
const MessageContext = createContext({});
function MessageProvider({
  children,
  option = {
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
  },
}: {
  children: ReactNode;
  option?: ToastContainerProps;
}) {
  const n = useM();
  return (
    <MessageContext.Provider value={n}>
      <ToastContainer {...option} />
      {children}
    </MessageContext.Provider>
  );
}
export { MessageContext, MessageProvider };
