import React, {useEffect} from 'react';
import MasterLayout from "../layout/MasterLayout.jsx";
import BlogDetails from "../components/blog/BlogDetails.jsx";
import BlogPostStoreDashboard from "../admin/store/BlogPostStore-Dashboard.js";



const BlogDetailsPage = () => {

    const {getBlogPost} = BlogPostStoreDashboard();

    useEffect(() => {
        (async () => {
            await getBlogPost();
        })()
    }, []);


    return (
        <MasterLayout>
            <div className="container-fluid">
                <BlogDetails/>
            </div>
        </MasterLayout>
    );
};

export default BlogDetailsPage;