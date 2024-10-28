import React from 'react';
import {Link} from "react-router-dom";
import {TypeAnimation} from "react-type-animation";
import './feature.css';


const Feature = () => {
    return (
        <div className='container'>
            <div className="row py-5">
                <div className="col-md-6">
                    <h4 className='hello fs-5'>Hello!</h4>
                    <h2 className='fs-1 fw-bold my-3 fw-bolder'>I'm <span className='text-success'>Nur Hossain</span>
                    </h2>
                    <h2 className='fw-bold fs-1 my-3'><span className='text-danger'>MERN</span> Stack Developer</h2>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'I am skilled in MERN Stack.', 1000,
                            'I am skilled in Express js.', 1000,
                            'I am skilled in Node js.', 1000,
                            'I am skilled in MongoDB.', 1000,

                        ]}
                        wrapper="h2"
                        speed={10}
                        style={{fontSize: '2em', display: 'inline-block'}}
                        repeat={Infinity}
                    />
                    <p className='fs-4'>Full stack web application developer using React js, Node js, Express js and MongoDB.</p>
                    <div>
                        <ul className="social-icon d-flex gap-3 list-unstyled fs-4">
                            <li className="rounded-circle"><Link className="nav-link" to="https://wa.me/+8801829938427" target="_blank"> <i
                                className="bi bi-whatsapp "></i></Link></li>
                            <li className="rounded-circle"><Link className="nav-link" to="https://facebook.com/nurhossain.repon.501" target="_blank"> <i
                                className="bi bi-facebook "></i></Link></li>
                            <li className="rounded-circle"><Link className="nav-link" to="https://linkedin.com/in/nhrepon" target="_blank"> <i
                                className="bi bi-linkedin "></i></Link></li>
                            <li className="rounded-circle"><Link className="nav-link" to="https://github.com/nhrepon" target="_blank"> <i
                                className="bi bi-github "></i></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src="/nhrepon.jpg" className="img-fluid p-4 home-nav-bg" alt="NHRepon"/>
                </div>
            </div>
        </div>
    );
};

export default Feature;