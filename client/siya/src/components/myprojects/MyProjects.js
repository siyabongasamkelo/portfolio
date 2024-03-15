import { H1, H4, P } from "../home/Home.styled";
import {
  MyProjectWrapper,
  ProjectContainer,
  ProjectCover,
  ProjectImage,
  ProjectData,
  ButtonCover,
  GithubButton,
} from "./MyProjects.styled";
import donuts from "../img/donuts.png";
import { ParaContainer } from "../home/AboutMe/AboutMe.styled";
import { MyButton } from "../header/Header.styled";
import { Globe, Github } from "react-bootstrap-icons";

const MyProjects = () => {
  return (
    <MyProjectWrapper>
      <H1>My Projects</H1>
      <ProjectContainer>
        <ProjectCover>
          <ProjectImage>
            <H4>1) Mhlathuze/Siya Donuts</H4>
            <ParaContainer style={{ margin: "0" }}>
              <P>
                An e-commerce web application that is dedicated for selling very
                delicious donuts to the public
              </P>
            </ParaContainer>
            <img src={donuts} alt="dunuts website" />
            <ButtonCover>
              <MyButton>
                <Github /> Open Live site
              </MyButton>
              <GithubButton>
                <Globe /> Open in GitHut
              </GithubButton>
            </ButtonCover>
          </ProjectImage>
          <ProjectData>
            <H4>Features</H4>
            <ul>
              <li>Authetication System</li>
              <li>Displaying Products From Database </li>
              <li>Adding Products</li>
              <li>Shopping Cart</li>
              <li>Navigation</li>
            </ul>
            <H4>Stack</H4>
            <ul>
              <li>ReactJs</li>
              <li>Styled Components </li>
              <li>Formik & Yup </li>
              <li>Bootstrap</li>
              <li>FlowBite Ui</li>
              <li>Redux Toolkit</li>
              <li>Nodejs</li>
              <li>Express</li>
              <li>Mongodb</li>
            </ul>
          </ProjectData>
        </ProjectCover>
      </ProjectContainer>
    </MyProjectWrapper>
  );
};

export default MyProjects;
