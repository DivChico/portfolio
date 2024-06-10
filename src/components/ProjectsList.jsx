import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center pb-5 w-92 gap-4 ">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};

export default ProjectsList;
