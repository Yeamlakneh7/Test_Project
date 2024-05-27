// src/Components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from './Emotions'
import logo from '../Images/music logo design.png'


const NavBar = () => {
  return (
    <nav className={styles.navStyle}>
      <div className={styles.nav_center}>
        <Link to='/'>
        <img src={logo} className={styles.logo} alt={"Logo"}/>
        </Link>
        <Link to='/'>
          <h3 className={styles.h4style}>MusicStream</h3>
        </Link>
      </div>

      <div className={styles.nav_container}>
        
          <Link to='/add'>
            <h4 className={styles.h5style}>Add Song</h4>
          </Link>
        
      </div>
    </nav>
  );
};

export default NavBar;
