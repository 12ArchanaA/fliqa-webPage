import React from 'react'
import "../App.css";

const Title = (props) => {
  return (
    <div className="title-card">
      <img src={props.image} alt="" />
      <div className='title-card-content'>
        <h3>{props.heading}</h3>
        <h4>{props.name}</h4>
      </div>
    </div>
  )
}

export default Title