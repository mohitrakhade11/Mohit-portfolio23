import React from "react";
import "./home.css";
import { Header } from "../header/Header";
import { Bar } from "../sidebar/Bar";
import {IconsSIdebar} from "../sidebar/IconsSIdebar"
import Avatar from './Avatar.png';
import { Featuredcard } from "../Featured-card/Featuredcard";
import { Othercards } from "../Other-cards/Othercards";
import { Footer } from "../footer/Footer";
import { BiRightArrow } from "react-icons/bi";


const Home = () => {
  return (
    <article className="site">
      <div className="layout">
        <header className="home-header">
          {/* <Header /> */}
        </header>
        <div className="main-site">
          <aside className="sidebar">
            <IconsSIdebar />
          </aside>
          <main className="main-web-area">
            <div className="main-intro">
              <div className="section-text dis-col  ">
                <p className="my-name animate__backInDown">Hi, my name is</p>
                <h1 className="name">Mohit Rakhade</h1>
                <h1 className="intro">I build things for the web.</h1>
                <p className="bio">
                  I’m a software engineer specializing in building (and
                  occasionally designing) exceptional digital experiences.
                  Currently, I’m focused on building accessible, human-centered
                  products at Upstatement.
                </p>
              </div>
            </div>
            <div id="aboutme" className="about-me">
                    <div className="about-me-title">
                        <p className="index">0.1</p>
                        <h1>About me</h1><span className="bar"></span>
                    </div>
                    <div className="about-me-discr">
                        <div>
                            <p className="small-about">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Sunt maxime error iusto ducimus id eos mollitia ab laboriosam molestias dolorem?
                            </p>
                            <p className="small-about">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nisi ullam nesciunt a natus, quasi in illum ex corrupti molestias!
                            </p>
                            <p className="small-about">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, aliquam!
                                <br />
                                Here are a few technologies I’ve been working with recently:</p>
                            <div className="table">
                                <table>
                                    <tr>
                                        <th><span><BiRightArrow/></span> JavaScript (ES6+)</th>
                                        <th><span><BiRightArrow/></span> typescript</th>
                                    </tr>
                                    <tr>
                                        <th><span><BiRightArrow/></span> React</th>
                                        <th><span><BiRightArrow/></span> Eleventy</th>
                                    </tr>
                                    <tr>
                                        <th><span><BiRightArrow/></span> Node.js</th>
                                        <th><span><BiRightArrow/></span> WordPress</th>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="avatar"><img src={Avatar} alt='avatar img'/></div>
                    </div>
                </div>
                <div className="feat-cards">
                <Featuredcard/>
                </div>
                <div className="other-cards">
                <Othercards/>
                </div>
                <Footer/>
          </main>
          <aside className="sidebar">
            <Bar />
          </aside>
        </div>
      </div>
    </article>
  );
};

export { Home };
