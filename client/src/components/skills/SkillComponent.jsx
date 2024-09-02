import React from "react";
import ProgressBarComponent from "./ProgressBarComponent";
import SkillCardComponents from "./SkillCardComponents";

const SkillComponent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center mt-5">
          <h2 className="fs-1 fw-bold mt-4">My skills</h2>
          <hr />
        </div>
      </div>
      <div className="row my-2  gx-5 gy-3">
        <h3 className="fs-4">Technology:</h3>
        <div className="col-md-6 my-2">
          <ProgressBarComponent title="HTML" width="90%" innerBg="#E64C26" />
          <ProgressBarComponent title="CSS" width="70%" innerBg="#2665F0" />
          <ProgressBarComponent
            title="JavaScript"
            width="80%"
            innerBg="yellow"
          />
          <ProgressBarComponent title="PHP" width="60%" innerBg="#E64C26" />
          <ProgressBarComponent title="Java" width="50%" innerBg="#2665F0" />
          <ProgressBarComponent title="Dart" width="40%" innerBg="yellow" />
        </div>
        <div className="col-md-6 my-2">
          <ProgressBarComponent title="MySql" width="60%" innerBg="#E64C26" />
          <ProgressBarComponent title="MongoDB" width="50%" innerBg="#2665F0" />
          <ProgressBarComponent title="SQL" width="80%" innerBg="blue" />
          <ProgressBarComponent title="Sqlite" width="40%" innerBg="red" />
          <ProgressBarComponent title="C#" width="40%" innerBg="yellow" />
        </div>
      </div>
      <div className="row my-5  gx-5 gy-3">
        <h3 className="fs-4">Framework:</h3>
        <div className="col-md-6 my-2">
          <ProgressBarComponent title="MERN" width="60%" innerBg="#E64C26" />
          <ProgressBarComponent title="Laravel" width="50%" innerBg="#2665F0" />
          <ProgressBarComponent title="Flutter" width="80%" innerBg="blue" />
        </div>
        <div className="col-md-6 my-2">
          <ProgressBarComponent title="ASP.net" width="40%" innerBg="red" />
          <ProgressBarComponent title="React" width="90%" innerBg="yellow" />
        </div>
      </div>
      <div className="row my-5 gx-3 gy-3">
        <div className=" col-12 col-md-3">
          <SkillCardComponents
            iconClass="bi bi-check2-circle fs-1 text-danger"
            cardTitle="99+"
            cardText="Project Completed!"
          />
        </div>
        <div className=" col-12 col-md-3">
          <SkillCardComponents
            iconClass="bi bi-speedometer fs-1 text-danger"
            cardTitle="29+"
            cardText="Pending Project"
          />
        </div>
        <div className=" col-12 col-md-3">
          <SkillCardComponents
            iconClass="bi bi-briefcase fs-1 text-danger"
            cardTitle="99+"
            cardText="Startup!"
          />
        </div>
        <div className=" col-12 col-md-3">
          <SkillCardComponents
            iconClass="bi bi-info-circle fs-1 text-danger"
            cardTitle="99+"
            cardText="Support team!"
          />
        </div>
      </div>
    </div>
  );
};

export default SkillComponent;
