declare function useMessage(): message;
export default useMessage;
export interface message {
    message: (data: {
        type: "success" | "error" | "warning" | "alert";
        description: string | undefined;
    }) => void;
    messagePromise: (fn: Promise<any | void | undefined | null> | any, me: {
        pending?: string;
        success?: string;
        error?: string;
    }) => void;
}
