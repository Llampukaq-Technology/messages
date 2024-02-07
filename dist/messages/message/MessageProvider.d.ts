import React, { ReactNode } from "react";
import { ToastContainerProps } from "react-toastify";
declare const MessageContext: React.Context<{}>;
declare function MessageProvider({ children, option, }: {
    children: ReactNode;
    option?: ToastContainerProps;
}): import("react/jsx-runtime").JSX.Element;
export { MessageContext, MessageProvider };
