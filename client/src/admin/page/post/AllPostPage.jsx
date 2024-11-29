
import DashboardLayout from '../../DashboardLayout.jsx';
import AllPostComponent from '../../component/post/AllPostComponent';

const AllPostPage = () => {
    return (
        <DashboardLayout>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="fs-4">All Posts</h3>
                        <hr />
                        
                        <AllPostComponent/>

                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default AllPostPage;