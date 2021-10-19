import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { id, url, name, price, description } = props.medicine;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" height="300px" src={url} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description.slice(0, 100)}</Card.Text>
          <Link to={`/service/${id}`}>
            <Button variant="warning">
              Show Details <i className="fas fa-info-circle"></i>
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
