
import MasterLayout from "../layout/MasterLayout.jsx";
import BlogDetails from "../components/blog/BlogDetails.jsx";



const BlogDetailsPage = () => {

    return (
        <MasterLayout>
            <div className="container-fluid">
                <BlogDetails/>
            </div>
        </MasterLayout>
    );
};

export default BlogDetailsPage;