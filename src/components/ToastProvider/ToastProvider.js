import React from 'react';

export const ToastStackContext = React.createContext();

function ToastProvider({ children }) {
  const [toastStack, setToastStack] = React.useState([]);

  function handleCloseToast(id) {
    const newToastStack = toastStack.filter((msg) => {
      return msg.id !== id;
    });
    setToastStack(newToastStack);
  }

  function handleAddingToast(message, variant) {
    setToastStack((prev) => [
      ...prev,
      { message, variant, id: crypto.randomUUID() },
    ]);
  }

  return (
    <ToastStackContext.Provider
      value={{ toastStack, handleCloseToast, handleAddingToast }}
    >
      {children}
    </ToastStackContext.Provider>
  );
}

export default ToastProvider;
