import React from "react";
import Section from "./Section";
import SecondarySectionSummaryCard from "./SecondarySectionSummaryCard";
import TechCard from "./TechCard";

const Stack = () => {
  return (
    <Section>
      <SecondarySectionSummaryCard />
      <div className="grid grid-cols-4 md:grid-cols-8">
        <TechCard /> <TechCard />
        <TechCard />
        <TechCard /> <TechCard />
        <TechCard />
        <TechCard />
        <TechCard />
        <TechCard />
        <TechCard />
        <TechCard />
        <TechCard />
        <TechCard />
      </div>
    </Section>
  );
};

export default Stack;
