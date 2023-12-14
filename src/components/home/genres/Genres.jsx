import React from 'react'
import styles from "./genres.module.css"
import Link from 'next/link'
const Genres = async() => {
 const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=en`)
 const data = await response.json()
  const genres = data?.genres
  // console.log(genres);
  return (
     <div className={styles.genresWrap}>
     <h1>CATEGORIES</h1>
     <div className={styles.genres}>
      {
        genres?.map((genre)=>(
          <Link 
          key={genre?.id}
           style={{color:"white", textDecoration:"none"}} 
           href={`/categories/${genre?.name.toLowerCase()}/${genre?.id}`}
  
           >
          <div className={styles.genre} key={genre?.id}>{genre?.name}</div>
          </Link>
        ))
      }
    </div>
     </div>
  )
}

export default Genres