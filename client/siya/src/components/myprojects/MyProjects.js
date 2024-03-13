import { H1, H3, H4, P } from "../home/Home.styled";
import {
  MyProjectWrapper,
  ProjectContainer,
  ProjectCover,
  ProjectImage,
  ProjectData,
} from "./MyProjects.styled";
import donuts from "../img/donuts.png";

const MyProjects = () => {
  return (
    <MyProjectWrapper>
      <H1>My Projects</H1>
      <ProjectContainer>
        <ProjectCover>
          <ProjectImage>
            <img src={donuts} alt="dunuts website" />
          </ProjectImage>
          <ProjectData>
            <H3>1) Mhlathuze/Siya Donuts</H3>
            <P>
              An e-commerce web application that is dedicated for selling very
              delicious donuts to the public
            </P>
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
