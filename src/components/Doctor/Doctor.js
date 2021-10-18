import React from "react";
import { Card, Col } from "react-bootstrap";

const Doctor = (props) => {
  const { name, img, description } = props.detail;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" height="300px" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description.slice(0, 100)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Doctor;
