import Button from "@mui/material/Button";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
function SecondarySectionSummaryCard({ className }) {
  return (
    <div className={`space-y-3 space-x-3 ${className} `}>
      <p className="text-neutral-300 text-xs">introduction</p>
      <p className=" text-3xl font-bold">Abullah Hamdy</p>
      <p className=" text-3xl font-bold">front end web dev</p>
      <p className="text-neutral-300 text-xs">description</p>
      <Button variant="contained" endIcon={<ArrowDownwardIcon />}>
        Send
      </Button>
    </div>
  );
}

export default SecondarySectionSummaryCard;
