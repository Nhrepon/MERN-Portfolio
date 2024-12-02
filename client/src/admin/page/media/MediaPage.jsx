import React from 'react';
import DashboardLayout from '../../DashboardLayout.jsx';
import FileUploadComponent from "../../component/media/FileUploadComponent.jsx";
import ShowMediaComponent from "../../component/media/ShowMediaComponent.jsx";

const MediaPage = () => {
    return (
        <DashboardLayout>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="fs-4">Media</h3>
                        <hr />
                        <FileUploadComponent/>
                        <hr/>
                        <ShowMediaComponent/>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default MediaPage;