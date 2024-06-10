import Section from "./Section";
import HeroSummaryCard from "./HeroSummaryCard";

const Hero = () => {
  return (
    <Section className="flex flex-row" id="home">
      <HeroSummaryCard className="flex-1" />
      <div className="flex-1 flex  items-center justify-center">
        {/* <img
          src="../assets/heroimg.jpg"
          height={200}
          width={200}
          alt="my Image"
          className="rounded-full aspect-square object-cover"
        /> */}
        <img
          className="border w-9/12 rounded-full aspect-square object-cover"
          src="../assets/heroimg.jpg"
          alt="my Image"
        />
      </div>
    </Section>
  );
};

export default Hero;
