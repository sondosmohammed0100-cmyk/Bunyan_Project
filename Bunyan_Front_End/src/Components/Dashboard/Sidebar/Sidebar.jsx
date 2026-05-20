import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
function Sidebar({isTyping}) {
  const links = [
    { icon: "fa-chart-bar", title: "Status", path: "/" },
    { icon: "fa-users", title: "Users Management", path: "/users" },
    { icon: "fa-diagram-project", title: "Projects Management", path: "/projects" },
    { icon: "fa-laptop-code", title: "Developers Management",path:'/developers' },
    { icon: "fa-users", title: "Cms" },
    { icon: "fa-message", title: "Live Chat" },
  ];

  return (
    <aside className={`${styles.sidebar} min-vh-100 py-4`}>
      <div className="fw-semibold px-4 mb-3 fs-4">Dashboard</div>
      {/* Links Parent */}
      <nav>
        {links.map((item, index) => (
          <NavLink
            to={item.path}
            className={`${styles.navItem} d-flex align-items-center gap-3 py-3 px-4`}
            key={index}
          >
            <i className={`fa-solid ${item.icon} fs-5`}></i>

            <span className="fs-5">{item.title}</span>
            {item.path === "/users"&& isTyping && (
              <span className="badge bg-primary text-dark">
                Typing
              </span>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
