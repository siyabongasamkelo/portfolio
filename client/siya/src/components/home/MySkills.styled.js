import styled from "styled-components";
import { H4 } from "./Home.styled";

export const MySkillsWrapper = styled.div`
  margin-top: 10%;
`;

export const MySkillCover = styled.div`
  display: flex;
`;

export const Stack = styled(H4)`
  padding-top: 10%;
  text-align: center;
`;

export const SkillCard = styled.div`
  width: 25%;
  height: 45vh;
  border-radius: 20px;
  background-color: #113946;
  margin-left: 2%;
  ul {
    margin-top: 5%;
  }
  li {
    color: rgba(225, 225, 225, 0.9);
    margin-left: 5%;
  }
`;
