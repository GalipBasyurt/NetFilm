import React from 'react'
import NafbarLeft from './navbar-item/NafbarLeft'
import NavbarMiddle from './navbar-item/NavbarMiddle'
import NavbarRight from './navbar-item/NavbarRight'
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <NafbarLeft/>
      <NavbarMiddle/>
      <NavbarRight/>
    </div>
  )
}

export default Navbar