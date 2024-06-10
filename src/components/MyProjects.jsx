import React from "react";
import Section from "./Section";
import Button from "@mui/material/Button";
import SecondarySectionSummaryCard from "./SecondarySectionSummaryCard";
import ProjectsList from "./ProjectsList";

const MyProjects = () => {
  return (
    <Section id={"myProjects"}>
      <div className="flex flex-row items-center justify-center space-x-1 md:space-x-2 order-1 md:order-2">
        <Button variant="contained">All Projects</Button>
        <Button variant="contained">Web Apps</Button>
        <Button variant="contained">Mobile Apps</Button>
      </div>
      <SecondarySectionSummaryCard
        header={"Projects"}
        title={"My Projects"}
        className={"order-2 md:order-1"}
      />
    </Section>
  );
};

export default MyProjects;
