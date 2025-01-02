import React from "react";
import Rating from "@mui/material/Rating";
import myImage from "../../assets/images/profile.png";
const TestmonialCard = ({ testimonial }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 m-2">
    <div className="flex items-center mb-4">
      <img
        src={myImage}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full mr-4"
      />
      <div>
        <h3 className="font-medium">{testimonial.name}</h3>
      </div>
    </div>
    <p className="text-gray-700">{testimonial.testimonial}</p>
    <Rating name="read-only" value={testimonial.rating} readOnly />
  </div>
);

export default TestmonialCard;
