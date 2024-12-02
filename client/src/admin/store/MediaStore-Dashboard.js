
import {create} from "zustand";
import axios from "axios";

const MediaStoreDashboard = create((set)=>({
    fileList:null,
    getFileList:async ()=>{
        try {
            const response = await axios.get("/api/fileList");
            set({fileList:response.data["data"]});
        }catch (e) {
            console.log(e);
        }
    },





}));

export default MediaStoreDashboard;