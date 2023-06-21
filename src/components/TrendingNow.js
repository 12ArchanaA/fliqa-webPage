import React from 'react'

const TrendingNow = (props) => {
  return (
    <div className="trending-content">
      <div className="trending-content-image">
        <img src={props.image} />
      </div>
      <div className="trending-content-para">
        <h5>{props.heading}</h5>
        <p>{props.paragraph}</p>
      </div>
    </div>
  );
};

export default TrendingNow