import styled from "styled-components";

export const AboutMeWrapper = styled.section``;

export const AboutMeText = styled.div`
  text-align: center;
  margin-top: 20%;
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
