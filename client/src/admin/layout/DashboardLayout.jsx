import React from 'react';
import MasterLayout from "../../layout/MasterLayout.jsx";
import AdminSidebarNavigation from "../AdminSidebarNavigation.jsx";

const DashboardLayout = (props) => {
    return (
        <MasterLayout>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-2 p-0 border-end">
                            <AdminSidebarNavigation/>
                        </div>
                        <div className="col-10 py-3 bg-light">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </MasterLayout>
    );
};

export default DashboardLayout;