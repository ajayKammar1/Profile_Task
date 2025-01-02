import React from "react";

const carouselSlider = ({ project }) => (
  <div className="overflow-hidden rounded-lg shadow-lg">
    <div className="relative h-[400px]">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-6">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="mt-2">{project.description}</p>
      </div>
    </div>
  </div>
);

export default carouselSlider;
