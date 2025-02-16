// src/components/Navigation/Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/movies" className={styles.link}>
            Movies
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
