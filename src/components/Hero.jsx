import Section from "./Section";
import HeroSummaryCard from "./HeroSummaryCard";

const Hero = () => {
  return (
    <Section className="flex flex-row">
      <HeroSummaryCard className="flex-1" />
      <div className="flex-1">img</div>
    </Section>
  );
};

export default Hero;
