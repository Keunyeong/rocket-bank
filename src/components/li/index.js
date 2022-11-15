import styles from './li.module.scss'

const Li = props => {

  return (
      <div className={styles.li}>{props.children}</div>
  );
};

export default Li;