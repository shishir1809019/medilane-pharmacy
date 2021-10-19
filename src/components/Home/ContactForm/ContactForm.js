import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="container">
      <h3 className="text-center my-5">Contact Form</h3>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control type="text" placeholder="Full Name" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            {/* <Form.Label>Email</Form.Label> */}
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control type="text" placeholder="Phone Number" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control type="text" placeholder="Your Topic" />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" placeholder="Your Message" rows={3} />
        </Form.Group>

        <Button
          variant="warning"
          className="d-block mx-auto mb-5"
          type="submit"
        >
          <i class="far fa-paper-plane"></i> Send Message
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
