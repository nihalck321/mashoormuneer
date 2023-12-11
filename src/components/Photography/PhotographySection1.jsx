import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { motion } from 'framer-motion';
// import transition
import { transition1 } from "../../transitions";

import Portfolio1 from "../../assets/img/portfolio/img1.png";
// import Portfolio2 from "../../assets/img/portfolio/img2.png";
// import Portfolio3 from "../../assets/img/portfolio/img3.png";


import './PhotographySection1.css'

class PhotographySection1 extends Component {
  render() {
    return (
      <section className="section-extra">
        <Container>
          <Row>
            <Col md={4}>
            <motion.div
                initial={{ opacity: -5, x: "-80%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "-80%" }}
                transition={transition1} 
                className="portfolio-content pt_6">
                <h1>{this.props.heading}</h1>
                <p>{this.props.text}</p>
                </motion.div>
            </Col>
            <Col md={6} className="ml_6">
            <motion.div
              initial={{ opacity: -5, x: "-80%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-80%" }}
              transition={transition1} >
                <Row>
                  <Col md={6}>
                    <div className="portfolio-img pt_6">
                      <img src={Portfolio1} alt="#" className="img-fluid" />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="portfolio-img pt_6">
                      <img src={Portfolio1} alt="#" className="img-fluid" />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="portfolio-img pt_6">
                      <img src={Portfolio1} alt="#" className="img-fluid" />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="portfolio-img pt_6">
                      <img src={Portfolio1} alt="#" className="img-fluid" />
                    </div>
                  </Col>
                </Row>
                </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default PhotographySection1;
