import React from 'react';

const AboutUsComponent = () => {
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-6">
                        <img src="/nhrepon.jpg" className="img-fluid p-4 home-nav-bg" alt="NHRepon" />
                    </div>
                    <div className="col-md-6">
                    <h4 className='hello fs-5'>About us</h4>
                        <h2 className='fs-1 fw-bold'><span className='text-danger'>Failure</span>  Is The Condiment That Gives <span className='text-success'>Success</span> </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, officiis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, officiis. dolor sit amet consectetur </p>
                        
                        <button className="btn btn-success">Download CV</button>
                        <div className="col-12 py-4">
                            <p className='fs-5'><i class="bi bi-person-circle"></i>Nur Hossain</p>
                            <p className='fs-5'><i class="bi bi-envelope-at"></i>nurhossainrepon7248@gmail.com</p>
                            <p className='fs-5'><i class="bi bi-whatsapp"></i>+8801829938427</p>
                            <p className='fs-5'><i class="bi bi-geo-alt"></i>Chowmuhani, Noakhali, Bangladesh</p>
                            <p className='fs-5'><i class="bi bi-cake2"></i>08 June 1993</p>
                            
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsComponent;