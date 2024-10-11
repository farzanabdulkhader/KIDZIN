import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenMenu() {
    setIsOpen(true);
  }

  function handleCloseMenu() {
    setIsOpen(false);
  }

  return (
    <div className={styles.nav}>
      <ul
        className={`${styles.navLinks} ${isOpen ? styles.show : styles.hide}`}
      >
        <span className={styles.closeIcon} onClick={handleCloseMenu}>
          <IoClose />
        </span>

        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.activeLink : ""}`
            }
            onClick={handleCloseMenu}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.activeLink : ""}`
            }
            onClick={handleCloseMenu}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.activeLink : ""}`
            }
            onClick={handleCloseMenu}
          >
            Course
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.activeLink : ""}`
            }
            onClick={handleCloseMenu}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.activeLink : ""}`
            }
            onClick={handleCloseMenu}
          >
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Menu Icon is visible only on mobile */}
      <span className={styles.menuIcon} onClick={handleOpenMenu}>
        <HiMenu />
      </span>
    </div>
  );
}

export default NavBar;
