import React from 'react'
import Header from '../Components/Header'
import Whyus from '../Components/WhyUs'
import Owner from '../Components/Owner'
import Footer from '../Components/Footer'
import '../Pages/homeStyle.css'
import '../Tools/Animations'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Home() {
  return (
    <div className='Home'>
     
    <Header/>
    <div className='Home-White'>
    <Whyus/>
    <Owner/>
    <Footer/>
    </div>
    </div>
  )
}

export default Home;