import styled from "styled-components";

export const MyProjectWrapper = styled.section`
  margin-top: 10%;
`;

export const ProjectContainer = styled.div`
  margin-top: 5%;
  margin-left: 10%;
`;

export const ProjectCover = styled.div`
  width: 80%;
  display: flex;

  li {
    color: rgba(225, 225, 225, 0.9);
    /* text-align: left; */
  }
`;

export const ProjectImage = styled.div`
  width: 70%;
  img {
    height: 40vh;
    width: 100%;
    object-fit: cover;
  }
`;

export const ProjectData = styled.div`
  width: 50%;
`;
