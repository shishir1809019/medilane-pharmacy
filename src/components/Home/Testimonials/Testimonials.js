import React from "react";
import { Row } from "react-bootstrap";
import testimonial1 from "../../../images/testimonial-1.jpg";
import testimonial2 from "../../../images/testimonial-2.jpg";
import testimonial3 from "../../../images/testimonial-3.jpg";
import Testimonial from "../Testimonial/Testimonial";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Falica L. Brooks",
      description:
        "This is just a awesome website for its nice customer service.",
      img: testimonial1,
    },
    {
      id: 2,
      name: "Heidi J. Cobb",
      description:
        "I dod't not find my delivery till now. I am waiting for my medicine",
      img: testimonial2,
    },
    {
      id: 3,
      name: "Franke C.McGee",
      description:
        "Awesome there medicine price is too relevant. This is useful for us",
      img: testimonial3,
    },
  ];
  return (
    <div className=" bg-dark text-light py-2">
      <h1 className="text-center my-5">Client Testimonials</h1>
      <Row xs={1} md={3} className="g-4 mt-3 container mx-auto">
        {data.map((feedback) => (
          <Testimonial key={feedback.id} feedback={feedback}></Testimonial>
        ))}
      </Row>
    </div>
  );
};

export default Testimonials;
