'use client'
import React, { useEffect, useRef } from 'react'
import styles from "./section-movie.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import Image from 'next/image';
import {FcNext,FcPrevious} from "react-icons/fc"

const SectionMovie = ({title, movie}) => {
  const sliderRef = useRef(null)
  console.log(sliderRef.current);
    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1250,
            settings: {
              slidesToShow: 4,
              infinite: true,
              
              
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
            
            }
          },
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };
      // console.log(movie);

      const handlePreviousClick = () => {
        if(sliderRef.current){
          sliderRef.current.slickPrev();
        }
      };
    
      const handleNextClick = () => {
        if(sliderRef.current){
          sliderRef.current.slickNext();
        }
      };

      useEffect(() => {
        handlePreviousClick();
        handleNextClick();
      }, [sliderRef]);

  return (
    <div className={styles.sectionMovie} >
    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
     <h1>{title}</h1>
     <div className={styles.button}>
     <FcPrevious onClick={()=>handlePreviousClick()} size={30}/>
     <FcNext size={30} onClick={()=>handleNextClick()}/>
     </div>
    </div>
     
     <Slider ref={sliderRef} {...settings}>
          {
            movie?.map((movie)=>(
          
              <div key={movie?.id}>
                <Link href={`/movie/${movie?.id}`} style={{position:"relative"}}>
                <Image 
                  src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}` || `https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
                  height={300}
                  width={250}
                  unoptimized
                  alt={movie?.title}
                  className={styles.movie}

                  />
              </Link>
              </div>
            ))
          }
        </Slider>
    </div>
  )
}

export default SectionMovie