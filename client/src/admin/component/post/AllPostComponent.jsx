import React, { useEffect, useState } from 'react';
import BlogPostStore from '../../store/BlogPostStore';

const AllPostComponent = () => {

    const {getBlogPost, blogPostList} = BlogPostStore();

    useEffect(()=>{
        (async()=>{
            await getBlogPost();
        })()
    }, []);



    const editItem=()=>{}
    const deleteItem=(id)=>{}



    return (
        <div>
            <table className='table table-striped table-hover table-bordered'>
                <thead>
                    <tr>
                        <th scope='col'>Id</th>
                        <th scope='col'>Title</th>
                        <th scope='col'>Url</th>
                        <th scope='col'>Category</th>
                        <th scope='col'>Tags</th>
                        <th scope='col' className='col-2 text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        blogPostList!=null && blogPostList.map((item, i)=>{
                            return(
                                <>
                                    <tr>
                                        <td>{i+1}</td>
                                        <td className='text-nowrap overflow-hidden'>{item.title}</td>
                                        <td className='text-nowrap overflow-hidden'>{item.url}</td>
                                        <td className=''>{item.category['categoryName']}</td>
                                        <td className=''>{item.tags}</td>
                                        <td className="text-center col-2 d-flex">
                                            <button onClick={async()=>{await editItem(item)}} className="btn fs-4 text-primary border-0">
                                                <i className="bi bi-pencil-square"></i>
                                            </button>
                                            <button onClick={async()=>{await deleteItem(item["_id"])}} className="btn fs-4 text-danger border-0">
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default AllPostComponent;