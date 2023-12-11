import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { motion } from 'framer-motion';

import { transition1 } from "../../transitions";
import "./PotratesTravelStreet.css";

import { Link } from "react-router-dom";
// import Arrow from "../../assets/img/buttons/arrow_button.png";
const myfunction = () => {
  window.scroll({
    top: 0,
    left: 100,
    behavior: "smooth",
  });
};

class PotratesTravelStreet extends Component {
  render() {
    return (
      <section className="Port_section_bg">
        <Container>
          <Row>
            <Col lg={4}>

              <Link to={this.props.path} className="pointer" onClick={myfunction}>
                <motion.div
                  initial={{ opacity: -10 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={transition1} className="portfolio-img  port-2  pt_6 ">

                  <div className="portfolio-img-main">
                    <img

                      src={this.props.img} alt="#"
                      className="" />
                  </div>

                  <h1>{this.props.heading}</h1>
                  <Link className="show_button" to={this.props.path} onClick={myfunction}>
                    {this.props.sub}
                  </Link>
                </motion.div>
              </Link>
            </Col>
            <Col lg={4} className=''>
              <Link to={this.props.path2} className="pointer" onClick={myfunction}>
                <motion.div
                  initial={{ opacity: -10 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={transition1} className="portfolio-img  port-2  pt_6 ">

                  <div className="portfolio-img-main">
                    <img

                      src={this.props.img2} alt="#"
                      className=" " />
                  </div>
                  <h1>{this.props.heading2}</h1>
                  <Link className="show_button" to={this.props.path2} onClick={myfunction}>
                    {this.props.sub2}
                  </Link>
                </motion.div>
              </Link>
            </Col>
            <Col lg={4} className=''>
              <Link to={this.props.path3} className="pointer" onClick={myfunction}>
                <motion.div
                  initial={{ opacity: -10 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={transition1} className="portfolio-img  port-2  pt_6 ">

                  <div className="portfolio-img-main">
                    <img

                      src={this.props.img3} alt="#"
                      className="" />
                  </div>
                  <h1>{this.props.heading3}</h1>
                  <Link className="show_button" to={this.props.path3} onClick={myfunction}>
                    {this.props.sub3}
                  </Link>
                </motion.div>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default PotratesTravelStreet;
