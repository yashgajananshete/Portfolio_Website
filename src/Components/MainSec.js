import './MainStyle.css';

import React from 'react'
import IntroImage from '../Assets/software-developer.jpg'
import { Link } from 'react-router-dom';


const MainSec = () => {
  return (
    <>
    <div className='Main'>
        <div className='mask'>
            <img className='intro-image' src={IntroImage} alt='IntroImage'/>
        </div>
        <div className='content'>
          <p><b> HI, I'M YASH SHETE</b></p>
          <h1>FUTURE DEVELOPER</h1>
          <h2>"Shaping tomorrow's digital world with innovation and determination"</h2>
          <Link to={"/project"} type="button" className='btn btn-warning'>Projects</Link>
          <Link to={"/contact"} type="button" className="btn btn-primary">Contact</Link>
        </div>
    </div>
    </>
  )
}

export default MainSec