import React from "react";
import { Row } from "react-bootstrap";
import doctor1 from "../../images/doctor-1.jpg";
import doctor2 from "../../images/doctor-2.jpg";
import doctor3 from "../../images/doctor-3.jpg";
import Doctor from "../Doctor/Doctor";
import Testimonial from "../Home/Testimonial/Testimonial";

const Doctors = () => {
  const doctorsData = [
    {
      id: 1,
      name: "Dr. John",
      description:
        "This is just a awesome website for its nice customer service.",
      img: doctor1,
    },
    {
      id: 2,
      name: "Dr.Patel",
      description:
        "I dod't not find my delivery till now. I am waiting for my medicine",
      img: doctor2,
    },
    {
      id: 3,
      name: "Dr. Khan",
      description:
        "Awesome there medicine price is too relevant. This is useful for us",
      img: doctor3,
    },
  ];
  return (
    <div>
      <Row xs={1} md={3} className="g-4 mt-3 container mx-auto">
        {doctorsData.map((detail) => (
          <Doctor key={detail.id} detail={detail}></Doctor>
        ))}
      </Row>
    </div>
  );
};

export default Doctors;
