import React from 'react';
import DashboardLayout from "../../layout/DashboardLayout.jsx";
import NewPostComponent from "../../component/post/NewPostComponent.jsx";

const NewPostPage = () => {
    return (
        <DashboardLayout>
            <NewPostComponent/>
        </DashboardLayout>
    );
};

export default NewPostPage;