import Skeleton from '@/components/skeleton/Skeleton'
import React from 'react'
import styles from "./genres.module.css"

const GenresLoading = () => {
  return (
    <div className={styles.genres}>
        {
            Array(8).fill(null).map((_,index)=>(
              <Skeleton key={index} height={52} width={200}/>
            ))
        }
    </div>
  )
}

export default GenresLoading