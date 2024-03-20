import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeWrapper = styled.section``;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  h1,
  h3,
  h4 {
    transition: 0.5s ease;
    &:hover {
      color: #e8751a;
      background-color: ${({ theme }) => theme.dark.secondary};
    }
  }
  @media only screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  text-align: center;
  span {
    color: #e8751a;
  }
  margin-top: 80%;
  @media only screen and (min-width: 768px) {
    margin-top: 50%;
  }

  @media only screen and (min-width: 992px) {
    margin-top: 10%;
  }
`;

export const Circle = styled.div`
  aspect-ratio: 1 /1;
  background-color: ${({ theme }) => theme.dark.secondary};
  border-radius: 100px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 90%;
  }
  height: 100px;
  top: 20%;
  @media only screen and (min-width: 768px) {
    margin-left: 7%;
  }
  @media only screen and (min-width: 992px) {
    height: 180px;
    top: 70%;
  }
`;

export const ButtonContainer = styled.div`
  margin-left: -30px;
  button {
    margin-left: 30px;
  }
  @media only screen and (max-width: 600px) {
    margin-top: 10%;
  }
`;

export const ParagraphContainer = styled.div`
  width: 230px;
  text-align: left;
  transform: rotate(10deg);
  position: absolute;
  left: 74%;
  top: 20%;
  margin-left: -35%;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: rotate(0deg);
  }
  p {
    color: ${({ theme }) => theme.dark.tetiary};
  }
  @media only screen and (min-width: 768px) {
    left: 95%;
  }
  @media only screen and (min-width: 992px) {
    margin-left: -35%;
    left: 105%;
    top: 70%;
  }
`;

export const H1 = styled(motion.h1)`
  color: ${({ theme }) => theme.dark.text};
  font-size: 94px;
  @media only screen and (max-width: 600px) {
    font-size: 52px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 52px;
  }
  @media only screen and (min-width: 992px) {
    font-size: 94px;
  }
`;

export const H3 = styled(motion.h3)`
  font-size: 42px;
  color: ${({ theme }) => theme.dark.text};
  @media only screen and (max-width: 600px) {
    font-size: 22px;
  }
`;

export const H4 = styled(motion.h4)`
  color: ${({ theme }) => theme.dark.text};
`;

export const P = styled(motion.p)`
  color: ${({ theme }) => theme.dark.text};
`;
