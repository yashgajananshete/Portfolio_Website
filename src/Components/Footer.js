import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone,FaBlog  } from "react-icons/fa"
import "./FooterStyle.css"

import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            
            <div className="left">
                <div className="location">
                    <h4><FaHome size={"30px"} style={{ color: "white"}}/></h4>
                    <div>
                        
                        <Link to={"https://www.google.com/maps/@12.9119864,77.6363808,19.79z?entry=ttu"}><p>18<sup>th</sup> Cross, HSR Layout, Sector 7, Bangalore, Karnataka.</p></Link>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={30} style={{ color: "white"}}/></h4>
                    <div>
                        <p>7499968511</p>
                    </div>
                </div>
                <div className="mail">
                    <h4><FaMailBulk size={30} style={{ color: "white"}}/></h4>
                    <div>
                        {/* <p>yashshete22@gmail.com</p> */}
                        <Link to={"https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrkVgstznCTmjVJntFhTdJvnnvGVPFPbMXsdSgnpCvxDbBQQcsCzdFWVmWltnkGZRfmRBq"}><p>yashshete22@gmail.com</p></Link>
                    </div>
                </div>
            </div>
            

            <div className="right">
                <h4 className="about" id="footerH4"><b>About me</b></h4>
                <p id="footerAbout">Motivated programmer skilled in software development and web technologies. Eager to contribute innovative solutions for success.</p>

                <div className="social">
                    <Link to={"https://www.instagram.com/yash.shete.patil/"}><h4><FaInstagram size={30} style={{ color: "white"}}/></h4></Link>
                    <Link to={"https://github.com/yashgajananshete"}><h4><FaGithub size={30} style={{ color: "white"}}/></h4></Link>
                    <Link to={"http://www.linkedin.com/in/yashshete124"}><h4><FaLinkedin size={30} style={{ color: "white"}}/></h4></Link>
                    <Link to={"https://codefromscratch124.blogspot.com/"}><h4><FaBlog  size={30} style={{ color: "white"}}/></h4></Link>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer