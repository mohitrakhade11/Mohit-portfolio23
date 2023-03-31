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
                 In order to kick-start my career, 
                I am looking for a job of a web developer, 
                since that’s what I’ve been doing already for three years.
                Designing websites for friends, developing simple WEB apps for local store with the help of my collage friends.
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
                                Hello! My name is <b>Mohit</b> and I enjoy creating things that live on the internet.
                             My interest in web development started back in 2019 when I was pursuing <b>BCA(Bachelors's in Computer Application)</b> I 
                             tried building webpages; turns out that taught me a lot about <b> HTML CSS & JavaScript</b>.
                            </p>
                            <p className="small-about">
                                 later I Started learning <b>.NET</b> simultaneously i was also doing an Internship at <b>SAN developers</b> which 
                                I carried on for 6 months.
                            </p>
                            <p className="small-about">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, aliquam!
                                <br />
                           fast forword to today i'm building Web Apps with <b>MERN</b> Stack.</p>
                                 </p>
                            <div className="table">
                                <table>
                                   <tr>
                                        <th><span><BiRightArrow/></span> JavaScript (ES6+)</th>
                                        <th><span><BiRightArrow/></span> React-JS</th>
                                    </tr>
                                    <tr>
                                        <th><span><BiRightArrow/></span> Mango-DB</th>
                                        <th><span><BiRightArrow/></span> Node-JS</th>
                                    </tr>
                                    <tr> 
                                        <th><span><BiRightArrow/></span> Express-JS</th>
                                        <th><span><BiRightArrow/></span> Pure-CSS</th>
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
