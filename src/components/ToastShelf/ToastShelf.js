import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastStackContext } from '../ToastProvider/ToastProvider.js';

function ToastShelf() {
  const { toastStack } = React.useContext(ToastStackContext);

  return (
    <ol className={styles.wrapper} role="region" aria-live="polite">
      {toastStack.map((msg) => {
        return (
          <li
            key={msg.id}
            className={styles.toastWrapper}
            aria-label="Notification"
          >
            <Toast
              variant={msg.variant}
              message={msg.message}
              msgKey={msg.id}
            />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
