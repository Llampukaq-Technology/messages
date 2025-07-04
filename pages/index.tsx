import { Inter } from "next/font/google";
import { useMessage } from "@/messages";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { message, messagePromise } = useMessage();
  const save = () => {
    message({ type: "success", description: "Save suceesfull" });
    message({ type: "alert", description: "Save suceesfull" });
    message({ type: "warning", description: "Save suceesfull" });
    message({ type: "error", description: "Save suceesfull" });
  };
  const delete1 = () => {
    messagePromise(async () => {}, {
      error: "error",
      pending: "deleting",
      success: "success",
    });
  };
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <button onClick={save}>Holi</button>
    </main>
  );
}
