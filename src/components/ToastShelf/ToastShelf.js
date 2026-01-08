import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastStackContext } from '../ToastProvider/ToastProvider.js';

function ToastShelf() {
  const { toastStack } = React.useContext(ToastStackContext);
  console.log('TosatShelf');
  return (
    <ol className={styles.wrapper}>
      {toastStack.map((msg) => {
        return (
          <li key={msg.id} className={styles.toastWrapper}>
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
