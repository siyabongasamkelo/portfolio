import styled from "styled-components";
import { H4 } from "./Home.styled";

export const MySkillsWrapper = styled.div`
  margin-top: 10%;
  @media only screen and (max-width: 600px) {
    text-align: center;
  }
  @media only screen and (min-width: 768px) {
    text-align: center;
  }
  @media only screen and (min-width: 992px) {
    text-align: left;
  }
`;

export const MySkillCover = styled.div`
  display: flex;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media only screen and (min-width: 992px) {
    flex-wrap: nowrap;
  }
`;

export const Stack = styled(H4)`
  padding-top: 10%;
  text-align: center;
`;

export const SkillCard = styled.div`
  width: 25%;
  height: 45vh;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.dark.secondary};
  margin-left: 2%;
  ul {
    margin-top: 5%;
  }
  li {
    color: ${({ theme }) => theme.dark.text};
    margin-left: 5%;
    text-align: left;
  }
  @media only screen and (max-width: 600px) {
    width: 95%;
    margin-top: 5%;
  }
  @media only screen and (min-width: 768px) {
    width: 45%;
    margin-top: 3%;
    height: 35vh;
  }
  @media only screen and (min-width: 992px) {
    width: 25%;
    margin-left: 2%;
    height: 45vh;
  }
`;
