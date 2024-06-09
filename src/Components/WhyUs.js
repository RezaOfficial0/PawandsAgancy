import React from 'react'

import './whyusStyle.css'
import Global from '../assents/globe-solid.svg'
import Glasses from '../assents/glasses-solid (1).svg'
import Clients from '../assents/users-solid.svg'
import Chess from '../assents/chess-knight-solid.svg'

function WhyUs() {
  return (
    <div className='Whyus'>
        <div className='whyus-head'>
    <h1>Fields Of expertise that our great team excels in</h1>
<hr></hr>
</div>
    <div className='container'>
        <div className='row'>
        <div className='col-3'>
        <div className='exe-img'><img src={Glasses} alt='glasses'></img></div>  
        <div className='exe-head'>
                <h2>Tailored Approach</h2>
                <p>We believe in the uniqueness of each business. Our strategies are customized to suit your specific goals and industry, ensuring maximum impact.</p>
                </div>
        </div>
        <div className='col-3'>
        <div className='exe-img'><img src={Global} alt='global'></img></div>  
        <div className='exe-head'>
                <h2>Full-Service</h2>
                <p>From design to SEO, we handle it all under one roof. This seamless integration guarantees a harmonious and effective online presence.</p>
                </div>
        </div>  
        <div className='col-3'>
        <div className='exe-img'><img src={Clients} alt='clients'></img></div>  
        <div className='exe-head'>
                <h2>Results-Driven</h2>
                <p>Your success is our success. We focus on delivering measurable results, whether it's increased organic traffic, higher search rankings, or better engagement.</p>
                </div>
        </div>
        <div className='col-3'>
        <div className='exe-img'><img src={Chess} alt='chess'></img></div>  
        <div className='exe-head'>
                <h2>Transparency</h2>
                <p>No mysterious processes here. We keep you informed about every step we take and provide regular reports on your website's performance.</p>
                </div>
        </div>  
        </div>

        </div>
    </div>
    
  )
}

export default WhyUs
