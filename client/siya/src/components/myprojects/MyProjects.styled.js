import styled from "styled-components";

export const MyProjectWrapper = styled.section`
  margin-top: 10%;
  a {
    color: ${({ theme }) => theme.dark.primary};
  }
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

export const ProjectContainer = styled.div`
  margin-top: 5%;
  margin-left: 10%;
  @media only screen and (min-width: 768px) {
    margin-left: 0%;
    display: flex;
    flex-wrap: wrap;
  }
`;
