import React from 'react'
import '../styles/Footer.css'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='column'>
          <p className='text'>&copy; Car Rental Inc @ 2024.</p>
          {/* <div className='rule'>r</div> */}
        </div>
        <div className='socials'>
          <ul className='links'>
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
    </div>
  )
}

export default Footer