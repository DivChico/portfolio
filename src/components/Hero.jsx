import Section from "./Section";
import HeroSummaryCard from "./HeroSummaryCard";

const Hero = () => {
  return (
    <Section className="flex flex-row">
      <HeroSummaryCard className="flex-1" />
      <div className="flex-1">
        <img
          src="/image.png"
          height={40}
          width={40}
          alt="Dummy Image"
          className="rounded-full aspect-square object-cover"
        />
      </div>
    </Section>
  );
};

export default Hero;
