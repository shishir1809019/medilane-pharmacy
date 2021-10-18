import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => setMedicines(data));
  }, []);
  return (
    <div className="container" id="services">
      <h1 className="my-5 text-center">Our Services</h1>

      <Row xs={1} md={3} className="g-4 mb-3">
        {medicines.map((medicine) => (
          <Service key={medicine.id} medicine={medicine}></Service>
        ))}
      </Row>
    </div>
  );
};

export default Services;
