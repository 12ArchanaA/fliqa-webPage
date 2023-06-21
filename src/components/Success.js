import React from 'react'

const Success = (props) => {
  return (
    <div className="success-card">
      <div className="circle">
        {/* style={{ backgroundImage: `url(${success1})` }} */}
        {/* <img src={success1} /> */}
      </div>
      <div className="success-card-para">
        <p>{props.paragraph}</p>
      </div>
    </div>
  );
}

export default Success