import React from 'react'
import FeaturedMovie from '@/components/home/featured-movie/FeaturedMovie'
import Genres from '@/components/home/genres/Genres'
import SectionMovie from '@/components/home/section-movie/SectionMovie'
import SectionSeries from '@/components/home/section-series/SectionSerie'
import { allMovies } from '../../services/movie'
import { allSeries } from '../../services/movie'

const HomeContainer = async() => {
  return (
    <div>
        <FeaturedMovie/>
        <Genres/>
        <SectionMovie  title="Top Rated Movies" movie={allMovies[0]}/>
        <SectionSeries  title="Top Rated Series" series={allSeries[0]}/>
    </div>
  )
}

export default HomeContainer