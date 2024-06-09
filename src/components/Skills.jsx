import React from "react";
import SkillCard from "./SkillCard";
import SecondarySectionSummaryCard from "./SecondarySectionSummaryCard";
import Section from "./Section";

const Skills = () => {
  return (
    <Section className="flex flex-row">
      {/* skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 flex-1 gap-5">
        <SkillCard /> <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
      <SecondarySectionSummaryCard className={"flex-1"} />
    </Section>
  );
};

export default Skills;
