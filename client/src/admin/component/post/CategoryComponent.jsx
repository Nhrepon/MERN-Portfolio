import Swal from "sweetalert2";
import BlogPostStore from "../../store/BlogPostStore.js";
import React, {useEffect} from "react";

const CategoryComponent = () => {




    const {categoryList, getCategoryList, createCategory, deleteCategory, updateCategory} = BlogPostStore();
    useEffect(() => {
        (async () => {
            await getCategoryList();
        })()
    }, []);


    const addCategory = () => {


        const sweetAlertInputForm = {
            title: "Add Category",
            focusConfirm: false,
            html: `
      <input style="width: -webkit-fill-available;" class="swal2-input" id="categoryName" type="text" placeholder="Category Name" /><br />
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

                /* cat: document.getElementById("categoryName").onchange = categoryList != null && categoryList.map((item)=>{
                  if(item.categoryName === document.getElementById("categoryName").value){
                    toast.error("Duplicate value found!");
                  }
                }) */
            }),


        };

        const handleCategoryForm = async () => {
            await getCategoryList();
            let sValue = await Swal.fire(sweetAlertInputForm);
            let value = sValue.value || sValue.dismiss;
            if (value.categoryName || value === "cancel") {
                if (value !== "cancel") {

                    let checkCategory = categoryList?.find(item => item.categoryName === value.categoryName);

                    if (checkCategory) {
                        await Swal.fire({type: 'Duplicate', title: `"${value.categoryName}" already exist!`, icon: 'error'});
                        handleCategoryForm();
                    } else {

                        await createCategory(value);
                        await getCategoryList();
                        await Swal.fire({type: 'success', title: `"${value.categoryName}" added successfully!`, icon: 'success'});
                    }
                }
            } else {
                await Swal.fire({type: 'error', title: 'Category name is required!', icon: 'error'});
                handleCategoryForm();
            }

        };
        handleCategoryForm();
    };

    const deleteItem = async (item) => {
        await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, delete "${item.categoryName}"`,
        }).then(async (result) => {
            if (result.isConfirmed) {
                await deleteCategory(item["_id"]);
                Swal.fire({
                    title: "Deleted!",
                    text: `${item.categoryName} has been deleted successfully!`,
                    icon: "success",
                    type: "success"
                });
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
        const handleCategoryForm = async () => {

            let sValue = await Swal.fire(sweetAlertInputForm);
            let value = sValue.value || sValue.dismiss;
            if (value.categoryName || value === "cancel") {
                if (value !== "cancel") {
                    await updateCategory(item._id, value);
                    await getCategoryList();
                    await Swal.fire({type: 'success', title: 'Category updated successfully!', icon: 'success'});
                }
            } else {
                await Swal.fire({type: 'error', title: 'Category name is required!', icon: 'error'});
                handleCategoryForm();
            }

        };
        handleCategoryForm();
    };





    return (
        <div className="container">
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
                        {categoryList != null && categoryList.map((item, i) => {
                            return (
                                <>
                                    <tr key={i} className="align-middle">
                                        <td>{i = i + 1}</td>
                                        <td>{item.categoryName}</td>
                                        <td>{item.categoryDescription}</td>
                                        <td>
                                            <img
                                                src={item.categoryImage}
                                                className="img-fluid"
                                                style={{width: "50px"}}
                                                alt={item.categoryName}
                                            />
                                        </td>
                                        <td className="text-center">
                                            <button onClick={async () => {
                                                await editItem(item)
                                            }} className="btn fs-4 text-primary border-0">
                                                <i className="bi bi-pencil-square"></i>
                                            </button>
                                            <button onClick={async () => {
                                                await deleteItem(item)
                                            }} className="btn fs-4 text-danger border-0">
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
    );
};

export default CategoryComponent;