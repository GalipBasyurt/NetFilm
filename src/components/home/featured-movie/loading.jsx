import React from 'react'
import styles from "./featured.module.css"
import Loading from '@/components/loading/Loading'

const FeaturedMovieLoading = () => {
  return (
    <div style={{height: "440px"}} className={styles.featuredMovie}>
        <Loading/>
    </div>
  )
}

export default FeaturedMovieLoading