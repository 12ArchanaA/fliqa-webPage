import React from 'react'

const AwardContainer = (props) => {
  return (
    <div className="rating">
      <div className="rating-box">
        <img src={props.image1} />
      </div>
      <div className="rating-box">
        <img src={props.image2} />
      </div>
    </div>
  );
}

export default AwardContainer