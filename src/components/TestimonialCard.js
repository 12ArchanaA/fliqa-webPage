import React from 'react'

const TestimonialCard = (props) => {
  return (
    <div className="card">
      <div className="card-head">
        <img src={props.image} />
      </div>
      <div className="card-content">
        <p>{props.paragraph}</p>
      </div>
    </div>
  );
}

export default TestimonialCard