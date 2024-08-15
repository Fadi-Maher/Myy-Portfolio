import React from 'react'
import resume from "../../Assests/CV/CV-MinaMedhat.pdf"
import Style from "./Resume.module.css"
import Lottie from "lottie-react";
import hiCV from "../../Assests/animation/hiCV.json"
import { Slide  } from 'react-awesome-reveal';

export default function Resume() {
  return <>
 <Slide  direction='left' duration={1000}>
  <div className='d-flex justify-content-center'>
  <a href={resume} className={`${Style.resumeCV} rounded-4  fw-bolder mt-5 py-3 px-5 `} download="MinaMedhatCV.pdf">
  Download CV
  </a>
  </div>
  </Slide>
<div className='row'>
  <div className="col-md-12 d-flex justify-content-center">
  <Lottie animationData={hiCV} className={`${Style.robbot}`}  />
  </div>

</div>



  </>
}
