import React from 'react'
import { allMovies } from '../../../services/movie'
import SectionMovie from '@/components/home/section-movie/SectionMovie'
import styles from "./movies.module.css"

const MoviesPage = () => {
  return (
    <div className={styles.moviesWrapper}>
        <SectionMovie  title="Top Rated" movie={allMovies[0]}/>
        <SectionMovie  title="Popular" movie={allMovies[1]}/>
        <SectionMovie  title="Playing" movie={allMovies[2]}/>
        <SectionMovie  title="Upcoming" movie={allMovies[3]}/>
    </div>
  )
}

export default MoviesPage