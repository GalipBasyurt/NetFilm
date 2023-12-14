import React from 'react'
import styles from "./styles.module.css"
import Loading from '@/components/loading/Loading'
const loading = () => {
  return (
    <div className={styles.loading}>
        <Loading />
    </div>
  )
}

export default loading