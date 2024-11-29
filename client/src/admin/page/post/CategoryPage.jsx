import React, {useEffect} from "react";
import DashboardLayout from "../../DashboardLayout.jsx";
import CategoryComponent from "../../component/post/CategoryComponent.jsx";



const CategoryPage = () => {



    return (
        <DashboardLayout>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="fs-4">Category</h3>
                        <hr/>

                        <CategoryComponent/>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default CategoryPage;
