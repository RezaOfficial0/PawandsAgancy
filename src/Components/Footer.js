import React from 'react'
import'../Tools/Animations'
import Logo from '../assents/navlog-removebg-preview.png'
import './footerStyle.css'      

function Footer() {
  return (
    <div className='Footer'>
      <img src={Logo}/>
       <h3>Subscribe to Company Updates Below</h3>
       <div className='sub'>
        <input type='Email' placeholder='Your Email'></input>
        <button type='Submit'>Subscribe</button>
       </div>
       <hr className='footer-hr'></hr>
       <h5>This Website Created by <a href='https://atrizatalebi.web.app'>Riza Talebi</a></h5>
    </div>
  )
}

export default Footer
