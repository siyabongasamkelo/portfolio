import styled from "styled-components";
import { H4 } from "../Home.styled";

export const AboutMeWrapper = styled.section`
  margin-top: 40%;
`;

export const AboutMeText = styled.div`
  text-align: center;
  @media only screen and (min-width: 992px) {
    text-align: left;
  }
`;

export const AboutMEPara = styled.div`
  width: 90%;
  margin-left: 5%;
  li {
    color: ${({ theme }) => theme.dark.text};
    text-align: left;
  }
  h3 {
    margin-top: 5%;
    margin-bottom: 5%;
    text-align: center;
  }
  p {
    text-align: left;
  }

  @media only screen and (min-width: 992px) {
    width: 35%;
    margin-left: 10%;
    h3 {
      text-align: left;
    }
  }
`;

export const AboutCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ParaContainer = styled.div`
  width: 80%;
  margin-left: 10%;
  @media only screen and (max-width: 600px) {
    text-align: left;
  }
  @media only screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const ParaCover = styled.div`
  width: 40%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
    width: 60%;
    margin-left: 20%;
  }
  @media only screen and (min-width: 992px) {
    width: 40%;
    margin-left: 0;
  }
`;

export const CardNumber = styled(H4)`
  margin-top: 15%;
  text-align: center;
  color: ${({ theme }) => theme.dark.primary};
`;

export const CardTitle = styled(H4)`
  color: ${({ theme }) => theme.dark.primary};
  text-align: center;
  margin-bottom: 5%;
`;

export const AboutCard = styled.div`
  width: 23%;
  margin-top: 1%;
  margin-left: 2%;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.dark.secondary};
  ul {
    color: rgba(225, 225, 225, 0.9);
  }

  @media only screen and (max-width: 600px) {
    width: 90%;
    margin-left: 5%;
    margin-top: 7%;
    height: 65vh;
  }
  @media only screen and (min-width: 768px) {
    width: 45%;
    margin-left: 3%;
    margin-top: 5%;
  }
  @media only screen and (min-width: 992px) {
    width: 23%;
    margin-left: 2%;
  }
`;
