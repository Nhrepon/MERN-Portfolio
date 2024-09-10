import React, { useEffect } from "react";
import DashboardLayout from "../../layout/DashboardLayout.jsx";
import Swal from "sweetalert2";
import BlogPostStore from "../../store/BlogPostStore.js";

const TagsPage = () => {
    
    const {categoryList, getCategoryList}=BlogPostStore();
    useEffect(() => {
        (async()=>{
            await getCategoryList();
        })()
    }, []);




  const addCategory = () => {
    Swal.fire({
      title: "Add Tags",
      //input: 'text',
      html:`<input id="swal-input1" class="swal2-input">
        <input id="swal-input2" class="swal2-input">
        <input id="swal-input3" class="swal2-input">`,
      showCancelButton: true,
      confirmButtonText: "Add",
      cancelButtonText: "Cancel",
      allowEnterKey:true,
      inputValidator: (value) => {
        if (!value) {
          return "Field is required!";
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Added!", "Tags added successfully.", "success");
      }
    });
  };

  return (
    <DashboardLayout>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="fs-4">Tags</h3>
            <hr />

            <div className="row">
              <div className="col-12">
                <p className="float-start">All Tags</p>
                <button
                  className="btn btn-primary float-end"
                  onClick={addCategory}
                >
                  Add tags
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                
                <table className="table  table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Tag Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Image</th>
                      <th className="col-2" scope="col">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {categoryList!=null && categoryList.map((item, i) => {
                  return (
                    <>
                    <tr key={i}>
                      <td>{i=i+1}</td>
                      <td>{item.categoryName}</td>
                      <td>{item.categoryDescription}</td>
                      <td>
                        <img
                          src={item.categoryImage}
                          className="img-fluid"
                          style={{ width: "40px" }}
                          alt={item.categoryName}
                        />
                      </td>
                      <td className="text-center">
                        <button className="btn fs-4 text-primary border-0">
                          <i className="bi bi-pencil-square"></i>
                        </button>
                        <button className="btn fs-4 text-danger border-0">
                          <i className="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                    </>
                  )
                })}
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default TagsPage;