import React from 'react';
import '../sidebar/Iconbar.css';
import { FiGithub,FiTwitter } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { ImCodepen } from "react-icons/im";





const IconsSIdebar = () => {
  return (
    <div>
        <div class="sidebar-container">
                <div class="icons">             
                    <div className='icon'>
                    <a href="https://github.com/mohitrakhade11" target="_blank">
                    <FiGithub/>
                  </a>
                 </div>
                    <div className='icon'>
                    <a href="https://www.linkedin.com/in/mohit-rakhade-154146209/" target="_blank">
                    <CiLinkedin/>
                  </a>
                      
                      </div>
                    <div className='icon'>
                    <a href="https://twitter.com/MohitRakhade5" target="_blank">
                    <FiTwitter/>
                  </a>
                      
                      </div>
                    <div className='icon'>
                    <a href="https://codepen.io/your-work/" target="_blank">
                    <ImCodepen/>
                  </a>
                      
                      </div>
                </div>
                <div class="line-2">
                </div>
            </div>
    </div>
  )
}

export  {IconsSIdebar}