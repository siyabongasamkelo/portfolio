import { H4, P } from "../home/Home.styled";
import {
  ProjectCover,
  ProjectImage,
  ProjectData,
  GithubButton,
  ButtonCover,
  ParaContainer,
} from "./ProjectCard.styled";
import { MyButton } from "../header/Header.styled";
import { Globe, Github } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const ProjectCard = ({ details }) => {
  return (
    <ProjectCover>
      <ProjectImage>
        <Link to={`${details.url}`} target={`_blank`}>
          <H4>{details?.title}</H4>
        </Link>
        <ParaContainer style={{ margin: "0" }}>
          <P>{details?.description}</P>
        </ParaContainer>
        <Link to={`${details.url}`} target={`_blank`}>
          <img src={details.image} alt="dunuts website" />
        </Link>
        <ButtonCover>
          <Link to={`${details.url}`} target={`_blank`}>
            <MyButton>
              <Globe /> visit site
            </MyButton>
          </Link>
          <Link to={`${details.gitHub}`} target={`_blank`}>
            <GithubButton>
              <Github /> Open in GitHut
            </GithubButton>
          </Link>
        </ButtonCover>
      </ProjectImage>
      <ProjectData>
        <H4>Features</H4>
        <ul>
          {details?.features?.map((feature, index) => {
            return <li key={index}>{feature}</li>;
          })}
        </ul>
        <H4>Stack</H4>
        <ul>
          {details?.stack?.map((stack, index) => {
            return <li key={index}>{stack}</li>;
          })}
        </ul>
      </ProjectData>
    </ProjectCover>
  );
};

export default ProjectCard;
