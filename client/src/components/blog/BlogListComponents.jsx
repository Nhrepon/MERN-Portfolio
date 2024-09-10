import React from "react";
import { Link } from "react-router-dom";

const BlogListComponents = () => {
  const data = [
    {
      title: "Good food habit is great to be a healthy man",
      img: "/exercise.jpg",
      description:
        "Ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus cum distinctio vel mollitia reprehen",
    },
    {
      title: "2. Good food habit is great to be a healthy man",
      img: "/exercise.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. reprehenderit ullam unde atque aliquid quia",
    },
    {
      title: "3. Good food habit is great to be a healthy man",
      img: "/exercise.jpg",
      description:
        "Lorem ipsum dolor sit adipisicing elit. Necessitatibus vel reprehenderit ullam unde atque aliquid quia",
    },
    {
      title: "4. Good food habit is great to be a healthy man",
      img: "/exercise.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur mollitia reprehenderit ullam unde atque aliquid quia",
    },
    {
      title: "Good food habit is great to be a healthy man",
      img: "/exercise.jpg",
      description:
        "Lorem ipsum dolor sitlitia reprehenderit ullam unde atque aliquid quia",
    },
    {
      title: "Good food habit is great to be a healthy man",
      img: "/exercise.jpg",
      description:
        "Lorem ipsum dolor sit amet el mollitia reprehenderit ullam unde atque aliquid quia",
    },
    {
      title: "Good food habit is great to be a healthy man",
      img: "/exercise.jpg",
      description:
        "Lorem ipsum dolor mollitia reprehenderit ullam unde atque aliquid quia",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="container blog">
        <div className="row">
          <div className="col-12">
            <p>Total blogs: {data.length}</p>
          </div>
        </div>
        <div className="row gx-4 gy-3">
          {data.map((item, i) => {
            return (
              <>
                <div className="col-md-4">
                  <div className="card shadow-sm mb-4 overflow-hidden" key={i}>
                    <img className="zoom card-img" src={item.img} />
                    <div className="card-body">
                      <div className="card-text my-2">
                        <span className="me-4 text-success">
                          <i class="bi bi-person-circle"></i>By: Nur Hossain
                        </span>
                        <span className="text-success">
                          <i class="bi bi-tag"></i>MERN
                        </span>
                      </div>
                      <Link className="nav-link" to={item.title}>
                        <h3 className=" card-title fs-5">{item.title}</h3>
                      </Link>
                      <p className="card-text">{item.description}</p>
                      <div className="card-text my-2 d-flex justify-content-between">
                        <span className="me-4 text-success">
                          <i class="bi bi-calendar"></i>
                          05 August 2024
                        </span>
                        <span className="text-success"><Link className="nav-link" to={item.title}>Read more</Link></span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogListComponents;
