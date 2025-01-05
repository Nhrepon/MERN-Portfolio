
import './contact.css';
import {toast} from "react-hot-toast";
import ContactStore from "../../store/ContactStore.js";
import ValidationHelper from "../../utility/ValidationHelper.js";

const ContactComponents = () => {

    const {contactFormValue,contactFormOnChange, submitMessage } = ContactStore();

    const sendMessage = async () => {
        if (!ValidationHelper.IsEmail(contactFormValue.email)){
            toast.error("Valid email required!");
        }else{
            const response = submitMessage(contactFormValue);
            if (response){
                toast.success("Send success!");
                contactFormValue.name = "";
                contactFormValue.email = "";
                contactFormValue.mobile = "";
                contactFormValue.subject = "";
                contactFormValue.message = "";
            }else{
                toast.error("failed");
            }
        }
    }


    return (

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="fs-1 fw-bold text-center mt-5">Contact Now</h2>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-7 p-0 pe-md-5">
                    <div className="row g-2 needs-validation my-3">
                        <div className="mb-2 input-group shadow rounded">
                            <input type="text" className="form-control px-4 py-3 border-0 shadow-none"
                                   id="name" placeholder="Name" value={contactFormValue.name}
                                   onChange={(e)=>{contactFormOnChange("name", e.target.value)}} required/>
                            <span className="input-group-text border-0 fs-5 text-success">
                                <i className="bi bi-person-circle"></i>
                            </span>
                        </div>


                        <div className="mb-2 input-group shadow rounded">
                            <input type="email" className="form-control px-4 py-3 border-0 shadow-none"
                                id="email" placeholder="Email Address" value={contactFormValue.email}
                                   onChange={(e)=>{contactFormOnChange("email", e.target.value)}}  required />
                            <span className="input-group-text border-0 fs-5 text-success">
                                <i className="bi bi-envelope"></i>
                            </span>
                        </div>


                        <div className="mb-2 input-group shadow rounded">
                            <input type="text" className="form-control px-4 py-3 border-0 shadow-none"
                                id="mobile" placeholder="Mobile Number" value={contactFormValue.mobile}
                                   onChange={(e)=>{contactFormOnChange("mobile", e.target.value)}}  required />
                            <span className="input-group-text border-0 fs-5 text-success">
                                <i className="bi bi-telephone"></i>
                            </span>
                        </div>


                        <div className="mb-2 input-group shadow rounded">
                            <input type="text" className="form-control px-4 py-3 border-0 shadow-none" id="subject"
                                   placeholder="Subject" value={contactFormValue.subject}
                                   onChange={(e)=>{contactFormOnChange("subject", e.target.value)}} />
                            <span className="input-group-text border-0 fs-5 text-success">
                                <i className="bi bi-card-text"></i>
                            </span>
                        </div>

                        <div className="mb-3 input-group shadow rounded">
                            <textarea className="form-control px-4 py-3 border-0" id="message" rows="5" placeholder="Message"
                                      value={contactFormValue.message}
                                      onChange={(e)=>{contactFormOnChange("message", e.target.value)}} />
                        </div>

                        <button onClick={sendMessage} type="submit" className="btn btn-success w-25">Submit</button>
                    </div>

                </div>
                <div className=" col-12 col-md-5 p-0 mt-4 bg-success">

                    <div className=" p-4">
                        <h2 className="fs-2 text-light fw-bold">Don't hesitate to send a message.</h2>
                        <div className="contact-info">
                            <div className="item py-2 my-3">
                                <div className="icon fs-3 p-0 text-success">
                                    <i className="bi bi-house"></i>
                                </div>
                                <div className="contact-info-content p-0 text-light">
                                    <p className="fs-5 fw-bold p-0 m-0">Location</p>
                                    <p className="p-0 m-0">Shahajad pur, Maijdee, Noakhali, Bangladesh.</p>
                                </div>
                            </div>

                            <div className="item py-2 my-3">
                                <div className="icon fs-3 p-0  text-success">
                                    <i className="bi bi-mailbox-flag"></i>
                                </div>
                                <div className="contact-info-content p-0 text-light">
                                    <p className="fs-5 fw-bold p-0 m-0">Drop a mail</p>
                                    <p className="p-0 m-0">nurhossainrepon7248@gmail.com</p>
                                </div>
                            </div>

                            <div className="item py-2 my-3">
                                <div className="icon fs-3 p-0  text-success">
                                    <i className="bi bi-whatsapp"></i>
                                </div>
                                <div className="contact-info-content p-0 text-light">
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
