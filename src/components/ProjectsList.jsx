import React from "react";
import ProjectCard from "./ProjectCard";
const MYPROJECTS = [
  {
    imgUrl: "../../public/assets/e-commerce.png",
    githubLink: "https://github.com/DivChico/E-commerce-vite",
    category: "web",
    liveUrl: "https://e-commerce-chico.onrender.com/",
    title: "e-commerce UI",
    desc: "e-commerce practice project",
    stack: ["react js", "vite ", "material ui", "tailwind"],
  },
  {
    imgUrl: "../../public/assets/mu;tisepform.png",
    githubLink: "https://github.com/AbdelrahmanAyman75/Healer",
    category: "web",
    liveUrl: "https://github.com/AbdelrahmanAyman75/Healer",
    title: "Multi step SignUp form and Doctor Profile ",
    desc: "Multi step SignUp form and Doctor Profile for healer , a website coneccting patient and doctors",
    stack: ["react js", "vite ", "material ui", "tailwind"],
  },
  {
    imgUrl: "../../public/assets/social medaia.png",
    githubLink: "https://github.com/DivChico/social-media-app-frontend",
    category: "web",
    liveUrl: "https://social-media-app-9fob.onrender.com/",
    title: "social media clone ",
    desc: "social media app with login and register functionality , add freinds create and share posts with freinds , commint and like athors post , replay to coommits , edit profile ",
    stack: ["react js", "material ui", "node js", "express"],
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
