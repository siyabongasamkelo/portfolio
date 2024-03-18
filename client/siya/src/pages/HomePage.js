import Contact from "../components/Contact/Contact";
import AboutMe from "../components/home/AboutMe/AboutMe";
import Home from "../components/home/Home";
import MySkills from "../components/home/MySkills";
import MyProjects from "../components/myprojects/MyProjects";

const HomePage = () => {
  return (
    <>
      <Home />
      <AboutMe />
      <MyProjects />
      <MySkills />
      <Contact />
    </>
  );
};

export default HomePage;
