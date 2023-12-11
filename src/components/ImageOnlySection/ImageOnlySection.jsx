import React from "react";
import { Col, Container, Row } from "react-bootstrap";


import { motion } from "framer-motion";
import { transition1 } from "../../transitions";


import './ImageOnlySection.css';

const ImageOnlySection = (props) => {
  return (
    <section className="imageonly_section">
        <Container>
          <Row>
            <Col lg={6} >
            <motion.div
                  initial={{ opacity: -10 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={transition1} className="port-two-img pt_6 imgeonly_divs about__img">
                <img src={props.img1} alt="#" className=" img-fluid" />
              </motion.div>
            </Col>
            <Col lg={6} >
            <motion.div
                  initial={{ opacity: -10 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={transition1} className="port-two-img pt_6 about__img">
                <img src={props.img2} alt="#" className=" img-fluid" />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
  )
}


export default ImageOnlySection