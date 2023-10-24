import React from 'react'
import Header from '../Components/Header'
import Whyus from '../Components/WhyUs'
import Prices from '../Components/Prices'
import Aboutusec from '../Components/AboutusSec'
import '../Pages/homeStyle.css'
import '../Tools/Animations'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Home() {
  return (
    <>
    <div className='Home'>
    <Header/>
    <div className='Home-White'>
    <Whyus/>
    <Prices />
    <Aboutusec/>
    </div>
    
    </div>
    </>
  )
}

export default Home;