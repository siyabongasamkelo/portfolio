import styled from "styled-components";

export const FooterWrapper = styled.footer`
  height: 30vh;
  width: 100%;
  margin-top: 20%;
`;

export const LetWorkTogether = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin-left: 15%;
  @media only screen and (max-width: 600px) {
    width: 90%;
    margin-left: 5%;
    div {
      width: 65%;
    }
    button {
      width: 25%;
    }
  }
`;

export const SocialMediaIcons = styled.div`
  width: 30%;
  margin-left: 35%;
  margin-top: 3%;
  display: flex;
  justify-content: space-around;
  svg {
    transform: scale(1.5);
    fill: ${({ theme }) => theme.dark.text};
    cursor: pointer;
    transition: 0.5s ease-in-out;
    &:hover {
      fill: #e8751a;
    }
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
    margin-left: 5%;
    margin-top: 8%;
  }
`;

export const Thanks = styled.div`
  text-align: center;
  margin-top: 3%;
  width: 90%;
  margin-left: 5%;
  margin-top: 8%;
`;

export const CopyRight = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.dark.text};
  @media only screen and (max-width: 600px) {
    width: 90%;
    margin-left: 5%;
    margin-top: 8%;
  }
`;
