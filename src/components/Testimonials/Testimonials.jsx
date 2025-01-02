import React, { useEffect, useState } from "react";
import TestmonialCard from "./TestmonialCard";
import axios from "axios";
import { getAllTestmonils } from "../../assets/server/TestmonilsApi";
const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllTestmonils()
      .then((res) => setTestimonials(res))
      .catch((err) => console.log(err));

    //
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading testimonials...</div>;
  }

  return (
    <div>
      <div className="w-full p-6 flex flex-col items-center justify-center">
        <h1 className="text-3xl  p-2 ">Client Testimonials</h1>
        <div>
          {testimonials &&
            testimonials.map((testimonial) => (
              <TestmonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
