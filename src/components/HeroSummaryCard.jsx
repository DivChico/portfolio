import Button from "@mui/material/Button";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

function HeroSummaryCard({ className }) {
  return (
    <div className={`space-y-10 space-x-3 ${className} `}>
      <p className="text-neutral-300 text-xs">Welcome to My Portfolio </p>
      <p className=" text-3xl md:text-5xl lg:text-6xl  font-bold text">
        Abullah Hamdy
      </p>
      <p className="text-white-300 fontsemi tracking-wide text-xl">
        a passionate front-end developer specializing in web and mobile
        applications using React JS. Explore my work and see how I bring ideas
        to life through code
      </p>
      <div className="flex items-center justify-center flex-col md:flex-row gap-5">
        <Button variant="contained" href="#contact">
          Let&apos;s Talk
        </Button>
        <Button
          href="#myProjects"
          variant="outlined "
          sx={{ color: "white" }}
          startIcon={<KeyboardDoubleArrowRightIcon />}
        >
          My Work
        </Button>
      </div>
    </div>
  );
}

export default HeroSummaryCard;
