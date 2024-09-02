import React from "react";
import MasterLayout from "../../layout/MasterLayout.jsx";
import AdminSidebarNavigation from "../AdminSidebarNavigation.jsx";

const DashboardLayout = (props) => {
  return (
    <MasterLayout>
      <div className="container-fluid">
        <div className="container">
          <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2">
              <AdminSidebarNavigation />
            </div>
            <div className="col py-3 px-3 bg-light">{props.children}</div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default DashboardLayout;
