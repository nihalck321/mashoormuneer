import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";


import { motion } from "framer-motion";
import { transition1 } from "../../transitions";


import './StreetPage.css'

class StreetPageHead extends Component {
  render() {
  return (
    <section className="pt_10" >
        <Container>
          <Row>
            <Col className="" >
            <motion.div
                  initial={{ opacity: -10 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={transition1} className="port-two-img pt_6 streethead about__img head4">
                <img src={this.props.img} alt="#" className="streethead img-fluid " />
                <h2 className="head_title">{this.props.title} <br /><br /><br />{this.props.author}</h2>
              </motion.div>
              
            </Col>
          </Row>
        </Container>
      </section>
  )
}
}

export default StreetPageHead;