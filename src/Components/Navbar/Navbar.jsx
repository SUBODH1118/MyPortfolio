import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/Logo.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menubar from '../../Assets/menu-open.jpg'
import close from '../../Assets/menu-close.jpg'

function Navbar() {
  const [menu, setMenu] = useState("home");
  const menuRef=useRef();

  const openMenu=()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px";
  }

  return (
    <div className="navbar">
      <img className="log" src={logo} alt="" />
      <img onClick={openMenu} src={menubar} alt="" className="nav-mob-open"/>
      <ul ref={menuRef} className="nav-menu">
        <img onClick={closeMenu} src={close} alt=""className=" nav-mob-close" />
        <li>
          <AnchorLink className="anchol-link" offset={50} href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchol-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchol-link" offset={50} href="#projects">
            <p onClick={() => setMenu("projects")}>Projects</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchol-link" offset={50} href="#hobbie">
            <p onClick={() => setMenu("hobbie")}>Hobies</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchol-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchol-link" offset={50} href="#form">
          Connect with Me
        </AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;
