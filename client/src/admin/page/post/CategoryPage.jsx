import React from "react";
import DashboardLayout from "../../layout/DashboardLayout.jsx";
import Swal from "sweetalert2";

const CategoryPage = () => {
  const addCategory = () => {
    Swal.fire({
      title: "Add Category",
      //input: 'text',
      html:
        '<input id="swal-input1" class="swal2-input">' +
        '<input id="swal-input2" class="swal2-input">' +
        '<input id="swal-input3" class="swal2-input">',
      showCancelButton: true,
      confirmButtonText: "Add",
      cancelButtonText: "Cancel",
      inputValidator: (value) => {
        if (!value) {
          return "Field is required!";
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Added!", "Category added successfully.", "success");
      }
    });
  };

  return (
    <DashboardLayout>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Category</h2>
            <hr />

            <div className="row">
              <div className="col-12">
                <p className="float-start">All Categories</p>
                <button
                  className="btn btn-primary float-end"
                  onClick={addCategory}
                >
                  Add Category
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <table className="table  table-striped">
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
                    <tr>
                      <td>01</td>
                      <td>MERN</td>
                      <td>Mern web app</td>
                      <td>
                        <img
                          src="/nhrepon.jpg"
                          className="img-fluid"
                          style={{ width: "40px" }}
                          alt="nhrepon"
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
