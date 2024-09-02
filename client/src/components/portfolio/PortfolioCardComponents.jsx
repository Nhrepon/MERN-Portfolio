import React from "react";
import { Link } from "react-router-dom";

const PortfolioCardComponents = (props) => {
  return (
    <div className="">
      <div className="card shadow-lg border-0 portfolio-card">
        <img className="card-img-top" src={props.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
        </div>
      <div className="portfolio-card-overlay rounded-2 text-center">
        <div className="portfolio-card-overlay-inner row g-3 text-center justify-content-between">
            <button className="btn btn-light"><Link className="nav-link" to="">Live preview</Link></button>
            <button className="btn btn-light"><Link className="nav-link" to="">Github repository</Link></button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PortfolioCardComponents;
