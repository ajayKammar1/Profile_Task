import React from "react";
import Hedder from "../components/Hedder";
import Footer from "../components/Footer";
import AccordionTiems from "../components/AccordionItem/AccordionTiems";
import Carousel from "../components/Carousel/Carousel";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Hedder />
      <AccordionTiems />
      <Carousel />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
