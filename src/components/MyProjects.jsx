import React from "react";
import Section from "./Section";
import Button from "@mui/material/Button";
import SecondarySectionSummaryCard from "./SecondarySectionSummaryCard";
import ProjectsList from "./ProjectsList";

const MyProjects = ({ setfilter }) => {
  return (
    <Section id={"myProjects"}>
      <div className="flex flex-wrap flex-row gap-5 items-center justify-center space-x-1 md:space-x-2 order-2 md:order-1 ">
        <Button
          variant="contained"
          onClick={() => {
            setfilter("all");
          }}
        >
          All Projects
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setfilter("web");
          }}
        >
          Web Apps
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setfilter("mobile");
          }}
        >
          Mobile Apps
        </Button>
      </div>
      <SecondarySectionSummaryCard
        header={"Projects"}
        title={"My Projects"}
        className={"order-1 md:order-2"}
      />
    </Section>
  );
};

export default MyProjects;
