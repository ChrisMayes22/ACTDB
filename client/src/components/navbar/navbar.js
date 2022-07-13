import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
    return(
        <nav className={styles['navbar__container']}>
          <ul className="navbar__list">
            <li>
              <Link to="/"><button className={styles['nav-button']}>Quiz</button></Link>
            </li>
            <li>
              <Link to="crud"><button className={styles['nav-button']}>Get Questions</button></Link>
            </li>
          </ul>
        </nav>
    )
}

export default Navbar