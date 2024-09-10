import React from "react";
import './progress.css';

const ProgressBarComponent = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="skill-box">
            <div className="skill-title fs-5 my-1">{props.title}</div>
            <div className="skill-bar" style={{background:props.bg}}>
              <div className={props.innerClass} min="0" max="100" style={{width:props.width, background:props.innerBg}}>
                <span className="skill-tooltip">{props.width}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBarComponent;
