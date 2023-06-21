import React from "react";

const WeddingCard = (props) => {
  return (
    <div className="wedding-card">
      <div className="wedding-card-image">
        <div>
          <img src={props.image1} />
        </div>
        <div className="photo-collection">
          <div>
            <img src={props.image2} />
          </div>
          <div>
            <img src={props.image3} />
          </div>
          <div>
            <img src={props.image4} />
          </div>
        </div>
      </div>
      <div className="wedding-card-para">
        <h3>{props.heading}</h3>
        <p>{props.paragraph}</p>
      </div>
    </div>
  );
};

export default WeddingCard;
