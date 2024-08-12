import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './page/HomePage';
import RegistrationPage from './page/RegistrationPage';
import NotFoundPage from './page/NotFoundPage';
import LoginPage from './page/LoginPage';
import BlogPage from './page/BlogPage';
import ProductPage from './page/ProductPage';
import AboutPage from './page/AboutPage';
import ContactPage from './page/ContactPage';
import {isLogin} from "./utility/Utility.js";
import DashboardPage from "./admin/page/DashboardPage.jsx";
import NewPostPage from "./admin/page/post/NewPostPage.jsx";
import UserPage from "./admin/page/user/UserPage.jsx";

const App = () => {

  if (isLogin()){
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />

            <Route path="/registration" element={<RegistrationPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/dashboard" element={<DashboardPage/>} />
            <Route path="/profile" element={<DashboardPage/>} />
            <Route path="/setting" element={<DashboardPage/>} />

            <Route path="/new-post" element={<NewPostPage/>} />


            <Route path="/users" element={<UserPage/>} />


            <Route path="/blog" element={<BlogPage/>} />
            <Route path="/products" element={<ProductPage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/contact" element={<ContactPage/>} />


            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </BrowserRouter>
    );
  }else {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>

            <Route path="/registration" element={<RegistrationPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>

            <Route path="/blog" element={<BlogPage/>}/>
            <Route path="/products" element={<ProductPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>

            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </BrowserRouter>
    );

  }




}

export default App;