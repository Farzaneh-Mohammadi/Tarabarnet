import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className={styles.navbarContainer}>
        <ul className={styles.navItems}>
          <li onClick={() => navigate("/")}>خانه</li>
          <li onClick={() => navigate("/about")}> درباره ما </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
