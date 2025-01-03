import { useEffect, useState } from "react";
import QuillTextEditor from "../textEditor/QuillTextEditor";
import BlogPostStoreDashboard from "../../store/BlogPostStore-Dashboard.js";
import { toast } from 'react-hot-toast';
import './style.css';
import ValidationHelper from "../../../utility/ValidationHelper";
import MediaStoreDashboard from "../../store/MediaStore-Dashboard.js";
import {backendUrl} from "../../../config.js";



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








  const {fileList,getFileList}=MediaStoreDashboard();
  let thumbnail = "/exercise.jpg";


  useEffect(() => {
    (async()=>{
        await getCategoryList();
        await getFileList();
        blogPostForm.categoryId = categoryList[0]._id;
    })()
}, []);

const selectThumbnail = (path)=>{
  thumbnail = path;
}



  const blogSubmit = async ()=>{

    blogPostForm.tags = tags.toString();
    blogPostForm.details = blogDetails;
    blogPostForm.thumbnail = thumbnail;


    if(ValidationHelper.IsEmpty(blogPostForm.title)){
      toast.error("Title should not be empty!");
    }else if(ValidationHelper.IsEmpty(blogPostForm.categoryId)){
      toast.error("Select a category");
    }else{
      const post = await blogPostCreate(blogPostForm);
      if(post){
        toast.success("Post create success!");
      }else{
        toast.error(`failed\n Url should be unique`);
      }
    }


  }




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

                    <div className={"text-center"}>
                      <button className={"btn p-5"} style={{outline:"none", border:"none", background:"#dcdcdc"}} data-bs-toggle="modal" data-bs-target="#selectThumbnail">Select Thumbnail</button>


                      {/*Modal*/}
                      <div className="modal fade" id="selectThumbnail" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLabel">Select image</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              <div className={"container"}>
                                <div className="row">
                                  {
                                      fileList != null && fileList.map((item, i) => {
                                        return (
                                            <div key={i} className="col-sm-3 my-3">
                                              <div className="card shadow position-relative">
                                                <img onClick={() => selectThumbnail(item.filePath)} className={"w-100 rounded"} src={backendUrl + item.filePath}
                                                     alt={item.name}
                                                     crossOrigin={"anonymous"} title={item.name} data-bs-dismiss="modal"/>
                                              </div>

                                            </div>
                                        )
                                      })
                                  }
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary">Save</button>
                            </div>
                          </div>
                        </div>
                      </div>


                    </div>
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
