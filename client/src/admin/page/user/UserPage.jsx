import React from 'react';
import DashboardLayout from "../../DashboardLayout.jsx";
import UserComponent from "../../component/user/UserComponent.jsx";

const UserPage = () => {
    return (
        <DashboardLayout>
            <UserComponent/>
        </DashboardLayout>
    );
};

export default UserPage;