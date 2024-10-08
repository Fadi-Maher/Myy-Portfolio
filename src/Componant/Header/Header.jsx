import Style from "./Header.module.css";
import {Link} from "react-router-dom"


import React, { useEffect, useState } from 'react'

export  function Header() {
  const[showUl , setShowUl] =useState(false)
  const[mode , setMode] = useState(localStorage.getItem("currentMode")?? "dark") ;

  useEffect(()=>{
    document.body.classList.add(mode);
  },[mode])

  return <div>
  <header className={`${Style.header} mx-auto  my-4 `} >

<nav className="navbar navbar-expand-lg d-flex justify-content-between align-items-center ">

<div className={`${Style.menu}`}>
  <div className={`${Style.borderBtn} d-flex justify-content-center align-items-center rounded-circle `}>
  <button className={`btn`} onClick={()=>{setShowUl(true)}} >
    <i className={`fa-solid fa-bars fs-3 rounded-circle px-3 py-2  ${Style.btnColor}`} ></i>
    </button>
  </div>

    </div>
  <div className="" >
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-4 rounded-5">
        <li className="nav-item">
        <Link className={`${Style.linkStyle} nav-link`} to="Myy-Portfolio">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`${Style.linkStyle} nav-link`} to="/skills">skills</Link>
        </li>
        <li className="nav-item">
          <Link className={`${Style.linkStyle} nav-link`} to="/main">Projects</Link>
        </li>
        <li className="nav-item">
          <Link className={`${Style.linkStyle} nav-link`} to="/resume">Resume</Link>
        </li>
        <li className="nav-item just">
          <Link className={`${Style.linkStyle} nav-link`} to="contactus">ContactUs</Link>
        </li>
      </ul>

    </div>


  
    </div>
    <button className={` btn` } onClick={()=>{
      if(mode == "dark"){
        localStorage.setItem("currentMode" , "light")
        setMode(localStorage.getItem("currentMode"))
        document.body.classList.remove("dark");
      }else if (mode== "light"){
        localStorage.setItem("currentMode" , "dark")
        setMode(localStorage.getItem("currentMode"))
        document.body.classList.remove("light");
      }
      
    }} >
      {mode ==="dark"? 
      <div className={`d-flex justify-content-center align-items-center rounded-circle ${Style.borderBtn} `}>
      <i className={`fa-solid fs-3     fa-sun ${Style.btnColor} `} ></i>
            </div>:
      <div className={` d-flex justify-content-center align-items-center rounded-circle ${Style.borderBtn}  `}>
      <i className={`fa-solid fs-3     fa-moon ${Style.btnColor} `} ></i>
            </div>
    }
    
    </button>
</nav>

  {showUl?   <div className={`${Style.fixed} position-absolute start-0 top-0 bottom-0 end-0 `}>
   
   <div className={`${Style.model} mx-auto mt-5  rounded-5` }>
    <ul className="navbar-nav ms-0 mb-2 mb-lg-0 px-4  ">
    <li className="nav-item  text-end border-0" onClick={()=>{setShowUl(false)}}>
          <i className={` ${Style.linkStyle}  cursor-pointer   fa-solid fa-x`}></i>
        </li>
        <li className="nav-item">
        <Link className={`${Style.linkStyle} nav-link`} to="Fady-Portfolio" onClick={()=>{setShowUl(false)}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`${Style.linkStyle}   nav-link`}  to="/skills" onClick={()=>{setShowUl(false)}}>Skills</Link>
        </li>
        <li className="nav-item">
          <Link  className={`${Style.linkStyle} nav-link`} to="/main" onClick={()=>{setShowUl(false)}}>Projects</Link>
        </li>
        <li className="nav-item">
          <Link className={`${Style.linkStyle} nav-link`}  to="/resume" onClick={()=>{setShowUl(false)}}>Resume</Link>
        </li>
        <li className="nav-item">
          <Link className={`${Style.linkStyle}  nav-link`} to="contactus" onClick={()=>{setShowUl(false)}}>ContactUs</Link>
        </li>
      </ul>

    </div>
   
 
    </div>:null}
  
  </header>
  </div>
}
