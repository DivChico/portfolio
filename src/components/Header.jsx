import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { Fragment, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import WorkIcon from "@mui/icons-material/Work";
import HomeIcon from "@mui/icons-material/Home";
import LayersIcon from "@mui/icons-material/Layers";
import ComputerIcon from "@mui/icons-material/Computer";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import EmailIcon from "@mui/icons-material/Email";
import ScrollToTop from "react-scroll-up";
import IconButton from "@mui/material/IconButton";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import PersonIcon from "@mui/icons-material/Person";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(open);
  };
  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton href="#home">
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={"Me"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="#whatIDo">
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary={"What I Do"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="#techStack">
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
            <ListItemText primary={"Tech Stack"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="#myProjects">
            <ListItemIcon>
              <ComputerIcon />
            </ListItemIcon>
            <ListItemText primary={"My Projects"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="#testimonials">
            <ListItemIcon>
              <InsertEmoticonIcon />
            </ListItemIcon>
            <ListItemText primary={"Testimonials"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="#contact">
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary={"Contact Me"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <header className="flex flex-row  items-center justify-between h-[100px] ">
      <p className="text-3xl font-bold">DivChico</p>
      <nav className=" hidden lg:block ">
        <ul className="  flex flex-row space-x-5 items-center capitalize  text-xl">
          <li className="">
            <Button
              className="flex items-center gap-2"
              sx={{ color: "white" }}
              variant="text"
            >
              <PersonIcon />

              <a href="#home">Me</a>
            </Button>
          </li>
          <li className="">
            <Button
              className="flex items-center gap-2"
              sx={{ color: "white" }}
              variant="text"
            >
              <WorkIcon />

              <a href="#whatIDo">What I Do</a>
            </Button>
          </li>{" "}
          <li className="">
            <Button
              className="flex items-center gap-2"
              sx={{ color: "white" }}
              variant="text"
            >
              <LayersIcon />

              <a href="#techStack">Tech Stack </a>
            </Button>
          </li>{" "}
          <li className="">
            <Button
              className="flex items-center gap-2"
              sx={{ color: "white" }}
              variant="text"
            >
              <ComputerIcon />

              <a href="#myProjects">My Projects</a>
            </Button>
          </li>{" "}
          <li className="">
            <Button
              className="flex items-center gap-2"
              sx={{ color: "white" }}
              variant="text"
            >
              <InsertEmoticonIcon />

              <a href="#testimonials">Testimonials</a>
            </Button>
          </li>
          <li className="">
            <Button
              sx={{ color: "white" }}
              className="flex items-center gap-2"
              variant="text"
            >
              <EmailIcon />

              <a href="#contact">Contact Me</a>
            </Button>
          </li>
        </ul>
      </nav>
      <nav className="visible lg:hidden">
        <Fragment>
          <Button sx={{ color: "white" }} onClick={toggleDrawer("right", true)}>
            <MenuIcon />
          </Button>
          <Drawer
            anchor={"right"}
            open={isOpen}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
        </Fragment>
      </nav>
      <ScrollToTop showUnder={160}>
        <IconButton aria-label="delete">
          <ArrowCircleUpIcon sx={{ color: "white" }} fontSize="large" />
        </IconButton>
      </ScrollToTop>
    </header>
  );
};

export default Header;
