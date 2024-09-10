import React from 'react';
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";


const Feature = () => {
    return (
        <div className='container'>
            <div className="row py-5">
                <div className="col-md-6">
                    <h4 className='hello fs-5'>Hello!</h4>
                    <h2 className='fs-1 fw-bold my-3 fw-bolder'>I'm <span className='text-success'>Nur Hossain</span></h2>
                    <h2 className='fw-bold fs-1 my-3'><span className='text-danger'>MERN</span> Stack Developer</h2>
                    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'I am skilled in MERN Stack.',1000,
        'I am skilled in Express js.',1000,
        'I am skilled in Node js.',1000,
        'I am skilled in MongoDB.',1000,
        
      ]}
      wrapper="h2"
      speed={10}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
                    <p className='fs-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, officiis.</p>
                    <div>
                        <ul className="social-icon d-flex gap-3 list-unstyled fs-4">
                            <li className="rounded-circle"><Link className="nav-link" to="#"> <i class="bi bi-whatsapp "></i></Link></li>
                            <li className="rounded-circle"><Link className="nav-link" to="#"> <i class="bi bi-facebook "></i></Link></li>
                            <li className="rounded-circle"><Link className="nav-link" to="#"> <i class="bi bi-linkedin "></i></Link></li>
                            <li className="rounded-circle"><Link className="nav-link" to="#"> <i class="bi bi-github "></i></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 text-center">
                    <div className="feature">
                        <div className="feature-item">
                            <img className='img1' src="/react.svg" alt="React" />
                            <img className='img2' src="/node.svg" alt="React" />
                            <img className='img3' src="/mongodb.svg" alt="React" />
                            <img className='img4' src="/laravel.svg" alt="React" />
                            <img className='img5' src="/flutter.svg" alt="React" />
                            <img className='img6' src="/dotnet.svg" alt="React" />
                            <img className='img7' src="/android.svg" alt="React" />
                        </div>
                        <img className='img-fluid rounded-circle m-5 feature-img' src="/repon.PNG" alt="nhrepon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;