
import {create} from "zustand";
import axios from "axios";

const ContactStore = create((set)=>({
    contactFormValue:{name:"", email:"", mobile:"", subject:"", message:""},
    contactFormOnChange:(name, value)=>{
        set((state)=>({
            contactFormValue:{
                ...state.contactFormValue,
                [name]:value
            }
        }));
    },
    submitMessage:async (postBody)=>{
        try {
            const response = await axios.post("/api/submitMessage", postBody);
            return response.data["status"] === "success";
        }catch (e) {
            return {status:"error", message:e.message}
        }
    },
    messageList:null,
    getMessage:async ()=>{
        try {
            const response = await axios.get("/api/messageList");
            set({messageList: response.data['data']});
            return response.data["status"] === "success";
        }catch (e) {
            return {status:"error", message:e.message}
        }
    },













}));

export default ContactStore;