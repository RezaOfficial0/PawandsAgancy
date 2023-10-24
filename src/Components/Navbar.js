import React from 'react'
import './navbarStyle.css';
import Logo from'../assents/navlog.png'
import Menu from '../assents/bars-solid.svg'
function Navbar() {
  return (
    <div className='Navbar'>
      <ul>
  <li className="left"><a href='/'><img src={Logo}/></a></li>

  <li><a className="Login-btn" href="/Login">Login</a></li>
  <li><a href="/Founder">The Founder</a></li>
  <li ><a href="#contact">Contact Us</a></li>
  <li ><a href="#Company">Company</a></li>
  

      </ul>  
    </div>
  )
}

export default Navbar
