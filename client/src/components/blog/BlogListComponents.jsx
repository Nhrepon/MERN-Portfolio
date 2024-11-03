import {useEffect} from "react";
import {Link} from "react-router-dom";
import BlogPostStore from "../../admin/store/BlogPostStore.js";
import parse from "html-react-parser";



const BlogListComponents = () => {

    const {getBlogPost, blogPostList} = BlogPostStore();

    useEffect(() => {
        (async () => {
            await getBlogPost();
        })()
    }, []);



    return (
        <div className="container-fluid">
            <div className="container blog">
                <div className="row">
                    <div className="col-12">
                        <p>Total blogs: {blogPostList != null && blogPostList.length}</p>
                    </div>
                </div>
                <div className="row gx-4 gy-3">
                    {
                        blogPostList !== null && blogPostList.map((item, i) => {
                        return (
                            <>
                                <div className="col-md-4">
                                    <div className="card shadow-sm mb-4 overflow-hidden" key={i}>
                                        <img className="zoom card-img" src={item.thumbnail}/>
                                        <div className="card-body">
                                            <div className="card-text my-2">
                                                <span className="me-4 text-success">
                                                  <i className="bi bi-person-circle"></i>By: Nur Hossain
                                                </span>
                                                <span className="text-success">
                                                    <i className="bi bi-tag"></i>MERN
                                                </span>
                                            </div>
                                            <Link className="nav-link" to={item.url}>
                                                <h3 className=" card-title fs-5">{item.title}</h3>
                                            </Link>
                                            <p className="card-text">{parse(item.details['details'])}</p>
                                            <div className="card-text my-2 d-flex justify-content-between">
                                            <span className="me-4 text-success">
                                              <i className="bi bi-calendar"></i>
                                              05 August 2024
                                            </span>
                                                <span className="text-success"><Link className="nav-link" to={item.url}>Read more</Link></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BlogListComponents;
