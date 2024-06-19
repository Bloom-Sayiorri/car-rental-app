import React from 'react'
import '../styles/Navbar.css'
import { NavLink } from 'react-router-dom'
import logo from "../assets/logo.svg";
import { FaBars } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { FiSun } from 'react-icons/fi';
import { BsMoonStarsFill } from 'react-icons/bs';

const Navbar = ({ handleTheme }) => {

  return (
    <header className='header'>
      <div className='logo'>
        <img src={logo} alt="Logo" className="logo-img"/>
        <p className='logo-text'>Car Rental App</p>
      </div>
      <nav className='nav'>
        <NavLink to='/' className='navlinks'>Home</NavLink>
        <NavLink to='/signup' className='navlinks'>Signup</NavLink>
        <NavLink to='/login' className='navlinks'>Login</NavLink>
        <NavLink to='/about' className='navlinks'>About</NavLink>
      </nav>
      <div>
        <FaBars className="menu" onClick={() => {console.log("clicked");}}/>
        <CgProfile className="avatar" onClick={() => {console.log("clicked");}}/>
        <FiSun className="light" onClick={() => {console.log("clicked");}}/>
        <BsMoonStarsFill className="dark" onClick={() => {console.log("clicked");}}/>
      </div>
    </header>
  )
}

export default Navbar