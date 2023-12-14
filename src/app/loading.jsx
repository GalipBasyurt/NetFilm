import FeaturedMovieLoading from '@/components/home/featured-movie/loading'
import GenresLoading from '@/components/home/genres/loading'
import SectionMovieLoading from '@/components/home/section-movie/loading'
import SectionSeriesLoading from '@/components/home/section-series/loading'
import React from 'react'

const LoadingHome = () => {
  return (
    <div>
      <FeaturedMovieLoading/>
      <GenresLoading/>
      <SectionMovieLoading/>
      <SectionSeriesLoading/>
    </div>
  )
}

export default LoadingHome