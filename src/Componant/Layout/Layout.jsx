import {Outlet} from "react-router-dom"
import React, { useState } from 'react'
import {Header} from "../Header/Header"
import {Footer} from "../Footer/Footer"
import Style from "./Layout.module.css" 


export function Layout() {
const[showArrow , setShowArrow]=useState(false)
  window.addEventListener("scroll" , ()=>{
    if(window.scrollY >200){
      setShowArrow(true)
    }else{
      setShowArrow(false)
    }
  })
  return <>

<div id="up">
<Header />
  <Outlet></Outlet>
  <Footer/>

<div style={{opacity: showArrow ? 1 : 0}} className={`${Style.backToTop} cursor-pointer d-flex  rounded-circle position-fixed justify-content-center align-items-center bottom-0 end-0 mb-4 me-5`}>

  <a href="#up" >
    <i class=" fa-solid fa-arrow-up fw-semibold fs-5 text-white "></i>
  </a>
  

</div>


</div>


  </>
}
