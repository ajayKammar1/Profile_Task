import React, { useEffect } from "react";
import { gsap } from "gsap";

const Hedder = () => {
  useEffect(() => {
    // GSAP typing effect animation with infinite loop
    const text = ".letter"; // Target all the elements with class "letter"

    const typingAnimation = () => {
      gsap.fromTo(
        text,
        {
          opacity: 0, // Letters start as invisible
          x: -20, // Letters start slightly left
        },
        {
          opacity: 1, // Letters become visible
          x: 0, // Move to normal position
          duration: 0.5, // Duration for each letter animation
          stagger: 0.1, // Delay between each letter's animation
          ease: "power2.out", // Smooth easing
          repeat: -1, // Repeat infinitely
          repeatDelay: 1, // Delay before repeating the whole animation
        }
      );
    };

    typingAnimation();
  }, []);
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Profile Page</h1>
        <h1 className="text-4xl font-bold">
          {"MERN Stack Developer".split("").map((char, index) => (
            <span key={index} className="letter">
              {char}
            </span>
          ))}
        </h1>
      </div>
    </header>
  );
};

export default Hedder;
