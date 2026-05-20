import Logo from "../../../assets/axis logo.png";
import styles from "./Navbar.module.css";
function Navbar({ adminName = "Super Admin" }) {
  return (
    <nav
      className={`${styles.nav} d-flex justify-content-between align-items-center shadow-sm`}
    >
      <div
        className={`${styles.parentImg} d-flex justify-content-between align-items-center`}
      >
        <img src={Logo} alt="" />
      </div>
      <div className="adminSection d-flex justify-content-center align-items-center gap-3">
        <div className={styles.notificationSection}>
          <i className="fa-solid fa-bell"></i>
          <span
            className={`${styles.countNoti} bg-info text-white rounded-pill`}
          >
            3
          </span>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-3">
          <span>{adminName}</span>
          <div className={styles.avater}>
            {adminName.charAt(0).toUpperCase()}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
