import React from "react";
import Store from "../../Assets/Store.png";
import Framework from "../../Assets/Framework.png";
import "./Featuredcard.css";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

const Featuredcard = () => {
  return (
    <div className="proj-card">
      <div className="project-card-horizontal">
        <div className="project-title">
          <p className="project-index">0.2</p>
          <h1 className="project-heading">Some Things I’ve Built</h1>
          <span className="project-bar"></span>
        </div>
        <div className="project-card">
          <div className="project-card-img-container">
            <img className="project-card-img" src={Framework}  alt="" />
          </div>
          <div className="card-title">
            <h3>Featured Project</h3>
            <h1>PaperBoat CSS-Framework</h1>
            <p className="card-dis">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              dolor quaerat aspernatur tempore eius, suscipit laudantium ad nisi
              voluptas molestiae quasi accusantium, dignissimos, unde itaque
              dolores ducimus. Reprehenderit, debitis delectus?.
            </p>
            <p className="links">React VS-Code Pure-CSS</p>
            <div className="link2">
            <a href="https://github.com/mohitrakhade11" target="_blank">
            <FiGithub/>
                  </a>
                  <a href="https://paperboat-ui.netlify.app/" target="_blank">
                  <FiExternalLink/>
                  </a>
               </div>
          </div>
        </div>
      </div>
      <div className="flip-project-card-horizontal">
        <div className="flip-project-card">
          <div>
            <img className="flip-project-card-img" src={Store} alt="" />
          </div>
          <div className="flip-card-title">
            <h3>Featured Project</h3>
            <h1>paperboat Store</h1>
            <p className="flip-card-dis">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              dolor quaerat aspernatur tempore eius, suscipit laudantium ad nisi
              voluptas molestiae quasi accusantium, dignissimos, unde itaque
              dolores ducimus. Reprehenderit, debitis delectus?.
            </p>
            <p className="links">React VS-Code Pure-CSS</p>
            <div className="link2">
            <a href="https://paperboat-ecom.netlify.app/" target="_blank">
            <FiGithub/>
                  </a>
                  <a href="https://github.com/mohitrakhade11" target="_blank">
                  <FiExternalLink/>
                  </a>
               </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Featuredcard };
