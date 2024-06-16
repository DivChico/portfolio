import Button from "@mui/material/Button";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
const ProjectCard = ({ item }) => {
  return (
    <div className=" shadow-lg p-2  relative w-12/12  border  ">
      <div className="relative">
        <img className="w-full hover:" src={item.imgUrl} alt={item.title} />
        <div className="absolute bottom-3 left-3 flex flex-row gap-2   ">
          <Button
            sx={{
              textTransform: "capitalize",
            }}
            size="small"
            startIcon={<GitHubIcon />}
            variant="contained"
            href={item.githubLink}
          >
            Github
          </Button>
          <Button
            sx={{
              textTransform: "capitalize",
            }}
            startIcon={<LanguageIcon />}
            size="small"
            variant="contained"
            href={item.liveUrl}
          >
            live
          </Button>
        </div>
      </div>
      <p className="truncate font-semibold py-2 px-1">{item.title}</p>
      <p className="px-2 text-xs truncate">
        {item?.stack?.map((item, idx) => {
          return item + (idx == item.stack?.length - 1 ? "" : ",  ");
        })}
      </p>
    </div>
  );
};

export default ProjectCard;
