import React , {memo ,useEffect ,useState } from 'react'

import myPic from "../../Assests/PersonPic/ff.jpeg"
import Style from "./Hero.module.css"
import { Helmet } from 'react-helmet'
import { Slide  } from 'react-awesome-reveal';
import Lottie from "lottie-react";
import hiCV from "../../Assests/animation/hiCV.json"
// import Typewriter from 'typewriter-effect';
import { Typewriter } from "react-simple-typewriter";


  //  import myImage from './devph.png'
   

  function Hero() {

    const [showTypewriter, setShowTypewriter] = useState(false);
    const [showTypewriter2, setShowTypewriter2] = useState(false);
    const [showTypewriter3, setShowTypewriter3] = useState(false);
 
     useEffect(() => {
       // 11111111111111111
       const timer = setTimeout(() => {
         setShowTypewriter(true);
       }, 2000); // 5000ms = 5 seconds

       // Clean up the timer when the component is unmounted
       return () => clearTimeout(timer);
     }, []);

    
     useEffect(() => {
       //222222222222222222
       const timer = setTimeout(() => {
         setShowTypewriter2(true);
       }, 3000); // 5000ms = 5 seconds

       // Clean up the timer when the component is unmounted
       return () => clearTimeout(timer);
     }, []);


    
     useEffect(() => {
       //333333333333
       const timer = setTimeout(() => {
         setShowTypewriter3(true);
       }, 4000); // 5000ms = 5 seconds

       // Clean up the timer when the component is unmounted
       return () => clearTimeout(timer);
     }, []);

     
    
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
            
            <Slide direction="left" duration={1000}>
              <div className={`${Style.aboutMe}`}>
                
                <h2 className="fw-bolder my-5 responsive-text">
                  <Typewriter
                    cursor={true}
                     typeSpeed={40}
                    deleteSpeed={50}
                    cursorStyle=""
                    delaySpeed={1000}
                    words={["Front-End React & Next Js Developer"]}
                  />
                </h2>

            <p>
              
                {showTypewriter && (
                  <Typewriter
                    cursor={true}
                    cursorStyle=""
                    typeSpeed={40}
                    deleteSpeed={60}
                    delaySpeed={1000}
                    words={["Hi, My name is"]}
                  />
                )}
              
               {showTypewriter2 && (
                 <span  style={{ backgroundColor: '#7C7C84' }}
                        className="px-2 py-1 rounded-4 cursor-pointer">
                  <Typewriter
                    cursor={true}
                     typeSpeed={60}
                    cursorStyle=""
                    deleteSpeed={60}
                    delaySpeed={1000}
                    words={["Fady Maher"]}
                  />
                 </span> )}

               {showTypewriter3 && (
                   <Typewriter
                    cursor={true}
                    typeSpeed={20}
                    deleteSpeed={60}
                    cursorStyle=""
                    delaySpeed={1000}
                    words={["I'm a dedicated Front-End Developer, recently graduated from the Information Technology Institute (ITI). Specializing in creating modern, responsive, and dynamic web applications, I’m always eager to learn, collaborate, and stay up to date with the latest web technologies to deliver exceptional user experiences " ]}
                         />   )}
                            
                 </p>
              </div>

              <div className={`${Style.socialIcons} mt-5 d-flex`}>
                <a
                  href="https://www.linkedin.com/in/fady-maher-94590024b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-brands fa-linkedin fs-3 me-3 cursor-pointer"></i>
                </a>
                <a href="https://github.com/Fadi-Maher" target="_blank" rel="noreferrer">
                  <i className="fa fa-brands fa-github fs-3 me-3 cursor-pointer"></i>
                </a>
                <a href="mailto:cleverfady@gmail.com" target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-envelope fs-3 me-3 cursor-pointer"></i>
                </a>
                <a
                  href="https://www.facebook.com/fady.maher.507?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-brands fa-facebook-f fs-3 me-3 cursor-pointer"></i>
                </a>
                <a href="https://iwtsp.com/201206783540" target="_blank" rel="noreferrer">
                  <i className="fa fa-brands fa-whatsapp fs-3 me-3 cursor-pointer"></i>
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