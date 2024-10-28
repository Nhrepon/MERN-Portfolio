import React from "react";


import AboutComponent from "../components/about/AboutComponent.jsx";
import SkillComponent from "../components/skills/SkillComponent";
import ServicesComponents from "../components/services/ServicesComponents";
import PortfolioComponents from "../components/portfolio/PortfolioComponents";
import ReviewComponents from "../components/reviews/ReviewComponents";
import BlogListComponents from "../components/blog/BlogListComponents";
import ContactComponents from "../components/contact/ContactComponents.jsx";
import MasterLayout from "../layout/MasterLayout.jsx";
import Feature from "../components/feature/Feature.jsx";


const HomePage = () => {


    return (
        <MasterLayout>
            <Feature/>
            <AboutComponent/>
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
            <ContactComponents/>


        </MasterLayout>
    );
};

export default HomePage;
