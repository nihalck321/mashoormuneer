import "./About.css";

import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const about = (props) => {
  return (
    <section className="section section-extra hg_100">
      <Container>
        <Row>
          <Col lg={7} className="abt_man">
            <img src={props.img} alt="#" />
          </Col>
          <Col lg={5}>
            <div className="about-content" style={props.align}>
              <h1 style={props.st} className="pre_line letters">
                <span className="lettersspan">
                  <span style={props.st} className="letter_1">
                    {props.heading}
                  </span>
                </span>
              </h1>
              <p className="pre_line letters">
                <span className="lettersspan">
                  <span className="letter_2" style={{ color: "#212529" }}>
                    {props.text}
                  </span>
                </span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default about;
