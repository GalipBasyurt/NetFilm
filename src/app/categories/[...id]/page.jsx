import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "./styles.module.css" 
import Genres from '@/components/home/genres/Genres'


const BASE_URL = "https://api.themoviedb.org/3"
 

const getCategoryMovie = async(id)=>{
    const response = await fetch(`${BASE_URL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=${id}`)
    const data = await response.json()
    return data?.results

 }

 
const CategoryPage = async({params}) => {
    const id = params.id[1]
    const name = params.id[0]
    const categoryMovie = await getCategoryMovie(id)
  return (
    <div className={styles.category}>
        <h1>{name}</h1>
        <div className={styles["movies-group"]}>
                {
                  categoryMovie?.map(movie=>(
                     <Link className={styles?.movies} key={movie?.id} href={`/movie/${movie?.id}`}>
                       <Image 
                         fill  
                         src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                         alt={movie?.title}
                         className={styles?.movie}
                       />
                   </Link>    
                   ))
                }
        </div>
    </div>
  )
}

export default CategoryPage