import {useParams} from "react-router";
import parse from "html-react-parser";
import './blogDetails.css';
import BlogPostStore from "../../admin/store/BlogPostStore.js";
import {sitename} from "../../config.js";

const BlogDetails = () => {

    const {url} = useParams();

    const {blogPostList} = BlogPostStore();
    const details = blogPostList?.find(blogPostList => blogPostList.url === url);



    return (

            <div className="container">
                <div className="row">
                    <div className="blogDetails col-12">
                        <p className="py-2">{sitename + " " + window.location.pathname.split("/").join(" > ")}</p>
                        <h2 className="my-5 fw-bold fs-2 text-center mx-auto col-12 col-md-8">{details.title}</h2>
                        <div className="d-flex my-3 ">
                            <img className="rounded mx-auto col-12 col-md-6" src={details.thumbnail}
                                 alt={details.title}/>
                        </div>
                        <div className="d-flex content">
                            <div className="mx-auto col-12 col-md-8">{parse(details.details['details'])}</div>
                        </div>


                    </div>
                </div>
            </div>

    );
};

export default BlogDetails;