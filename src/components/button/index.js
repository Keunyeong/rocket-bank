import styles from './button.module.scss'

const Button = props => {
  return (
      <button className={styles.button} onClick={props.click_event}>{props.children}</button>
  );
};

export default Button;