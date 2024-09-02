
import PortfolioCardComponents from "./PortfolioCardComponents";

const PortfolioComponents = () => {
    const data = [
        {
            id: 1,
            title: "Web application development with MERN Stack",
            image: "https://thereadersea.com/wp-content/uploads/2023/05/mern-stack.png",
            text: "Build a web application using the MERN stack, which stands for MongoDB, Express, React, and Node.js.",
        },
        {
            id: 2,
            title: "Web application development with React Js",
            image: "https://usabilitydesigns.com/wp-content/uploads/2021/01/react-js-development-900x506.jpg",
            text: "Build a web application using the React Js, which stands for JavaScript, React, and Node.js.",
        },
        {
            id: 3,
            title: "Mobile application development",
            image: "https://talent-outsourcing.com/wp-content/uploads/2021/01/ezgif.com-gif-maker.jpg",
            text: "Build a mobile application using the Flutter, which stands for Dart, Flutter, and Node.js.",
        },
        

    ];






  return (
    <div className="container-fluid">
      <div className="container">
        
        <div className="row">
          <div className="col-12">
          <nav className="d-flex justify-content-center align-items-center">
                <div className="nav nav-tabs text-center mx-auto mb-3" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">All</button>
                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">MERN stack</button>
                    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">React Js</button>
                    <button className="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false">Mobile App</button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                    <div className="row gx-5 gy-3">
                    {
                       data.map((item, i)=>{
                        return(
                            <>
                            <div className="col-12 col-md-4">
                                <PortfolioCardComponents
                                key={i}
                                image={item.image}
                                title={item.title}
                                text={item.text}
                                />
                            </div>
                            </>
                        )
                       })
                    }
                    </div>
                    
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                    <div className="col-12 col-md-4">
                        <PortfolioCardComponents
                        image="https://thereadersea.com/wp-content/uploads/2023/05/mern-stack.png"
                        title="Web application development with MERN Stack"
                        text="Build a web application using the MERN stack, which stands for MongoDB, Express, React, and Node.js."
                        />
                    </div>
                </div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                    <div className="col-12 col-md-4">
                        <PortfolioCardComponents
                        image="https://thereadersea.com/wp-content/uploads/2023/05/mern-stack.png"
                        title="Web application development with MERN Stack"
                        text="Build a web application using the MERN stack, which stands for MongoDB, Express, React, and Node.js."
                        />
                    </div>
                </div>
                <div className="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">
                    <div className="col-12 col-md-4">
                        <PortfolioCardComponents
                        image="https://talent-outsourcing.com/wp-content/uploads/2021/01/ezgif.com-gif-maker.jpg"
                        title="Mobile application development"
                        text="Build a mobile application using the Flutter, which stands for Dart, Flutter, and Node.js."
                        />
                    </div>
                </div>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioComponents;
