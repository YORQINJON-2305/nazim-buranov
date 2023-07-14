import { Link, NavLink } from "react-router-dom";
import "./sidebar.css";
import logo from "../../assets/images/logo.svg";
import { Button } from "@mui/material";
import { BiLogOut } from "react-icons/bi";
import { useEffect, useState } from "react";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [savedScrollPosition, setSavedScrollPosition] = useState(0);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
    window.location.href = "/";
  };

  useEffect(() => {
    const handleMenuToggle = () => {
      if (!isOpen) {
        // Menyuni yopganda saqlangan scroll-ni qaytarish
        document.body.style.overflow = "auto";
        window.scrollTo(0, savedScrollPosition);
      } else {
        // Menyuni ochganda scroll-ni saqlash va o'chirish
        setSavedScrollPosition(window.pageYOffset);
        document.body.style.overflow = "hidden";
      }
    };

    handleMenuToggle();

    // Effect deaktivatsiya bo'lganda scroll-ni tiklash
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, savedScrollPosition]);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? "sidebar-active" : ""}>
      <header className="admin-header">
        <div className="my-container">
          <div className="admin-header-inner">
            <Link className="admin-header-logo-link" to="/">
              <img className="site-logo" src={logo} alt="Site logo" />
            </Link>
            <div className="admin-menu-btn" onClick={handleMenuClick}>
              <span className="admin-menu-btn-burger"></span>
            </div>
          </div>
        </div>
      </header>
      <div className="sidebar">
        <div>
          <Link className="logo-link" to="/">
            <img className="site-logo" src={logo} alt="Site logo" />
          </Link>

          <ul className="sidebar-list">
            <li className="sidebar-item" onClick={() => setIsOpen(false)}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "sidebar-link link-active" : "sidebar-link"
                }
                to="/Yangiliklar">
                Yangiliklar
              </NavLink>
            </li>
            <li className="sidebar-item" onClick={() => setIsOpen(false)}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "sidebar-link link-active" : "sidebar-link"
                }
                to="/Maqolalar">
                Maqolalar
              </NavLink>
            </li>
            <li className="sidebar-item" onClick={() => setIsOpen(false)}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "sidebar-link link-active" : "sidebar-link"
                }
                to="/Ilmiy_Maqolalar">
                Ilmiy Maqolalar
              </NavLink>
            </li>
            <li className="sidebar-item" onClick={() => setIsOpen(false)}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "sidebar-link link-active" : "sidebar-link"
                }
                to="/Hikoyalar">
                Hikoyalar
              </NavLink>
            </li>
            <li className="sidebar-item" onClick={() => setIsOpen(false)}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "sidebar-link link-active" : "sidebar-link"
                }
                to="/Jurnallar">
                Jurnallar
              </NavLink>
            </li>
            <li className="sidebar-item" onClick={() => setIsOpen(false)}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "sidebar-link link-active" : "sidebar-link"
                }
                to="/Kitoblar">
                Kitoblar
              </NavLink>
            </li>
            <li className="sidebar-item" onClick={() => setIsOpen(false)}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "sidebar-link link-active" : "sidebar-link"
                }
                to="/Videolar">
                Oramizdagi qahramonlar
              </NavLink>
            </li>
            <li className="sidebar-item" onClick={() => setIsOpen(false)}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "sidebar-link link-active" : "sidebar-link"
                }
                to="/Foto_lavhalar">
                Fotolavhalar
              </NavLink>
            </li>
            <li className="sidebar-item" onClick={() => setIsOpen(false)}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "sidebar-link link-active" : "sidebar-link"
                }
                to="/Sertifikatlar">
                Sertifikatlar
              </NavLink>
            </li>
            <li className="sidebar-item" onClick={() => setIsOpen(false)}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "sidebar-link link-active" : "sidebar-link"
                }
                to="/add_post">
                Post qo'shish
              </NavLink>
            </li>
          </ul>
        </div>
        <Button
          className="logout-btn"
          onClick={handleLogOut}
          variant="outlined"
          color="error">
          <BiLogOut style={{ marginRight: "5px", fontSize: "22px" }} /> Log out
        </Button>
      </div>
    </div>
  );
};
