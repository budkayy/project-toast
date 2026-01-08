import React from 'react';

function ToastProvider() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [messageStack, setMessageStack] = React.useState([]);

  function handleMessage(e) {
    const newMessage = e.target.value;
    setMessage(newMessage);
  }

  function handleVarian(e) {
    const newVariant = e.target.value;
    setVariant(newVariant);
  }

  function handleCloseToast(id) {
    const newMessageStack = messageStack.filter((msg) => {
      return msg.id !== id;
    });
    setMessageStack(newMessageStack);
  }

  return (
    <ToastShelf
      messageStack={messageStack}
      handleCloseToast={handleCloseToast}
    />
  );
}

export default ToastProvider;
