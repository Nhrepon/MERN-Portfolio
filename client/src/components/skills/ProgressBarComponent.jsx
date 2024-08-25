import React from "react";
import './progress.css';

const ProgressBarComponent = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="skill-box">
            <div className="skill-title fs-5 my-2">{props.title}</div>
            <div className="skill-bar " style={{background:props.bg}}>
              <div className="skill-bar-inner" min="0" max="100" style={{width:props.width, background:props.innerBg}}>
              {props.width}
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
