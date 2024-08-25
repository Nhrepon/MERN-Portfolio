import React from 'react';
import MasterLayout from '../layout/MasterLayout';
import PortfolioComponents from '../components/portfolio/PortfolioComponents';

const ProjectPage = () => {
    return (
        <MasterLayout>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mt-5">
                            <h2>All projects</h2>
                            <hr />
                        </div>
                    </div>
                    <PortfolioComponents/>
                </div>
            </div>
        </MasterLayout>
    );
};

export default ProjectPage;