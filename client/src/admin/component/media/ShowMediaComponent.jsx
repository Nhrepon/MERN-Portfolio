import React, {useEffect} from 'react';
import MediaStoreDashboard from "../../store/MediaStore-Dashboard.js";
import {backendUrl} from "../../../config.js";
import axios from "axios";
import {DeleteAlert} from "../../../utility/Utility.js";
import {toast} from "react-hot-toast";

const ShowMediaComponent = () => {
    const {fileList,getFileList}=MediaStoreDashboard();

    useEffect(()=>{
        (async ()=>{
            await getFileList()
        })()
    },[]);



    const deleteFile = async (id)=>{
        if(await DeleteAlert()){
            const res = await axios.delete(`api/fileDelete/${id}`);
            if (res.data.status === "success") {
                await getFileList();
                toast.success(`${id} deleted successfully!`);
            }else {
                toast.error(`${id} deleted failed! and message ${res.data.status}`);
            }
        }


    }






    return (
        <div className={"container"}>
            <div className="row">
                {
                    fileList!=null && fileList.map((item, i)=>{
                        return (
                            <div key={i} className="col-sm-3 my-3">
                                <div className="card shadow position-relative">
                                    <span className="position-absolute bg-light px-1 rounded"
                                          style={{right: 5, top: 5}} onClick={() => deleteFile(item._id)}>
                                        <i className="bi bi-x-square-fill"></i>
                                    </span>
                                    <img className={"w-100 rounded"} src={backendUrl + item.filePath} alt={item.name}
                                         crossOrigin={"anonymous"} title={item.name}/>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ShowMediaComponent;