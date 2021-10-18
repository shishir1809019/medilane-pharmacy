import React from "react";
import Banner from "../Banner/Banner";
import ContactForm from "../ContactForm/ContactForm";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div id="home">
      <Banner />
      <Services />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Home;
