import React from 'react'
import Style from "./ContactUs.module.css"
import Helmet from "react-helmet"
import { useForm, ValidationError } from '@formspree/react';
import { Oval } from 'react-loader-spinner'
import Lottie from "lottie-react";
import trueAnimate from "../../Assests/animation/Animation - 1713981317589.json";
import emailAnimation from "../../Assests/animation/emailAnimate.json"
export function ContactUs() {
  const [state, handleSubmit] = useForm("mqkrwjzz");

  return <>
     <Helmet>
        <meta name="Contact Us" content="This is contact us page to login and put feedback" />
      </Helmet>

      <section className={`${Style.contactUs} mx-auto`}>
      <h2 className='mt-3 fw-bolder'>
      <i class="h1 fa-solid fa-envelope me-3"></i>
      Contact Us
        </h2>
        <p className='mb-3'>Contact Us for more information and Get notified when I publish something new .</p>
        <div className='row'>
          <div className='col-md-7'>
          <form onSubmit={handleSubmit} >
          <div className='d-flex align-items-center mt-4'>
            <label htmlFor="email">Email Address :</label>
            <input type="email" id={`${Style.email}`} className='  ms-2 rounded-2 p-2' name='email' required />
            <ValidationError 
        prefix="Email" 
        field="aemil"
        errors={state.errors}
      />
          </div>

          <div className='d-flex align-items-center mt-3 '>
            <label htmlFor="message">Your Message :</label>
            <textarea name="message" id={`${Style.message}`} className='  ms-2 rounded-2 p-2' required ></textarea>
            <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
          </div>
          <button width={80} height={80} className='btn py-2 px-4 mt-4 position-relative start-50 translate-middle-x rounded-4 fs-5' type="submit" disabled={state.submitting}>
            {
              state.submitting? <Oval
                visible={true}
                height="25"
                width="55"
                color="#4fa94d"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
                /> :"Submit"
            }

             </button>
          {
            state.succeeded && <><p className='h6 mt-3 d-flex align-items-center justify-content-center'>
               <Lottie loop={false} animationData={trueAnimate} className={`${Style.successAnimate}`} />
              Your message has been sent successfully ..</p></>
          }
        </form>
          </div>
          <div className={`${Style.emailAnimate} col-md-5 `}>
          <Lottie animationData={emailAnimation}   />
          </div>
        </div>
       
      </section>
  
  </>
}
