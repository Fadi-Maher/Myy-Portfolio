import React from 'react'
import Style from "./Notfound.module.css"
import Lottie from "lottie-react";
import erorr404 from "../../Assests/animation/error404.json"
import {Link} from "react-router-dom"


export function Notfound() {
  return <>

<section className="py-5 ">

          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
            <Lottie animationData={erorr404} className={`${Style.error404} rounded-5`}  />
            
            </div>
            <Link to="/hero" className="mt-3 btn btn-dark text-white w-25 py-2 position-relative start-50 translate-middle-x">Back To Home</Link>
          </div>

      </section>
  </>
}
