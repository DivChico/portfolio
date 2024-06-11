import React from "react";
import ProjectCard from "./ProjectCard";
const MYPROJECTS = [
  {
    imgUrl:
      "https://images.ctfassets.net/ooa29xqb8tix/22yB0fxGdusPYvjeHt0tIc/5e8425645473fbfc465de26fff504c89/Metadata_the_Figma_Handbook.jpg",
    githubLink: "https://www.google.com.sa/",
    category: "web",
    title: "proejct",
  },
  {
    imgUrl:
      "https://images.ctfassets.net/ooa29xqb8tix/22yB0fxGdusPYvjeHt0tIc/5e8425645473fbfc465de26fff504c89/Metadata_the_Figma_Handbook.jpg",
    githubLink: "",
    category: "web",
    title: "proejct",
  },
  {
    imgUrl:
      "https://images.ctfassets.net/ooa29xqb8tix/22yB0fxGdusPYvjeHt0tIc/5e8425645473fbfc465de26fff504c89/Metadata_the_Figma_Handbook.jpg",
    githubLink: "",
    category: "web",
    title: "proejct",
  },
  {
    imgUrl:
      "https://images.ctfassets.net/ooa29xqb8tix/22yB0fxGdusPYvjeHt0tIc/5e8425645473fbfc465de26fff504c89/Metadata_the_Figma_Handbook.jpg",
    githubLink: "",
    category: "web",
    title: "proejct",
  },
];
const ProjectsList = ({ filter }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 pb-5 w-92 gap-4 ">
      {MYPROJECTS.map((item, idx) => {
        if (filter == "all") {
          return <ProjectCard key={idx} item={item} />;
        }
        if (item.category == filter) {
          return <ProjectCard key={idx} item={item} />;
        }
      })}
    </div>
  );
};

export default ProjectsList;
