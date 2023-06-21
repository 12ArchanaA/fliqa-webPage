import React from "react";

const Offers = (props) => {
  return (
    <div className="offers-card">
      <div
        className="offers-card-image"
        style={{ backgroundImage: `url(${props.image1})` }}
      >
        <div className="offers-card-para">
          <h4>{props.heading1}</h4>
          <hr />
        </div>
        <div className="discount-content">
          <h4>{props.heading2}</h4>
          <img src={props.image2} />
        </div>
      </div>

      <h4>{props.heading3}</h4>
    </div>
  );
};

export default Offers;
