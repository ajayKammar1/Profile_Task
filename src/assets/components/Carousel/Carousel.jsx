import React, { useState, useEffect } from "react";
import { FaAngleRight, FaChevronLeft } from "react-icons/fa";

import { projects } from "./ProjectData";
import CarouselSlider from "./carouselSlider";
import CarouseButton from "./CarouseButton";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    // Set up the interval for auto-scroll every 2 seconds
    const interval = setInterval(nextSlide, 2000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <CarouselSlider project={projects[currentIndex]} />
      <CarouseButton
        direction="left"
        onClick={prevSlide}
        Icon={FaChevronLeft}
      />
      <CarouseButton
        direction="right"
        onClick={nextSlide}
        Icon={FaAngleRight}
      />
    </div>
  );
};

export default Carousel;
