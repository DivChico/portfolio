import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
const ProjectCard = ({ item }) => {
  return (
    <div className=" bg-gray-300 p-1  relative w-12/12  border ">
      <div className="relative">
        <img className="w-full hover:" src={item.imgUrl} alt={item.title} />
        <div className="absolute bottom-3 right-2  ">
          <Button variant="contained" href={item.githubLink}>
            Github <GitHubIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
