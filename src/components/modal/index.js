import React from "react";
import styles from './modal.module.scss'

const Modal = ({onClose}) => {

  return (
      <div className={styles.background}>
        <div className={styles.contents}>
            <h1>모달모달모달</h1>
         </div>
      </div>
  );
};

export default Modal;