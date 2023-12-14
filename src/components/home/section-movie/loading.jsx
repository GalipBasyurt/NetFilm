import Skeleton from '@/components/skeleton/Skeleton'
import React from 'react'
import styles from "./section-movie.module.css"
const SectionMovieLoading = () => {
  return (
    <div className={styles.sectionMovie}>
      <Skeleton width={128} height={36} />
      <div className={styles.movies}>
        {Array(1)
          .fill(null)
          .map((_, index) => (
            <Skeleton  key={index} height={300}/>
          ))}
      </div>
    </div>
  )
}

export default SectionMovieLoading