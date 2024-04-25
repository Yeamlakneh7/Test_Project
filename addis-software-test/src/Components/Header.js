import React from 'react'
import { styles } from './Emotions'
import logo from '../Images/music logo design.png'

function Header() {
  return (
    <div className={styles.container}>
        <img src={logo} alt="Music disc logo" className={styles.img}/>
        <h1 className={styles.title}>Enjoy Your Music</h1>
        <text className={styles.title}>Your Home here</text>
    </div>
  )
}

export default Header;


