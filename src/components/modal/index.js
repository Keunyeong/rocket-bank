import styles from './modal.module.scss'

const Modal = (props) => {

  return (
      <div className={styles.background}>
        <div className={styles.contents}>
            {props.children}
         </div>
      </div>
  );
};

export default Modal;