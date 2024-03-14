import styled from "styled-components";

export const HomeWrapper = styled.section``;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 10%;
  span {
    color: #ecb365;
  }
`;

export const Circle = styled.div`
  height: 180px;
  aspect-ratio: 1 /1;
  background-color: #ecb365;
  border-radius: 100px;
  position: absolute;
  top: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 90%;
  }
`;

export const ButtonContainer = styled.div`
  margin-left: -30px;
  button {
    margin-left: 30px;
  }
`;

export const ParagraphContainer = styled.div`
  width: 230px;
  height: 200px;
  text-align: left;
  transform: rotate(10deg);
  position: absolute;
  left: 74%;
  top: 70%;
`;

export const H1 = styled.h1`
  color: rgba(225, 225, 225, 0.9);
  font-size: 94px;
`;

export const H3 = styled.h3`
  font-size: 42px;
  color: rgba(225, 225, 225, 0.9);
`;

export const H4 = styled.h4`
  color: rgba(225, 225, 225, 0.9);
`;

export const P = styled.p`
  color: rgba(225, 225, 225, 0.9);
`;
