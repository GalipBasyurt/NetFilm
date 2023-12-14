import Link from 'next/link'
import React from 'react'
import styles from "./item.module.css"

const NafbarLeft = () => {
  return (
     <Link className={styles.logo} href="/">NETFILM</Link>
  )
}

export default NafbarLeft