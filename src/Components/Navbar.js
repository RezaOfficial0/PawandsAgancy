import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './navbarStyle.css';
import Logo from'../assents/navlog.png'
function Navbar() {
  return (
    <div className='Navbar'>
      <ul>
  <li className="left"><img src={Logo}/></li>

  <li><a className="Login-btn" href="/Login">Login</a></li>
  <li><a href="#Founder">The Founder</a></li>
  <li ><a href="#about">About Us</a></li>
  <li ><a href="#contact">Contact Us</a></li>
  <li ><a href="#Company">Company</a></li>
      </ul>  
    </div>
  )
}

export default Navbar
