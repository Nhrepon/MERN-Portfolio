import React, { useEffect } from "react";
import DashboardLayout from "../../layout/DashboardLayout.jsx";
import Swal from "sweetalert2";
import BlogPostStore from "../../store/BlogPostStore.js";


const CategoryPage = () => {
  const category = "Category name";

    const {categoryList, getCategoryList, categoryForm, categoryFormOnChange, createCategory}=BlogPostStore();
    useEffect(() => {
        (async()=>{
            await getCategoryList();
        })()
    }, []);



    const sweetAlertInpurForm = {
      title: "Add Category",
      focusConfirm: false,
      html: `
      <input value="${category}" onChange="${(e)=>{categoryFormOnChange('categoryName', e.target.value);}}" style="width: -webkit-fill-available;" class="swal2-input" id="categoryName" type="text" placeholder="Category Name" /><br />
      <input style="width: -webkit-fill-available;" class="swal2-input" id="categoryDescription" type="text" placeholder="Category Description" /><br />
      <input style="width: -webkit-fill-available;" class="swal2-input" id="categoryImage" type="text" placeholder="Category Image" />
    `,
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "Add",
      cancelButtonText: "Cancel",
      allowOutsideClick: false,
      preConfirm: () => ({
        categoryName: document.getElementById("categoryName").value,
        categoryDescription: document.getElementById("categoryDescription").value,
        categoryImage: document.getElementById("categoryImage").value,
      }),
    };

  const addCategory = () => {
    
    const handleCategoryForm=async()=>{
      
      let sValue =await Swal.fire(sweetAlertInpurForm);
      let value = sValue.value || sValue.dismiss;
      if(value.categoryName || value === "cancel"){
        if(value !== "cancel"){
          await createCategory(value);
          await getCategoryList();
          await Swal.fire({ type: 'success', title: 'Category added successfully!', icon: 'success' });
        }
      }else{
        await Swal.fire({ type: 'error',title: 'Category name is required!', icon: 'error' });
        handleCategoryForm();
      }

    };
    handleCategoryForm();
  };

  return (
    <DashboardLayout>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="fs-4">Category</h3>
            <hr />

            <div className="row">
              <div className="col-12">
                <p className="float-start">All Categories</p>
                <button
                  type="button"
                  className="btn btn-primary float-end"
                  onClick={addCategory}
                >
                  Add Category
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                
                <table className="table  table-striped border my-3">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Category Name</th>
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
                          style={{ width: "50px" }}
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
};

export default CategoryPage;
