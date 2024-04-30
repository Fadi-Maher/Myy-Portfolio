import React, { useState } from 'react'



import Card from 'react-bootstrap/Card';
import { Oval } from 'react-loader-spinner'

import {Link} from "react-router-dom"

import Style from "./Main.module.css" 
import { Helmet } from 'react-helmet'
import { myProjects } from '../Atoms/ProjectAtom';
import { useRecoilState } from 'recoil';
import { Fade } from 'react-awesome-reveal'; 

export  function Main() {


const[projectLength , setProjectLength]=useRecoilState(myProjects)
const[currentActive , setCurrentActive] = useState("all");
const[arr , setArr] = useState(projectLength);

console.log(projectLength);
  return <>
   <Helmet>
        <meta name="Main" content="This is Main page to see my projects" />
      </Helmet>
  
  <section className={` ${Style.main} mt-4 main mx-auto`}>
  <div className='row'>
    <div className= {` ${Style.allBtn} col-md-3  `}>
      <div className='d-flex  flex-md-column flex-wrap justify-content-center '>
      <button  
onClick={()=>{
  setCurrentActive("all")
  setArr(projectLength)
}}
  className={`${currentActive ==="all" ? Style.active : null} $ btn ms-2 my-2 py-2 px-2 rounded-4`}
    >All Projects</button>

<button
onClick={()=>{
  setCurrentActive("css")
  const newArr = projectLength.filter((item)=>{
    return item.category =="css"
  })
  setArr(newArr);
}}
className={`${currentActive ==="css" ? Style.active : null} $ btn ms-2 my-2 py-2 px-2 rounded-4`}
 
 > HTML And CSS</button>
<button 
onClick={()=>{
  setCurrentActive("js")
  const newArr = projectLength.filter((item)=>{
    return item.category =="js"
  })
  setArr(newArr);
}}
className={`${currentActive ==="js" ? Style.active : null} $ btn ms-2 my-2 py-2 px-2 rounded-4`}
>JavaScript</button>
<button 
onClick={()=>{
  setCurrentActive("jQuery")
  const newArr = projectLength.filter((item)=>{
    return item.category =="jQuery"
  })
  setArr(newArr);
}}
className={`${currentActive ==="jQuery" ? Style.active : null} $ btn ms-2 my-2 py-2 px-2 rounded-4`}
>jQuery</button>
<button 
onClick={()=>{
  setCurrentActive("react")
  const newArr = projectLength.filter((item)=>{
    return item.category =="react"
  })
  setArr(newArr);
}}
className={`${currentActive ==="react" ? Style.active : null} $ btn ms-2 my-2 py-2 px-2 rounded-4`}
>React.JS</button>
      </div>

    </div>
    <div className={`${Style.allCard} col-md-9 `}>
<div className={` row  ms-md-3 mt-3`}>
{arr ? arr.map((item)=><>
 
  <div className='col-md-6 d-flex  ' >
  <Fade  direction='right' duration={1000}>
  <Card className={`${Style.cardStyle} mb-3 `} key={item.id}>
      <Card.Img variant="top" className={`${Style.imgStyle} `} src={item.imges.cover} />
      <Card.Body className='p-3 '>
        <Card.Title> 
          <h2 className=' h4 fw-bolder mb-3'>
          {item.title}
          <i className={` ${item.icon} ms-2`} ></i>
           </h2>
           </Card.Title>
        <Card.Text >
           <p className='fs-6'>
           {item.description}
           </p> 
        </Card.Text>
        <div className='d-flex justify-content-between align-items-center'>
          <div className={`${Style.icons} mt-2 d-flex`}>
          <a href={item.demo} target="_blank">
          <i className="fa-solid ms-1   fa-link"></i>
          </a>
     <a href={item.github} target="_blank">
     <i class=" ms-2  fa-brands fa-github"></i>
     </a>
          
  
          </div>
          <Link className=' text-primary me-2 ' to={`/projectDetails/${item.id}`}>
            more
            <i className=" ms-1 fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </Card.Body>
    </Card>
    </Fade>

   
 

  </div>
  
  </>) : <Oval
                visible={true}
                height="25"
                width="55"
                color="#4fa94d"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
                />}
</div>

    </div>
    </div>
    
  </section>
  
  </>
}
