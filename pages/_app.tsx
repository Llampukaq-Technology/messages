import { MessageProvider } from "@/messages";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MessageProvider>
      <Component {...pageProps} />;
    </MessageProvider>
  );
}
