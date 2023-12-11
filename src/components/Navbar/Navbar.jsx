import "./Navbar.css";

// import logo1 from "../../assets/img/Mashoor Muneer.png";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { FiYoutube } from "react-icons/fi";
import { SiGmail } from "react-icons/si";

import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import { Container } from "react-bootstrap";

const navbaritems = [
  {
    id: 1,
    link: "/photography",
    name: "Photography",
  },
  {
    id: 2,
    link: "/films",
    name: "Films",
  },
  {
    id: 3,
    link: "/about",
    name: "About",
  },
  {
    id: 4,
    link: "/contact",
    name: "Contact",
  },
];



const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);



  const myfunction = () => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  };
  return (
    <Container fluid className=" header-bg header">
      <Container className="header-second navbar-inner">
        <Link to="/" className="logo_show" onClick={myfunction}>
          Mashoor Muneer
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu "}  >
          {navbaritems.map((navitem) => (
            <li key={navitem.id}>
              <NavLink
                className={(navData) => (navData.isActive ? "active " : "")}
                to={navitem.link}
                onClick={handleClick}
              >
                {navitem.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="humburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#000" }} />
          ) : (
            <FaBars size={20} style={{ color: "#000" }} />
          )}
        </div>
        <div className="inner-nav-social" style={{ paddingTop: 10 }}>
          <Link to="youtube.com" >
            <BsInstagram
              size={15}
              style={{ cursor: "pointer" }}
              className="socialmedia"

            />
          </Link>
          <ImFacebook
            size={15}
            style={{ marginRight: 10, marginLeft: 10, cursor: "pointer" }}
            className="socialmedia"
          />
          <FiYoutube
            size={20}
            style={{ marginRight: 10, cursor: "pointer" }}
            className="socialmedia"
          />
          <SiGmail
            size={15}
            style={{ cursor: "pointer" }}
            className="socialmedia"
          />
        </div>
      </Container>
    </Container>
  );
};

export default Navbar;
