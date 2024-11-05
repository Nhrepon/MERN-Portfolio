import React, {useEffect} from 'react';
import MasterLayout from "../layout/MasterLayout.jsx";
import BlogDetails from "../components/blog/BlogDetails.jsx";
import BlogPostStore from "../admin/store/BlogPostStore.js";



const BlogDetailsPage = () => {

    const {getBlogPost} = BlogPostStore();

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