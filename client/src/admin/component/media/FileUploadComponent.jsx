import React, {useState} from 'react';
import axios from "axios";
import "./style.css";
import {toast} from "react-hot-toast";

const FileUploadComponent = () => {

    const [file, setFile]=useState();

    const handleFile = (e)=>{
        setFile([...e.target.files]);
    }
    const uploadFile =async ()=>{

        try {
            const formData = new FormData();
            if (file!=null){
                file.map((item)=>{
                    formData.append('file',item);
                })}
            const res = await axios.post("/api/uploadFile", formData, {headers: {
                    'Content-Type': 'multipart/form-data'
                }});

            if (res['data'].status === "success"){
                document.getElementById("file").value = "";
                setFile(null);
                toast.success("Image upload success!");
            }else {
                toast.error("failed");
            }
        }catch (e) {
            toast.error(e);
        }
    }




    return (
        <div className={"container"}>
            <div className="row">
                <div className="col-12">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <div className="form-group my-3 file-upload w-100">
                            <label>Select Media File</label>
                            <input id={"file"} onChange={handleFile} type="file" accept="image/*" className="form-control my-2"/>
                            <p>Select an image</p>
                        </div>
                        <button onClick={uploadFile} type="submit" className={"btn btn-success"}>upload</button>
                    </div>
                </div>
                <div className="col-12 text-center my-5">
                    {
                        file?.map((item) => {
                            return (<img src={URL.createObjectURL(item)} alt="" style={{width: 200, height: "auto"}}/>)
                        })
                    }
                </div>
            </div>


        </div>
    );
};

export default FileUploadComponent;