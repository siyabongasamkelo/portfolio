import styled from "styled-components";

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
    color: rgba(225, 225, 225, 0.9);
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
`;

export const ParaContainer = styled.div`
  width: 80%;
  margin-left: 10%;
`;

export const AboutCard = styled.div`
  height: 60vh;
  width: 23%;
  margin-top: 1%;
  margin-left: 1%;
  border-radius: 20px;
  background-color: #e8751a;
  h4 {
    margin-top: 5%;
    font-weight: 600;
    text-align: center;
  }
  ul {
    color: rgba(225, 225, 225, 0.9);
  }
`;
