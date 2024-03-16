import { H1 } from "../home/Home.styled";
import { MyProjectWrapper, ProjectContainer } from "./MyProjects.styled";
import ProjectCard from "./ProjectCard";
import { donuts } from "./ProjectDetails";

const MyProjects = () => {
  return (
    <MyProjectWrapper>
      <H1>My Projects</H1>
      <ProjectContainer>
        <ProjectCard details={donuts} />
      </ProjectContainer>
    </MyProjectWrapper>
  );
};

export default MyProjects;
