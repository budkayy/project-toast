import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ messageStack, handleCloseToast }) {
  console.log('TosatShelf');
  return (
    <ol className={styles.wrapper}>
      {messageStack.map((msg) => {
        return (
          <li key={msg.id} className={styles.toastWrapper}>
            <Toast
              variant={msg.variant}
              message={msg.message}
              msgKey={msg.id}
              handleCloseToast={handleCloseToast}
            />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
