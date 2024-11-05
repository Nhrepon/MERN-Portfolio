import React, {useState} from 'react';
import axios from "axios";
import {toast} from "react-hot-toast";

const ImageUpload = () => {
    const [file, setFile]=useState();
    const [fileName, setFileName]=useState();

    const getFile = (e)=>{
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    }
    const uploadFile =async ()=>{

        try {
            const formdata = new FormData();
            formdata.append('image', file);
            const res = await axios.post("/api/upload", formdata, {headers: {
                    'Content-Type': 'multipart/form-data'
                }});

            if (res['status']==="success"){
                toast.success("Image upload success!");
            }else {
                toast.error("failed");
            }
        }catch (e) {
            toast.error(e);
        }
    }



    return (
        <div>
                <input onChange={getFile} type="file" name="image" accept="image/*"/>
                <button onClick={uploadFile}>Upload</button>
            <p>hello {fileName}</p>
            <img src={file} alt=""/>
        </div>
    );
};

export default ImageUpload;