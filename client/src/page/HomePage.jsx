import React from "react";
import MasterLayout from "../layout/MasterLayout";
import BlogListComponents from "../components/blog/BlogListComponents";
import HomeLayout from "../layout/HomeLayout";

const HomePage = () => {
  return (
    <HomeLayout>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12">
                <h2>Home page ... </h2>
            </div>
          </div>
        </div>
      </div>

      <BlogListComponents />

    </HomeLayout>
  );
};

export default HomePage;
