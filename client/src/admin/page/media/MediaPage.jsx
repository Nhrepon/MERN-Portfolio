import React from 'react';
import DashboardLayout from '../../layout/DashboardLayout';
import ImageUpload from "../../component/media/ImageUpload.jsx";

const MediaPage = () => {
    return (
        <DashboardLayout>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="fs-4">Media</h3>
                        <hr />
                        <p>This page is under construction.</p>

                        <ImageUpload/>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default MediaPage;