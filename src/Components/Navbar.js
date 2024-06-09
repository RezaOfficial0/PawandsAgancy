import React from 'react'
import './navbarStyle.css';
import Logo from'../assents/logo1.png'
function Navbar() {
  return (
    <div className='Navbar'>
      <ul>
  <li className="left"><a href='/'><img src={Logo}/></a></li>

 


      </ul>  
    </div>
  )
}

export default Navbar
