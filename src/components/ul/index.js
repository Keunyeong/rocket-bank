import styles from './ul.module.scss'

const Ul = props => {

  return (
      <ul className={styles.ul}>{props.children}</ul>
  );
};

export default Ul;