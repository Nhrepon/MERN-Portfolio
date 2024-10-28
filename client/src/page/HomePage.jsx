import React from "react";

import HomeLayout from "../layout/HomeLayout";
import AboutUsComponent from "../components/AboutUsComponent";
import SkillComponent from "../components/skills/SkillComponent";
import ServicesComponents from "../components/services/ServicesComponents";
import PortfolioComponents from "../components/portfolio/PortfolioComponents";
import ReviewComponents from "../components/reviews/ReviewComponents";
import BlogListComponents from "../components/blog/BlogListComponents";
import ContactComponents from "../components/ContactComponents";


const HomePage = () => {


    return (
        <HomeLayout>
            <AboutUsComponent/>
            <SkillComponent/>
            <ServicesComponents/>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="fs-1 fw-bold mt-5 text-center">Portfolio</h1>
                        <hr/>
                    </div>
                </div>
                <PortfolioComponents/>
            </div>


            <ReviewComponents/>


            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="fs-1 fw-bold text-center mt-5">Latest Blogs</h2>
                        <hr/>
                    </div>
                </div>
            </div>


            <BlogListComponents/>


            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="fs-1 fw-bold text-center mt-5">Contact Now</h2>
                        <hr/>
                    </div>
                </div>
                <ContactComponents/>
            </div>


        </HomeLayout>
    );
};

export default HomePage;
