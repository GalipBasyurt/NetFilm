import React from 'react'
import styles from "./section-serie.module.css"
import Skeleton from '@/components/skeleton/Skeleton'

const SectionSeriesLoading = () => {
  return (
    <div className={styles.sectionSerie}>
    <Skeleton width={128} height={36} />
    <div className={styles.series}>
      {Array(1)
        .fill(null)
        .map((_, index) => (
          <Skeleton key={index} height={300}/>
        ))}
    </div>
  </div>
  )
}

export default SectionSeriesLoading