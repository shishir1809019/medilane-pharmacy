import React from "react";
import { Button, Card } from "react-bootstrap";

const Blog = (props) => {
  const { name, description, url } = props.blogData;
  return (
    <Card style={{ width: "100%" }} className="mb-2">
      <div className="row">
        <div className="col-md-4 w-25">
          <Card.Img className="img-fluid" variant="top" src={url} />
        </div>
        <div className="col-md-8">
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button className="mt-5" variant="outline-dark">
              See more...
            </Button>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

export default Blog;
