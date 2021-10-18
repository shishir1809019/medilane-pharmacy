import React from "react";
import Doctors from "../Doctors/Doctors";

const About = () => {
  return (
    <div className="text-center">
      <h3 className="my-3">About Us</h3>
      <div className="d-flex  align-items-center justify-content-evenly my-3">
        <div className="w-25 p-3 bg-light">
          <h5>General Information</h5>
          <p className="text-muted rounded">
            Pharmacy is the clinical health science that links medical science
            with chemistry and it is charged with the discovery, production,
            disposal, safe and effective use, and control of medications and
            drugs.
          </p>
        </div>
        <div className="w-25 p-3 bg-light">
          <h5>Pharmacy History</h5>
          <p className="text-muted rounded">
            The earliest known compilation of medicinal substances was the
            Sushruta Samhita, an Indian Ayurvedic treatise attributed to
            Sushruta in the 6th century BC. However, the earliest text as
            preserved dates to the 3rd or 4th century AD.,
          </p>
        </div>
      </div>
      <h3>Our Doctors</h3>
      <Doctors />
    </div>
  );
};

export default About;
