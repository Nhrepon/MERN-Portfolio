
import {useEffect, useRef} from "react";
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

      <div className="admin-sidebar d-flex flex-column bg-success p-2 vh-100">
        <div className="d-flex align-items-center justify-content-around">
          <Link to="/" className="nav-link text-light ">
            <i className="fs-4 bi bi-house-fill"></i>
          </Link>
          <Link to="/dashboard" className="nav-link text-light">
            <i className="bi bi-speedometer2 fs-4"></i>
            <span className="fs-3 d-none d-sm-inline">Dashboard</span>
          </Link>
        </div>
        <hr />

        <ul className="nav" id="menu">
          <li className="nav-item">
            <Link to="/inbox" className="nav-link link-dark">
              <i className="fs-4 bi-mailbox-flag"></i>
              <span className="ms-1 d-none d-sm-inline">Inbox</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#post" data-bs-toggle="collapse" className="nav-link link-dark">
              <i className="fs-4 bi bi-card-text"></i>
              <span className="ms-1 d-none d-sm-inline">Post</span>
              <i className="fs-4 bi bi-chevron-down position-absolute end-0 me-4"></i>
            </Link>

          </li>
          <ul className="collapse nav ms-3" id="post" data-bs-parent="#menu">
            <li className="nav-item">
              <Link to="/new-post" className="nav-link link-dark">
                <span className="d-none d-sm-inline">New post</span>
                <span className="d-sm-none d-inline-block">New</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/all-post" className="nav-link link-dark">
                <span className="d-none d-sm-inline">All post</span>
                <span className="d-sm-none d-inline-block">All</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category" className="nav-link link-dark">
                <span className="d-none d-sm-inline">Category</span>
                <span className="d-sm-none d-inline-block">Cat</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tags" className="nav-link link-dark">
                <span className="d-none d-sm-inline">Tags</span>
                <span className="d-sm-none d-inline-block">Tags</span>
              </Link>
            </li>
          </ul>
          <li className="nav-item">
            <Link to="/media" className="nav-link link-dark">
              <i className="fs-4 bi bi-card-image "></i>
              <span className="ms-1 d-none d-sm-inline">Media</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#Portfolio" data-bs-toggle="collapse" className="nav-link link-dark">
              <i className="fs-4 bi bi-briefcase"></i>
              <span className="ms-1 d-none d-sm-inline">Portfolio</span>
              <i className="fs-4 bi bi-chevron-down position-absolute end-0 me-4"></i>
            </Link>
          </li>
          <ul className="collapse nav ms-3" id="Portfolio" data-bs-parent="#menu">
            <li className="nav-item">
              <Link to="/mern" className="nav-link link-dark">
                <span className="d-none d-sm-inline">MERN</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/mern" className="nav-link link-dark">
                <span className="d-none d-sm-inline">React</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/mern" className="nav-link link-dark">
                <span className="d-none d-sm-inline">Product</span>
              </Link>
            </li>
          </ul>
          <li className="nav-item">
            <Link to="#Products" data-bs-toggle="collapse" className="nav-link link-dark">
              <i className="fs-4 bi-cart4"></i>
              <span className="ms-1 d-none d-sm-inline">Products</span>
              <i className="fs-4 bi bi-chevron-down position-absolute end-0 me-4"></i>
            </Link>
          </li>
          <ul className="collapse nav ms-3" id="Products" data-bs-parent="#menu">
            <li className="nav-item">
              <Link  to="/mern" className="nav-link link-dark">
                <span className="d-none d-sm-inline">Product</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link  to="/mern" className="nav-link link-dark">
                <span className="d-none d-sm-inline">Product</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link  to="/mern" className="nav-link link-dark">
                <span className="d-none d-sm-inline">Product</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link  to="/mern" className="nav-link link-dark">
                <span className="d-none d-sm-inline">Product</span>
              </Link>
            </li>
          </ul>
          <li className="nav-item">
            <Link  to="/mern" className="nav-link link-dark">
              <i className="fs-4 bi-people"></i>
              <span className="ms-1 d-none d-sm-inline">Customers</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/users" className="nav-link link-dark">
              <i className="fs-4 bi bi-person-circle"></i>
              <span className="ms-1 d-none d-sm-inline">Users</span>
            </Link>
          </li>
        </ul>


        <hr/>
        <div className="dropdown pb-3 ">
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

  );
};

export default AdminSidebarNavigation;
