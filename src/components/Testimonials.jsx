import React from "react";
import Section from "./Section";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <Section>
      <p className=" text-3xl font-bold">What happy clients say about me</p>
      <div>
        <TestimonialCard />
      </div>
    </Section>
  );
};

export default Testimonials;
