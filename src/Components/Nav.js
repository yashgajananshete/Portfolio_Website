import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyle.css";
import { FaBars, FaTimes } from "react-icons/fa";


export const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const [color, setcolor] = useState(false);
  const changeColor = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 10) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <>
      <div className={color ? "header header_bg" : "header"}>
        <Link to={"/"}>
          <h1>Portfolio.</h1>
        </Link>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/project"}>Projects</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
        <div className="bars" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "white" }} />
          ) : (
            <FaBars size={20} style={{ color: "white" }} />
          )}
        </div>
      </div>
    </>
  );
};
export default Nav;