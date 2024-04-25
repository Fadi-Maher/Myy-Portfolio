import React from 'react'

import Style from "./Footer.module.css"
import { Link } from 'react-router-dom'

export  function Footer() {
  return <>
  <footer className={` mt-5 py-4`}>
    <div className={`${Style.footerStyle} mx-auto row`}>
      <div className='col-md-7'>
      <ul className=' d-flex  list-unstyled'>
      <li className='me-3'><Link className={`${Style.linkStyle} fs-6`} to="/Mina-Portfolio" >Home</Link></li>
      <li className='me-3'><Link className={`${Style.linkStyle} fs-6`} to="/main">Projects</Link></li>
      <li className='me-3'><Link className={`${Style.linkStyle} fs-6`} to="/resume">Resume</Link></li>
      <li className='me-3'><Link className={`${Style.linkStyle} fs-6`} to="/contactus">Contact Us</Link></li>
    </ul>
      </div>
<div className='col-md-5'>
<p  className='fs-6'>© 2024 Mina Medhat RT. All rights reserved.</p>
</div>

    </div>

  </footer>
  </>
}
