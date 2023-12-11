import React, { Component } from "react";

import { Col, Container, Row } from "react-bootstrap";

import { motion } from "framer-motion";
import { transition1 } from "../../transitions";


class StreetPage extends Component {
  render() {
    return (
      <section className="Street_section_bg" style={this.props.st}>
        {" "}
        
        <Container>
          <Row>
            <Col lg={12}>
            <motion.div
                initial={{ opacity: -5, x: "-80%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "-80%" }}
                transition={transition1} 
                class="travels-content portfolio-section1"
                >
                <h1>
                  {this.props.heading}
                </h1>
                </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default StreetPage;
