import React from "react";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="container-fluid bg-success text-light mt-5">
      <div className="container">
        <div className="row py-3">
          <div className="col-md-4">
            <h4>About us</h4>
            <hr />
            <p>
              MERN E-commerce app is a simple web application with super
              performance ...
            </p>
            <p>
              MERN E-commerce app is a simple web application with super
              performance ...
            </p>
          </div>
          <div className="col-md-4">
            <h4>Important link</h4>
            <hr />
            <ul className="">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>News letter</h4>
            <hr />
            <div className="row">
              <div className="col-12">
                <form>
                  <input
                    type="email"
                    className="form-control my-2"
                    id="email"
                    placeholder="Enter email address"
                    //value=""
                    required
                  />
                  <button
                    className="btn btn-outline-light bg-success"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-3">
          <div className="col-12 text-center">
            <p>Copyright@2024 MERN E-commerce App</p>
          </div>
          <button className="goto-top rounded-circle text-center text-success fw-bold fs-4 d-flex align-items-center justify-content-center shadow-sm overflow-hidden" title="Go to top">
            <img src="/back-to-top.png" alt="back-to-top" className="w-100"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
