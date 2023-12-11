import "./footer.css"
import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>123 Calicut.</p>
              <p>India</p>
            </div>
          </div>
          <div className="phone">
            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
         <p>  730-617-6779</p> 
          </div>
          <div className="gmail">
            <FaMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
          <p>nihalozax@gmail.com</p>
          </div>
        </div>
        <div className="right">
          <h1>About</h1>
          <p>
            This is Me Nihal Muhammed. I Enjoy discussing 
            new projects and  Enjoy discussing new projects and design challenge
            design challenge  Enjoy discussing new projects and design challenge
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#000", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#000", marginRight: "1rem" }}
            />
            <FaInstagram
              size={30}
              style={{ color: "#000", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer