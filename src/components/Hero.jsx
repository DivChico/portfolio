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
          className=" w-9/12  object-cover hidden  lg:block"
          src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihb4md1nN9adN07L2o_Ctb7Ii7jVxs74MpK7pebHlHuRtc96xE2ShqJOyUxJLrAmZlcC8vNZmZfrpVRmcGkI70wTqCocpKkysA=w1920-h919-rw-v1"
          alt="my Image"
        />
      </div>
    </Section>
  );
};

export default Hero;
