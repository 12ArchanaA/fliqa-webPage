import React from 'react'
import "../App.css";

const Service = (props) => {
  return (
    <div className="service-card">
      
      <img src={props.image} />
      <div className="service-card-content">
        <h3>{props.heading}</h3>
        <hr />
        <h4>{props.paragraph}</h4>
      </div>
      <div className="service-button">
        <button>Know More</button>
      </div>
    </div>
  )
}

export default Service

