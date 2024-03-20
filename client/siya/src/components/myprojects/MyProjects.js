import { ParaCover } from "../home/AboutMe/AboutMe.styled";
import { H1, P } from "../home/Home.styled";
import { MyProjectWrapper, ProjectContainer } from "./MyProjects.styled";
import ProjectCard from "./ProjectCard";
import { donuts, okuhleCrech, watches } from "./ProjectDetails";
import { Link } from "react-router-dom";

const MyProjects = () => {
  const mygitHub = "https://github.com/siyabongasamkelo";
  return (
    <MyProjectWrapper id="projects">
      <H1>My Projects</H1>
      <ParaCover>
        <P>
          These are a few of my best projects but if you're interested in seeing
          more then please visit my &nbsp;
          <Link to={mygitHub} target={`_blank`}>
            github
          </Link>
        </P>
      </ParaCover>
      <ProjectContainer>
        <ProjectCard details={donuts} />
        <ProjectCard details={watches} />
        <ProjectCard details={okuhleCrech} />
      </ProjectContainer>
    </MyProjectWrapper>
  );
};

export default MyProjects;
