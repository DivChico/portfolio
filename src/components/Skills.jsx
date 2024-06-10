import React from "react";
import SkillCard from "./SkillCard";
import SecondarySectionSummaryCard from "./SecondarySectionSummaryCard";
import Section from "./Section";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import BrushIcon from "@mui/icons-material/Brush";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import SpeedIcon from "@mui/icons-material/Speed";
import StorageIcon from "@mui/icons-material/Storage";
const Skills = () => {
  return (
    <Section className="flex flex-row " id={"whatIDo"}>
      {/* skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 flex-1 gap-5 order-2 md:order-1">
        <SkillCard
          icon={<SmartphoneIcon />}
          title={"Mobile Applications"}
          desc={
            "Creating intuitive and responsive mobile apps using React Native, designed for seamless user experiences on iOS and Android devices."
          }
        />
        <SkillCard
          icon={<WebAssetIcon />}
          title={"Web Applications"}
          desc={
            "Building dynamic and interactive web applications with React JS, ensuring top-notch performance and user engagement"
          }
        />
        <SkillCard
          icon={<BrushIcon />}
          title={"UI/UX Design"}
          desc={
            "Designing user interfaces that are not only aesthetically pleasing but also enhance the overall user experience through thoughtful design principles."
          }
        />
        <SkillCard
          icon={<SquareFootIcon />}
          title={"Responsive Design"}
          desc={
            "Ensuring that all applications are fully responsive and look great on any device, from desktops to mobile phones."
          }
        />
        <SkillCard
          icon={<SpeedIcon />}
          title={"Performance Optimization "}
          desc={
            "Implementing best practices to optimize the performance and speed of web and mobile applications, ensuring a smooth user experience."
          }
        />
        <SkillCard
          icon={<StorageIcon />}
          title={"API Integration"}
          desc={
            "Seamlessly integrating various APIs to enhance the functionality and capabilities of your applications."
          }
        />
      </div>
      <SecondarySectionSummaryCard
        className={" order-1 md:order-2"}
        header={"What I Do"}
        title={"Better Design For Better Expoerience"}
        desc={
          " I specialize in crafting high-quality applications that are both visually appealing and functionally robust. My expertise spans across various domains, ensuring I can deliver exceptional results tailored to your needs"
        }
      />
    </Section>
  );
};

export default Skills;
