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
                </div>
                <div className="col-md-6 text-center ">

                    <img className=' img-fluid rounded-circle w-50 top' src="/nhrepon.jpg" alt="nhrepon" />
                </div>
            </div>
        </div>
    );
};

export default Feature;