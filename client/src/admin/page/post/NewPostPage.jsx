
import AddNewPostComponent from "../../component/post/AddNewPostComponent.jsx";
import DashboardLayout from "../../DashboardLayout.jsx";

const NewPostPage = () => {
    return (
        <DashboardLayout>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="fs-4">Add New Posts</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <AddNewPostComponent/>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default NewPostPage;