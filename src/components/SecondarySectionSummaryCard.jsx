import Button from "@mui/material/Button";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
function SecondarySectionSummaryCard({
  className,
  isBtn,
  desc,
  header,
  title,
  btnText,
  btnClickFunction,
}) {
  return (
    <div
      className={`flex justify-center w-full items-start px-1 py-5  ${className} `}
    >
      <div className={`space-y-3 space-x-3 w-full  `}>
        <p className="text-neutral-300 text-xs">{header}</p>
        <p className=" text-4xl font-bold">{title}</p>
        <p className="text-white-300 fontsemi tracking-wide text-lg ">{desc}</p>
        {isBtn && (
          <Button
            onClick={btnClickFunction}
            variant="contained"
            endIcon={<ArrowDownwardIcon />}
          >
            {btnText}
          </Button>
        )}
      </div>
    </div>
  );
}

export default SecondarySectionSummaryCard;
