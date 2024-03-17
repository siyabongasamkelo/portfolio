import styled from "styled-components";
import { MyButton } from "../header/Header.styled";

export const ProjectCover = styled.div`
  width: 90%;
  padding: 30px;
  border-radius: 20px;
  background-color: #113946;
  display: flex;
  margin-top: 5%;

  li {
    color: rgba(225, 225, 225, 0.9);
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-left: -5%;
  }
  @media only screen and (min-width: 768px) {
    width: 46%;
    margin-left: 3%;
  }
  @media only screen and (min-width: 992px) {
    width: 90%;
    margin-left: 0;
  }
`;

export const ButtonCover = styled.div`
  width: 100%;
  margin-top: 5%;
  @media only screen and (max-width: 600px) {
    button {
      width: auto;
    }
  }
  @media only screen and (min-width: 768px) {
    button {
      width: auto;
    }
  }
  @media only screen and (min-width: 992px) {
    button {
      width: 160px;
    }
  }
`;

export const GithubButton = styled(MyButton)`
  background-color: #ffc47e;
  margin-left: 5%;
`;

export const ProjectData = styled.div`
  width: 30%;
  margin-left: 5%;
  margin-top: 13%;
  @media only screen and (max-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 992px) {
    display: block;
    text-align: left;
  }
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
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
    width: 100%;
    img {
      height: 30vh;
    }
  }
  @media only screen and (min-width: 992px) {
    width: 65%;
    img {
      height: 40vh;
    }
  }
`;
