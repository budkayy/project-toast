import React from 'react';
export default function useKeyDown(callback, key) {
  React.useEffect(() => {
    function escapeKey(e) {
      if (e.code === key) {
        callback(e);
      }
    }
    window.addEventListener('keydown', escapeKey);

    return () => {
      window.removeEventListener('keydown', escapeKey);
    };
  }, [callback]);
}
