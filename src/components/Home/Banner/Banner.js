import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import img1 from "../../../images/banner-1.jpg";
import img2 from "../../../images/banner-2.jpg";
import img3 from "../../../images/banner-3.jpg";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000} className="banner-main">
        <img className="d-block w-100 img-fluid" src={img1} alt="First slide" />
        <Carousel.Caption>
          <h3>Always laugh when you can, it is cheap medicine.</h3>
          <p className="mb-5">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} className="banner-main">
        <img className="d-block w-100" src={img2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Let food be thy medicine and medicine be thy food.</h3>
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="banner-main">
        <img className="d-block w-100" src={img3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Declare the past, diagnose the present, foretell the future.</h3>
          <p className="mb-5">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
