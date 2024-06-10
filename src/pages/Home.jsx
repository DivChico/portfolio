import { Button } from "@mui/material";
import Hero from "../components/Hero";
import MyProjects from "../components/MyProjects";
import ProjectsList from "../components/ProjectsList";
import Section from "../components/Section";
import Skills from "../components/Skills";
import Stack from "../components/Stack";
import Testimonials from "../components/Testimonials";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Skills />
      <Stack />
      <MyProjects />
      <ProjectsList />
      <Testimonials />

      <section className="b items-center space-y-10 flex flex-col justify-center  py-10">
        <p className=" text-3xl font-bold text-center">
          Have a project in your maind?
        </p>
        <Button
          sx={{ width: "300px" }}
          variant="contained"
          endIcon={<KeyboardDoubleArrowRightIcon />}
        >
          Hire Me
        </Button>
      </section>
      <Contact />
    </div>
  );
};

export default Home;
