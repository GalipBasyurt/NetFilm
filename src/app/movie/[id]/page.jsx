import React from 'react'
import styles from "./detail.module.css"
import Image from 'next/image'
const getMovieDetail = async(id)=>{
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`)
    const data = await response.json()
    return data;
}


const MovieDetail = async({params,searchParams}) => {
    const id = params.id;
    const movieDetail = await getMovieDetail(id)

    if (searchParams.error === "true") {
      throw new Error("Something went wrong!");
    }
       
    if (movieDetail.success === false) {
      notFound();
    }

  return (
   <div className={styles["movie-wrapper"]}>
     <div className={styles["movie-group"]}>
        <h1>{movieDetail?.title}</h1> 
        <p>{movieDetail?.overview}</p>
        <span>Date = {movieDetail?.release_date}</span>
        <span>Vote Average = {movieDetail?.vote_average}</span>
        <span>Vote Count =  {movieDetail?.vote_count}</span>
        <span>Popularity = {movieDetail?.popularity}</span>
     </div>   
    <div className={styles.moviePoster}>
      <div  className={styles.moviePosterOverlay}></div>
        <Image
        fill
        
        src={`https://image.tmdb.org/t/p/w500${movieDetail?.poster_path}`} 
        alt={movieDetail?.title}  
        priority={true}  
        
        />
      </div>
   </div>
  )
}

export default MovieDetail