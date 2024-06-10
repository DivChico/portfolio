import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
const ProjectCard = () => {
  return (
    <div className=" bg-gray-300 p-1  relative w-12/12  border ">
      <div className="relative">
        <img
          className="w-full hover:"
          src="https://images.ctfassets.net/ooa29xqb8tix/22yB0fxGdusPYvjeHt0tIc/5e8425645473fbfc465de26fff504c89/Metadata_the_Figma_Handbook.jpg"
          alt=""
        />
        <div className="absolute bottom-3 right-2  ">
          <Button variant="contained">
            Github <GitHubIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
