import React from 'react'
import styles from "./detail.module.css"
import Image from 'next/image'
const getSerieDetail = async(id)=>{
    const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.API_KEY}&language=en-US`)
    const data = await response.json()
    return data;
}


const SerieDetail = async({params}) => {
    const id = params.id;
    const serieDetail = await getSerieDetail(id)
    // console.log(serieDetail);
  return (
   <div className={styles["serie-wrapper"]}>
     <div className={styles["serie-group"]}>
        <h1>{serieDetail?.name}</h1> 
        <p>{serieDetail?.overview}</p>
        <span>Vote Average = {serieDetail?.vote_average}</span>
        <span>Vote Count =  {serieDetail?.vote_count}</span>
        <span>Popularity = {serieDetail?.popularity}</span>
     </div>   
    <div className={styles.moviePoster}>
      <div  className={styles.moviePosterOverlay}></div>
        <Image
        fill
        src={`https://image.tmdb.org/t/p/w500${serieDetail?.poster_path}`} 
        alt={serieDetail?.title}  
        priority={true}  
        
        />
      </div>
   </div>
  )
}

export default SerieDetail