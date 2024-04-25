import React from 'react'

import Style from "./ProjectDetails.module.css"

import { myProjects } from '../Atoms/ProjectAtom';
import { useRecoilState } from 'recoil';
import { useParams } from 'react-router-dom'

import { Fade , Slide } from 'react-awesome-reveal';

import Slider from "react-slick";

export default function ProjectDetails() {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        
      };

    const[projectLength , setProjectLength]=useRecoilState(myProjects)
let {id} =useParams();
const addArr = []

 projectLength.map((item)=>{
if(item.id == id){
    addArr.push(item);
}
 })
// console.log(addArr);

  return <>
{
    addArr.map((element)=><> <section className={`${Style.productDetails} mx-auto`}>
        <h1 className=' fw-bolder pb-2 mb-5 d-flex align-items-center justify-content-center '>{element.title}
        <i className={`${element.icon} ms-2`}></i>
        </h1>
        <Slide  direction='left' duration={1000}>
        <picture className=' d-flex justify-content-center'>
        <img src={element.imges.cover} alt="cover" className={` ${Style.coverImg} rounded-5`} />
        </picture>
        </Slide>
        <Fade  direction='up' duration={1000}>
        <div className={`${Style.descProject} my-5`}>
            <p className=' h5'> <span className='border-bottom fw-semibold '> Description :</span> {element.description}</p>
            <p  className=' h5 mt-3'> <span className='border-bottom fw-semibold me-1'> Category :</span> {element.category}</p>
           <div className=' d-flex justify-content-around my-5'>
           <a href={`${element.demo}`} className='btn'  target='_block'> 
            <i class="fa-solid fa-eye"></i> Demo 
             </a>
             <a href={`${element.github}`} className='btn'  target='_block'> 
            <i class="fa-brands fa-github"></i> Github
             </a>
           </div>
        </div>
        </Fade>

        <div className="slider-container w-75 position-relative start-50 translate-middle-x ">
      <Slider {...settings} >
        <div className='d-flex align-items-center'>
          <img src={element.imges.p1} className='w-75 rounded-5 ' alt="1" />
          <img src={element.imges.p2} className='w-25 rounded-5' alt="2" />
        </div>
      
        <div  className='d-flex align-items-center'>
          <img src={element.imges.p2} className='w-75 rounded-5 ' alt="2" />
          <img src={element.imges.p3} className='w-25 rounded-5' alt="2" />
        </div>
        <div  className='d-flex align-items-center'>
          <img src={element.imges.p3} className='w-75 rounded-5 ' alt="2" />
          <img src={element.imges.p4} className='w-25 rounded-5' alt="2" />
        </div>
        <div  className='d-flex align-items-center'>
          <img src={element.imges.p4} className='w-75 rounded-5 ' alt="2" />
          <img src={element.imges.p1} className='w-25 rounded-5' alt="2" />
        </div>
       
        
      </Slider>
      </div>
    </section>
    
    
    
    </>
        
    )
}
  </>

}
