import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isLogin } from "../utility/Utility.js";
import userStore from "../store/UserStore.js";
import SubmitButton from "./users/SubmitButton.jsx";
import $ from "jquery";

const TopNavigationBar = () => {
  const navigate = useNavigate();

  const { userLogout } = userStore();

  const handleLogout = async () => {
    await userLogout();
    sessionStorage.clear();
    localStorage.clear();
    navigate("/");
  }



    // Go to top ---------------------------------------------
    $(function(){
      var gotoTop = $(".goto-top");
      gotoTop.click(function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        //$("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
      });
    });
    
    
    
    // Change navigation bg on scroll ---------------------------------------------
      $(function() {
        var topNavBg = $(".top-nav");
        var gotoTop = $(".goto-top");
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
    
            if (scroll >= 200) {
              topNavBg.removeClass('bg-transparent').addClass("bg-light");
              gotoTop.removeClass('d-none').addClass("d-flex");
              
            } else {
              topNavBg.removeClass("bg-light").addClass('bg-transparent');
              gotoTop.removeClass('d-flex').addClass("d-none");
            }
        });
    });
    



  return (
    <div className="container-fluid sticky-md-top bg-transparent z-3 shadow-sm top-nav">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-md">
            <div className="container-fluid">
              <Link className="navbar-brand  text-dark fw-bold fs-4" to="/">
                MERN Portfolio
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link " to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link  text-success" to="/projects">
                      Projects
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link  text-success" to="/blog">
                      Blog
                    </Link>
                  </li>



                  {/* <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle  text-success"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="nav-link" to="/electronics">
                          Electronics
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-link" to="/mobile">
                          Mobile & Accessories
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="nav-link" to="/clothes">
                          Clothes
                        </Link>
                      </li>
                    </ul>
                  </li> */}





                  <li className="nav-item">
                    <Link className="nav-link  text-success" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link  text-success" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>

                <div className="d-flex gap-1">
                  

                  <div className="dropdown">
                    <a href="#" className="btn ms-3 d-flex align-items-center link-dark text-success text-decoration-none dropdown-toggle"
                      id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="bi bi-person-circle"></i>
                    </a>
                    <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">



                      {
                        isLogin() ?
                          (
                            <>
                              <li><Link className="dropdown-item" to="/dashboard">Dashboard</Link></li>
                              <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li><Link className="dropdown-item" to="/setting">Setting</Link></li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li><SubmitButton onClick={handleLogout} type="submit" className="dropdown-item"
                                text="Logout" /></li>
                            </>
                          )
                          :
                          (
                            <>
                              <li><Link className="dropdown-item" to="/registration">Registration</Link></li>
                              <li><Link className="dropdown-item" to="/login">Login</Link></li>
                            </>
                          )
                      }


                    </ul>
                  </div>

                  
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TopNavigationBar;
