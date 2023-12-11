import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

import "./HomeAbout.css";

function HomeAbout() {
    return (
        <>
            <section className='main_section' style={{paddingTop: "0px",paddingBottom: "0px"}}>
                <Container fluid>
                    <Row>
                        <Col>
                            <div className="main_sect">
                                <p>Filmmaker <br />
                                    Photographer <br /> Content Creator</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="about_description">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Nam incidunt esse quam obcaecati ex reiciendis reprehenderit fuga et. <br /> Voluptatem voluptate eveniet saepe quae aliquid ad dolor quidem <br /> consequuntur  Voluptatem voluptate eveniet saepe quae aliquid ad dolor <br />  Voluptatem voluptate eveniet saepe quae aliquid ad dolor  deserunt tempora?</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default HomeAbout