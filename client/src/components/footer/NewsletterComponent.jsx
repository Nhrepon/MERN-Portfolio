import React from 'react';
import {toast} from "react-hot-toast";

const NewsletterComponent = () => {

    const subscribe = ()=>{
        let val = document.getElementById('email').value;
        if(val !== ""){
            toast.success(`Successfully subscribe using "${val}" `);
        }else{
        toast.error("Please, Enter email address.");
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 p-0 d-flex flex-column align-content-center align-items-center">
                        <input type="email" className="form-control my-2" id="email"
                               placeholder="Enter email address"
                        />
                        <button onClick={subscribe} className="btn btn-outline-light bg-success mt-4">
                            Subscribe
                        </button>
                </div>
            </div>
        </div>
    );
};

export default NewsletterComponent;