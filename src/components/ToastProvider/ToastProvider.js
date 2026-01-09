import React from 'react';
import useKeyDown from '../../hooks/useKeyDown.js';

export const ToastStackContext = React.createContext();

function ToastProvider({ children }) {
  const [toastStack, setToastStack] = React.useState([]);

  const handleKey = React.useCallback(() => {
    setToastStack([]);
  });

  useKeyDown(handleKey, 'Escape');

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

// function useKey(setter, key, setTo = []) {
//   React.useEffect(() => {
//     function escapeKey(e) {
//       if (e.key === key) {
//         setter(setTo);
//       }
//     }
//     window.addEventListener('keydown', escapeKey);

//     return () => {
//       window.removeEventListener('keydown', escapeKey);
//     };
//   }, []);
// }
