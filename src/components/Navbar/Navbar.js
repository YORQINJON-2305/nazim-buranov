import { NavLink } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="site-nav">
      <div className="my-container">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-item-link nav-item-link-active"
                  : "nav-item-link"
              }
              to="/">
              Bosh sahifa
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-item-link nav-item-link-active"
                  : "nav-item-link"
              }
              to="/Yangiliklar">
              Yangiliklar
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-item-link nav-item-link-active"
                  : "nav-item-link"
              }
              to="/Maqolalar">
              Maqolalar
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-item-link nav-item-link-active"
                  : "nav-item-link"
              }
              to="/Ilmiy_Maqolalar">
              Ilmiy Maqolalar
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-item-link nav-item-link-active"
                  : "nav-item-link"
              }
              to="/Hikoyalar">
              Hikoyalar
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-item-link nav-item-link-active"
                  : "nav-item-link"
              }
              to="/Videolar">
              Oramizdagi qahramonlar
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-item-link nav-item-link-active"
                  : "nav-item-link"
              }
              to="/Xalqaro_Munosabatlar">
              Xalqaro Munosabatlar
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
