"use client"
import React, { useState } from 'react'
import styles from "./item.module.css"
import {AiOutlineSearch} from "react-icons/ai"
import { useRouter } from 'next/navigation'
const NavbarMiddle = () => {
  const [keyword,setKeyword] = useState("")
  const router = useRouter()
  console.log(keyword);
   
  const searchFunc = (e)=>{
    if(e.key==="Enter" && keyword.length >= 3){
      router.push(`/search/${keyword}`)
      setKeyword("")
    }
  }

  return (
    <div className={styles["search-group"]}>
      <input onKeyDown={searchFunc} onChange={(e)=>setKeyword(e.target.value)} value={keyword} className={styles["search-input"]} type="text" placeholder='Search Movie' />
      <AiOutlineSearch className={styles["search-icon"]} size={24}/>
    </div>
  )
}

export default NavbarMiddle