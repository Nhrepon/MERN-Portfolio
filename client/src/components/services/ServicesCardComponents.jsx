import React from "react";

const ServicesCardComponents = (props) => {
  return (
    <div className="zoom">
      <div className="card shadow-lg border-0">
        <img className="card-img-top" src={props.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCardComponents;
