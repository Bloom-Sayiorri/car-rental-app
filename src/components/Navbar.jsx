import React from 'react'
import '../styles/Navbar.css'
import { NavLink } from 'react-router-dom'
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <header className='header'>
      <img src={logo} alt="Logo" height={40} width={40} className="logo"/>
      <nav>
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/signup' >Signup</NavLink>
        <NavLink to='/login' >Login</NavLink>
        <NavLink to='/about' >About</NavLink>
      </nav>
    </header>
  )
}

export default Navbar