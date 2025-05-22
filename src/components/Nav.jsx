import React, { useState } from 'react';
import styles from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const getActiveStyle = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? '#007acc' : '#333',
    borderBottom: isActive ? '2px solid #007acc' : 'none',
    paddingBottom: '0.2rem'
  });

  return (
    <div className={styles.navContainer}>
      <div className={styles.topRow}>
        <div className={styles.brand}>CookCraft</div>
        <button className={styles.menuToggle} onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      <div className={`${styles.navMenu} ${isOpen ? styles.open : ''}`}>
        <NavLink to="/" style={getActiveStyle} className={styles.navLink}>
          Home
        </NavLink>
        <NavLink to="/recipes" style={getActiveStyle} className={styles.navLink}>
          Recipes
        </NavLink>
        <NavLink to="/about" style={getActiveStyle} className={styles.navLink}>
          About
        </NavLink>
        <button className={styles.createbtn}>Create New Recipe</button>
      </div>
    </div>
  );
};

export default Nav;
