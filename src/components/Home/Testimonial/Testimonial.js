import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Testimonial.css";

const Testimonial = (props) => {
  const { id, name, img, description } = props.feedback;
  return (
    <Col>
      <Card className="bg-dark border text-center border-light mb-3">
        <Card.Img
          style={{ borderRadius: "50%" }}
          className="w-50 mx-auto testimonial-img"
          variant="top"
          height="200px"
          //   width="100px"
          src={img}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <h6 className="text-danger">Customer</h6>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Testimonial;
