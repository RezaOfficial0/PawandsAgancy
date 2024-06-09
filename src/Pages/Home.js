import React from 'react'
import Header from '../Components/Header'
import Whyus from '../Components/WhyUs'
import Aboutusec from '../Components/AboutusSec'
import Footer from '../Components/Footer'
import Reservation from '../Components/Reservation'
import '../Pages/homeStyle.css'
import '../Tools/Animations'
import Navbar from '../Components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Home() {
  return (
    <>
     <Navbar/>
    <div className='Home'>
    <Header/>
    <div className='Home-White'>
    <Whyus/>
    <Aboutusec/>
    <Reservation/>
    </div>
    
    </div>
    <Footer/>
    </>
  )
}

export default Home;