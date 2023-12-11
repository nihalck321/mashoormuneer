import React, { Component } from "react";
import "./HomeVideo.css";

import { motion } from "framer-motion";
import { transition1 } from "../../transitions";

import { Row, Col } from "react-bootstrap";
import { Link } from "@mui/material";

class HomeVideo extends Component {
  render() {
    return (
      <motion.section
        initial={{ opacity: -5, y: "80%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "80%" }}
        transition={transition1} className="HomeVideo">

        <Row>
          <Col lg={12} className="dum">
            <div className="home_video film-text">
              <Link to={this.props.path}>
              <video
                  src={this.props.video1}
                  title="YouTube video"
                  muted
                  autoPlay
                  allowFullScreen
                  playsInline
                  loop={true}
                ></video>
                
              </Link>
            </div>
          </Col>

        </Row>

      </motion.section>
    );
  };
}
export default HomeVideo;
