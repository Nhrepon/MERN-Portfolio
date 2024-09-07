import { useState } from "react";
import QuillTextEditor from "../textEditor/QuillTextEditor";


const AddNewPostComponent = () => {



  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form>
                <div className="form-group my-3">
                  <label>Post Title</label>
                  <input type="email" className="form-control my-2" />
                </div>

                <div className="form-group my-3">
                  <label>Description</label>
                  {/* <textarea className="form-control my-3" rows="8"></textarea> */}
                  <QuillTextEditor />
                </div>
                  

                <button type="submit" className="btn btn-primary">
                  Publish
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewPostComponent;
