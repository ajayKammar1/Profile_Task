import React from "react";
import Hedder from "../components/Hedder";
import Footer from "../components/Footer";
import AccordionTiems from "../components/AccordionItem/AccordionTiems";

const Home = () => {
  return (
    <div>
      <Hedder />
      <AccordionTiems />
      <Footer />
    </div>
  );
};

export default Home;
