import React from "react";
import ServicesCardComponents from "./ServicesCardComponents";

const ServicesComponents = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="fs-1 fw-bold mt-5">Services</h2>
            <hr />
          </div>
        </div>
        <div className="row gx-5 gy-3">
          <div className="col-12 col-md-4">
            <ServicesCardComponents
              image="https://thereadersea.com/wp-content/uploads/2023/05/mern-stack.png"
              title="Web application development with MERN Stack"
              text="Build a web application using the MERN stack, which stands for MongoDB, Express, React, and Node.js."
            />
          </div>
          <div className="col-12 col-md-4">
            <ServicesCardComponents
              image="https://usabilitydesigns.com/wp-content/uploads/2021/01/react-js-development-900x506.jpg"
              title="Web application development with React Js"
              text="Build a web application using the React Js, which stands for JavaScript, React, and Node.js."
            />
          </div>
          <div className="col-12 col-md-4">
            <ServicesCardComponents
              image="https://talent-outsourcing.com/wp-content/uploads/2021/01/ezgif.com-gif-maker.jpg"
              title="Mobile application development"
              text="Build a mobile application using the Flutter, which stands for Dart, Flutter, and Node.js."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponents;
