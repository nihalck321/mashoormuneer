import React, { Component } from "react";
import "./FilmVideo.css";

import { motion } from "framer-motion";
import { transition1 } from "../../transitions";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class FilimVideo extends Component {
  render() {
    return (
      <motion.section

        className="Film_main"
        initial={{ opacity: -5, y: "80%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "80%" }}
        transition={transition1}>
        <Container fluid >
          <Row>
            <Col lg={4} md={6}>
              <div className="film_main_sect">
                <Link to='/youtubevideo'>
                  <div className="video_main_sect">
                    <iframe src={this.props.video1} title="Cinematic Showreel 2022 | Mashoor Muneer" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  </div>
                </Link>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="film_main_sect">
                <div className="video_main_sect">
                <iframe src={this.props.video2} title="Cinematic Showreel 2022 | Mashoor Muneer" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="film_main_sect">
                <div className="video_main_sect">
                <iframe src={this.props.video3} title="Cinematic Showreel 2022 | Mashoor Muneer" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </motion.section>
    );
  };
}
export default FilimVideo;
