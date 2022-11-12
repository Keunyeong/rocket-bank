import styles from './footer.module.scss'

const Footer = props => {

  return (
      <footer className={styles.footer}>{props.children}</footer>
  );
};

export default Footer;