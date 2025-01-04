
import AdminSidebarNavigation from "./AdminSidebarNavigation.jsx";

import {Toaster} from "react-hot-toast";

import './style.css';

const DashboardLayout = (props) => {
  return (
      <div className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col sidebar bg-success p-1" >
                <AdminSidebarNavigation />
            </div>
            <div className="col content" >
                {/* eslint-disable-next-line react/prop-types */}
              {props.children}
            </div>
          </div>
          <Toaster position="top-center" />
        </div>
      </div>
  );
};

export default DashboardLayout;
