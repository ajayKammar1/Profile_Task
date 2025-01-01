import React from "react";
import Hedder from "../components/Hedder";
import Footer from "../components/Footer";
import AccordionTiems from "../components/AccordionItem/AccordionTiems";
import Carousel from "../components/Carousel/Carousel";
import Testimonials from "../components/Testimonials/Testimonials";
import ContactForm from "../components/ContactForm/ContactForm";

const Home = () => {
  return (
    <div>
      <Hedder />
      <AccordionTiems />
      <Carousel />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
