"use client"
import React, { useEffect, useRef } from 'react'
import styles from "./section-serie.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import Image from 'next/image';
import {FcNext,FcPrevious} from "react-icons/fc"



const SectionSeries = ({title, series}) => {
    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1250,
            settings: {
              slidesToShow: 4,
              infinite: true,
              dots: false
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
      
      const sliderRef = useRef(null)
      
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
    <div className={styles.sectionSerie}>
      <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
       <h1>{title}</h1>
        <div className={styles.button}>
          <FcPrevious onClick={()=>handlePreviousClick()} size={30}/>
          <FcNext size={30} onClick={()=>handleNextClick()}/>
       </div>
     </div>
     <Slider ref={sliderRef} {...settings}>
          {
            series?.map((serie)=>(
          
              <div key={serie?.id}>
                <Link href={`/serie/${serie?.id}`} style={{position:"relative"}}>
                <Image 
                  src={`https://image.tmdb.org/t/p/w500${serie?.poster_path}` || `https://image.tmdb.org/t/p/w500${serie?.backdrop_path}`}
                  height={300}
                  width={250}
                  unoptimized
                  alt={serie?.title}
                  className={styles.series}
                  />
              </Link>
              </div>
            ))
          }
        </Slider>
    </div>
  )
}

export default SectionSeries