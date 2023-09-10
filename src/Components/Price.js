import React from 'react'
import './priceStyle.css'
function Price(props) {
  return (
    <div className="card" style={{width: "19rem"}}>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.text}</p>
      <a href={props.href} className="btn btn-primary">Select a Plan</a>
    </div>
  </div>
  
  )
}

export default Price
