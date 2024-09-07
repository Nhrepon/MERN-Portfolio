import React from 'react';
import DashboardLayout from "../../layout/DashboardLayout.jsx";
import Swal from 'sweetalert2';


const CategoryPage = () => {

    const addCategory = () => {
            Swal.fire({
                title: 'Add Category',
                //input: 'text',
                html:
                '<input id="swal-input1" class="swal2-input">' +
                '<input id="swal-input2" class="swal2-input">',
                showCancelButton: true,
                confirmButtonText: 'Add',
                cancelButtonText: 'Cancel',
                inputValidator: (value) => {
                    if (!value) {
                        return 'Field is required!'
                    }
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Added!',
                        'Category added successfully.',
                        'success'
                    )
                }
            })
        
    }

    return (
        <DashboardLayout>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Category</h2>
                        <hr />
                        <button className="btn btn-primary" onClick={addCategory}>Add Category</button>
                        <p>This page is under construction.</p>

                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default CategoryPage;