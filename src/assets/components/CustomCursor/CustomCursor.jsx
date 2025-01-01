import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    // Function to track mouse movement
    const onMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      setCursorPosition({ x, y });

      // GSAP animation to make cursor follow mouse
      gsap.to(cursor, {
        x: x - cursor.offsetWidth / 2,
        y: y - cursor.offsetHeight / 2,
        duration: 0.1,
      });
    };

    // Add mousemove event listener
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  // Handle mouse hover on elements to change cursor's behavior
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className={`cursor absulte fixed w-5 h-5 z-10 bg-red-500 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all ${
          isHovered ? "w-10 h-10 bg-green-500" : ""
        }`}
      ></div>

      <div
        className="hover-area w-48 flex justify-center items-center S"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>
    </>
  );
};

export default CustomCursor;
