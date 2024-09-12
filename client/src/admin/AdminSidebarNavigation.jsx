
import { useEffect } from "react";
import { Link } from "react-router-dom";
import UserStore from "../store/UserStore";

const AdminSidebarNavigation = () => {

  const { getUserProfile,userProfileForm } = UserStore();
  useEffect( () => {
    (async()=>{
        await getUserProfile();
    })();
  }, []);






  return (
    <div>
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 bg-light admin-sidebar">
        <Link
          to="/dashboard"
          className="d-flex align-items-center justify-content-center nav-link link-dark"
        >
          <i className="bi bi-speedometer2 fs-5"></i>
          <span className="fs-5">Dashboard</span>
        </Link>
        <hr />

        <ul
          className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link align-middle px-0 link-dark">
              <i className="fs-4 bi-house-fill"></i>
              <span className="ms-1 d-none d-sm-inline">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="#post"
              data-bs-toggle="collapse"
              className="nav-link px-0 align-middle link-dark"
            >
              <i className="fs-4 bi bi-card-text"></i>
              <span className="ms-1 d-none d-sm-inline">Post</span>
            </Link>
            <ul
              className="collapse show nav flex-column ms-1"
              id="post"
              data-bs-parent="#menu"
            >
              <li className="w-100 nav-item">
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
          </li>
          <li>
            <Link to="/media" className="nav-link px-0 align-middle link-dark">
              <i className="fs-4 bi bi-card-image "></i>
              <span className="ms-1 d-none d-sm-inline">Media</span>
            </Link>
          </li>
          <li>
            <Link to="#Portfolio"
              data-bs-toggle="collapse"
              className="nav-link px-0 align-middle  link-dark"
            >
              <i class="fs-4 bi bi-briefcase"></i>
              <span className="ms-1 d-none d-sm-inline">Portfolio</span>
            </Link>
            <ul
              className="collapse nav flex-column ms-1"
              id="Portfolio"
              data-bs-parent="#menu"
            >
              <li className="w-100">
                <Link to="/mern" className="nav-link px-0 link-dark">
                  <span className="d-none d-sm-inline">MERN</span> 1
                </Link>
              </li>
              <li>
                <a href="#" className="nav-link px-0 link-dark">
                  <span className="d-none d-sm-inline">React</span> 2
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="#Products"
              data-bs-toggle="collapse"
              className="nav-link px-0 align-middle link-dark"
            >
              <i className="fs-4 bi-cart4"></i>
              <span className="ms-1 d-none d-sm-inline">Products</span>
            </Link>
            <ul
              className="collapse nav flex-column ms-1"
              id="Products"
              data-bs-parent="#menu"
            >
              <li className="w-100">
                <a href="#" className="nav-link px-0 link-dark">
                  <span className="d-none d-sm-inline">Product</span> 1
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-0 link-dark">
                  <span className="d-none d-sm-inline">Product</span> 2
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-0 link-dark">
                  <span className="d-none d-sm-inline">Product</span> 3
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-0 link-dark">
                  <span className="d-none d-sm-inline">Product</span> 4
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="nav-link px-0 align-middle link-dark">
              <i className="fs-4 bi-people"></i>
              <span className="ms-1 d-none d-sm-inline">Customers</span>
            </a>
          </li>
          <li>
            <Link to="/users" className="nav-link px-0 align-middle link-dark">
              <i className="fs-4 bi bi-person-circle"></i>
              <span className="ms-1 d-none d-sm-inline">Users</span>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="dropdown pb-3">
          <a
            href="#"
            className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt="home"
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>{userProfileForm.userName}</strong>
          </a>
          <ul
            className="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser2"
          >
            <li>
              <Link to="/profile"  className="dropdown-item">
                New project...
              </Link>
            </li>
            <li>
              <Link to="/setting" a className="dropdown-item">
                Settings
              </Link>
            </li>
            <li>
              <Link to="/profile" className="dropdown-item">
                Profile
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link to="/logout"  className="dropdown-item">
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebarNavigation;
