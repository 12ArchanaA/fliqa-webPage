import React from 'react'

const PlatformContent = (props) => {
  return (
    <div className="content1">
      <img src={props.image} />
      <div>
        <h4>{props.heading}</h4>
        <p>{props.paragraph}</p>
      </div>
    </div>
  );
};

export default PlatformContent