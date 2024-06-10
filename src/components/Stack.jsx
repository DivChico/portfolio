import React from "react";
import Section from "./Section";
import SecondarySectionSummaryCard from "./SecondarySectionSummaryCard";
import TechCard from "./TechCard";

const Stack = () => {
  return (
    <Section>
      <SecondarySectionSummaryCard
        header={"Tech Stack"}
        title={" My Tech Stack"}
        desc={
          "Leveraging a diverse range of cutting-edge technologies, I create innovative and efficient solutions tailored to meet the needs of modern web and mobile applications. Here's an overview of the tools and technologies I specialize in:"
        }
      />
      <div className="grid grid-cols-2  space-y-5 py-5">
        <TechCard
          title={"React Js"}
          imgLink={
            "https://cdn4.iconfinder.com/data/icons/logos-brands-8/32/react_native-logo-programming-256.png"
          }
        />
        <TechCard
          title={"React Native"}
          imgLink={
            "https://cdn4.iconfinder.com/data/icons/essential-app-1/16/mobile-phone-smart-screen-512.png"
          }
        />{" "}
        <TechCard
          title={"Next js"}
          imgLink={
            "https://static-00.iconduck.com/assets.00/nextjs-icon-2048x1234-pqycciiu.png"
          }
        />
        <TechCard
          title={"TypeScript"}
          imgLink={
            "https://cdn1.iconfinder.com/data/icons/brands-5/512/fi-brands-typescript-256.png"
          }
        />
        <TechCard
          title={"Vite"}
          imgLink={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png"
          }
        />
        <TechCard
          title={"Tailwind"}
          imgLink={
            "https://cdn.iconscout.com/icon/free/png-256/free-tailwind-css-5285308-4406745.png?f=webp"
          }
        />
        <TechCard
          title={"Redux Toolkit"}
          imgLink={
            "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/redux-512.png"
          }
        />
      </div>
    </Section>
  );
};

export default Stack;
