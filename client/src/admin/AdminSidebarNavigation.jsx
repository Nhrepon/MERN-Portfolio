
import {useEffect} from "react";
import { Link } from "react-router-dom";
import UserStore from "../store/UserStore";
import './style.css';

const AdminSidebarNavigation = () => {

  const { getUserProfile,userProfileForm } = UserStore();
  //const ddref = useRef();

  useEffect( () => {
    (async()=>{
        await getUserProfile();
    })();


  }, []);

// const dd= ()=>{
//   const dropdown = ddref.current;
//   if (dropdown){
//     const icon = document.createElement('i');
//     icon.classList.add('bi', 'bi-chevron-down');
//     dropdown.append(icon);
//   }
//
// }






  return (
      <div className="container-fluid">
        <div className="row">
          <div className="d-flex justify-content-around align-items-center ">
            <Link to="/" className="nav-link text-light ">
              <i className="fs-4 bi bi-house-fill"></i>
            </Link>
            <Link to="/dashboard" className="nav-link text-light">
              <i className="bi bi-speedometer2 fs-4"></i>
              <span className="fs-3 d-none d-md-inline ms-md-1">Dashboard</span>
            </Link>
          </div>
          <hr/>

          <div className="menu">
          <ul className="nav" id="menu">
            <li className="nav-item">
              <Link to="/inbox" className="nav-link link-dark">
                <i className="fs-4 bi-mailbox-flag"></i>
                <span className="d-none d-md-inline">Inbox</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#post" data-bs-toggle="collapse" className="nav-link link-dark position-relative">
                <i className="fs-4 bi bi-card-text"></i>
                <span className="d-none d-md-inline">Post</span>
                <i className="fs-4 bi bi-chevron-down position-absolute end-0 d-none d-md-inline"></i>
              </Link>

            </li>
            <ul className="collapse nav ms-3" id="post" data-bs-parent="#menu">
              <li className="nav-item">
                <Link to="/new-post" className="nav-link link-dark">
                  <span className="d-none d-md-inline">New post</span>
                  <span className="d-md-none d-inline-block">New</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/all-post" className="nav-link link-dark">
                  <span className="d-none d-md-inline">All post</span>
                  <span className="d-md-none d-inline-block">All</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category" className="nav-link link-dark">
                  <span className="d-none d-md-inline">Category</span>
                  <span className="d-md-none d-inline-block">Cat</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tags" className="nav-link link-dark">
                  <span className="d-none d-md-inline">Tags</span>
                  <span className="d-md-none d-inline-block">Tags</span>
                </Link>
              </li>
            </ul>


            <li className="nav-item">
              <Link to="/media" className="nav-link link-dark">
                <i className="fs-4 bi bi-card-image "></i>
                <span className="d-none d-md-inline">Media</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#Portfolio" data-bs-toggle="collapse" className="nav-link link-dark position-relative">
                <i className="fs-4 bi bi-briefcase"></i>
                <span className="d-none d-md-inline">Portfolio</span>
                <i className="fs-4 bi bi-chevron-down position-absolute end-0 d-none d-md-inline"></i>
              </Link>
            </li>
            <ul className="collapse nav ms-3" id="Portfolio" data-bs-parent="#menu">
              <li className="nav-item">
                <Link to="/mern" className="nav-link link-dark">
                  <span className="d-none d-md-inline">MERN</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/mern" className="nav-link link-dark">
                  <span className="d-none d-md-inline">React</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/mern" className="nav-link link-dark">
                  <span className="d-none d-md-inline">Product</span>
                </Link>
              </li>
            </ul>
            <li className="nav-item">
              <Link to="#Products" data-bs-toggle="collapse" className="nav-link link-dark position-relative">
                <i className="fs-4 bi-cart4"></i>
                <span className=" d-none d-md-inline">Products</span>
                <i className="fs-4 bi bi-chevron-down position-absolute end-0 d-none d-md-inline"></i>
              </Link>
            </li>
            <ul className="collapse nav ms-3" id="Products" data-bs-parent="#menu">
              <li className="nav-item">
                <Link to="/mern" className="nav-link link-dark">
                  <span className="d-none d-md-inline">Product</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/mern" className="nav-link link-dark">
                  <span className="d-none d-md-inline">Product</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/mern" className="nav-link link-dark">
                  <span className="d-none d-md-inline">Product</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/mern" className="nav-link link-dark">
                  <span className="d-none d-md-inline">Product</span>
                </Link>
              </li>
            </ul>

            <li className="nav-item">
              <Link to="/mern" className="nav-link link-dark">
                <i className="fs-4 bi-people"></i>
                <span className="d-none d-md-inline">Customers</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/users" className="nav-link link-dark">
                <i className="fs-4 bi bi-person-circle"></i>
                <span className="d-none d-md-inline">Users</span>
              </Link>
            </li>
          </ul>
          </div>

          <div className="text-center">
            <hr/>
          <div className="dropdown p-3 bg-light rounded">

            <Link to="#" className="d-flex align-items-center link-dark nav-link dropdown-toggle"
                  id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="/nhrepon.jpg" alt="home" width={"32"} height={"32"} className="rounded-circle me-2"/>
              <strong className={"d-none d-sm-inline"}>{userProfileForm.userName}</strong>
            </Link>
            <ul className="dropdown-menu shadow-lg ">
              <li>
                <Link to="/profile" className="dropdown-item">
                  New project...
                </Link>
              </li>
              <li>
                <Link to="/setting" className="dropdown-item">
                  Settings
                </Link>
              </li>
              <li>
                <Link to="/profile" className="dropdown-item">
                  Profile
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li>
                <Link to="/logout" className="dropdown-item">
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
  );
};

export default AdminSidebarNavigation;
