import Contact from "../components/Contact/Contact";
import Footer from "../components/footer/Footer";
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
      <Footer />
    </>
  );
};

export default HomePage;
