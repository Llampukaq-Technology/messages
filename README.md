### MessageProvider Default Configuration

The `MessageProvider` component provides default configurations for displaying messages. These configurations include:

- **Position:** Top-right
- **Auto Close:** 1500 milliseconds
- **Limit:** 6 messages
- **Hide Progress Bar:** False
- **Newest on Top:** False
- **Close on Click:** True
- **Right-to-Left (RTL):** False
- **Pause on Focus Loss:** True
- **Draggable:** True
- **Pause on Hover:** True
- **Theme:** Light

### Usage Example

```jsx
export const Page = () => {
  return (
    <MessageContext.Provider value={options}>
      {children}
    </MessageContext.Provider>
  );
};
```

```javascript
import { useMessage } from "path/to/messageProvider";

const { message, messagePromise } = useMessage();

const save = () => {
  // Displays different types of messages using the `message` function.
  message({ type: "success", description: "Save successful" });
  message({ type: "alert", description: "Save successful" });
  message({ type: "warning", description: "Save successful" });
  message({ type: "error", description: "Save successful" });
};

const deleteAction = () => {
  // Utilizes `messagePromise` to handle asynchronous message display.
  // It takes an asynchronous function as its first argument and an object
  // specifying the messages for different states: error, pending, and success.
  messagePromise(
    async () => {
      // This could represent an asynchronous operation, such as deleting data.
      // For example:
      await deleteData();
    },
    { error: "Error", pending: "Deleting", success: "Success" }
  );
};
```

### Functionality

- The `save` function demonstrates how to use the `message` function to display different types of messages: success, alert, warning, and error.
- The `deleteAction` function showcases the usage of `messagePromise` to display messages asynchronously. It takes an asynchronous function as its first argument, representing an operation that might take some time to complete, such as deleting data. During this operation, messages for different states (error, pending, and success) are displayed accordingly.

### Note

- Ensure to import `useMessage` from the appropriate path.
- Customize message types and descriptions according to your application's requirements.
- The asynchronous function passed to `messagePromise` can represent any asynchronous operation, not necessarily just data deletion.
- This is an [abstraction layer](https://github.com/fkhadra/react-toastify) for React-toastify.





