import React, { useEffect, useState } from "react";
import QuillTextEditor from "../textEditor/QuillTextEditor";
import BlogPostStoreDashboard from "../../store/BlogPostStore-Dashboard.js";
import { toast } from 'react-hot-toast';
import './style.css';
import ValidationHelper from "../../../utility/ValidationHelper";
import axios from "axios";
import FileUploadComponent from "../media/FileUploadComponent.jsx";



const AddNewPostComponent = () => {

  const {categoryList, getCategoryList, blogPostCreate, blogPostFormOnChange, blogPostForm} = BlogPostStoreDashboard();

  blogPostForm.url = blogPostForm.title.trim().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '').replace(/-+/g, '-').toLowerCase();

  const [blogDetails, setBlogDetails]=useState("");

  const [tags, setTags]=useState(["React"]);
  const addTags = (e) =>{
    
    if (e.key === "Enter" && e.target.value != "" || e.key === "," && e.target.value != "") {
      event.preventDefault();
      setTags([ ...tags, e.target.value])
      e.target.value = "";
    }else if (e.key === "Enter" && e.target.value === "" || e.key === "," && e.target.value === "") {
      e.preventDefault();
      toast.error("Please input tag value.");
    }

    console.log(tags);
  }
  const removeTags = (e)=>{
    setTags(tags.filter((item, i)=> i !== e))
  }




  const blogSubmit = async ()=>{
    
    blogPostForm.tags = tags.toString();
    blogPostForm.details = blogDetails;
    blogPostForm.thumbnail = "/exercise.jpg";


    if(ValidationHelper.IsEmpty(blogPostForm.title)){
      toast.error("Title should not be empty!");
    }else if(ValidationHelper.IsEmpty(blogPostForm.categoryId)){
      toast.error("Select a category");
    }else{
      const post = await blogPostCreate(blogPostForm);
    if(post){
      toast.success("Post create success!");
    }else{
      toast.error("failed");
    }
    }

    
  }



  useEffect(() => {
    (async()=>{
        await getCategoryList();
        blogPostForm.categoryId = categoryList[0]._id;
    })()
}, []);








  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div>
                <div className="row">
                  <div className="col-8">
                    <div className="form-group my-3">
                      <label>Post Title</label>
                      <input value={blogPostForm.title} onChange={(e)=>{blogPostFormOnChange("title", e.target.value);}} type="text" className="form-control my-2" />
                    </div>

                    <div className="form-group my-3">
                      <label>Description</label>
                      
                      <QuillTextEditor onInputChange={setBlogDetails} />

                    </div>
                  </div>
                  <div className="col-4">
                    <div className="form-group my-3">
                      <label>Post url</label>
                      <input value={blogPostForm.url} onChange={(e)=>{blogPostFormOnChange("url",e.target.value)}} type="text" className="form-control my-2" />
                    </div>
                
                    <div className="form-group my-3">
                      <label>Category</label>
                      <select className="form-select my-2" value={blogPostForm.categoryId} onChange={(e) => {
                        blogPostFormOnChange("categoryId", e.target.value)
                      }} >
                        <option value="">Select a category</option>
                        {categoryList != null && categoryList.map((item, i) => {
                          return (<option key={i} value={item._id}>{item.categoryName}</option>);
                        })}
                      </select>
                    </div>
                    <div className="form-group my-3">
                      <label>Tags</label>
                      <div className="tags-input form-control my-2 d-flex flex-wrap justify-content-start align-items-center overflow-hidden" >
                        <ul className="list-unstyled m-0 d-flex flex-wrap">
                          {
                            tags != null && tags.map((item, i)=>(
                                <li key={i} className="m-1 bg-success text-light rounded-2 px-2 py-1 d-flex">{item}<i onClick={()=>removeTags(i)} className="bi bi-x-circle-fill text-light ms-2"></i></li>
                              ))
                          }
                          
                        </ul>
                      <input onKeyDown={addTags} type="text" className=" form-control px-2 py-1 w-100" placeholder="Press 'Enter' or ',' to add tags"/>
                      </div>
                    </div>

                    <FileUploadComponent/>
                  </div>
                </div>

                <button onClick={blogSubmit} className="btn btn-primary">
                  Publish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewPostComponent;
