import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer
      className={`${styles.footer} align-items-center d-flex justify-content-center`}
    >
      <span>2026 Copyrights © Bunyan</span>
    </footer>
  );
}

export default Footer;
