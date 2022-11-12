import styles from './li.module.scss'

const Li = props => {

  return (
      <li className={styles.li}>{props.children}</li>
  );
};

export default Li;