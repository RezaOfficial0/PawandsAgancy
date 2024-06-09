import React from 'react'
import'../Tools/Animations'
import Logo from '../assents/logo1.png'
import './footerStyle.css'     
import insta from '../assents/instagram.png' 
import twitter from '../assents/twitter.webp'
import youtube from '../assents/Youtube_logo.png'
function Footer(){
  return (
    <div className='Footer'>
      <img src={Logo}/>
      <div className='SocialMedia-Links'>
      <a href="https://www.instagram.com/pawands.marketing/"><img style={{width:"40px"}} src={insta}></img></a>
  <a href="https://twitter.com/PawandsAgency"><img style={{width:"40px"}} src={twitter}></img></a>
  <a href="https://www.youtube.com/channel/UCwXOBmcn7tlDg3HMjuspE-Q"><img style={{width:"40px"}} src={youtube}></img></a>
  </div>

       <h5>This Website Created by <a href='https://atrizatalebi.web.app'>Riza Talebi</a> & <a href='https://aradofficiall.web.app/'>Arad Zeinalifarid</a></h5>
  
       <div className='Footer-Links'>
        <a href="mailto:pawands.agency@gmail.com">pawands.agency@gmail.com</a>
    
        </div>
    </div>
  )
}



export default Footer
