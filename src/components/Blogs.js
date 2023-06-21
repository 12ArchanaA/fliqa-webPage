import React from "react";

const Blogs = (props) => {
  return (
    <div
      className="blogs-background"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="blogs-content1">
        <div className="blogs-para">
          <h5>{props.heading}</h5>
          <p>{props.paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
