import styles from './header.module.scss'

const Header = props => {

  return (
      <header className={styles.header}>{props.children}</header>
  );
};

export default Header;