import React from 'react'
import '../styles/Footer.css'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='column'>
          <p className='text'><span className='copyright'>&copy;</span> 2024 Car Rental Inc.</p>
          {/* <div className='rule'>r</div> */}
        </div>
        <ul className='socials'>
          <Link className='icons'>
            <FaInstagram/>
          </Link>
          <Link className='icons'>
            <FaTwitter/>
          </Link>
          <Link className='icons'>
            <FaFacebook/>
          </Link>
        </ul>
    </div>
  )
}

export default Footer