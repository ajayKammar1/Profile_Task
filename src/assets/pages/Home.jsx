import React from "react";
import Hedder from "../components/Hedder";
import Footer from "../components/Footer";
import AccordionTiems from "../components/AccordionItem/AccordionTiems";
import Carousel from "../components/Carousel/Carousel";

const Home = () => {
  return (
    <div>
      <Hedder />
      <AccordionTiems />
      <Carousel />
      <Footer />
    </div>
  );
};

export default Home;
