
import AdminSidebarNavigation from "./AdminSidebarNavigation.jsx";

import {Toaster} from "react-hot-toast";
import './style.css';

const DashboardLayout = (props) => {
  return (
      <div className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-auto position-fixed" >
              <AdminSidebarNavigation />
            </div>
            <div className="col bg-light py-2 admin-content" >
              {props.children}
            </div>
          </div>
          <Toaster position="top-center" />
        </div>
      </div>
  );
};

export default DashboardLayout;
