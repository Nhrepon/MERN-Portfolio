import React from 'react';
import {Link} from "react-router-dom";

const AdminSidebarNavigation = () => {
    return (
        <div>



            <div className="d-flex flex-column p-1 bg-light" >
                <Link to="/dashboard" className="d-flex align-items-center justify-content-center nav-link link-dark">
                    <i className="bi bi-speedometer2 fs-5"></i>
                    <span className="fs-5">Dashboard</span>
                </Link>
                <hr/>
                    <ul className="nav flex-column p-0">
                        <li className="nav-item">
                            <Link to="#post" className="nav-link link-dark p-2" data-bs-toggle="collapse" aria-current="page">
                                <i className="bi bi-card-text"></i>
                                Post
                            </Link>
                            <div className="collapse mx-2" id="post">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <Link to="/new-post" className="nav-link link-dark">
                                            <i className="bi bi-plus-circle"></i>
                                            New post
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/post" className="nav-link link-dark">
                                            Post
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/category" className="nav-link link-dark">
                                            Category
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/category" className="nav-link link-dark">
                                            Tags
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link link-dark p-2">
                                <i className="bi bi-card-image "></i>
                                Media
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="nav-link link-dark p-2">
                                <svg className="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
                                Orders
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link link-dark p-2">
                                <svg className="bi me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
                                Products
                            </a>
                        </li>
                        <li>
                            <Link to="/users" className="nav-link link-dark p-2">
                                <i className="bi bi-person-circle"></i>
                                Users
                            </Link>
                        </li>
                </ul>
                <hr/>
                    <div className="dropdown">
                        <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="home" width="32" height="32" className="rounded-circle me-2"/>
                            <strong>NHR</strong>
                        </a>
                        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2" >
                            <li><a className="dropdown-item" href="#">New project...</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>



        </div>









        </div>
);
};

export default AdminSidebarNavigation;