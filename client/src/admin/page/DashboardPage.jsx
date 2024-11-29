import React from 'react';
import DashboardLayout from "../DashboardLayout.jsx";


const DashboardPage = () => {
    return (
        <DashboardLayout>

            <div className="container">
                <div className="row">
                    <h2>Welcome to Dashboard</h2>
                </div>
                <hr/>
                <div className="row">
                <div className="col-4">
                        <div className="card shadow">
                            <h2 className="card-header fs-2">This is card</h2>
                            <div className="card-body">
                                <p className="card-title">This is card</p>
                                <p className="card-text">There are 44 blog post.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default DashboardPage;