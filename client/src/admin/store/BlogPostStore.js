import axios from "axios";
import { create } from "zustand";

const BlogPostStore = create((set) => ({

    categoryForm:{categoryName:"", categoryDescription:"", categoryImage:""},
    categoryFormOnChange: (name, value)=>{
        set((state) => ({
            categoryForm: {
                ...state.categoryForm,
                [name]: value, 
            },
        }));
    },
    categoryList:null,
    getCategoryList: async () => {
        try {
            const response = await axios.get("/api/category");
            set({ categoryList: response.data["data"] });
            set({ categoryForm: response.data["data"] });

        } catch (error) {
            return ({ status: "error", message: error });
        }
    },
    createCategory: async (reqBody) => {
        try {
            const response = await axios.post("/api/create-category", reqBody);
            return response.data["status"] === "success";
        } catch (error) {
            return ({ status: "error", message: error });
        }
    },
    deleteCategory: async (id) => {
        try {
            const response = await axios.get(`/api/categoryDelete/${id}`);
            return response.data["status"] === "success";
        } catch (error) {
            return ({ status: "error", message: error });
        }
    },
    updateCategory: async (id, reqBody) => {
        try {
            reqBody._id = id;
            const response = await axios.post("/api/updateCategory", reqBody);
            return response.data["status"] === "success";
        } catch (error) {
            return ({ status: "error", message: error });
        }
    },










    blogPostForm: { title: "", thumbnail: "", tags: "", categoryId:"", details: ""},
    blogPostFormOnChange: (name, value) => {
        set((state) => ({
            blogPostForm: {
                ...state.blogPostForm,
                [name]: value,
            },
        }));
    },
    
    blogPostList: null,
    getBlogPost: async () => { 
        try {
            const response = await axios.get("/api/blogPostRead");
            set({ blogPost: response.data["blogPost"] });
        } catch (error) {
            console.log(error);
        }
    },

    

    blogPostUpdate: async (postBody) => {
        try {
            const response = await axios.post("/api/blogPostUpdate", postBody);
            return response.data["status"] === "success";
        } catch (error) {
            console.log(error);
        }
    },

    blogPostCreate: async (postBody) => {
        try {
            const response = await axios.post("/api/createBlogPost", postBody);
            return response.data["status"] === "success";
        } catch (error) {
            console.log(error);
        }
    },









}));

export default BlogPostStore;