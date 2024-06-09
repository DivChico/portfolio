import React from "react";
import Section from "./Section";
import Button from "@mui/material/Button";
import SecondarySectionSummaryCard from "./SecondarySectionSummaryCard";
import ProjectsList from "./ProjectsList";

const MyProjects = () => {
  return (
    <Section>
      <div>
        <Button variant="contained">All Word</Button>
        <Button variant="outlined">Web Apps</Button>
        <Button variant="outlined">Mobile Apps</Button>
      </div>
      <SecondarySectionSummaryCard />
    </Section>
  );
};

export default MyProjects;
