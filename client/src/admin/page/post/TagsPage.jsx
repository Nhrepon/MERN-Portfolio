import React, { useEffect } from "react";
import DashboardLayout from "../../DashboardLayout.jsx";
import Swal from "sweetalert2";
import BlogPostStore from "../../store/BlogPostStore.js";

const TagsPage = () => {
    
  const {categoryList, getCategoryList, createCategory, deleteCategory, updateCategory}=BlogPostStore();
  useEffect(() => {
      (async()=>{
          await getCategoryList();
      })()
  }, []);





const addTags = () => {
  
  const sweetAlertInputForm = {
    title: "Add Tags",
    focusConfirm: false,
    html: `
    <input style="width: -webkit-fill-available;" class="swal2-input" id="tagsName" type="text" placeholder="Tags Name" /><br />
    
  `,
    type: "warning",
    showCancelButton: true,
    confirmButtonText: "Add",
    cancelButtonText: "Cancel",
    allowOutsideClick: false,
    preConfirm: () => ({
      categoryName: document.getElementById("tagsName").value,
    }),

    
  };
  
  const handleCategoryForm=async()=>{
    
    let sValue =await Swal.fire(sweetAlertInputForm);
    let value = sValue.value || sValue.dismiss;
    if(value.tagsName || value === "cancel"){
      if(value !== "cancel"){
        
        const ucat=categoryList != null && categoryList.map((item)=>{item.tagsName === value.tagsName});
        
        if(ucat){
          await Swal.fire({ type: 'Duplicate',title: 'Tags name already exist!', icon: 'error' });
          handleCategoryForm();
        }else{

          await createCategory(value);
          await getCategoryList();
          await Swal.fire({ type: 'success', title: 'Tags added successfully!', icon: 'success' });
        }
      }
    }else{
      await Swal.fire({ type: 'error',title: 'Tags name is required!', icon: 'error' });
      handleCategoryForm();
    }

  };
  handleCategoryForm();
};

const deleteItem = async (id) => {
  await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then(async(result) => {
    if (result.isConfirmed) {
      await deleteCategory(id);
      Swal.fire({title:"Deleted!", text: "Your file has been deleted successfully!", icon: "success", type:"success"});
      await getCategoryList();
    }
  });
};


const editItem = async (item) => {
  const sweetAlertInputForm = {
    title: "Update Category",
    focusConfirm: false,
    html: `
    <input value="${item.categoryName}" style="width: -webkit-fill-available;" class="swal2-input" id="categoryName" type="text" placeholder="Category Name" /><br />
    <input value="${item.categoryDescription}" style="width: -webkit-fill-available;" class="swal2-input" id="categoryDescription" type="text" placeholder="Category Description" /><br />
    <input value="${item.categoryImage}" style="width: -webkit-fill-available;" class="swal2-input" id="categoryImage" type="text" placeholder="Category Image" />
  `,
    type: "warning",
    showCancelButton: true,
    confirmButtonText: "Update",
    cancelButtonText: "Cancel",
    allowOutsideClick: false,
    preConfirm: () => ({
      categoryName: document.getElementById("categoryName").value,
      categoryDescription: document.getElementById("categoryDescription").value,
      categoryImage: document.getElementById("categoryImage").value,
    }),
  };
  const handleCategoryForm=async()=>{
    
    let sValue =await Swal.fire(sweetAlertInputForm);
    let value = sValue.value || sValue.dismiss;
    if(value.categoryName || value === "cancel"){
      if(value !== "cancel"){
        await updateCategory(item._id, value);
        await getCategoryList();
        await Swal.fire({ type: 'success', title: 'Category updated successfully!', icon: 'success' });
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
            <h3 className="fs-4">Tags</h3>
            <hr />

            <div className="row">
              <div className="col-12">
                <p className="float-start">All Tags</p>
                <button
                  className="btn btn-primary float-end"
                  onClick={addTags}
                >
                  Add tags
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th className="col-1" scope="col">Id</th>
                      <th scope="col">Tag Name</th>
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
                      <td className="text-center">
                        <button onClick={async()=>{await editItem(item)}} className="btn fs-4 text-primary border-0">
                          <i className="bi bi-pencil-square"></i>
                        </button>
                        <button onClick={async()=>{await deleteItem(item["_id"])}} className="btn fs-4 text-danger border-0">
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