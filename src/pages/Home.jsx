import Hero from "../components/Hero";
import MyProjects from "../components/MyProjects";
import ProjectsList from "../components/ProjectsList";
import Skills from "../components/Skills";
import Stack from "../components/Stack";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Skills />
      <Stack />
      <MyProjects />
      <ProjectsList />
      <Testimonials />
    </div>
  );
};

export default Home;
