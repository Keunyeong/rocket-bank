import styles from './main.module.scss'

const Main = props => {

  return (
      <main className={styles.main}>{props.children}</main>
  );
};

export default Main;