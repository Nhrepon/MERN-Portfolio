import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './page/HomePage';
import RegistrationPage from './page/RegistrationPage';
import NotFoundPage from './page/NotFoundPage';
import LoginPage from './page/LoginPage';
import BlogPage from './page/BlogPage';
import AboutPage from './page/AboutPage';
import ContactPage from './page/ContactPage';
import {isLogin} from "./utility/Utility.js";
import DashboardPage from "./admin/page/DashboardPage.jsx";
import NewPostPage from "./admin/page/post/NewPostPage.jsx";
import UserPage from "./admin/page/user/UserPage.jsx";
import ProjectPage from './page/ProjectPage.jsx';
import MediaPage from './admin/page/media/MediaPage.jsx';
import AllPostPage from './admin/page/post/AllPostPage.jsx';
import CategoryPage from './admin/page/post/CategoryPage.jsx';
import TagsPage from './admin/page/post/TagsPage.jsx';
import BlogDetailsPage from "./page/BlogDetailsPage.jsx";

const App = () => {

  if (isLogin()){
    return (
        <BrowserRouter>
          <Routes>
            {/* Public router area -------------------------------------------------- */}
            <Route path="/" element={<HomePage/>} />
            <Route path="/registration" element={<RegistrationPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/blog" element={<BlogPage/>} />
            <Route path="/blog/:url" element={<BlogDetailsPage/>} />
            <Route path="/projects" element={<ProjectPage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="*" element={<NotFoundPage/>} />




            {/* Admin router area -------------------------------------------------- */}
            <Route path="/dashboard" element={<DashboardPage/>} />
            <Route path="/profile" element={<UserPage/>} />
            <Route path="/setting" element={<DashboardPage/>} />

            <Route path="/new-post" element={<NewPostPage/>} />
            <Route path="/all-post" element={<AllPostPage/>} />
            <Route path="/category" element={<CategoryPage/>} />
            <Route path="/tags" element={<TagsPage/>} />

            <Route path="/media" element={<MediaPage/>} />

            <Route path="/users" element={<UserPage/>} />


            
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
            <Route path="/blog/:url" element={<BlogDetailsPage/>} />
            <Route path="/projects" element={<ProjectPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>

            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </BrowserRouter>
    );

  }




}

export default App;