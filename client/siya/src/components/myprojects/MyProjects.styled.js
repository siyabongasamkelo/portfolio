import styled from "styled-components";
import { MyButton } from "../header/Header.styled";

export const MyProjectWrapper = styled.section`
  margin-top: 10%;
`;

export const ProjectContainer = styled.div`
  margin-top: 5%;
  margin-left: 10%;
`;

export const ProjectCover = styled.div`
  width: 90%;
  padding: 30px;
  border-radius: 20px;
  background-color: #113946;
  display: flex;

  li {
    color: rgba(225, 225, 225, 0.9);
    /* text-align: left; */
  }
`;

export const ButtonCover = styled.div`
  width: 100%;
  margin-top: 5%;
`;

export const GithubButton = styled(MyButton)`
  background-color: #ffc47e;
  margin-left: 5%;
`;

export const ProjectImage = styled.div`
  width: 65%;
  h4 {
    margin-top: 5%;
    color: #ffc47e;
  }
  img {
    height: 40vh;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

export const ProjectData = styled.div`
  width: 30%;
  margin-left: 5%;
  margin-top: 13%;
`;
