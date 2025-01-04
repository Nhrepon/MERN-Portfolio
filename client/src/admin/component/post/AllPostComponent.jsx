import React, { useEffect, useState } from 'react';
import BlogPostStoreDashboard from '../../store/BlogPostStore-Dashboard.js';
import toast from 'react-hot-toast';
import {DeleteAlert} from "../../../utility/Utility.js";
import axios from "axios";
import {backendUrl} from "../../../config.js";

const AllPostComponent = () => {

    const {getBlogPost, blogPostList, blogPostDelete} = BlogPostStoreDashboard();

    useEffect(()=>{
        (async()=>{
            await getBlogPost();
        })()
    }, []);



    const editItem= async (item)=>{
        alert(item.details['details'])
    }
    const deleteItem=async(id)=>{
        if(await DeleteAlert()){
            const res=await blogPostDelete(id);
            if (res) {
                await getBlogPost();
                toast.success("Blog post deleted successfully!");

            }else {
                toast.error(`${id} deleted failed! and message ${res.data.status}`);
            }
        }
    }



    return (
        <div className="container">
            <div className="row">
                <div className={"col-12"}>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                        <tr>
                            <th scope='col'>Id</th>
                            <th scope='col'>Title</th>
                            <th scope='col'>Url</th>
                            <th scope='col'>Img</th>
                            <th scope='col'>Category</th>
                            <th scope='col'>Tags</th>
                            <th scope='col' className='col-2 text-center'>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            blogPostList != null && blogPostList.map((item, i) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{i + 1}</td>
                                            <td className='text-wrap overflow-hidden'>{item.title}</td>
                                            <td className='text-wrap overflow-hidden'>{item.url}</td>
                                            <td className=' overflow-hidden'><img src={backendUrl + item.thumbnail} alt={item.title} width={80} crossOrigin={"anonymous"}/></td>
                                            <td className=''>{item.category['categoryName']}</td>
                                            <td className=''>{item.tags}</td>
                                            <td className="d-flex justify-content-center">
                                                <div className={"d-flex text-center"}>
                                                    <button onClick={async () => {
                                                        await editItem(item)
                                                    }} className="btn fs-4 text-primary border-0">
                                                        <i className="bi bi-pencil-square"></i>
                                                    </button>
                                                    <button onClick={async () => {
                                                        await deleteItem(item["_id"])
                                                    }} className="btn fs-4 text-danger border-0">
                                                        <i className="bi bi-trash"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                        }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllPostComponent;