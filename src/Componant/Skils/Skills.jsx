import React from 'react'

import Style from "./Skills.module.css"
import { Slide } from 'react-awesome-reveal'

 

export default function Skills() {
  return <div>
  
  <section className={`${Style.skillsStyle} `}>
 
    <div className={`${Style.coursesStyle} mx-auto`}>
   
        <h1 className=' fw-bolder border-bottom text-center '> Courses 
        <i className=' fs-2 ms-2 fa fa-solid fa-database'></i>
        </h1>
        <Slide  direction='left' duration={1000}>
        <div>
            <div className='d-flex justify-content-between mt-4 align-item-center'>
            <h2 className='h4'>Frontend diploma   </h2>
            <p>June 2023 - December 2023</p>
            </div>
            <p className={`${Style.childPar}`}>Smart Code Academy</p>
        </div>

        <div>
            <div className='d-flex justify-content-between mt-4 align-item-center'>
            <h2 className='h4'>Frontend & Cross Platform mobile apps diploma   </h2>
            <p>March 2024- October 2024</p>
            </div>
            <p className={`${Style.childPar}`}>ITI (information technology institute)</p>
        </div>
        </Slide>
    </div>
    <div className={` ${Style.borderStyle}`}/>

<div className={`${Style.icons} mx-auto`}>
   <h1 className=' fw-bolder border-bottom  mt-4 text-center'> Technical Skills  
        <i className="fa-solid fa-globe fs-2 ms-2"></i>
        </h1>
        <Slide  direction='left' duration={1000}>
        <div className='row d-flex justify-content-center '>
          <div className={`${Style.iconItem} col-md-2 ms-md-4 mt-4 cursor-pointer  rounded-3 `}>
          <i className="fa-brands fa-html5 display-2  d-flex justify-content-center my-3 "></i>
            <h3 className='h3 text-center'>HTML5</h3>
          </div>

          <div className={`${Style.iconItem} col-md-2 ms-md-4 mt-4 cursor-pointer  rounded-3 `}>
          <i className="fa-brands fa-css3-alt display-2  d-flex justify-content-center my-3 "></i>
            <h3 className='h3 text-center'>CSS3</h3>
          </div>
          <div className={`${Style.iconItem} col-md-2 ms-md-4 mt-4 cursor-pointer  rounded-3 `}>
          <i className="fa-brands fa-bootstrap display-2  d-flex justify-content-center my-3 "></i>
            <h3 className='h3 text-center '>Bootstrap</h3>
          </div>

          <div className={`${Style.iconItem} col-md-2 ms-md-4 mt-4 cursor-pointer rounded-3`}>
        <i className="display-2 d-flex justify-content-center my-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
            alt="Tailwind CSS Logo"
            style={{ width: '64px', height: '64px', filter: 'brightness(0) invert(1)' }} //  
          />
        </i>
        <h3 className="h3 text-center">Tailwind CSS</h3>
      </div>


          <div className={`${Style.iconItem} col-md-2 ms-md-4 mt-4 cursor-pointer  rounded-3 `}>
          <i className="fa-brands fa-js display-2  d-flex justify-content-center my-3 "></i>
            <h3 className='h4 text-center '>JavaScript</h3>

          </div>
          <div className={`${Style.iconItem} col-md-2 ms-md-4 mt-4 cursor-pointer  rounded-3 `}>
            <div className='d-flex justify-content-center  align-items-top'>
            <i className="fa-solid fa-moon display-2  d-flex justify-content-center my-3 "></i>
            <i className="fa-solid fa-moon display-5  d-flex justify-content-center my-3 "></i>
            <i className="fa-solid fa-moon display-6  d-flex justify-content-center my-3 "></i>
            </div>
             <h3 className='h4 text-center '>jQuery</h3>

          </div>
              <div className={`${Style.iconItem} col-md-2 ms-md-4 mt-4 cursor-pointer  rounded-3 `}>
                <div className='d-flex justify-content-center  align-items-end'>
                <i className="fa-brands fa-t display-2   my-3 "></i>
              <i className="fa-brands fa-s display-4    my-3 "></i>
                </div>
                <h3 className='h4 text-center '>TyprScript</h3>
          </div>
         
          <div className={`${Style.iconItem} col-md-2 ms-md-4 mt-4 cursor-pointer  rounded-3 `}>
          <i className="fa-brands fa-sass display-2  d-flex justify-content-center my-3 "></i>
            <h3 className='h3 text-center '>SASS</h3>
          </div>

          <div className={`${Style.iconItem} col-md-2 ms-md-4 mt-4 cursor-pointer  rounded-3 `}>
          <i className="fa-brands fa-github display-2  d-flex justify-content-center my-3 "></i>
            <h3 className='h3 text-center '>GitHub</h3>
          </div>
          <div className={`${Style.iconItem} col-md-2 ms-md-4 mt-4 cursor-pointer  rounded-3 `}>
          <i className="fa-solid fa-arrows-rotate display-2  d-flex justify-content-center my-3 "></i>
            <h3 className='h4 text-center '>Ajax (API)</h3>
          </div>

          <div className={`${Style.iconItem} col-md-2 ms-md-4 mt-4 cursor-pointer  rounded-3 `}>
          <i className="fa-brands fa-react display-2  d-flex justify-content-center my-3 "></i>
            <h3 className='h3 text-center '>React.JS</h3>
          </div>

          <div className={`${Style.iconItem} col-md-2 ms-md-4 mt-4 cursor-pointer  rounded-3 `}>
          <i className=" fa-brands fa-battle-net display-2  d-flex justify-content-center my-3 "></i>
            <h3 className='h3 text-center '>Redux</h3>
          </div>
          <div className={`${Style.iconItem} col-md-2 ms-md-4 mt-4 cursor-pointer  rounded-3 `}>
          <i className="fa-solid fa-n display-2  d-flex justify-content-center my-3 "></i>
            <h3 className='h3 text-center '>Next.JS</h3>
          </div>

          



        </div>
        </Slide>
</div>

  </section>
  </div>
}
  