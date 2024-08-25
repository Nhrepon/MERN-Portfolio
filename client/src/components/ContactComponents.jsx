import React from "react";

const ContactComponents = () => {
  return (
    
      <div className="container">
        
        <div className="row">
          <div className="col-12 col-md-8 p-0 pe-5">
            <form action="" method="post" className="row g-3 needs-validation my-3">
            <div class="mb-3 input-group shadow-sm">
              <input
                type="text"
                className="form-control px-4 py-3 border-0 shadow-none"
                id="name"
                placeholder="Name"
                required
              />
              <span class="input-group-text border-0 fs-4 text-success">
                <i class="bi bi-person-circle"></i>
              </span>
            </div>


            <div class="mb-3 input-group">
              <input
                type="email"
                className="form-control px-4 py-3 border-0 shadow-none"
                id="email"
                placeholder="Email Address"
                required
              />
              <span class="input-group-text border-0 fs-4 text-success">
                <i class="bi bi-envelope"></i>
              </span>
            </div>


            <div class="mb-3 input-group">
              <input
                type="text"
                className="form-control px-4 py-3 border-0 shadow-none"
                id="mobile"
                placeholder="Mobile Number"
                required
              />
              <span class="input-group-text border-0 fs-4 text-success">
                <i class="bi bi-telephone"></i>
              </span>
            </div>



            <div class="mb-3 input-group">
              <input
                type="text"
                className="form-control px-4 py-3 border-0 shadow-none"
                id="subject"
                placeholder="Subject"
                
              />
              <span class="input-group-text border-0 fs-4 text-success">
                <i class="bi bi-card-text"></i>
              </span>
            </div>


            <div className="mb-3">
                
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Message"
              />
              
            </div>

            <button type="submit" className="btn btn-success w-25">Submit</button>
            </form>
          </div>
          <div className="col-12 col-md-4 p-0">
                <div className="home-nav-bg p-4 mt-4">
                    <h2 className="fs-2 text-danger fw-bold">Don't hesitate to send a message.</h2>
                    <div className="contact-info">
                        <div className="item py-2 my-3">
                            <div className="icon fs-3 p-0 text-success">
                            <i class="bi bi-person-circle"></i>
                            </div>
                            <div className="content p-0 text-success">
                                <p className="fs-5 fw-bold p-0 m-0">Location</p>
                                <p className="p-0 m-0">Shahajad pur, Maijdee, Noakhali, Bangladesh.</p>
                            </div>
                        </div>

                        <div className="item py-2 my-3">
                            <div className="icon fs-3 p-0  text-success">
                            <i class="bi bi-person-circle"></i>
                            </div>
                            <div className="content p-0 text-success">
                                <p className="fs-5 fw-bold p-0 m-0">Drop a mail</p>
                                <p className="p-0 m-0">nurhossainrepon7248@gmail.com</p>
                            </div>
                        </div>

                        <div className="item py-2 my-3">
                            <div className="icon fs-3 p-0  text-success">
                            <i class="bi bi-person-circle"></i>
                            </div>
                            <div className="content p-0 text-success">
                                <p className="fs-5 fw-bold p-0 m-0">Whatsapp</p>
                                <p className="p-0 m-0">+8801829-938427<br/> +88018-6677-5577</p>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
  );
};

export default ContactComponents;
