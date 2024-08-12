import React from 'react';
import {create} from "zustand";
import axios from "axios";


const UserStore = create((set)=>({

    isFormSubmit: false,

    registrationFormValue: {email:"", password:""},

    registrationFormOnChange:(name, value)=>{
        set((state)=>({
            registrationFormValue:{
                ...state.registrationFormValue,
                [name]: value,
            },
        }));
    },

    userRegistration: async (postBody)=>{
        try {
            set({isFormSubmit: true});
            const response = await axios.post(`/api/userRegistration`, postBody);
            set({isFormSubmit: false});

            if (response.data["status"]==="duplicate"){
                return false;
            }else {
                return response.data["status"] === "success";
            }

        }catch (e) {
            return {status:"error", error:e}
        }
    },
    //////////////////////////////////////////////////////////////

    loginFormValue: {email:"", password:""},

    loginFormOnChange:(name, value)=>{
        set((state)=>({
            loginFormValue:{
                ...state.loginFormValue,
                [name]: value,
            },
        }));
    },

    userLogin:async (postBody)=>{
        try {
            set({isFormSubmit:true});
            const response = await axios.post(`/api/userLogin`, postBody);
            sessionStorage.setItem("email",postBody.email);

            set({isFormSubmit:false});

            if(response.data["status"] === "userNotFound"){
                return false;
            } else {
                return response.data["status"] === "success";
            }




        }catch (e) {
            return {status:"error", error:e}
        }
    },

    userProfile: null,
    getUserProfile: async ()=>{
        try {
            const profile = await axios.get("/api/userProfileRead");
            if (profile.data["data"].length > 0){
                set({userProfile: profile.data[0]});
            }else {
                set({userProfile: []});
            }

        }catch (error) {
            return ({status:"error", message:error});
        }
    },


    userLogout: async ()=>{
        try {
            set({isFormSubmit:true});
            const response = await axios.post("/api/userLogout");
            set({isFormSubmit:false});

            return response.data["status"]==="success";
        }catch (error) {
            return ({status:"error", message:error});
        }
    }






}));









export default UserStore;