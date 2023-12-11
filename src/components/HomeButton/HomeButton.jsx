import React, { Component } from "react";

import "./HomeButton.css";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const myfunction = () => {
  window.scroll({
    top: 0,
    left: 100,
    behavior: "smooth",
  });
};

class HomeButton extends Component {
  render() {
    return (
      <section className="home_btn_section">
        <Container>
          <Row>
            <Col className="button-div">
              <Link to={this.props.path} onClick={myfunction}>
                <Button variant="outlined">{this.props.heading}</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default HomeButton;
