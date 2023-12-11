import React, { useState } from "react";
import "./Contact.css";
import { Col, Container, Row } from "react-bootstrap";

function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // Here you would add code to send the form data to your server and handle the response

    // For this example, we will just display a success message
    setSuccessMessage("Your message has been sent!");
  }

  return (
    <form onSubmit={handleSubmit} className="form-main">
      <Container>
        <Row>
          <Col lg={12}>
            <h1>Get in Touch</h1>
          </Col>
          <Col lg={6}>
            <div className="form-name-box">
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                id="fistName"
                name="name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="form-name-box">
              <label htmlFor="name">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="name"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="form-name-box">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="form-name-box">
              <label htmlFor="email">Phone</label>
              <input
                type="number"
                id="phone"
                name="phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
              />
            </div>
          </Col>
          <Col lg={12}>
            <div className="form-name-box">
              <label htmlFor="message">Message</label>
              <textarea
                className="message-box"
                id="message"
                name="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows="5"
                required
              ></textarea>
            </div>
          </Col>
          <div className="btn-wrapper">

            <button className="contact-btn" type="submit" value="Send Message">Send</button>
          </div>

          {successMessage && <div className="success-message">{successMessage}</div>}
        </Row>
      </Container>
    </form >
  );
}

export default ContactForm;
