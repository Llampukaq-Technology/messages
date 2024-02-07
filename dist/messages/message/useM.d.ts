export interface MessageProps {
    type: "success" | "error" | "warning" | "alert";
    description?: "";
}
declare function useM(): {
    message: (dataMessage: MessageProps | undefined) => void;
    messagePromise: (fn: Promise<any | undefined | void | null>, me: {
        pending?: string;
        success?: string;
        error?: string;
    }) => void;
};
export default useM;
