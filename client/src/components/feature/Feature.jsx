import React from 'react';

const Feature = () => {
    return (
        <div className='container'>
            <div className="row py-5">
                <div className="col-md-6">
                    <h4 className='hello fs-5'>Hello!</h4>
                    <h2 className='fs-1 fw-bold my-3 fw-bolder'>I'm <span className='text-success'>Nur Hossain</span></h2>
                    <h2 className='fw-bold fs-1 my-3'><span className='text-danger'>MERN</span> Stack Developer</h2>
                    <p className='fs-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, officiis.</p>
                    <div>
                        <ul className="social-icon d-flex gap-3">
                            <li className="text-center text-warning fs-5 p-1"><i class="bi bi-whatsapp"></i></li>
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