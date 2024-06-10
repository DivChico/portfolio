import React from "react";
import Section from "./Section";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="my-5   py-10   space-y-10 ">
      <p className=" text-3xl font-bold text-center">
        What happy clients say about me
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  );
};

export default Testimonials;
