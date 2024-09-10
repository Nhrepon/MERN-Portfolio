import React from "react";
import { Link } from "react-router-dom";

const PortfolioCardComponents = (props) => {
  return (
    <div className="">
      <div className="card shadow-lg border-0 portfolio-card">
        <img className="card-img-top" src={props.image} alt={props.title} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <div className="d-flex g-3 text-center justify-content-between d-sm-none">
            <button className="btn btn-light"><Link className="nav-link" to={props.liveLink} target="_blank">Live preview</Link></button>
            <button className="btn btn-light"><Link className="nav-link" to={props.gitLink} target="_blank">Github repository</Link></button>
        </div>
        </div>
      <div className="portfolio-card-overlay rounded-2 text-center d-none d-sm-block">
        <div className="portfolio-card-overlay-inner row g-3 text-center justify-content-between">
            <button className="btn btn-light"><Link className="nav-link" to={props.liveLink} target="_blank">Live preview</Link></button>
            <button className="btn btn-light"><Link className="nav-link" to={props.gitLink} target="_blank">Github repository</Link></button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PortfolioCardComponents;
