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
            PaperBoat-U! Provides a minimal setup of styles for a fast and clean starting point.
             It's not about a UI framework. Specially designed for better performance and higher productivity
             with fewer properties to reset resulting in cleaner code.
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
            A web app for Buying Books, greetings and minimal photo frames. 
            View top sold products, sort according your preferences,
            and detailed description about each product. add to wishlist and add to cart.
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
