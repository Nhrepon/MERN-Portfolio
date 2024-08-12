import React from 'react';
import MasterLayout from '../layout/MasterLayout';

const ProductPage = () => {
    return (
        <MasterLayout>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mt-5">
                            <h2>All products</h2>
                            <hr />
                        </div>
                    </div>
                    
                </div>
            </div>
        </MasterLayout>
    );
};

export default ProductPage;