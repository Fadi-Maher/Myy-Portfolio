import React , {memo } from 'react'

import myPic from "../../Assests/PersonPic/ff.jpeg"
import Style from "./Hero.module.css"
import { Helmet } from 'react-helmet'
import { Slide  } from 'react-awesome-reveal';
import Lottie from "lottie-react";
import hiCV from "../../Assests/animation/hiCV.json"
  //  import myImage from './devph.png'
   

  function Hero() {
   
    
  return <>
   <Helmet>
        <meta name="HeroPage" content="This is hero page about me and my cv and links" />
      </Helmet>

      <section className={` mx-auto ${Style.hero} `}>
        <div className="row ">
          <div className={`${Style.heroFlex} align-items-center`}>
          <div className='col-md-8 '>
            <div className="d-flex mt-3 ">
              <img src={myPic} className={`${Style.imgStyle} ms-3 cursor-pointer`} alt="my-img" />
              <i  className="text-primary fa-solid fa-certificate fs-4 align-content-end mb-2 ms-2"></i>
            </div>
            <Slide  direction='left' duration={1000}>
            <div className={`${Style.aboutMe}`}>
            <h2 className=' fw-bolder my-5'>Frontend React & Next Js Developer </h2>
            <p >Hi, My name is <span className='px-2 py-1 rounded-4 cursor-pointer'>Fady Maher</span> .  I'm a dedicated Front-End Developer, recently graduated from the Information Technology Institute (ITI).
        Specializing in creating modern, responsive, and dynamic web applications, I’m always eager to learn, collaborate, and stay up to date with the latest web technologies to deliver exceptional user      experiences.</p>
          </div>

          <div className={`${Style.socialIcons} mt-5 d-flex  `}>
            <a href="https://www.linkedin.com/in/fady-maher-94590024b/" target="_blank" rel="noreferrer" >
            <i className='fa fa-brands fa-linkedin fs-3 me-3 cursor-pointer '></i>
            </a>
            <a href="https://github.com/Fadi-Maher" target="_blank" rel="noreferrer">
            <i className='fa fa-brands fa-github fs-3 me-3 cursor-pointer'></i>
            </a>
            <a href="mailto:cleverfady@gmail.com" target="_blank"  rel="noreferrer">
            <i className="fa-solid fa-envelope fs-3 me-3 cursor-pointer "></i>
            </a>
             
            <a href="https://www.facebook.com/fady.maher.507?mibextid=ZbWKwL" target="_blank" rel="noreferrer">
            <i className='fa fa-brands fa-facebook-f fs-3 me-3 cursor-pointer'></i>
            </a>
            <a href="https://iwtsp.com/201206783540" target="_blank" rel="noreferrer">
            <i className='fa fa-brands fa-whatsapp fs-3 me-3 cursor-pointer'></i>
            </a>
             
          </div>
            </Slide>
           
          </div>
          <Slide duration={1000} direction='right' > 
          <div className={`col-md-4 ${Style.developerAnimate} justify-content-center`}>
          {/* <Lottie animationData={developerAnimate}   /> */}
            <Lottie animationData={hiCV}   />
          {/* <img style={{width:420, height:500}} src={ myImage} alt="" /> */}
          </div> 
          </Slide>
          </div>

        </div>
      </section>
  </>
 
}
 export default memo(Hero);