import "./MainProject.css"
import React from 'react'
import Notepad from "../Assets/Notepads.jpg"
import BankImg from "../Assets/BankManagementSystem.jpg"
import ShopImg from "../Assets/Shop.jpg"
import PortfolioImg from "../Assets/Portfolio.jpg"
import SnakeImg from "../Assets/Snake.jpg"
import Test from "../Assets/APTITUDE TEST1.png"

function MainProject() {
  return (
    <>
        <div className="main-project">
            <div className="heading">
                <h1>PROJECTS</h1>
                <p id="pp">Some of my most recent works</p>
                <div className="AllProjects">
                  <div className="ProjectImage">
                    <img src={Notepad} alt="image1" id="img1"></img>
                    <p id="p1">NotePad</p>
                  </div>
                  <div className="ProjectImage">
                    <img src={BankImg} alt="image2" id="img2"></img>
                    <p id="p2">Bank Management System</p>
                  </div>
                  <div className="ProjectImage">
                    <img src={ShopImg} alt="image3" id="img3"></img>
                    <p id="p3">Shop Management System</p>
                  </div>
                  <div className="ProjectImage">
                    <img src={PortfolioImg} alt="image4" id="img4"></img>
                    <p id="p4">Personal Portfolio Website</p>
                  </div>
                  <div className="ProjectImage">
                    <img src={SnakeImg} alt="image5" id="img5"></img>
                    <p id="p5">Snake Game With GUI</p>
                  </div>
                  <div className="ProjectImage">
                    <img src={Test} alt="image6" id="img6"></img>
                    <p id="p6">Online Test With GUI</p>
                  </div>
                </div>

                {/* <div className="ProjectImage">
                  <img src={Notepad} id="img1"></img>
                  <img src={BankImg} id="img2"></img>
                  <img src={ShopImg} id="img3"></img>
                </div>
                <div className="ProjectName">
                    <p id="p1">NotePad</p>
                    <p id="p2">Bank Management System</p>
                    <p id="p3">Shop Management System</p>
                </div>
                <div className="ProjectImage">
                  <img src={PortfolioImg} id="img1"></img>
                  <img src={SnakeImg} id="img2"></img>
                  <img src={Test} id="img3"></img>
                </div>
                <div className="ProjectName">
                    <p id="p1">Personal Portfolio Website</p>
                    <p id="p2">Snake Game With GUI</p>
                    <p id="p3">Online Test With GUI</p>
                </div> */}
            </div>    
          </div>
    
    </>
  )
}

export default MainProject