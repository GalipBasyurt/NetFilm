import Image from 'next/image'
import styles from "./featured.module.css"

import gotFather from "../../../../styles/images/baba.jpg"


const FeaturedMovie = async() => {

  const getMovie = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=0bd9585b9f74e469ad395dda0da1416f&language=en-US&page=1`)
  const data = await getMovie.json()
  const movie = data?.results[0]
  console.log(movie);

  return (
    <div className={styles?.featuredMovie}>
      <div className={styles.moviePoster}>
      <div className={styles.moviePosterOverlay}></div>
        <Image fill src={gotFather} priority={true} alt='Baba' unoptimized/>
      </div>
  
    </div>
  )
}

export default FeaturedMovie