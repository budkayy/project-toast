import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

import ToastShelf from '../ToastShelf/ToastShelf.js';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
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

  function handleSubmit(e) {
    e.preventDefault();
    setMessageStack((prev) => [
      ...prev,
      { message, variant, id: crypto.randomUUID() },
    ]);
    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
  }

  console.log('ToastPlayGround');

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <div className={styles.controlsWrapper}>
        <form onSubmit={handleSubmit}>
          <ToastShelf
            messageStack={messageStack}
            handleCloseToast={handleCloseToast}
          />

          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                value={message}
                onChange={handleMessage}
                id="message"
                className={styles.messageInput}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              {VARIANT_OPTIONS.map((item) => {
                return (
                  <label
                    key={`variant-${item}`}
                    htmlFor={`variant-${item}`}
                  >
                    <input
                      id={`variant-${item}`}
                      type="radio"
                      name="variant"
                      value={item}
                      onChange={handleVarian}
                      checked={item === variant}
                    />
                    {item}
                  </label>
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button type="submit">Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
