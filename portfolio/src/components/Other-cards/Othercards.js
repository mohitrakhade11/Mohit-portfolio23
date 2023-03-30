import React from "react";
import "./othercards.css";
import { BsFolder } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

const Othercards = () => {
  return (
    <div>
      <div className="other-cards-container">

      <div className="otr-title-container">
      <div className="otr-project-title">
        <p className="otr-project-index">0.2</p>
        <h1 className="otr-project-heading">Other Noteworthy Projects</h1>
        <span className="otr-project-bar"></span>
      </div>
      <h3 class="archives-project-title">archives</h3>
      </div>
      
      <div>
        <div class="dimond-container">
          <div class="dimond-column">
            <div class="dimond-card">
              <div>
                <div class="dimond-card-links">
                  <h1 className="fold-icon"><BsFolder /></h1>
                  <h1 className="external-link"><FiExternalLink/></h1>
                </div>
                <div class="dimond-card-proj-card-body">
                  <h1 class="dimond-card-proj-title">
                    PaperBoat-Tube
                  </h1>
                  <p class="dimond-card-proj-dis">
                   Project Status : Currently In Progress 
                  </p>
                  <div class="dimond-card-proj-card-bottom">
                    <p>react</p>
                    <p>node</p>
                    <p>express</p>
                    <p>mango</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="dimond-column">
            <div class="dimond-card">
              <div>
                <div class="dimond-card-links">
                <h1 className="fold-icon"><BsFolder /></h1>
                  <h1 className="external-link"><FiExternalLink/></h1>
                </div>
                <div class="dimond-card-proj-card-body">
                  <h1 class="dimond-card-proj-title">
                  PaperBoat-Social 
                  </h1>
                  <p class="dimond-card-proj-dis">
                  Project Status : Currently In Progress 
                  </p>
                  <div class="dimond-card-proj-card-bottom">
                    <p>react</p>
                    <p>node</p>
                    <p>express</p>
                    <p>mango</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="dimond-card">
              <div>
                <div class="dimond-card-links">
                <h1 className="fold-icon"><BsFolder /></h1>
                  <h1 className="external-link"><FiExternalLink/></h1>
                </div>
                <div class="dimond-card-proj-card-body">
                  <h1 class="dimond-card-proj-title">
                  PaperBoat-Quiz
                  </h1>
                  <p class="dimond-card-proj-dis">
                  Project Status : Currently In Progress 
                  </p>
                  <div class="dimond-card-proj-card-bottom">
                    <p>react</p>
                    <p>node</p>
                    <p>express</p>
                    <p>mango</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="dimond-column">
            <div class="dimond-card">
              <div>
                <div class="dimond-card-links">
                <h1 className="fold-icon"><BsFolder /></h1>
                  <h1 className="external-link"><FiExternalLink/></h1>
                </div>
                <div class="dimond-card-proj-card-body">
                  <h1 class="dimond-card-proj-title">
                  PaperBoat-Blogs
                  </h1>
                  <p class="dimond-card-proj-dis">
                  Project Status : Currently In Progress 
                  </p>
                  <div class="dimond-card-proj-card-bottom">
                    <p>react</p>
                    <p>node</p>
                    <p>express</p>
                    <p>mango</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export { Othercards };
