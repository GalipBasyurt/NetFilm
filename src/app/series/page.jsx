import { allSeries } from '../../../services/movie'
import SectionSeries from '@/components/home/section-series/SectionSerie'
const SeriesPage = () => {
  return (
    <div>
        <SectionSeries  title="Top Rated" series={allSeries[0]}/>
        <SectionSeries  title="Popular" series={allSeries[1]}/>
        <SectionSeries  title="Playing" series={allSeries[2]}/>
        <SectionSeries  title="Airing Today" series={allSeries[3]}/>
    </div>
  )
}

export default SeriesPage