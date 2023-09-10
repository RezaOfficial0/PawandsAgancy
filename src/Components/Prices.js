import React from 'react'
import './pricesStyle.css'
import Price from './Price'
import Code from '../assents/code-solid.svg'
function Prices() {
  return (
    <div className='Prices'>
      <div className='Price-Header'>
         <h1>Select The Best Plan For Your Company</h1>
         <hr></hr>
         </div>
    <div className="container text-center">
      <div className="row align-items-start">
        <div className="col-sm-4">
          <Price  title="Basic Plan" text="Only 4.99$/per Mounth for Single Page Application With 3 Months of Hosting,Domain Service" />
        </div>
        <div className="col-sm-4">
        <Price  title="Pack Plan" text="Only 15.99$/per Mounth for Single Page Application With 3 Months of Hosting,Domain Service" />
        </div>
        <div className="col-sm-4">
        <Price title="Premium Plan" text="Only 50.99$/per Mounth for Single Page Application With 3 Months of Hosting,Domain Service" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Prices
