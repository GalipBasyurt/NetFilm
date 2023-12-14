import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "./search.module.css"

const getSearch = async(keyword)=>{    
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${keyword}&include_adult=false&language=en-US&page=1`)
    const data = await res.json()
    return data.results
    
} 

const delay = async(ms)=>{
  return new Promise((resolve)=>setTimeout(resolve,ms))
}

const SearchPage = async({params}) => {
    await delay(1500)
    const keyword = params.keyword
    const search = await getSearch(keyword)
    
    console.log(search);
  return (
    <div className={styles.search}>
        {
          !search 
          ? <div>The movie you were looking for was not found</div> 
          : <div className={styles["search-group"]}>
              {
                search?.map((data)=>(
                    <Link className={styles.movies} key={data?.id} href={`/movie/${data?.id}`}>
                    <Image 
                      height={300} 
                      width={300}
                      src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`||`https://image.tmdb.org/t/p/w500${data?.backdrop_path}`}
                      className={styles.movie}
                      alt={data?.title}
                      />
                    </Link>
                ))
              }
           </div>

        }
    </div>
  )
}

export default SearchPage