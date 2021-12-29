import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine, } from 'react-icons/ri';
import { AiFillPhone } from "react-icons/ai";
import { Link } from "react-scroll";

import logo from '../images/cluff-electric-logo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><Link to="home">Home</Link></p>
          <p><Link to="about">About</Link></p>
          <p><Link to="services">Services</Link></p>
          <p><Link to="projects">Projects</Link></p>
          <p><Link to="contact">Contact</Link></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <AiFillPhone color="#FF4820" size={27}/>
        <button type="button">(555)555-5555</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
          <p><Link to="home">Home</Link></p>
          <p><Link to="about">About</Link></p>
          <p><Link to="services">Services</Link></p>
          <p><Link to="projects">Projects</Link></p>
          <p><Link to="contact">Contact</Link></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <button type="button">(555)555-5555</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
