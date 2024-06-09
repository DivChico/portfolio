import Button from "@mui/material/Button";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

function HeroSummaryCard({ className }) {
  return (
    <div className={`space-y-3 space-x-3 ${className} `}>
      <p className="text-neutral-300 text-xs">introduction</p>
      <p className=" text-3xl font-bold">Abullah Hamdy</p>
      <p className=" text-3xl font-bold">front end web dev</p>
      <p className="text-neutral-300 text-xs">description</p>
      <Button variant="contained">Let&apos;s Talk</Button>
      <Button variant="outlined" startIcon={<KeyboardDoubleArrowRightIcon />}>
        My Work
      </Button>
    </div>
  );
}

export default HeroSummaryCard;
