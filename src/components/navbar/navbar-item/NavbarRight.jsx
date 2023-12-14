import Link from 'next/link'
import React from 'react'
import styles from "./item.module.css"

const NavbarRight = () => {
  return (
    <nav className={styles["link-group"]}>
        <Link className={styles["link-item"]} href="/movies">Movies</Link>
        <Link className={styles["link-item"]} href="/series">Series</Link>
    </nav>
  )
}

export default NavbarRight